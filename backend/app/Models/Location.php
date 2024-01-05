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
        'longitude',
        'latitude'
    ];
    public function locations()
    {
        return $this->belongsToMany(Location::class);
    }
    
    public function trips()
    {
        return $this->belongsToMany(Trip::class);
    }
}
