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
            'image_url' => 'http://192.168.43.29:8000/storage/images/Baalbeck.webp'
        ]);

        // Create a general user
        DB::table('users')->insert([
            'username' => 'Chris',
            'email' => 'Chris@hotmail.com',
            'password' => Hash::make('Chahine123'), 
            'first_name' => 'Christopher',
            'last_name' => 'Yammine',
        ]);
    }
}
