<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Trip;

class TripFactory extends Factory
{
    protected $model = Trip::class;

    public function definition()
    {
        return [
            // Define the attributes for your Trip model here
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
            // Add more attributes as needed
        ];
    }
}
