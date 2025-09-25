<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BoardingHouse;
use App\Models\City;
use App\Models\Category;

class BoardingHouseController extends Controller
{
    public function index(Request $request)
    {
        $city = $request->query('city'); // slug
        $category = $request->query('category'); // slug
        $q = $request->query('q');

        $items = BoardingHouse::query()
            ->with(['city', 'category'])
            ->when($city, function ($qq) use ($city) {
                $qq->whereHas('city', fn($c) => $c->where('slug', $city));
            })
            ->when($category, function ($qq) use ($category) {
                $qq->whereHas('category', fn($c) => $c->where('slug', $category));
            })
            ->when($q, fn($qq) => $qq->where('name', 'like', "%$q%"))
            ->latest()
            ->paginate(12);

        return response()->json($items);
    }

    public function popular()
    {
        $items = BoardingHouse::with(['city', 'category'])
            ->latest()
            ->take(8)
            ->get();
        return response()->json($items);
    }

    public function show(string $slug)
    {
        $item = BoardingHouse::with(['city', 'category'])->where('slug', $slug)->firstOrFail();
        return response()->json($item);
    }

    public function rooms(string $slug)
    {
        $bh = BoardingHouse::where('slug', $slug)->firstOrFail();
        $rooms = $bh->rooms()->latest()->get();
        return response()->json($rooms);
    }

    public function search(Request $request)
    {
        $q = $request->query('q');
        $items = BoardingHouse::with(['city', 'category'])
            ->when($q, fn($qq) => $qq->where('name', 'like', "%$q%"))
            ->latest()
            ->paginate(12);
        return response()->json($items);
    }
}