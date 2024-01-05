<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class RoomsController extends Controller
{
    // GET /rooms
    public function displayAllRooms()
    {
        return Room::all();
    }

    // GET /rooms/{id}
    public function displayById($id)
    {
        return Room::findOrFail($id);
    }

       // POST /rooms
       public function createRoom(Request $request)
       {
           $validatedData = $request->validate([
               'roomName' => 'required|string|max:255',
               'creator_id' => 'required|integer|exists:users,id',
               'participants_id' => 'required|array',
               'participants_id.*' => 'integer|exists:users,id',
           ]);
   
           $room = Room::create([
               'roomName' => $validatedData['roomName'],
               'creator_id' => $validatedData['creator_id'],
               'participants_id' => json_encode($validatedData['participants_id']),
           ]);
   
           return response()->json(['room' => $room, 'message' => 'Room created successfully'], 201);
       }
   
}
