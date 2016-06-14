// dependencies
var gulp = require('gulp');
var install = require("gulp-install");
var gulpWebpack = require('gulp-webpack'),
    webpack = require('webpack');


// gulp task
gulp.task('install', function() {
    // gulp src: if package.json is in the file stream, run this
    gulp.src("./package.json")
    // pipe install to package.json
    .pipe(install());
})

gulp.task('webpack', function() {
    gulp.src('webpack.config.js')
        .pipe(gulpWebpack({
            entry: "./app/utils/app.js",
            output: {
                filename: 'bundle.js',
            },
            plugins: [new webpack.optimize.UglifyJsPlugin()],
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel',
                    query: {
                        // These are the specific transformations we'll be using. 
                        presets: ['react', 'es2015']
                    }
                }]
            }
        }, webpack))
        .pipe(gulp.dest('./public'));
});