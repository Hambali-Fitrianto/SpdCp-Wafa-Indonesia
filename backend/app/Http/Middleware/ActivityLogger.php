<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivityLogger
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // skip login & logout (karena sudah manual log)
        if (
            Auth::check() &&
            !in_array($request->path(), [
                'api/login',
                'api/logout'
            ])
        ) {
            logActivity(
                strtoupper($request->method()) . ' ' . $request->path(),
                'Access endpoint: ' . $request->fullUrl()
            );
        }

        return $response;
    }
}