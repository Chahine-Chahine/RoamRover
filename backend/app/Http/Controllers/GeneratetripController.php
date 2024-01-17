<?php


namespace App\Http\Controllers;
use App\Models\Questionnaire;
use Illuminate\Http\Request;
use App\Models\Location;

class GeneratetripController extends Controller
{
    public function generateTripAi(){
        $locations = Location::all();
        $Questionnaire = Questionnaire::first();
        $type = $Questionnaire->type_question_response;
        $time = $Questionnaire->time_question_response;
        $budget = $Questionnaire->budget_question_response;

        $maxPlaces = $time == 'full day' ? 5 : 3; 
        $selectedLocations = [];
        $totalCost = 0;

        foreach ($locations as $location) {
            if (in_array($type, explode(',', $location->tags)) && $totalCost + $location->estimated_price <= $budget) {
                $selectedLocations[] = $location;
                $totalCost += $location->estimated_price;

                if (count($selectedLocations) >= $maxPlaces) {
                    break;
                }
            }
        }

        $prompt = "Generate a trip according to: ";
        $prompt .= "I am searching for $type trip, ";
        $prompt .= "I am willing to spend $time in the trip so don't recommend exceeded time, ";
        $prompt .= "I have $budget dollars budget for the trip. ";

        $prompt .= "Suggested locations (within budget): ";
        foreach ($selectedLocations as $location) {
            $prompt .= "{$location->name} (Cost: {$location->estimated_price}, Time to spend: {$location->est_time_spend}), ";
        }

        $prompt .= "\n Return the answer as JSON parsable object (do not return any text
      or explanation or notes before or after the JSON object)";

      $prompt .= "\n the JSON object should be in this format {result: 
        {location: value of list of selectedLocations}";


        dd([
            // 'questionnaire' => $Questionnaire,
            // 'selectedLocations' => $selectedLocations,
            // 'totalCost' => $totalCost,
            'prompt' => $prompt
        ]);
    }
}
