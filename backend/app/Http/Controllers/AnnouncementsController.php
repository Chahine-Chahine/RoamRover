<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use Illuminate\Support\Facades\Auth;

class AnnouncementsController extends Controller
{
    public function createAnnouncement(Request $request)
    {
        $validatedData = $request->validate([
            'announcement_body' => 'required|string',
        ]);
    
        $announcement = Announcement::create([
            'announcement_body' => $validatedData['announcement_body'],
            'admin_id' => Auth::id() 
        ]);
    
        return response()->json(['announcement' => $announcement, 'message' => 'Announcement created successfully'], 201);
    }
    
    public function updateAnnouncement(Request $request, $id)
    {
        $announcement = Announcement::findOrFail($id);

        $validatedData = $request->validate([
            'announcement_body' => 'string',
        ]);

        $announcement->update($validatedData);
        return response()->json(['announcement' => $announcement, 'message' => 'Announcement updated successfully']);
    }
    public function readAnnouncements()
    {
        $announcements = Announcement::all(); 
        return response()->json(['announcements' => $announcements], 200);
    }

    public function deleteAnnouncement($id)
    {
        $announcement = Announcement::findOrFail($id);
        $announcement->delete();
        return response()->json(['message' => 'Announcement deleted successfully']);
    }
}
