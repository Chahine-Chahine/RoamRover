<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;
    protected $fillable = [
        'announcementBody',
        'admin_id',
        'receiver_id'
    ];
    
    protected $casts = [
        'receiver_id' => 'array',
    ];
    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

}
