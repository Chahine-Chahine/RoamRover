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
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('startingLocation');
            $table->string('destinationLocation');
            $table->float('totalBudget');
            $table->string('receipt');
            $table->unsignedBigInteger('locationID');
            $table->foreign('locationID')->references('id')->on('locations');
            $table->unsignedBigInteger('roomID');
            $table->foreign('roomID')->references('id')->on('rooms');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
