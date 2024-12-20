const path = require("path");
module.exports = {
    mode: "production",
    entry: './entry.js', //入口文件,从项目根目录指定
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    output: {
        path: path.resolve(__dirname, "."), //将js文件直接打包到根目录
        filename: "script.js" //打包到script.js文件中
    },
    watch: true
}
