module.exports = {
    context: __dirname,
    entry: [
        './src/index'
    ],
    output: {
        path: __dirname,
        filename: 'index.js',
        sourceMapFilename: 'index.js.map'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['','.ts','.js','.json']
    }
};

