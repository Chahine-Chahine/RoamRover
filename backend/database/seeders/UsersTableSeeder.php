<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create an admin user
        DB::table('users')->insert([
            'username' => 'chahine',
            'email' => 'chahine@hotmail.com',
            'password' => Hash::make('Chahine123'), 
            'first_name' => 'Chahine',
            'last_name' => 'Chahine',
            'role_id' => 1, 
            'image_url' => 'http://192.168.43.29:8000/storage/images/chahine.jpeg',
            'bio' => "I am fueled by an insatiable passion for extraordinary adventures. Embarking on a journey is not just a routine for me; it is a thrilling and invigorating experience that ignites my spirit. The anticipation of waking up to a new day and the prospect of setting out on a trip exhilarate me, as I embrace the unknown with an adventurous zeal. Each expedition becomes a canvas for me to paint vibrant memories and indulge in the joy of exploration"
        ]);


        DB::table('users')->insert([
            'username' => 'Nour',
            'email' => 'Nour@hotmail.com',
            'password' => Hash::make('Chahine123'), 
            'first_name' => 'Nour',
            'last_name' => 'Mshawrab',
            'role_id' => 1, 
            'image_url' => 'http://192.168.43.29:8000/storage/images/nour.jpeg',
            'bio' => "Hello there I am Nour!"
        ]);


        // Create a general user
        DB::table('users')->insert([
            'username' => 'Chris',
            'email' => 'Chris@hotmail.com',
            'password' => Hash::make('Chahine123'), 
            'first_name' => 'Christopher',
            'last_name' => 'Yammine',
            'image_url' => 'http://192.168.43.29:8000/storage/images/chris.jpg',
        ]);
        DB::table('users')->insert([
            'username' => 'Taha',
            'email' => 'Taha@hotmail.com',
            'password' => Hash::make('Chahine123'), 
            'first_name' => 'Taha',
            'last_name' => 'Taha',
            'image_url' => 'http://192.168.43.29:8000/storage/images/taha.jpg',
        ]);
    }
}
