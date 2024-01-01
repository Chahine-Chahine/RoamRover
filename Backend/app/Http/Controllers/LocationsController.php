<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationsController extends Controller
{
    // GET /locations
    public function displayAll()
    {
        return Location::all();
    }

    // POST /locations
    public function createLocation(Request $request)
    {
        $validatedData = $request->validate([
            'image' => 'required|string',
            'description' => 'required|string',
            'estimatedPrice' => 'required|numeric',
            'title' => 'required|string',
            'area' => 'required|string',
            'rating' => 'required|integer',
        ]);

        $location = Location::create($validatedData);
        return response()->json(['location' => $location, 'message' => 'Location created successfully'], 201);
    }
     // PUT /locations/{id}
     public function updateLocation(Request $request, $id)
     {
         $location = Location::findOrFail($id);
 
         $validatedData = $request->validate([
             'image' => 'string',
             'description' => 'string',
             'estimatedPrice' => 'numeric',
             'title' => 'string',
             'area' => 'string',
             'rating' => 'integer',
         ]);
 
         $location->fill($validatedData)->save();
         return response()->json(['location' => $location, 'message' => 'Location updated successfully']);
     }

 
}
