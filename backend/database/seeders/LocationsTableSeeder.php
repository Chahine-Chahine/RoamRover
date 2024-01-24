<?php

namespace Database\Seeders;

use App\Models\Location;
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
                'title' => 'Azme Caffe',
                'description' => 'Coffee shop in Beirut',
                'estimated_price' => 20,
                'area' => 'Beirut Lebanon',
                'rating' => 5, 
                'image' => "http://192.168.43.29:8000/storage/images/3azme.png", 
                'coordinates' => json_encode(['latitude' => 33.88762080695294, 'longitude' => 35.5076221965429]),
                "est_time_spend" => 120,
                "tags" => json_encode(["coffee", "snacks", "relaxation"])
            ],
            [
                'title' => 'BHive',
                'description' => 'New concept for studying in natural environment',
                'estimated_price' => 25,
                'area' => 'Hamra Lebanon',
                'rating' => 4, 
                'image' => "http://192.168.43.29:8000/storage/images/beehive.webp", 
                'coordinates' => json_encode(['latitude' => 33.895315062218195, 'longitude' => 35.47805602722215]),
                "est_time_spend" => 180,
                "tags" => json_encode(["study", "nature", "calm"])
            ],
            [
                'title' => 'Jeita Grotto',
                'description' => 'Stunning limestone caves',
                'estimated_price' => 18,
                'area' => 'Jeita Lebanon',
                'rating' => 5,
                'image' => "http://192.168.43.29:8000/storage/images/jeita-grotto.jpg",
                'coordinates' => json_encode(['latitude' => 33.976480, 'longitude' => 35.621355]),
                "est_time_spend" => 240,
                "tags" => json_encode(["adventure", "nature", "exploration"])
            ],
            [
            'title' => 'Sidon Sea Castle',
            'description' => 'Crusader castle in Sidon',
            'estimated_price' => 5,
            'area' => 'Sidon Lebanon',
            'rating' => 4,
            'image' => "http://192.168.43.29:8000/storage/images/sidon-castle.jpg",
            'coordinates' => json_encode(['latitude' => 33.563056, 'longitude' => 35.368889]),
            "est_time_spend" => 90,
            "tags" => json_encode(["history", "sightseeing", "photography"])
            ],
            [
                'title' => 'AquaLand resort',
                'description' => 'Spend a day in aquaLand beach & resort, it is time to get tanned!',
                'estimated_price' => 45,
                'area' => 'Batroon Lebanon',
                'rating' => 4,
                'image' => "http://192.168.43.29:8000/storage/images/aqualand.jpg",
                'coordinates' => json_encode(['latitude' => 34.249656130215186, 'longitude' => 35.658844202087145]),
                "est_time_spend" => 120,
                "tags" => json_encode(["Beach", "relaxing"])
                ],
            [
            'title' => 'Byblos Old Port',
            'description' => 'Historic port in Byblos',
            'estimated_price' => 0,
            'area' => 'Byblos Lebanon',
            'rating' => 5,
            'image' => "http://192.168.43.29:8000/storage/images/byblos-old-port.webp",
            'coordinates' => json_encode(['latitude' => 34.123002, 'longitude' => 35.651928]),
            "est_time_spend" => 60,
            "tags" => json_encode(["historic", "maritime", "relaxation"])
            ],
            [
            'title' => 'Qadisha Valley',
            'description' => 'Beautiful place to go',
            'estimated_price' => 0,
            'area' => 'Qadisha Lebanon',
            'rating' => 5,
            'image' => "http://192.168.43.29:8000/storage/images/qadisha-valley.jpg",
            'coordinates' => json_encode(['latitude' => 34.284825239254246, 'longitude' => 35.9527412329511]),
            "est_time_spend" => 300,
            "tags" => json_encode(["hiking", "nature", "scenery"])
            ],
            [
            'title'=> 'Baalbeck Castle',
            'area'=> 'Baalbeck Lebanon',
            'description'=> 'Discover your history - who you really are',
            'estimated_price'=> 10,
            'rating' => 4,
            'image'=> "http://192.168.43.29:8000/storage/images/Baalbeck.webp",
            'coordinates' => json_encode(['latitude' => 34.005434973434745 , 'longitude' => 36.21091110212627]),
            "est_time_spend" => 210,
            "tags" => json_encode(["cultural", "historic", "exploration"])
            ],
            [
                'title'=> 'Anjar Castle',
                'area'=> 'Anjar Lebanon',
                'description'=> 'Discover your history - explore beautiful Anjar castle today!',
                'estimated_price'=> 15,
                'rating' => 4,
                'image'=> "http://192.168.43.29:8000/storage/images/anjar.jpg",
                'coordinates' => json_encode(['latitude' => 33.732738726067836 , 'longitude' => 35.93361786954726]),
                "est_time_spend" => 210,
                "tags" => json_encode(["cultural", "historic", "exploration"])
            ],
            [
                'title'=> 'Al Shouf Cedar Nature Reserve',
                'area'=> 'Al Shouf Lebanon',
                'description'=> 'Explore god wonders in Shouf what a journey!',
                'estimated_price'=> 5,
                'rating' => 5,
                'image'=> "http://192.168.43.29:8000/storage/images/alshouf-cedar.jpg",
                'coordinates' => json_encode(['latitude' => 33.7501118908014 , 'longitude' => 35.73154151187815]),
                "est_time_spend" => 210,
                "tags" => json_encode(["hiking", "nature", "scenery"])
            ],
            [
                'title'=> 'Cedars of God',
                'area'=> 'Bsharri Lebanon',
                'description'=> 'The well known great Cedars of god is a great place to go for resetting your mind!',
                'estimated_price'=> 0,
                'rating' => 5,
                'image'=> "http://192.168.43.29:8000/storage/images/cedars-of-god.jpg",
                'coordinates' => json_encode(['latitude' => 34.244441479255684, 'longitude' => 36.04868297318802]),
                "est_time_spend" => 180,
                "tags" => json_encode(["hiking", "nature", "scenery"])
                ]
            ]);
            $categoryIds = [
                'Beach' => 1,
                'Hiking' => 2,
                'Restaurants' => 3,
                'Ruins' => 4
            ];
    
            // Manually assign categories to each location.
            $locations = [
                'Azme Caffe' => ['Restaurants'],
                'BHive' => ['Restaurants'],
                'Jeita Grotto' => ['Hiking'],
                'Byblos Old Port' => ['Beach'],
                'Qadisha Valley' => ['Hiking'],
                'Baalbeck Castle' => ['Ruins'],
                'Sidon Sea Castle' => ['Beach'],
                'Anjar Castle' => ['Ruins'],
                'Cedars of God' => ['Hiking'],
                'AquaLand resort' => ["Beach"],
                'Al Shouf Cedar Nature Reserve' => ['Hiking'],

            ];
    
            foreach ($locations as $title => $cats) {
                $location = Location::where('title', $title)->first();
                $locationCategories = array_map(fn($cat) => $categoryIds[$cat], $cats);
                $location->categories()->attach($locationCategories);
            }
        }
    }
         
            