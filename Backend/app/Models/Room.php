<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $table = 'rooms';

    protected $primaryKey = 'id';
    protected $fillable = [
        'roomName',
        'creatorID',
        'participantsID'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'creatorID');
    }

    public function participants()
    {
        return $this->belongsTo(User::class, 'participantsID');
    }

    public $timestamps = true;
}
