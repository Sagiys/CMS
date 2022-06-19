<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function mainPage()
    {
        $tags = Tag::all();
        $backend = Post::whereHas('tags', fn($q) => $q->whereSlug('backend'))->with(['tags', 'user'])->inRandomOrder()->limit(1)->first();
        $frontend = Post::whereHas('tags', fn($q) => $q->whereSlug('frontend'))->with(['tags', 'user'])->inRandomOrder()->limit(1)->first();
        $other = Post::whereHas('tags', fn($q) => $q->whereSlug('other'))->with(['tags', 'user'])->inRandomOrder()->limit(1)->first();

        return Inertia::render('MainPage', [
            'tags' => $tags,
            'backend' => $backend,
            'frontend' => $frontend,
            'other' => $other,
        ]);
    }

    public function tagPage(Request $request, Tag $tag)
    {
        $searchPhrase = $request->input('search');
        $posts = Post::when($searchPhrase, function ($query) use ($searchPhrase) {
            $query->where('title', 'like', "%{$searchPhrase}%")->orWhere('description', 'like', "%{$searchPhrase}%")->orWhere('content', 'like', "%{$searchPhrase}%");
        })->whereHas('tags', fn($q) => $q->whereId($tag->id))->with(['tags', 'user'])->get();

        return Inertia::render('TagPage', [
            'posts' => $posts,
            'tag' => $tag
        ]);
    }

    public function searchPage(Request $request)
    {
        $searchPhrase = $request->input('search');

        $posts = Post::where('title', 'like', "%{$searchPhrase}%")->orWhere('description', 'like', "%{$searchPhrase}%")->orWhere('content', 'like', "%{$searchPhrase}%")->get();

        return Inertia::render('SearchPage', [
            'posts' => $posts
        ]);
    }

    public function randomPage()
    {
        $post = Post::inRandomOrder()->limit(1)->first();

        return Inertia::render('PostPage', [
            'post' => $post->load(['tags', 'user'])
        ]);
    }

    public function postPage(Post $post)
    {
        return Inertia::render('PostPage', [
            'post' => $post->load(['tags', 'user'])
        ]);
    }
}
