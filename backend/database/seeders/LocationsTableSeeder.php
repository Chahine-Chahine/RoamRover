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
            'estimated_price' => 20,
            'area' => 'Beirut Lebanon',
            'rating' => 5, 
            'image' => "http://192.168.43.29:8000/storage/images/3azme.png", 
            'coordinates' => json_encode(['latitude' => 1.05454808, 'longitude' => 10.859874]),
        ],
        [
            'title' => 'China City',
            'description' => 'New concept for studying in natural environment',
            'estimated_price' => 20,
            'area' => 'Ashrafieh Lebanon',
            'rating' => 4, 
            'image' => "http://192.168.43.29:8000/storage/images/chinacity.png", 
            'coordinates' => json_encode(['latitude' => 1.054554808, 'longitude' => 10.89874]),
        ],
        [
           
            'title'=> 'Baalbeck Castle',
            'area'=> 'Baalbeck Lebanon',
            'description'=> 'Discover Your history who you really are',
            'estimated_price'=> 10,
            'rating' => 4, 
            'image'=> "http://192.168.43.29:8000/storage/images/Baalbeck.webp",
            'coordinates' => json_encode(['latitude' => 1.05454808, 'longitude' => 10.859874]),
        ],
    ]);
    }
}
