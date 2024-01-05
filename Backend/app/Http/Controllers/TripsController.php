<?php

namespace App\Http\Controllers;
use App\Models\Trip;

use Illuminate\Http\Request;

class TripsController extends Controller
{
    
    public function createTrip(Request $request)
    {
        $validatedData = $request->validate([
            'startingLocation' => 'required|string|max:255',
            'destinationLocation.*' => 'required|string|max:255',
            'totalBudget' => 'required|numeric',
            'receipt' => 'string|nullable',
            'locationID' => 'required|integer|exists:locations,id',
            'roomID' => 'required|integer|exists:rooms,id'
        ]);
        
        $trip = Trip::create($validatedData);
        return response()->json(['trip' => $trip, 'message' => 'Trip created successfully'], 201);
    }
        public function displayAllTrips()
        {
            return Trip::all();
        }

        public function displayById($id)
        {
            return Trip::findOrFail($id);
        }
        public function updateTrip(Request $request, $id)
    {
        $trip = Trip::findOrFail($id);
        $validatedData = $request->validate([
            'startingLocation' => 'string|max:255',
            'destinationLocation.*' => 'string|max:255',
            'totalBudget' => 'numeric',
            'receipt' => 'string|nullable',
            'location_id' => 'integer|exists:locations,id',
            'room_id' => 'integer|exists:rooms,id'
        ]);

        $trip->fill($validatedData)->save();
        return response()->json(['trip' => $trip, 'message' => 'Trip updated successfully']);
    }
    public function deleteTrip($id)
    {
        $trip = Trip::findOrFail($id);
        $trip->delete();
        return response()->json(['message' => 'Trip deleted successfully']);
    }
}
