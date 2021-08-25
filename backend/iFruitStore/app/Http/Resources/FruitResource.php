<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FruitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'color' => $this->color,
            'size_id' => $this->size_id,
            'size_desc' => $this->size->description
        ];
    }
}
