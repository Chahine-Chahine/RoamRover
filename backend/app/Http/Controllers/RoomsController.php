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
            return Room::where('creator_id', $userId)->with('users')->get();
        } else {
            // Return an error response if no user is authenticated
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    // GET /rooms/{id}
    public function displayById($id)
    {
        return Room::with('users')->findOrFail($id);
    }

    // POST /rooms
    public function createRoom(Request $request)
{
    $validatedData = $request->validate([
        'room_name' => 'required|string|max:255',
        'participants' => 'required|array',
        'participants.*' => 'integer|distinct|exists:users,id',
        'room_description' => 'required|string|max:255',
    ]);

    $user = $request->user(); // Get the authenticated user
    if (!$user) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    DB::beginTransaction();

    try {
        $room = Room::create([
            'room_name' => $validatedData['room_name'],
            'creator_id' => $user->id, // Use the authenticated user's ID
            'room_description' => $validatedData['room_description']
        ]);

        $room->users()->attach(array_diff($validatedData['participants'], [$user->id]));

        // Commit the transaction
        DB::commit();

        return response()->json(['room' => $room, 'message' => 'Room created successfully'], 201);
    } catch (\Exception $e) {
        DB::rollback();
        return response()->json(['error' => $e->getMessage()], 500);
    }
}


}
