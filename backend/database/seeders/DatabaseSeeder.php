<?php

namespace Database\Seeders;
use Database\Seeders\RolesTableSeeder;
use Database\Seeders\UsersTableSeeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RolesTableSeeder::class,
            UsersTableSeeder::class,
            CategoriesTableSeeder::class,
            LocationsTableSeeder::class,
        ]);
    }
}
