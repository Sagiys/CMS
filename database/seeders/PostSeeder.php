<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Tag;
use Faker\Factory as Faker;
use Http;
use Illuminate\Database\Seeder;
use Str;

class PostSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        $mandatoryTags = Tag::whereAsCategory(true)->get()->pluck('id');
        $nonMandatoryTags = Tag::whereAsCategory(false)->get()->pluck('id');

        foreach (range(1, 50) as $item) {
            $title = implode(' ', $faker->words(random_int(1, 5)));

            while (Post::whereTitle($title)->exists()) {
                $title = implode(' ', $faker->words(random_int(1, 5)));
            }

            $post = Post::create([
                'user_id' => 1,
                'title' => ucwords($title),
                'slug' => Str::slug($title),
                'description' => $faker->text(random_int(10, 100)),
                'content' => Http::withOptions([
                    'verify' => false
                ])->get('https://jaspervdj.be/lorem-markdownum/markdown.txt')->body()
            ]);

            $tag = $mandatoryTags->random(1)->toArray();
            $tags = $nonMandatoryTags->random(random_int(1, 4))->toArray();

            $post->tags()->sync(array_merge($tag, $tags));
        }
    }
}
