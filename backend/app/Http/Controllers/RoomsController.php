<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use Illuminate\Support\Facades\DB; 

class RoomsController extends Controller
{
    // GET /rooms
    public function displayAllRooms()
    {
        return Room::with('users')->get();
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
            'roomName' => 'required|string|max:255',
            'creator_id' => 'required|integer|exists:users,id',
            'participants' => 'required|array',
            'participants.*' => 'integer|distinct|exists:users,id'
        ]);

        DB::beginTransaction();

        try {
            $room = Room::create([
                'roomName' => $validatedData['roomName'],
                'creator_id' => $validatedData['creator_id'],
            ]);

            $room->users()->attach(array_diff($validatedData['participants'], [$validatedData['creator_id']]));

            // Commit the transaction
            DB::commit();

            return response()->json(['room' => $room, 'message' => 'Room created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
