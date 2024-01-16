<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionnaires extends Model
{
    use HasFactory;
    protected $fillable = [
        'type_question_response',
        'time_question_response',
        'budget_question_response',
        'room_id',
    ];
}
