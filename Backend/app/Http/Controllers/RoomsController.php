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

   
}
