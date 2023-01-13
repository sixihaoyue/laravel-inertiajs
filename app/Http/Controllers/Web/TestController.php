<?php

namespace App\Http\Controllers\Web;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    public function test()
    {
        return Inertia::render('test/index', ['test' => 'aaa']);
    }

    public function test2(Request $request)
    {
        return Inertia::render('test2/index', ['test' => 'aaa']);
    }
}
