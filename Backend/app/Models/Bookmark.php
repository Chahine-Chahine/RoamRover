<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasFactory;
    protected $fillable = [
        'userID',
        'locationID'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userID');
    }

    public function location()
    {
        return $this->belongsTo(Location::class, 'locationID');
    }
}
