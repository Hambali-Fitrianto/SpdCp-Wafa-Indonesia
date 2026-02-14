<?php

use App\Models\ActivityLog;

if (!function_exists('logActivity')) {

    function logActivity(string $action, string $description): void
    {
        try {

            $user = auth()->user();

            ActivityLog::create([
                'user_id'   => $user?->id,
                'user_name' => $user?->name ?? $user?->email ?? 'Guest',
                'action'    => $action,
                'description'=> $description,
                'ip_address'=> request()->ip(),
            ]);

        } catch (\Throwable $e) {
            logger()->error('Activity Log Error: '.$e->getMessage());
        }
    }
}