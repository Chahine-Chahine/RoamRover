<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'description',
        'estimatedPrice',
        'title',
        'area',
        'rating',
    ];

    public function getImageAttribute($value)
    {
        return asset('storage/' . $value);
    }
}
