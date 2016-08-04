module.exports = function() {
    var client = './src';
    var config = {
        temp: './dist/styles',
        /**
        *Files paths
        */
        alljs: [
            './src/**/*.js',
            '!./src/vendor/**', 
            './*.js'
        ],
        index: 'index.html',
        js:[],
        less:  'styles/styles.less',
     };
    return config;
};