<?php

namespace Database\Factories;

use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;

class LocationFactory extends Factory
{
    protected $model = Location::class;

    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'description' => $this->faker->sentence,
            'image' => $this->faker->imageUrl(),
            'estimated_price' => $this->faker->randomFloat(2, 10, 100),
            'area' => $this->faker->word,
            'rating' => $this->faker->numberBetween(1, 5),
            'coordinates' => json_encode(['latitude' => $this->faker->latitude, 'longitude' => $this->faker->longitude]),
            'tags' => json_encode($this->faker->words(3)),
            'est_time_spend' => $this->faker->numberBetween(1, 10), 
            'category_ids' => json_encode([1, 2]), 
        ];
    }
}
