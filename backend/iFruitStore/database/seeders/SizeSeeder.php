<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sizes')->insert([
            ['description' => 'Pequeño'],
            ['description' => 'Mediano'],
            ['description' => 'Grande']
        ]);
    }
}
