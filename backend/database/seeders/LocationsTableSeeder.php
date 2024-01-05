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
            'image' => "http://192.168.0.116:8000/storage/images/3azme.png", 
            'longitude' => 10.859874,
            'latitude' => 1.05454808
        ],
        [
            'title' => 'China City',
            'description' => 'New concept for studying in natural environment',
            'estimatedPrice' => 20,
            'area' => 'Ashrafieh Lebanon',
            'rating' => 4, 
            'image' => "http://192.168.0.116:8000/storage/images/chinacity.png", 
            'longitude' => 10.85874,
            'latitude' => 1.5454808
        ],
        [
           
            'title'=> 'Baalbeck Castle',
            'area'=> 'Baalbeck Lebanon',
            'description'=> 'Discover Your history who you really are',
            'estimatedPrice'=> 10,
            'rating' => 4, 
            'image'=> "http://192.168.0.116:8000/storage/images/Baalbeck.webp",
            'longitude' => 10.858174,
            'latitude' => 1.54544808
        ],
    ]);
    }
}
