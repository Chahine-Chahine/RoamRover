<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller 
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

    }

    public function register(Request $request){
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'first_name' => 'required|string|min:4',
            'last_name' => 'required|string|min:4',
            'image_url' => 'nullable|string|max:255', 
            'bio' => 'nullable|string|min:20',
        ]);
    
        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'image_url' => $request->image_url, 
            'bio' => $request->bio,
        ]);
    
        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $request->validate([
            'username' => 'string|max:255|unique:users,username,' . $user->id,
            'email' => 'string|email|max:255|unique:users,email,' . $user->id,
            'first_name' => 'string|min:4',
            'last_name' => 'string|min:4',
            'image_url' => 'nullable|string|max:255',
            'bio' => 'nullable|string|min:20',
        ]);
        $user->update([
        'username' => $request->username ?? $user->username,
        'email' => $request->email ?? $user->email,
        'first_name' => $request->first_name ?? $user->first_name,
        'last_name' => $request->last_name ?? $user->last_name,
        'image_url' => $request->image_url ?? $user->image_url,
        'bio' => $request->bio ?? $user->bio,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Profile updated successfully',
            'user' => $user
        ]);
    }

}