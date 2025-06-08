<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hoteles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('address');
            $table->string('city');
            $table->string('phone');
            $table->string('nit');
            $table->string('admin');
            $table->integer('rooms');
            $table->integer('roomsestandarcant');
            $table->string('roomsestandaracomodacion');
            $table->integer('roomsjuniorcant');
            $table->string('roomsjunioracomodacion');
            $table->integer('roomssuitecant');
            $table->string('roomssuiteacomodacion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hoteles');
    }
};
