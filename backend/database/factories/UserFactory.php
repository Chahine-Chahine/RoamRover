<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'username' => $this->faker->userName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make('password'), // Default password
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'image_url' => $this->faker->imageUrl(),
            'bio' => $this->faker->sentence,
            'role_id' => 1, 
        ];
    }
}
