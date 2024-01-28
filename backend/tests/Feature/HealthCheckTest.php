<?php

namespace Tests\Feature;
use Tests\TestCase;

class HealthCheckTest extends TestCase
{
    
    // Testing a server health 
    public function test_health_check()
    {
        $response = $this->get('/api/health');
    
        $response->assertStatus(200)
                 ->assertJson(['status' => 'healthy']);
    }
    
}
