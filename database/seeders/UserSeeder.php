<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'email' => 'admin@admin.com',
            'first_name' => 'Admin',
            'last_name' => 'Adam',
            'password' => 'zaq1@WSX'
        ]);
    }
}
