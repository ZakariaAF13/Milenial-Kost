<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\City;

class CityController extends Controller
{
    public function index(Request $request)
    {
        $q = $request->query('q');
        $cities = City::query()
            ->when($q, fn($qq) => $qq->where('name', 'like', "%$q%"))
            ->orderBy('name')
            ->paginate(12);
        return response()->json($cities);
    }

    public function show(string $slug)
    {
        $city = City::where('slug', $slug)->firstOrFail();
        $boardingHouses = $city->boardingHouses()
            ->with(['category', 'city'])
            ->latest()
            ->paginate(12);
        return response()->json([
            'city' => $city,
            'boarding_houses' => $boardingHouses,
        ]);
    }
}