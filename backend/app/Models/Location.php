<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    public $timestamps = false;
    
    use HasFactory;
    protected $fillable = [
        'image',
        'description',
        'estimated_price',
        'title',
        'area',
        'rating',
        'coordinates',
        'est_time_spend',
        'tags',
    ];
    public function locations()
    {
        return $this->belongsToMany(Location::class);
    }
    
    public function trips()
    {
        return $this->belongsToMany(Trip::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    
}

