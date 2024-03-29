<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Room extends Model
{
    use HasFactory;
    protected $table = 'rooms';

    protected $fillable = [
        'room_name',
        'creator_id',
        'room_description',
    ];


    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

public function users(): BelongsToMany
{
    return $this->belongsToMany(User::class, 'rooms_users');
}

}
