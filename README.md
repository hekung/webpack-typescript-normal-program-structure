# webpack-typescript-normal-program-structure

A program structure by webpack,typescript,react
-----

Note that:
1.SplitChunksPlugin:The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk,
  so used it in webpack.common.js.
2.We can use the 'output.filename' substitutions setting to define the names of our output files. 
  webpack provides a method of templating the filenames using bracketed strings called substitutions. 
  The [contenthash] substitution will add a unique hash based on the content of an asset. 
  When the asset's content changes, [contenthash] will change as well.
3.Webpack provides an optimization feature to split runtime code into a separate chunk using the optimization.runtimeChunk option. 
  Set it to single to create a single runtime bundle for all chunks.
4.Extract third-party libraries to a separate vendor chunk as they are less likely to change than our local source code. 
  This step will allow clients to request even less from the server to stay up to date. in webpack.common.js as below:
      splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
