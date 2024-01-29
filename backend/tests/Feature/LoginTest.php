<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class AuthControllerLoginTest extends TestCase
{
    use RefreshDatabase; // Use the RefreshDatabase trait

    public function setUp(): void
    {
        parent::setUp();
        // Create the 'admin' role
        Role::factory()->create(['role_name' => 'admin']);
    }

    public function testUserLogin()
    {
        // Create a user with the 'admin' role
        $adminRole = Role::where('role_name', 'admin')->first();

        $user = User::factory()->create([
            'email' => 'chahine@hotmail.com',
            'password' => Hash::make('Chahine123'),
            'role_id' => $adminRole->id,
            'username' => 'chahine',
            'first_name' => 'Chahine',
            'last_name' => 'Chahine',
            'image_url' => 'http://192.168.43.29:8000/storage/images/chahine.jpeg',
            'bio' => 'I am fueled by an insatiable passion for extraordinary adventures...',
        ]);
        $response = $this->postJson('/api/login', [
            'email' => 'chahine@hotmail.com',
            'password' => 'Chahine123',
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status',
            'user' => [
                'id',
                'username',
                'email',
                'first_name',
                'last_name',
                'image_url',
                'bio',
                'role_id',
                'created_at',
                'updated_at',
            ],
            'authorisation' => [
                'token',
                'type',
            ],
        ]);
    }
}