<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoriesTest extends TestCase
{
    use RefreshDatabase;

    public function testDisplayAllCategories()
    {
        $response = $this->get('api/categories');

        $response->assertStatus(200);
    }
}
