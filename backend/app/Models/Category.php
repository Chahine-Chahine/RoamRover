<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['category_name'];

    /**
     * The locations that belong to the category.
     */
    public function trips()
    {
        return $this->belongsToMany(Trip::class);
    }
}

