<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hoteles extends Model
{
    use HasFactory;

    protected $fillable =
        [
            'name',
            'address',
            'city',
            'phone',
            'nit',
            'admin',
            'rooms',
            'roomsestandarcant',
            'roomsestandaracomodacion',
            'roomsjuniorcant',
            'roomsjunioracomodacion',
            'roomssuitecant',
            'roomssuiteacomodacion',
        ];
}
