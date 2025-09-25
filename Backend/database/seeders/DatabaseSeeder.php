<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\City;
use App\Models\Category;
use App\Models\BoardingHouse;
use App\Models\Room;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Sample base data
        $cities = collect(['Bandung', 'Jakarta'])->map(function ($name) {
            return City::firstOrCreate([
                'slug' => Str::slug($name),
            ], [
                'name' => $name,
            ]);
        });

        $categories = collect(['Campur', 'Putra', 'Putri'])->map(function ($name) {
            return Category::firstOrCreate([
                'slug' => Str::slug($name),
            ], [
                'name' => $name,
            ]);
        });

        // Create a few boarding houses with rooms
        foreach ([
            ['name' => 'Kos Nyaman 1', 'city' => 'Bandung', 'category' => 'Campur', 'price' => 1500000],
            ['name' => 'Kos Populer 2', 'city' => 'Jakarta', 'category' => 'Putri', 'price' => 2000000],
        ] as $bh) {
            $city = $cities->firstWhere('name', $bh['city']);
            $cat = $categories->firstWhere('name', $bh['category']);
            $boarding = BoardingHouse::firstOrCreate([
                'slug' => Str::slug($bh['name']),
            ], [
                'name' => $bh['name'],
                'city_id' => $city->id,
                'category_id' => $cat->id,
                'price' => $bh['price'],
                'description' => 'Kos nyaman dengan fasilitas lengkap.',
            ]);

            foreach (['Kamar 1', 'Kamar 2', 'Kamar 3'] as $rname) {
                Room::firstOrCreate([
                    'boarding_house_id' => $boarding->id,
                    'name' => $rname,
                ], [
                    'status' => 'Tersedia',
                    'price' => $bh['price'],
                ]);
            }
        }
    }
}
