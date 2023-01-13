<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function info(Request $request)
    {
        $user = [
            'id' => 1,
            'email' => 'xxxx@gmail.com',
            'nickname' => 'sixihaoyue',
            'carts' => $request->session()->get('CartList', []),
        ];
        return $this->okReturn([
            'user' => $user,
        ]);
    }

    public function show()
    {
        return Inertia::render('user/show', ['test' => 'aaa']);
    }
}
