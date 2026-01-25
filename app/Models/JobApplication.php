<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    protected $fillable = [
        'user_id',
        'company',
        'role',
        'location',
        'status',
        'salary',
        'applied_date',
        'follow_up_date',
        'notes'
    ];
}
