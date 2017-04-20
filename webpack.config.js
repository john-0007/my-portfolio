var path=require("path"),
    webpack=require("webpack");

module.exports={
    entry:{
        App:"./app/assets/scripts/app.js",
    },
    output:{
        path:path.resolve(__dirname,"./app/temp/scripts"),
        filename:"app.js",
        publicPath:"/script"
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ]
};