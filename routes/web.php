<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(FrontendController::class)->group(function () {
    Route::get('/', 'mainPage')->name('main-page');
    Route::get('/random', 'randomPage');
    Route::get('/tag/{tag:slug}', 'tagPage')->missing(function (\Illuminate\Http\Request $request) {
        return redirect()->route('main-page');
    });
    Route::get('/szukaj', 'searchPage');
    Route::get('/post/{post:slug}', 'postPage')->missing(function (\Illuminate\Http\Request $request) {
        return redirect()->route('main-page');
    });
});
