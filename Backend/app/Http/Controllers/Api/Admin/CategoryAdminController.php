<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryAdminController extends Controller
{
    public function index()
    {
        return response()->json(Category::orderBy('name')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required','string','max:100'],
        ]);
        $slug = Str::slug($validated['name']);
        $cat = Category::create([
            'name' => $validated['name'],
            'slug' => $slug,
        ]);
        return response()->json($cat, 201);
    }

    public function update(Request $request, int $id)
    {
        $validated = $request->validate([
            'name' => ['required','string','max:100'],
        ]);
        $cat = Category::findOrFail($id);
        $cat->name = $validated['name'];
        $cat->slug = Str::slug($validated['name']);
        $cat->save();
        return response()->json($cat);
    }

    public function destroy(int $id)
    {
        $cat = Category::findOrFail($id);
        $cat->delete();
        return response()->json(['message' => 'deleted']);
    }
}
