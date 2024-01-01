<?php

use App\Http\Controllers\BookmarksController;
use App\Http\Controllers\TripsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoomsController;
use App\Http\Controllers\LocationsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});


//location APIs
Route::controller(LocationsController::class)->group(function () {
    Route::get('/locations', 'displayAll'); 
    Route::post('/locations', 'createLocation'); 
    Route::put('/locations/{id}', 'updateLocation');
    Route::get('/locations/{id}', 'displayById'); 
    Route::delete('/locations/{id}', 'deleteLocation'); 
});

Route::controller(RoomsController::class)->group(function () {
    Route::get('/rooms', 'displayAllRooms'); 
    Route::get('/rooms/{id}', 'displayById');
    Route::post('/rooms', 'createRoom'); 
});

Route::controller(TripsController::class)->group(function () {
    Route::post('/trips', 'createTrip');
    Route::get('/trips', 'displayAllTrips');
    Route::get('/trips/{id}', 'displayById' );
    Route::put('/trips/{id}', 'updateTrip');
    Route::delete('trips/{id}', 'deleteTrip');
});

Route::controller(BookmarksController::class)->group(function (){
    Route::post('/bookmarks' , 'createBookmark');
    Route::get('/bookmarks' , 'displayAllBookmarks');
    Route::get('/bookmarks/{id}' , 'displayById');
    Route::delete('/bookmarks/{id}', 'deleteBookmark');
});