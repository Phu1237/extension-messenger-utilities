let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-copy-watched');
require('laravel-mix-clean');

/**
 * Options
 */
// Disable mix-manifest.json
Mix.manifest.refresh = _ => void 0;
// Mix options
mix.options({
    processCssUrls: false
});
// Clean folder before build
mix.clean({
    cleanOnceBeforeBuildPatterns: [
        'dist/**/*'
    ]
});

/**
 * Build extension to dist folder
 * 
 * @param {String} folder 
 * @param {String} externalManifestName 
 */
function build(folder, externalManifestName = '') {
    distFolder = 'dist/' + folder;
    srcFolder = distFolder + '/src';
    // copy icons folder
    mix.copyDirectoryWatched('source/icons', distFolder + '/icons', {
        base: 'source/icons'
    });
    // core
    mix.js('source/background.js', distFolder);
    mix.copy(`source/manifest${externalManifestName}.json`, distFolder + '/manifest.json'); // ex: manifest-opera.json
    // html
    mix.copy([
        'source/src/popup.html',
        'source/src/options.html'
    ], srcFolder);
    mix.copy('dist/app.css', srcFolder + '/app.css');
    // js
    mix.js('source/src/content.js', srcFolder);
    mix.js('source/src/popup.js', srcFolder);
    mix.js('source/src/options.js', srcFolder);
}

/**
 * Compile
 */
// always run
mix.sass('source/src/styles/app.scss', 'dist/app.css')
.options({
    postCss: [
        tailwindcss('tailwind.config.js'),
        require('autoprefixer')
    ]
});

// sass
if (!mix.inProduction()) {
    build('chromium');
    build('opera', '-opera')
}

if (mix.inProduction()) {
    // chromium compile
    build('chromium')

    // copy to opera folder
    mix.copy('dist/chromium/', 'dist/opera/');
    mix.copy('source/manifest-opera.json', 'dist/opera/manifest.json');
}
