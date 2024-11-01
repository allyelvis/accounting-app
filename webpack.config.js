const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  webpack: (config, { isServer }) => {
    // Modify the existing Webpack configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname), // Alias for root directory
    };

    // Add plugins
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'), // Customize your template
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      })
    );

    // Add loaders for different file types
    config.module.rules.push(
      // TypeScript loader
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSS and SCSS loaders
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // CSS loader
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      // Image loader
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
      // Fonts loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/',
            },
          },
        ],
      }
    );

    // Optimize CSS
    if (!isServer) {
      config.optimization.minimizer.push(
        new CssMinimizerPlugin()
      );
    }

    return config;
  },

  // Next.js specific configuration options
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add allowed image domains here
  },
  // Custom Webpack entry and output settings can go here if needed
};
