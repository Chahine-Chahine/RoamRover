<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;
use App\Models\User;
use App\Models\Location;

class LocationTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        Artisan::call('db:seed', ['--class' => 'CategoriesTableSeeder']);
        // Create roles
        Role::factory()->create(['role_name' => 'admin']);
        Role::factory()->create(['role_name' => 'user']);
    }

    private function locationData()
    {
        return [
            'title' => $this->faker->word,
            'description' => $this->faker->sentence,
            'image' => $this->faker->imageUrl(),
            'estimated_price' => $this->faker->randomFloat(2, 10, 100),
            'area' => $this->faker->word,
            'rating' => $this->faker->numberBetween(1, 5),
            'coordinates' => ['latitude' => $this->faker->latitude, 'longitude' => $this->faker->longitude],
            'est_time_spend' => $this->faker->numberBetween(1, 10),
            'tags' => $this->faker->words(3),
            'category_ids' => $this->getCategoryIds(),
        ];
    }

    private function getCategoryIds()
    {
        $attributes1 = ['category_name' => 'Category 1'];
        $attributes2 = ['category_name' => 'Category 2'];

        $category1 = Category::firstOrCreate(['name' => 'Category 1'], $attributes1);
        $category2 = Category::firstOrCreate(['name' => 'Category 2'], $attributes2);

        return [$category1->id, $category2->id];
    }




    private function createAdminUser()
    {
        return User::factory()->create(['role_id' => Role::where('role_name', 'admin')->first()->id]);
    }

    private function createUser()
    {
        return User::factory()->create(['role_id' => Role::where('role_name', 'user')->first()->id]);
    }

    public function testAdminCanCreateLocation()
    {
        $admin = $this->createAdminUser();
        $response = $this->actingAs($admin)->postJson('/api/locations', $this->locationData());
        $response->assertStatus(201);
    }

    public function testNonAdminCannotCreateLocation()
    {
        $user = $this->createUser();
        $response = $this->actingAs($user)->postJson('/api/locations', $this->locationData());
        $response->assertStatus(401);
    }

}
