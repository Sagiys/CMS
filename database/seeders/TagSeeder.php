<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    public function run()
    {
        Tag::create([
            'as_category' => true,
            'name' => 'Backend',
            'slug' => 'backend'
        ]);
        Tag::create([
            'as_category' => true,
            'name' => 'Frontend',
            'slug' => 'frontend'
        ]);
        Tag::create([
            'as_category' => true,
            'name' => 'Other',
            'slug' => 'other'
        ]);

        $tags = ['Workflow', 'PHPStorm', 'Laravel', 'PHP', 'VueJS', 'ReactJS', 'Javascript', 'Operating System', 'Performance', 'Debugging', 'Bash', 'Tips and Tricks'];

        foreach ($tags as $tag) {
            Tag::create([
                'name' => $tag,
                'slug' => \Str::slug($tag)
            ]);
        }
    }
}
