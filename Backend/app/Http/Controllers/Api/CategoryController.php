<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        return response()->json(
            Category::orderBy('name')->get()
        );
    }

    public function show(string $slug)
    {
        $category = Category::where('slug', $slug)->firstOrFail();
        $boardingHouses = $category->boardingHouses()
            ->with(['category', 'city'])
            ->latest()
            ->paginate(12);

        return response()->json([
            'category' => $category,
            'boarding_houses' => $boardingHouses,
        ]);
    }
}