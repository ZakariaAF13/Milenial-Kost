<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function check(Request $request)
    {
        $code = $request->query('code');
        if (!$code) {
            return response()->json(['message' => 'code is required'], 422);
        }
        return response()->json([
            'code' => $code,
            'found' => false,
            'data' => null,
        ]);
    }

    public function checkPost(Request $request)
    {
        $validated = $request->validate([
            'code' => ['required', 'string', 'max:64'],
        ]);
        return response()->json([
            'code' => $validated['code'],
            'found' => false,
            'data' => null,
        ]);
    }
}