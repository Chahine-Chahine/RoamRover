<?php

namespace App\Http\Controllers;
use App\Models\Questionnaire;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Location;


class GeneratetripController extends Controller
{
    public function generateTripAi(){
        $auth_id = Auth::id();
        $location = Location::where("user_id", $auth_id)->first();
        $Questionnaire = Questionnaire::where("user_id" , $auth_id)->first();
        $type = $Questionnaire->type_question_response;
        $time = $Questionnaire->time_question_response;
        $budget = $Questionnaire->budget_question_response;
     
        $prompt = "Generate a trip according to $location so that: ";
        $prompt .= "I am searching for $type trip, ";
        $prompt .= "I am willing to spend $time in the trip so don't recommend exceeded time, ";
        $prompt .= "I have $budget dollars budget for the trip";
     
        dd([
            'auth_id' => $auth_id,
            'location' => $location,
            'questionnaire' => $Questionnaire,
            'type' => $type,
            'time' => $time,
            'budget' => $budget,
            'prompt' => $prompt
        ]);
     }
     
}
