<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $timestamps = false;
    use HasFactory;

    protected $fillable = ['category_name'];

    /**
     * The locations that belong to the category.
     */
    public function locations()
    {
        return $this->belongsToMany(Location::class);
    }
}

