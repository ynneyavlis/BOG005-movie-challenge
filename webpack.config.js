const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename: './index.html'
})
module.exports={
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modeles/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[htmlPlugin]
};
