<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Trip extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'starting_location',
        'total_budget',
        'receipt',
        'room_id'
    ];
    public function locations()
    {
        return $this->belongsToMany(Location::class, 'trips_locations', 'trip_id', 'location_id');
    }
    
    public function room()
    {
        return $this->belongsTo(Room::class, 'room_id');
    }
    public function categories()
{
    return $this->belongsToMany(Category::class, 'categories_trips');
}

}
