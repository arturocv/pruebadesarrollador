<?php

namespace App\Http\Controllers;

use App\Models\Hoteles;
use Illuminate\Support\Str;
use Exception;
use function Laravel\Prompts\error;
use function Ramsey\Uuid\v1;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class hotelesController extends Controller
{
    //Funcion para mostrar todos los hoteles de DB
    public function index(){
        $hoteles = Hoteles::all();

        if($hoteles->isEmpty()){
            $data = [
                'message' => 'No hay hoteles registrados',
                'status' => 404
            ];
            return response()->json($data);
        }
        return response()->json($hoteles, 200);
    }

    //Funcion para agregar hoteles a DB
    public function add (Request $request){

        $validator = Validator::make($request->all(), [
            'name'=> 'required|unique:hoteles',
            'address'=> 'required|string',
            'city'=> 'required|string',
            'phone'=> 'required|string',
            'nit'=> 'required|string',
            'admin'=> 'required|string',
            'rooms'=> 'required|integer',
            'roomsestandarcant'=> 'required|integer',
            'roomsestandaracomodacion'=> 'required|string',
            'roomsjuniorcant'=> 'required|integer',
            'roomsjunioracomodacion'=> 'required|string',
            'roomssuitecant'=> 'required|integer',
            'roomssuiteacomodacion'=> 'required|string',
        ]);


        if($validator->fails()){
            $data = [
                'message'=> 'Ingresar todos los datos',
                'errors'=>$validator->errors(),
                'status'=> 404,
            ];
            return response()->json($data);
        };

        try {
            $hotel = Hoteles::create([
                'name' => Str::lower($request->name),
                'address' => $request->address,
                'city' => $request->city,
                'phone' => $request->phone,
                'nit' => $request->nit,
                'admin' => $request->admin,
                'rooms' => $request->rooms,
                'roomsestandarcant' => $request->roomsestandarcant,
                'roomsestandaracomodacion' => $request->roomsestandaracomodacion,
                'roomsjuniorcant' => $request->roomsjuniorcant,
                'roomsjunioracomodacion' => $request->roomsjunioracomodacion,
                'roomssuitecant' => $request->roomssuitecant,
                'roomssuiteacomodacion' => $request->roomssuiteacomodacion,
            ]);

            return response()->json($hotel, 201 );

        } catch (Exception $e) {
            return response()->json('El Hotel ya existe', 500);
        }
    }

    //Funcion para mostrar la informacion de un solo hotel
    public function show(Hoteles $hoteles){
        // dd($hoteles);
        return response()->json($hoteles, 200);
    }
}
