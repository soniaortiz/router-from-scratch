module.exports={
    entry: './naive-router/tsx/app.tsx',
    
    output: {
        filename: 'bundle.js'
    },

    devtool: '#inline-source-map',
    
    module:{
        rules:[
            {test:/\.tsx?$/, loader:'ts-loader' }
        ]
    },
    resolve:{
        extensions: ['.tsx', '.jsx', '.ts', '.js', '.css']
    }
}