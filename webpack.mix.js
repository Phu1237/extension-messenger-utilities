let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
// require('laravel-mix-copy-watched');
require('laravel-mix-clean');

// Disable mix-manifest.json
Mix.manifest.refresh = _ => void 0;

mix.options({
    processCssUrls: false
});

mix.clean({
    cleanOnceBeforeBuildPatterns: [
        'dist/**/*'
    ]
});
// Copy
// icons folder
mix.copyDirectory('source/icons', 'dist/chromium/icons');
mix.copyDirectory('source/icons', 'dist/opera/icons');
// js files
// chromium
mix.copy([
    'source/manifest.json',
    'source/background.js'
], 'dist/chromium');
// opera
mix.copy('source/background.js', 'dist/opera');
mix.copy('source/manifest-opera.json', 'dist/opera/manifest.json');

// src folder
mix.copy([
    'source/src/popup.html',
    // 'source/src/options.html'
], 'dist/chromium/src');
mix.copy([
    'source/src/popup.html',
    // 'source/src/options.html'
], 'dist/opera/src');

// Compile
// sass
mix.sass('source/src/styles/app.scss', 'dist/chromium/src/popup.css')
.options({
    postCss: [
        tailwindcss('tailwind.config.js'),
        require('autoprefixer')
    ]
});
mix.copy('dist/chromium/src/popup.css', 'dist/opera/src');

// js
mix.copy('source/src/content.js', 'dist/chromium/src');
mix.copy('source/src/content.js', 'dist/opera/src');
mix.copy('source/src/popup.js', 'dist/chromium/src');
mix.copy('source/src/popup.js', 'dist/opera/src');
