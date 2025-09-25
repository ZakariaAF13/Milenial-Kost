<?php

use Illuminate\Support\Facades\Route;

Route::get('/', fn () => response()->json([
    'name' => config('app.name', 'Milenial-Kost API'),
    'version' => app()->version(),
    'env' => app()->environment(),
]));