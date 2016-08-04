module.exports = function() {
    var client = './src/client/';
    var clientApp = client + 'app/';
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
        client: client,
        index: 'index.html',
        js:[],
        less: client + 'styles/styles.less',
     };
    return config;
};