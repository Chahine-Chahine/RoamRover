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
               'creatorID' => 'required|integer|exists:users,id',
               'participantsID' => 'required|array',
               'participantsID.*' => 'integer|exists:users,id',
           ]);
   
           $room = Room::create([
               'roomName' => $validatedData['roomName'],
               'creatorID' => $validatedData['creatorID'],
               'participantsID' => json_encode($validatedData['participantsID']),
           ]);
   
           return response()->json(['room' => $room, 'message' => 'Room created successfully'], 201);
       }
   
}
