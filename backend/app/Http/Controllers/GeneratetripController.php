<?php


namespace App\Http\Controllers;
use App\Models\Questionnaire;
use Illuminate\Http\Request;
use App\Models\Location;
use OpenAI\Laravel\Facades\OpenAI;
use Illuminate\Support\Facades\Log;
class GeneratetripController extends Controller {
    public function generateTripAi() {
        $Questionnaire = Questionnaire::all()->last();
        $type = $Questionnaire->type_question_response;
        $time = $Questionnaire->time_question_response;
        $budget = $Questionnaire->budget_question_response;

        Log::info('Questionnaire Data', ['type' => $type, 'time' => $time, 'budget' => $budget]);
        $locations = [
            [
                "id" => 1,
                "title" => "3azme Caffe",
                "estimated_price" => 20,
                "est_time_spend" => 120,
                "tags" => ["Beach and Chill"]
            ],
            [
                "id" => 2,
                "title" => "China City",
                "estimated_price" => 20,
                "est_time_spend" => 180,
                "tags" => ["Outdoor Exercising"]
            ],
            [
                "id" => 3,
                "title" => "Jeita Grotto",
                "estimated_price" => 18,
                "est_time_spend" => 240,
                "tags" => ["Outdoor Exercising", "Team Building"]
            ],
            [
                "id" => 4,
                "title" => "Sidon Sea Castle",
                "estimated_price" => 5,
                "est_time_spend" => 90,
                "tags" => ["Beach and Chill", "outdoor Exercising"]
            ],
            [
                "id" => 5,
                "title" => "Byblos Old Port",
                "estimated_price" => 0,
                "est_time_spend" => 60,
                "tags" => ["Beach and Chill"]
            ],
            [
                "id" => 6,
                "title" => "Qadisha Valley",
                "estimated_price" => 0,
                "est_time_spend" => 300,
                "tags" => ["Team Building", "Outdoor Exercising"]
            ],
            [
                "id" => 7,
                "title" => "Baalbeck Castle",
                "estimated_price" => 10,
                "est_time_spend" => 210,
                "tags" => ["Team Building"]
            ],
            [
                "id" => 8,
                "title" => "Harissa",
                "estimated_price" => 15,
                "est_time_spend" => 120,
                "tags" => ["Team Building"]
            ],
            [
                "id" => 9,
                "title" => "Anjar",
                "estimated_price" => 20,
                "est_time_spend" => 180,
                "tags" => ["Camp Fire and Camp"]
            ],
            [
                "id" => 10,
                "title" => "The Cedars",
                "estimated_price" => 25,
                "est_time_spend" => 240,
                "tags" => ["Outdoor Exercising", "Team Building"]
            ],
            [
                "id" => 11,
                "title" => "Al Shouf Cedar Nature Reserve",
                "estimated_price" => 5,
                "est_time_spend" => 200,
                "tags" => ["Camp Fire and Camp", "Team Building"]
            ],
            [
                "id" => 12,
                "title" => "Cedars Ground Campsite",
                "estimated_price" => 25,
                "est_time_spend" => 400,
                "tags" => ["Outdoor Exercising", "Camp Fire and Camp"]
            ]
        ];
        
        
        

        // Constructing the location data string
        $locationDescriptions = "";
        foreach ($locations as $location) {
            $tags = implode(", ", $location['tags']);
            $locationDescriptions .= "ID: {$location['id']}, Title: {$location['title']}, Price: {$location['estimated_price']}, Time: {$location['est_time_spend']} minutes, Tags: $tags;  ";
        }
        Log::info('Location Descriptions', ['descriptions' => $locationDescriptions]);

        // Constructing the AI prompt
        $prompt = "Using these locations: $locationDescriptions";
        $prompt .= "generate a trip plan for a $type trip, with a duration of $time, and a budget of $budget dollars.";
        $prompt .= "The plan should include location names and AI-generated descriptions based on the given data.";
        $prompt .= "Be carefull not to exceed $budget and not to go below the budget with 40$.";
        $prompt .= "\n Make sure to state the estimated spending and the total budget.";
        $prompt .= "\n Return the answer as JSON parsable object (do not return any text
        or explanation or notes before or after the JSON object)";
        $prompt .= "\n the JSON object should be in this format {result: [
            {ID: id of the location, title:value, description:value }], total_budget_per_individual: value }";
    

        Log::info('AI Prompt', ['prompt' => $prompt]);

        try {
            $result = OpenAI::completions()->create([
                'model' => 'gpt-3.5-turbo-instruct',
                'prompt' => $prompt,
                'max_tokens' => 1700,
            ]);
    
            // Extract the text part from the response
            $responseText = $result['choices'][0]['text'];
            Log::info('Raw AI Response', ['responseText' => $responseText]);
    
            $jsonResponse = json_decode($responseText, true);
    
            if (json_last_error() === JSON_ERROR_NONE) {
                return response()->json($jsonResponse);
            } else {
                Log::error('JSON Decoding Error', ['error' => json_last_error_msg()]);
                return response()->json(['error' => 'Invalid JSON response from AI', 'aiResponse' => $responseText]);
            }
        } catch (\Exception $e) {
            Log::error('Error in AI API call', ['exception' => $e->getMessage()]);
            return response()->json(['error' => 'AI API call failed']);
        }
    }
}