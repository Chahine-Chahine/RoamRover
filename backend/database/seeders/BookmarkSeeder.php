<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BookmarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userIds = [1, 2];
        $locationIds = [1, 2, 3];
        $bookmarks = [];

        foreach ($userIds as $userId) {
            foreach ($locationIds as $locationId) {
                $bookmarks[] = [
                    'user_id' => $userId,
                    'location_id' => $locationId,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ];
            }
        }

        DB::table('bookmarks')->insert($bookmarks);
    }
}