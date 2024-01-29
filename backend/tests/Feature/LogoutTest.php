<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class AuthControllerLogoutTest extends TestCase
{
    use RefreshDatabase;

    public function testUserLogout()
    {
        $role = Role::factory()->create(['role_name' => 'YourRoleName']);

        // Created a user with all necessary fields and foreign key relations
        $user = User::factory()->create([
            'email' => 'chahine@hotmail.com',
            'password' => Hash::make('Chahine123'),
            'username' => 'testuser',
            'first_name' => 'Test',
            'last_name' => 'User',
            'role_id' => $role->id, 
        ]);

        // Attempt to log in
        $loginResponse = $this->postJson('/api/login', [
            'email' => 'chahine@hotmail.com',
            'password' => 'Chahine123',
        ]);

        $loginResponse->assertStatus(200);
        $token = $loginResponse->json('authorisation.token');
        $this->assertNotNull($token);

        // Attempt to log out
        $logoutResponse = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/logout');

        $logoutResponse->assertStatus(200)
        ->assertJson([
            'status' => 'success',
            'message' => 'Successfully logged out', 
        ]);
    }
}
