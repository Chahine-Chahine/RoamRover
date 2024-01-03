<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('locations')->insert([
        [
            'title' => '3azme Caffe',
            'description' => 'Coffee shop in Beirut',
            'estimatedPrice' => 20,
            'area' => 'Beirut Lebanon',
            'rating' => 5, 
            'image' => "../assets/3azme.png", 
        ],
        [
            'title' => 'China City',
            'description' => 'New concept for studying in natural environment',
            'estimatedPrice' => 20,
            'area' => 'Ashrafieh Lebanon',
            'rating' => 4, 
            'image' => "../assets/chinacity.png", 
        ],
        [
           
            'title'=> 'Baalbeck Castle',
            'area'=> 'Baalbeck Lebanon',
            'description'=> 'Discover Your history who you really are',
            'estimatedPrice'=> 10,
            'rating' => 4, 
            'image'=> "../assets/Baalbeck.webp",
        ],
    ]);
    }
}
