<?php

use App\Http\Controllers\AnnouncementsController;
use App\Http\Controllers\BookmarksController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\GeneratetripController;
use App\Http\Controllers\HealthCheckController;
use App\Http\Controllers\QuestionnairesController;
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

Route::get('/health', [HealthCheckController::class, 'check']);


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::put('update/{id}', 'update');
    Route::get('/getAllUsers', 'getAllUsers');
});


Route::controller(LocationsController::class)->group(function () {
    Route::get('/locations', 'displayAll');
    Route::post('/locations', 'createLocation');
    Route::put('/locations/{id}', 'updateLocation');
    Route::get('/locations/{id}', 'displayById');
    Route::delete('/locations/{id}', 'deleteLocation');
    Route::get('/search', 'search');

});

Route::middleware(['auth'])->group(function () {
    Route::get('/rooms', [RoomsController::class, 'displayAllRooms']);
    Route::get('/rooms/{id}', [RoomsController::class, 'displayById']);
    Route::post('/rooms', [RoomsController::class, 'createRoom']);
    Route::put('/updateRoom/{id}', [RoomsController::class, 'updateRoom']);
    Route::post('/rooms/{room}/join', [RoomsController::class, 'joinRoom']);

});

Route::controller(TripsController::class)->group(function () {
    Route::post('/trips', 'createTrip');
    Route::get('/trips', 'displayAllTrips');
    Route::get('/trips/{id}', 'displayById');
    Route::put('/trips/{id}', 'updateTrip');
    Route::delete('trips/{id}', 'deleteTrip');
    Route::get('/trips/category/{category_id}', 'getTripsByCategory');

});

Route::controller(BookmarksController::class)->group(function () {
    Route::post('/bookmarks', 'createBookmark');
    Route::get('/bookmarks', 'displayAllBookmarks');
    Route::get('/bookmarks/{id}', 'displayById');
    Route::get('displayUserBookmarks', 'displayUserBookmarks');
    Route::delete('/bookmarks/{id}', 'deleteBookmark');
});


Route::controller(AnnouncementsController::class)->group(function () {
    Route::post('/announcements', 'createAnnouncement');
    Route::put('announcements/{id}', 'updateAnnouncement');
    Route::get('/announcements', 'readAnnouncements');
    Route::delete('announcements/{id}', 'deleteAnnouncement');
});

Route::controller(QuestionnairesController::class)->group(function () {
    Route::post('/postQuestionnaire', 'createQuestionnaires');
    Route::get('/readQuestionnaire/{id}', 'readQuestionnaire');
});

Route::controller(GeneratetripController::class)->group(function () {
    Route::get('/generateTripAi', 'generateTripAi');
});

Route::controller(CategoryController::class)->group(function () {
    Route::get('/categories', 'displayAllCategories');
    Route::post('/categories', 'createCategory');
    Route::put('/categories/{id}', 'updateCategory');
    Route::delete('/categories/{id}', 'deleteCategory');
});