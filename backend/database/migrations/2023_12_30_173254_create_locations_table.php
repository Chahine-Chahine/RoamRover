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
            $table->float('estimatedPrice');
            $table->string('title');
            $table->string('area');
            $table->integer('rating');
            $table->decimal('latitude', 10, 7); 
            $table->decimal('longitude', 11, 7); 
            $table->timestamps();
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
