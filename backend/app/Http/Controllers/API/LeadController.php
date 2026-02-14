<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LeadController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | PUBLIC CREATE (LANDING PAGE)
    |--------------------------------------------------------------------------
    */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'whatsapp'=>'required|string|max:20',
            'email'=>'required|email|max:255',
            'institution'=>'required|string|max:255',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),422);
        }

        // observer otomatis decide log / tidak
        $lead = Lead::create($validator->validated());

        return response()->json($lead,201);
    }

    public function index()
    {
        return Lead::latest()->paginate(10);
    }

    public function show($id)
    {
        return Lead::findOrFail($id);
    }

    public function update(Request $request,$id)
    {
        $lead = Lead::findOrFail($id);

        $lead->update($request->only([
            'name','whatsapp','email','institution'
        ]));

        return response()->json($lead);
    }

    public function destroy($id)
    {
        $lead = Lead::findOrFail($id);

        $lead->delete();

        return response()->json([
            'message'=>'Lead deleted'
        ]);
    }
}