<?php

namespace App\Observers;

use App\Models\Lead;
use Illuminate\Support\Facades\Auth;

class LeadObserver
{
    /*
    |--------------------------------------------------------------------------
    | CREATED
    |--------------------------------------------------------------------------
    */
    public function created(Lead $lead): void
    {
        if (!Auth::check()) return;

        logActivity(
            'CREATE LEAD',
            "Menambahkan Lead:
Nama: {$lead->name}
Email: {$lead->email}
WA: {$lead->whatsapp}
Instansi: {$lead->institution}"
        );
    }

    /*
    |--------------------------------------------------------------------------
    | UPDATING
    |--------------------------------------------------------------------------
    */
    public function updating(Lead $lead): void
    {
        if (!Auth::check()) return;

        $changes = [];

        foreach ($lead->getDirty() as $field => $newValue) {

            if ($field === 'updated_at') continue;

            $oldValue = $lead->getOriginal($field);

            $changes[] =
                ucfirst($field).": \"{$oldValue}\" → \"{$newValue}\"";
        }

        if ($changes) {
            logActivity(
                'UPDATE LEAD',
                "Mengubah Lead ID #{$lead->id}:\n".implode("\n",$changes)
            );
        }
    }

    /*
    |--------------------------------------------------------------------------
    | DELETING
    |--------------------------------------------------------------------------
    */
    public function deleting(Lead $lead): void
    {
        if (!Auth::check()) return;

        logActivity(
            'DELETE LEAD',
            "Menghapus Lead:
Nama: {$lead->name}
Email: {$lead->email}
Instansi: {$lead->institution}"
        );
    }
}