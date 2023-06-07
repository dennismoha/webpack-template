const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // provides us with an analytic view of what our app is made of

module.exports = {
    mode: 'development', // tells yarn run dev the mode is development

    /* method 1 */
    // entry: path.resolve(__dirname, 'src/index.js'),
    // output:{
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },

    /*alternative 2 */
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', // the name will take the bundle name in the entry key. contenthash generates a unique hash for each time we yarn run build.
        clean:true,
        assetModuleFilename: '[name][ext]' // goes hand in hand with the asset loader in the loaders
    },


    devtool:'source-map',
    devServer:{ // strictry for the dev initiated by the script npm run dev
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true
    },
    module:{
        rules:[
           {
            test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']
           },
           {
            // this is the babel loader
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
           },
           //this loader comes automatically with webpack
           {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
           }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({title:"webpack tutorial",filename:'index.html',template:'./src/template/template.html'}),
        new BundleAnalyzerPlugin()
    ]

}
