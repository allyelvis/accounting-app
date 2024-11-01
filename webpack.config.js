// webpack.config.js
const path = require('path');

module.exports = {
  // Specify the mode (development or production)
  mode: 'development', // or 'production'

  // Entry point for your application
  entry: './src/index.js', // Adjust according to your entry point

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },

  // Loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Process JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Transpile ES6 and React
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      // Add more loaders as needed (e.g., for images, fonts, etc.)
    ],
  },

  // Plugins configuration
  plugins: [
    // Add any required plugins here (e.g., HtmlWebpackPlugin)
  ],

  // Development configuration
  devtool: 'source-map', // Enable source maps for debugging

  // Development server configuration
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Serve content from this directory
    compress: true, // Enable gzip compression
    port: 3000, // Port to run the dev server
  },
};
