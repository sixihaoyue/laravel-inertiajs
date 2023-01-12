<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TestController extends Controller
{
    public function test()
    {
        return Inertia::render('test/index', ['test' => 'aaa']);
    }

    public function test2()
    {
        return Inertia::render('test2/index', ['test' => 'aaa']);
    }
}
