<?php


namespace App\Http\Controllers;
use App\Models\Questionnaire;
use Illuminate\Http\Request;
use App\Models\Location;
use OpenAI\Laravel\Facades\OpenAI;
use Illuminate\Support\Facades\Log;
class GeneratetripController extends Controller {
    public function generateTripAi() {
        $Questionnaire = Questionnaire::first();
        $type = $Questionnaire->type_question_response;
        $time = $Questionnaire->time_question_response;
        $budget = $Questionnaire->budget_question_response;

        Log::info('Questionnaire Data', ['type' => $type, 'time' => $time, 'budget' => $budget]);
        $locations = [
            [
                "title" => "3azme Caffe",
                "estimated_price" => 20,
                "est_time_spend" => 120,
                "tags" => ["coffee", "snacks", "relaxation"]
            ],
            [
                "title" => "China City",
                "estimated_price" => 20,
                "est_time_spend" => 180,
                "tags" => ["study", "nature", "calm"]
            ],
            [
                "title" => "Jeita Grotto",
                "estimated_price" => 18,
                "est_time_spend" => 240,
                "tags" => ["adventure", "nature", "exploration"]
            ],
            [
                "title" => "Sidon Sea Castle",
                "estimated_price" => 5,
                "est_time_spend" => 90,
                "tags" => ["history", "sightseeing", "photography"]
            ],
            [
                "title" => "Byblos Old Port",
                "estimated_price" => 0,
                "est_time_spend" => 60,
                "tags" => ["historic", "maritime", "relaxation"]
            ],
            [
                "title" => "Qadisha Valley",
                "estimated_price" => 0,
                "est_time_spend" => 300,
                "tags" => ["hiking", "nature", "scenery"]
            ],
            [
                "title" => "Baalbeck Castle",
                "estimated_price" => 10,
                "est_time_spend" => 210,
                "tags" => ["cultural", "historic", "exploration"]
            ]
        ];
        

        // Constructing the location data string
        $locationDescriptions = "";
        foreach ($locations as $location) {
            $tags = implode(", ", $location['tags']);
            $locationDescriptions .= "{$location['title']} (Price: {$location['estimated_price']}, Time: {$location['est_time_spend']} minutes, Tags: $tags); ";
        }
        Log::info('Location Descriptions', ['descriptions' => $locationDescriptions]);

        // Constructing the AI prompt
        $prompt = "Using these locations: $locationDescriptions";
        $prompt .= "generate a trip plan for a $type trip, with a duration of $time, and a budget of $budget dollars. ";
        $prompt .= "The plan should include location names and AI-generated descriptions based on the given data.";

        Log::info('AI Prompt', ['prompt' => $prompt]);

       try {
            $result = OpenAI::completions()->create([
                'model' => 'gpt-3.5-turbo-instruct',
                'prompt' => $prompt,
                'max_tokens' => 3700,
            ]);
            Log::info('AI Response', ['response' => $result]);
         
            $result = json_decode($result['choices'][0]['text']);
        } catch (\Exception $e) {
            // Log any exceptions
            Log::error('Error in AI API call', ['exception' => $e->getMessage()]);
            return response()->json(['error' => 'AI API call failed']);
        }

        return response()->json($result);
    }
}

