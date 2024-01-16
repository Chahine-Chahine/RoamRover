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
            'image' => "http://192.168.0.116:8000/storage/images/3azme.png", 
            'coordinates' => json_encode(['latitude' => 33.88762080695294, 'longitude' => 35.5076221965429]),
        ],
        [
            'title' => 'China City',
            'description' => 'New concept for studying in natural environment',
            'estimated_price' => 20,
            'area' => 'Ashrafieh Lebanon',
            'rating' => 4, 
            'image' => "http://192.168.0.116:8000/storage/images/chinacity.png", 
            'coordinates' => json_encode(['latitude' => 33.89550476190117, 'longitude' => 35.52042455421304]),
        ],
        [
            'title'=> 'Baalbeck Castle',
            'area'=> 'Baalbeck Lebanon',
            'description'=> 'Discover Your history who you really are',
            'estimated_price'=> 10,
            'rating' => 4, 
            'image'=> "http://192.168.0.116:8000/storage/images/Baalbeck.webp",
            'coordinates' => json_encode(['latitude' => 34.005434973434745 , 'longitude' => 36.21091110212627]),
        ],
        [
            'title'=> 'Qadisha Valley',
            'area'=> 'Qadisha Lebanon',
            'description'=> 'Beautifull place to go',
            'estimated_price'=> 0,
            'rating' => 5, 
            'image'=> "http://192.168.0.116:8000/storage/images/qadisha-valley.jpg",
            'coordinates' => json_encode(['latitude' => 34.284825239254246 , 'longitude' => 35.9527412329511]),
        ],
    ]);
    }
}
