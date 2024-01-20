<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Trip;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function displayAllCategories()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    public function createCategory(Request $request)
    {
        $validatedData = $request->validate(['category_name' => 'required|string']);
        $category = Category::create($validatedData);
        return response()->json($category, 201);
    }

    public function updateCategory(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        $validatedData = $request->validate(['category_name' => 'required|string']);
        $category->update($validatedData);
        return response()->json($category);
    }

    public function deleteCategory($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }

    public function getTripsByCategory($category_id)
    {
        $trips = Trip::whereHas('categories', function ($query) use ($category_id) {
            $query->where('category_trip.category_id', '=', $category_id);
        })->get();
    
        return response()->json($trips);
    }
    
}
