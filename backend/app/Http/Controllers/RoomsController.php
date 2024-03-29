<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use Illuminate\Support\Facades\DB;

class RoomsController extends Controller
{
    // GET /rooms
    public function displayAllRooms(Request $request)
    {
        if ($user = $request->user()) {
            $userId = $user->id;
            // Fetch rooms where the user is either the creator or a participant
            $rooms = Room::where('creator_id', $userId)
                ->orWhereHas('users', function ($query) use ($userId) {
                    $query->where('users.id', $userId);
                })->with('users')->get();
            return $rooms;
        } else {
            // Return an error response if no user is authenticated
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    // GET /rooms/{id}
    public function displayById($id)
    {
        $room = Room::findOrFail($id);
        $userIds = $room->users()->pluck('users.id');
        return response()->json($userIds);
    }

    // POST /rooms
    public function createRoom(Request $request)
    {
        $validatedData = $request->validate([
            'room_name' => 'required|string|max:255',
            'participants' => 'nullable|array',
            'participants.*' => 'integer|distinct|exists:users,id',
            'room_description' => 'required|string|max:255',
        ]);

        $user = $request->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        DB::beginTransaction();

        try {
            $room = Room::create([
                'room_name' => $validatedData['room_name'],
                'creator_id' => $user->id,
                'room_description' => $validatedData['room_description']
            ]);

            if (isset($validatedData['participants'])) {
                $room->users()->attach(array_diff($validatedData['participants'], [$user->id]));
            }

            // Commit the transaction
            DB::commit();

            return response()->json(['room' => $room, 'message' => 'Room created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function updateRoom(Request $request, $id)
    {
        $validatedData = $request->validate([
            'room_name' => 'sometimes|string|max:255',
            'participants' => 'nullable|array',
            'participants.*' => 'integer|distinct|exists:users,id',
            'room_description' => 'sometimes|string|max:255',
        ]);

        $room = Room::findOrFail($id);

        DB::beginTransaction();
        try {
            if (isset($validatedData['room_name'])) {
                $room->room_name = $validatedData['room_name'];
            }
            if (isset($validatedData['room_description'])) {
                $room->room_description = $validatedData['room_description'];
            }

            $room->save();

            if (isset($validatedData['participants'])) {
                $room->users()->sync($validatedData['participants']);
            }

            DB::commit();
            return response()->json(['room' => $room, 'message' => 'Room updated successfully'], 200);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    
    public function joinRoom(Request $request, $roomId)
    {
        $user = auth()->user();
        $room = Room::find($roomId);
    
        if (!$room) {
            return response()->json(['message' => 'Room not found'], 404);
        }
    
        // Check if the user is already a participant
        if ($room->users()->where('user_id', $user->id)->exists()) {
            return response()->json(['message' => 'User already a participant'], 409);
        }
    
        // Add user to the room
        $room->users()->attach($user->id);
    
        return response()->json(['message' => 'Joined room successfully'], 200);
    }
    
}