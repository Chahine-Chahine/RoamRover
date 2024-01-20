<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $categories = [
            ['category_name' => 'Beach'],
            ['category_name' => 'Hiking'],
            ['category_name' => 'Restaurants'],
            ['category_name' => 'Ruins']
        ];

        DB::table('categories')->insert($categories);
    }
}
