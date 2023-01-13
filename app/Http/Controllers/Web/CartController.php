<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class CartController extends Controller
{
    public function add(Request $request)
    {
        $request->validate([
            'id' => ['required', 'max:50'],
            // 'name' => ['required', 'max:50'],
        ]);
        $cartList = $request->session()->get('CartList', []);
        $cartList[] = $request->post('id');
        $request->session()->put('CartList', $cartList);
        return Redirect::route('cart.show');
    }

    public function clear(Request $request)
    {
        $request->session()->put('CartList', []);
        return Redirect::route('cart.show');
    }

    public function show(Request $request)
    {
        return Inertia::render('cart/show', ['cartList' => $request->session()->get('CartList', [])]);
    }

}
