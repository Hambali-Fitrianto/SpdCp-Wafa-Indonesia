<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use Illuminate\Http\Request;

class ActivityLogController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | LIST ACTIVITY LOGS
    |--------------------------------------------------------------------------
    */
    public function index(Request $request)
    {
        $query = ActivityLog::query();

        // 🔎 Search by user name
        if ($request->user_name) {
            $query->where('user_name', 'like', '%' . $request->user_name . '%');
        }

        // 🔎 Filter action
        if ($request->action) {
            $query->where('action', $request->action);
        }

        // 🔎 Date filter
        if ($request->date) {
            $query->whereDate('created_at', $request->date);
        }

        $logs = $query
            ->latest()
            ->paginate(10);

        return response()->json($logs);
    }

    /*
    |--------------------------------------------------------------------------
    | DETAIL LOG
    |--------------------------------------------------------------------------
    */
    public function show($id)
    {
        $log = ActivityLog::findOrFail($id);

        return response()->json($log);
    }
}