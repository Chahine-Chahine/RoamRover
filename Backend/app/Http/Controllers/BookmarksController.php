<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookmark;

class BookmarksController extends Controller
{
    // Create a bookmark
    public function createBookmark(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'location_id' => 'required|integer|exists:locations,id'
        ]);
    
        $bookmark = Bookmark::create($validatedData);
        return response()->json(['bookmark' => $bookmark, 'message' => 'Bookmark created successfully'], 201);
    }
    public function displayAllBookmarks()
    {
        return  Bookmark::with('location')->get();
    }

    // Read a bookmark by ID
    public function displayById($id)
    {
        return Bookmark::with('location')->findOrFail($id);
    }


    // Delete a bookmark
    public function deleteBookmark($id)
    {
        $bookmark = Bookmark::findOrFail($id);
        $bookmark->delete();
        return response()->json(['message' => 'Bookmark deleted successfully']);
    }
}
