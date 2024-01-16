<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('description');
            $table->float('estimated_price');
            $table->string('title');
            $table->string('area');
            $table->integer('rating');
            $table->json('coordinates'); 
            $table->integer('est_time_spend');
            $table->json('tags');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
