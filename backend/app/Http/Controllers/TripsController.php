<?php

namespace App\Http\Controllers;
use App\Models\Trip;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Room;

class TripsController extends Controller
{
    
    public function createTrip(Request $request)
    {
        $validatedData = $request->validate([
            'starting_location' => 'required|string|max:255',
            'total_budget' => 'required|numeric',
            'receipt' => 'string|nullable',
            'room_name' => 'required|string|max:255', 
            'stops' => 'required|array', 
            'stops.*' => 'required|integer|exists:locations,id' 
        ]);
        
        $user = auth()->user();
        
        DB::beginTransaction();
    
        try {
            $room = Room::create([
                'room_name' => $validatedData['room_name'],
                'creator_id' => $user->id,
            ]);
    
            $validatedData['room_id'] = $room->id;
    
            // Create the trip
            $trip = Trip::create($validatedData);
            
            // Attach locations to the trip
            $trip->locations()->attach($validatedData['stops']);
    
            DB::commit();
    
            return response()->json(['trip' => $trip, 'room' => $room, 'message' => 'Trip and Room created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
    public function displayAllTrips()
    {
        return Trip::with('locations')->get();
    }
    
    public function displayById($id)
    {
        return Trip::with('locations')->findOrFail($id);
    }
    
    public function updateTrip(Request $request, $id)
    {
        $trip = Trip::findOrFail($id);

        $validatedData = $request->validate([
            'starting_location' => 'string|max:255',
            'total_budget' => 'numeric',
            'receipt' => 'string|nullable',
            'room_id' => 'integer|exists:rooms,id',
            'stops' => 'array',
            'stops.*' => 'integer|exists:locations,id'
        ]);

        $trip->fill($validatedData);
  
        if (isset($validatedData['stops'])) {
            $trip->locations()->sync($validatedData['stops']);
        }
    
        $trip->save();
    
        return response()->json(['trip' => $trip->load('locations'), 'message' => 'Trip updated successfully']);
    }
    
    public function deleteTrip($id)
    {
        $trip = Trip::findOrFail($id);
        $trip->delete();
        return response()->json(['message' => 'Trip deleted successfully']);
    }
    
}
