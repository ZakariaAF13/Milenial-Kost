<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\BoardingHouseController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\Admin\CategoryAdminController;

// Public API
Route::get('/health', fn () => response()->json(['status' => 'ok', 'ts' => now()->toISOString()]));

// Cities
Route::get('/cities', [CityController::class, 'index']);
Route::get('/cities/{slug}', [CityController::class, 'show']);

// Categories
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);

// Boarding Houses
Route::get('/boarding-houses', [BoardingHouseController::class, 'index']);
Route::get('/boarding-houses/popular', [BoardingHouseController::class, 'popular']);
Route::get('/boarding-houses/{slug}', [BoardingHouseController::class, 'show']);
Route::get('/boarding-houses/{slug}/rooms', [BoardingHouseController::class, 'rooms']);

// Search
Route::get('/search', [BoardingHouseController::class, 'search']);

// Orders
Route::get('/orders/check', [BookingController::class, 'check']);
Route::post('/orders/check', [BookingController::class, 'checkPost']);

// Admin API (no auth yet, add Sanctum later)
Route::prefix('admin')->group(function () {
    // Categories CRUD
    Route::get('/categories', [CategoryAdminController::class, 'index']);
    Route::post('/categories', [CategoryAdminController::class, 'store']);
    Route::put('/categories/{id}', [CategoryAdminController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryAdminController::class, 'destroy']);
});
