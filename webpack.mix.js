let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
// require('laravel-mix-purgecss');

// Disable mix-manifest.json
Mix.manifest.refresh = _ => void 0;

mix.options({
    processCssUrls: false
});

// Copy
mix.copyDirectory('source/icons', 'dist/icons');
mix.copy([
    'source/manifest.json',
    'source/background.js'
], 'dist');
mix.copy([
    'source/src/popup.html',
    // 'source/src/options.html'
], 'dist/src');

// Compile
// sass
mix.sass('source/src/styles/app.scss', 'dist/src/popup.css')
.options({
    postCss: [
        tailwindcss('tailwind.config.js'),
        require('autoprefixer')
    ]
});
// .purgeCss({
//     content: [
//         'source/src/**/*.js',
//         'source/src/**/*.html',
//     ]
// });
// mix.postCss('source/src/styles/tailwindcss.css', 'dist/src', [
//     require('autoprefixer'),
//     require('tailwindcss'),
// ]);

// js
mix.copy('source/src/content.js', 'dist/src');
mix.copy('source/src/popup.js', 'dist/src');