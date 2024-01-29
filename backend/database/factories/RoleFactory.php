<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Role>
 */
class RoleFactory extends Factory
{
    public $timestamps = false;

    public function definition(): array
    {
        // Randomly choose between 'admin' and 'user'
        $roleNames = ['admin', 'user'];
        return [
            'role_name' => $this->faker->randomElement($roleNames)
        ];
    }
}
