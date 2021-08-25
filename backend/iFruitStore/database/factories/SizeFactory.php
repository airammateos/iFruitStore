<?php

namespace Database\Factories;

use App\Models\Size;
use Illuminate\Database\Eloquent\Factories\Factory;

class SizeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Size::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $description = ['Pequeño_test', 'Mediano_test', 'Grande_test'];
        return [
            'description' => $description[rand(0, 2)],
        ];
    }
}
