<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        'announcementBody',
        'adminID',
        'receiverID'
    ];
    
    protected $casts = [
        'receiverID' => 'array',
    ];
    public function admin()
    {
        return $this->belongsTo(User::class, 'adminID');
    }

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiverID');
    }

}
