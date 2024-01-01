<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;

class AnnouncementsController extends Controller
{
    public function createAnnouncement(Request $request)
    {
        $validatedData = $request->validate([
            'announcementBody' => 'required|string',
            'adminID' => 'required|integer|exists:users,id',
            'receiverID' => 'required|array', 
            'receiverID.*' => 'integer|exists:users,id' 
        ]);

        $announcement = Announcement::create($validatedData);
        return response()->json(['announcement' => $announcement, 'message' => 'Announcement created successfully'], 201);
    }

    public function updateAnnouncement(Request $request, $id)
    {
        $announcement = Announcement::findOrFail($id);

        $validatedData = $request->validate([
            'announcementBody' => 'string',
        ]);

        $announcement->update($validatedData);
        return response()->json(['announcement' => $announcement, 'message' => 'Announcement updated successfully']);
    }
}