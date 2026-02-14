<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),422);
        }

        $user = User::where('email',$request->email)->first();

        if(!$user || !Hash::check($request->password,$user->password)){
            return response()->json(['message'=>'Email atau password salah'],401);
        }

        auth()->login($user);

        $token = $user->createToken('auth_token')->plainTextToken;

        logActivity(
            'LOGIN',
            "User {$user->name} ({$user->email}) berhasil login"
        );

        return response()->json([
            'token'=>$token,
            'user'=>$user
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        logActivity(
            'LOGOUT',
            "User {$user->name} ({$user->email}) logout"
        );

        $user->currentAccessToken()->delete();

        return response()->json([
            'message'=>'Logout berhasil'
        ]);
    }
}