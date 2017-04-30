var path=require("path"),
    webpack=require("webpack");

module.exports={
    entry:{
        App:"./app/assets/scripts/app.js",
        Vendor:"./app/assets/scripts/vendor.js"
    },
    output:{
        path:path.resolve(__dirname,"./app/temp/scripts"),
        filename:"[name].js",
        publicPath:"/script"
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ]
};