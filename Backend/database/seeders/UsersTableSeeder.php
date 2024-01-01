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
            'firstName' => 'Chahine',
            'lastName' => 'Chahine',
            'roleID' => 1, 
        ]);

        // Create a general user
        DB::table('users')->insert([
            'username' => 'Chris',
            'email' => 'Chris@hotmail.com',
            'password' => Hash::make('Chahine123'), 
            'firstName' => 'Christopher',
            'lastName' => 'Yammine',
        ]);
    }
}
