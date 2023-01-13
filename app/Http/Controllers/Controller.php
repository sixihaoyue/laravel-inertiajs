<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /* 成功返回 */
    protected function okReturn($result = true)
    {
        return [
            'code' => 0,
            'result' => $result,
        ];
    }

    /* 错误返回 */
    protected function errorReturn($message = null, $code = -1)
    {
        return [
            'code' => $code,
            'message' => $message ?? 'Unknown error.',
        ];
    }

    /* 无权访问 */
    protected function accessDenied($message = null)
    {
        return [
            'code' => 403,
            'message' => $message ?? 'Access denied.',
        ];
    }
}
