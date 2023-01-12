<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TestController extends Controller
{
    public function test()
    {
        return Inertia::render('Test/Index', ['test' => 'aaa']);
    }

    public function test2()
    {
        return Inertia::render('Test2/Index', ['test' => 'aaa']);
    }
}
