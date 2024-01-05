<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;
    protected $fillable = [
        'startingLocation',
        'totalBudget',
        'receipt',
        'room_id'
    ];
    protected $casts = [
        'destinationLocation' => 'array',
    ];
}
