<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;

class RoomsController extends Controller
{
    public function index()
    {
        $rooms = Room::all();
        return response()->json($rooms);
    }

    public function store(Request $request)
    {
        $request->validate([
            'roomName' => 'required|max:255',
            'creatorID' => 'required|exists:users,id',
            'participantsID' => 'required|exists:users,id',
        ]);

        $room = Room::create($request->all());
        return response()->json($room, 201);
    }
}
