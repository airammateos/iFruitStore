<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\Fruit;

class FruitTest extends TestCase
{
    /**
     * Test for success
     */
    public function testUpdateSuccess() {
        $url = env("APP_URL")."/api/fruits";

        //Will return OK because expect 200
        $fruit = Fruit::factory()->create();
        $response = $this->put($url, $fruit->toArray());
        $response->assertStatus(200);
    }

    /**
     * Test for failure
     */
    public function testUpdateFailure() {
        $url = env("APP_URL")."/api/fruits";

        //Will return OK because expect 500
        $response = $this->put($url, []);
        $response->assertStatus(500);
    }
}
