<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class TripsTest extends TestCase
{
    use RefreshDatabase;

    public function testDisplayAllTrips()
    {
        $response = $this->get('api/trips');
        $response->assertStatus(200);
    }
}
