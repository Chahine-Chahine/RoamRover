<?php

namespace App\Http\Controllers;
use App\Models\Questionnaires;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Room;
class QuestionnairesController extends Controller
{
    public function createQuestionnaires (Request $request){
        $validatedData = $request->validate([
            'type_question_response' => 'required|string',
            'time_question_response' => 'required|string',
            'budget_question_response' => 'required|numeric',
            'room_id' => 'required|integer',
            'room_name' => 'required|string|max:255', 
            'room_description' => 'required|string|max:255',
        ]);

        $user = auth()->user();
        
        DB::beginTransaction();
 
        try {
            $room = Room::create([
                'room_name' => $validatedData['room_name'],
                'creator_id' => $user->id,
                'room_description' => $validatedData['room_description']
            ]);
    
            $validatedData['room_id'] = $room->id;
    
            // Create the questionnaire
            $questionnaire = Questionnaires::create($validatedData);
    
            DB::commit();
    
            return response()->json(['questionnaire' => $questionnaire, 'room' => $room, 'message' => 'questionnaire and Room created successfully'], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}