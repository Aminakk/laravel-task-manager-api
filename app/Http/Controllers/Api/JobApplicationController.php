<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JobApplication;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    public function index(Request $request)
    {
        $query = JobApplication::where('user_id', auth()->id());

        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('company', 'like', "%{$request->search}%")
                    ->orWhere('role', 'like', "%{$request->search}%");
            });
        }

        if ($request->status) {
            $query->where('status', $request->status);
        }

        if ($request->from_date) {
            $query->whereDate('applied_date', '>=', $request->from_date);
        }

        if ($request->to_date) {
            $query->whereDate('applied_date', '<=', $request->to_date);
        }

        $jobs = $query->latest()->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $jobs
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'company' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'status' => 'required|string'
        ]);

        $job = JobApplication::create([
            'user_id' => auth()->id(),
            'company' => $request->company,
            'role' => $request->role,
            'location' => $request->location,
            'status' => $request->status,
            'salary' => $request->salary,
            'applied_date' => $request->applied_date,
            'follow_up_date' => $request->follow_up_date,
            'notes' => $request->notes
        ]);

        return response()->json([
            'success' => true,
            'data' => $job
        ]);
    }

    public function show($id)
    {
        $job = JobApplication::where('user_id', auth()->id())
            ->findOrFail($id);

        return response()->json(['success' => true, 'data' => $job]);
    }

    public function update(Request $request, $id)
    {
        $job = JobApplication::where('user_id', auth()->id())
            ->findOrFail($id);

        $request->validate([
            'company' => 'sometimes|string',
            'role' => 'sometimes|string',
            'status' => 'sometimes|string'
        ]);

        $job->update($request->only([
            'company',
            'role',
            'location',
            'status',
            'salary',
            'applied_date',
            'follow_up_date',
            'notes'
        ]));

        return response()->json(['success' => true, 'data' => $job]);
    }

    public function destroy($id)
    {
        JobApplication::where('user_id', auth()->id())
            ->findOrFail($id)
            ->delete();

        return response()->json(['success' => true, 'message' => 'Job deleted successfully']);
    }

}
