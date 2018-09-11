const path = require("path");

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: {
    app: `${SRC_DIR}/index.jsx`,
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["react", "es2015"],
              plugins: ["transform-object-rest-spread"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './client/dist'
  }
};

// module.exports = {
//   entry: './client/src/index.jsx',
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/client/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './client/dist'
//   }
// };
