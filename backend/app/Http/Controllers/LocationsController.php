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
            'estimated_price' => 'required|numeric',
            'title' => 'required|string',
            'area' => 'required|string',
            'rating' => 'required|integer',
            // Validate as an array
            'coordinates' => 'required|array',
            'coordinates.latitude' => 'required|numeric|between:-90,90',
            'coordinates.longitude' => 'required|numeric|between:-180,180',
            'est_time_spend' => 'required|numeric',
            'tags' => 'required|array',
            'category_ids' => 'required|array',
            'category_ids.*' => 'exists:categories,id'
        ]);

        // Convert coordinates to JSON
        $validatedData['coordinates'] = json_encode($request->coordinates);

        //convert tags to JSON
        $validatedData['tags'] = json_encode($request->tags);

        $location = Location::create($validatedData);

        $location->categories()->attach($request->category_ids);
        return response()->json(['location' => $location, 'message' => 'Location created successfully'], 201);
    }

    // PUT /locations/{id}
    public function updateLocation(Request $request, $id)
    {
        $location = Location::findOrFail($id);

        $validatedData = $request->validate([
            'image' => 'string',
            'description' => 'string',
            'estimated_price' => 'numeric',
            'title' => 'string',
            'area' => 'string',
            'rating' => 'integer',
            'coordinates' => 'array',
            'coordinates.latitude' => 'numeric|between:-90,90',
            'coordinates.longitude' => 'numeric|between:-180,180',
            'est_time_spend' => 'required|numeric',
            'tags' => 'required|array',
            'category_ids' => 'sometimes|array',  
            'category_ids.*' => 'exists:categories,id' 
        ]);

        if (isset($validatedData['coordinates'])) {
            $validatedData['coordinates'] = json_encode($validatedData['coordinates']);
        }
        if (isset($validatedData['tags'])) {
            $validatedData['tags'] = json_encode($validatedData['tags']);
        }

        $location->fill($validatedData)->save();
        if ($request->has('category_ids')) {
            $location->categories()->sync($request->category_ids);
        }
    
        return response()->json(['location' => $location, 'message' => 'Location updated successfully']);
    }

    // GET /locations/{id}
    public function displayById($id)
    {
        return Location::findOrFail($id);
    }

    // DELETE /locations/{id}
    public function deleteLocation($id)
    {
        $location = Location::findOrFail($id);
        $location->delete();
        return response()->json(['message' => 'Location deleted successfully']);
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        $locations = Location::where('title', 'LIKE', "%$query%")->get();
        return response()->json($locations);
    }
}
