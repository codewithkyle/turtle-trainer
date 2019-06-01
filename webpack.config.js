const path = require('path');
const glob = require("glob");
const fs = require('fs');
const rimraf = require("rimraf");
const TerserPlugin = require('terser-webpack-plugin');

// Remove old scripts
if(fs.existsSync('./docs/assets/scripts')){
    rimraf.sync('./docs/assets/scripts');
}

fs.mkdirSync('./docs/assets/scripts');

const entries = {};

// Get the entries
const entryFiles = glob.sync('./_compiled/**/*.js');
if(entryFiles.length){
    for(let i = 0; i < entryFiles.length; i++){
        const name = entryFiles[i].match(/[ \w-]+?(?=\.)/)[0].toLowerCase();
        entries[name] = entryFiles[i];
    }
}else{
    console.log('Missing JS files');
    return;
}

// Bundle modules
module.exports = {
    mode: (process.env.NODE_ENV === 'production') ? 'production' : 'none',
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './docs/assets/scripts')
    },
    resolve:{
        modules:[
            './utils/scripts',
            './node_modules'
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          name: 'globals',
          maxInitialRequests: Infinity,
          minSize: 0
        },
        minimizer: [new TerserPlugin({
            terserOptions:{
                ecma: 5,
                mangle: false,
                output: {
                    beautify: false,
                    comments: false
                }
            }
        })]
    }
};
