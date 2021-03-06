const mix = require('laravel-mix');
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const publicWebpackPath = 'public/';
const publicAssetsPath = publicWebpackPath + 'assets/';

const sourcePath = 'resources/';
const sourceAssetsPath = sourcePath + 'assets';

mix.options({
    legacyNodePolyfills: false
});

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .version();

// mix.copy(sourceAssetsPath, publicAssetsPath);
