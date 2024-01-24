<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Announcement extends Model
{
    use HasFactory;
    use SoftDeletes; 
    protected $fillable = [
        'announcement_body',
        'admin_id',
    ];
 
    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

}
