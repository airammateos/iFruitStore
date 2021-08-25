<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FruitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fruits')->insert([
            [
                'name'    => 'Plátano',
                'size_id' => 2,
                'color'   => 'Amarillo'
            ],
            [
                'name'    => 'Coco',
                'size_id' => 2,
                'color'   => 'Marrón'
            ],
            [
                'name'    => 'Kiwi',
                'size_id' => 1,
                'color'   => 'Verde'
            ],
            [
                'name'    => 'Papaya',
                'size_id' => 3,
                'color'   => 'Amarillo'
            ]
        ]);
    }
}
