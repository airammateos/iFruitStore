<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SizeController;
use App\Http\Controllers\FruitController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('sizes', SizeController::class)->only([
    'index'
]);

Route::get('fruits', [FruitController::class, 'index']);
Route::post('fruits', [FruitController::class, 'store']);
Route::put('fruits', [FruitController::class, 'update']);
Route::delete('fruits/{id}', [FruitController::class, 'destroy']);

// declaring methods in this way will proceed to return 
// a "method not allowed exception" for PUT
// Route::apiResource('fruits', FruitController::class)->only([
    // 'index', 'store', 'update', 'destroy'
// ]);
