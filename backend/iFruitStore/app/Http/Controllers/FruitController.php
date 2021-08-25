<?php

namespace App\Http\Controllers;

use App\Http\Resources\FruitResource;
use App\Models\Fruit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FruitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            return FruitResource::collection(
                Fruit::where([
                    ["name", "LIKE", "%{$request->filter}%"]
                ])
                ->orderBy("name")
                ->get()
            );
        } catch (\Throwable $th) {
            abort(500, $th->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            Fruit::create($request->all());
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();
            abort(500, $th->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Fruit  $fruit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Fruit $fruit)
    {
        DB::beginTransaction();
        try {
            $fruit = Fruit::findOrFail($request->id);
            $fruit->update([
                "name"      => $request->name,
                "size_id"   => $request->size_id,
                "color"     => $request->color
            ]);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();
            abort(500, $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            Fruit::destroy($id);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();
            abort(500, $th->getMessage());
        }
    }
}
