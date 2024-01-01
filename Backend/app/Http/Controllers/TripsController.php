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
            'destinationLocation' => 'required|string|max:255',
            'totalBudget' => 'required|numeric',
            'receipt' => 'string|nullable',
            'locationID' => 'required|integer|exists:locations,id',
            'roomID' => 'required|integer|exists:rooms,id'
        ]);
        
        $trip = Trip::create($validatedData);
        return response()->json(['trip' => $trip, 'message' => 'Trip created successfully'], 201);
    }
    
   
}
