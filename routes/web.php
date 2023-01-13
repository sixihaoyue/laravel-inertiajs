<?php

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
Route::namespace('Web')->group(function () {
    Route::get('/', function () {
        return view('welcome');
    });
    Route::post('cart/add')->uses('CartController@add');
    Route::get('cart/show')->uses('CartController@show')->name('cart.show');
    Route::get('cart/clear')->uses('CartController@clear');

    Route::get('user/info')->uses('UserController@info');
    Route::get('user/show')->uses('UserController@show');
});

