var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var wiredep = require('wiredep').stream;


gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');
    
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('styles', ['clean-styles'], function() {
    log('Compiling Less --> CSS');
    
    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function() {
    var files = config.temp + '**/*.css';
     return clean(files);
});

gulp.task('less-watcher', function() {
    gulp.watch([config.less], ['styles']);
});

gulp.task('wiredep', function() {
    gulp.src('./src/client/app/index.html')
    .pipe(wiredep({
        bowerJson: require('./bower.json'),
        directory: './src/vendor/',
        ignorePath:'../..'}
    ))
    .pipe(gulp.dest('./'));
});

//TODO hook up gulp-inject
// after gulp is hooked up add tasks from inject and wired
gulp.task('develop', function() {
   return $.nodemon({
       script: 'app.js',
       ext: 'js html',
       env: {'NODE_ENV': 'development'}
   });
});

//
///////////////


function clean(path) {
    log('cleaning: ' + $.util.colors.blue(path));
    return  del(path);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for(var item in msg) {
            if (msg.hasOwnProperty(item)){
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    }else{
        $.util.log($.util.colors.blue(msg));
    }
}