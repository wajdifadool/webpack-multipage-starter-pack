# Webpack Starter Template for Multiple Pages

This is a webpack starter template for building web applications with multiple HTML and JavaScript files. It allows you to have separate entry points for each page, enabling you to organize your codebase efficiently.

## Features

- Supports multiple HTML pages with separate JavaScript files.
- Automatically generates HTML files and bundles JavaScript and CSS files using webpack.
- Uses Babel to transpile JavaScript files, allowing you to use modern JavaScript features.
- Includes support for CSS files with automatic vendor prefixing.
- Provides a development server with hot reloading for easy development.

## How to Use

1. Clone this repository:

2. Install dependencies:
```
npm install 
```
3. Start the development server:
```
npm run dev 
```

This will start the development server and open your default web browser. 
You can start coding your application, 
and any changes you make will be automatically reflected in the browser. (use live server)

4. Build for production:
```
npm start 
```
This will create a production-ready build of your application in the
 `dist` directory. make sure t delete the``` mode: 'development'``` in .config.json

## Configuration

- **Webpack Configuration**: The webpack configuration is set up to have multiple entry points for each page. It automatically generates HTML files for each page and bundles JavaScript and CSS files accordingly.
- **Babel Configuration**: Babel is configured to transpile JavaScript files using the `@babel/preset-env` preset.
- **MiniCssExtractPlugin**: This plugin is used to extract CSS into separate files.
