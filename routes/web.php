<?php

use App\Http\Controllers\HelloController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);
Route::get('/hello', [HelloController::class, 'welcome']);


Route::get('/about', function () {
    return view('about');
});

