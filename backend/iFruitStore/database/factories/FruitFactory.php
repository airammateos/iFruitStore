<?php

namespace Database\Factories;

use App\Models\Fruit;
use App\Models\Size;
use Illuminate\Database\Eloquent\Factories\Factory;

class FruitFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Fruit::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //'id' => $this->faker->id(),
            'name' => $this->faker->unique()->name(),
            'color' => 'Red',
            'size_id' => Size::Factory()
        ];
    }
}
