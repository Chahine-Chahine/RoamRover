<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    public $timestamps = false;
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['category_name'];

    /**
     * The locations that belong to the category.
     */
    public function locations()
    {
        return $this->belongsToMany(Location::class, 'locations_categories');
    }
    public function trips()
{
    return $this->belongsToMany(Trip::class, 'category_trip');
}

}

