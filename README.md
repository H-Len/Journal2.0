# Week5Monday-Journal

#### My Journal website. 6/24/2019

#### By **Tae Lee & Daniel Hongel**

## Description

practice of webpack configuration with new website creation.

### Specs
| Spec.                                               | Input                       | Output                          |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (setup webpack first rather than code writing it!)  |                             |                                 |
| npm init -y                                         | to make package.json        | package.json in home directory  |
| (install webpack development dependency)            |                             |                                 |
| (stick to the version pinning and do not fix!)      |                             |                                 |
| npm install webpack@4.19.1 --save-exact -D          | enter                       | node_modules dir in home dir    |
| npm install webpack-cli@2.0.9 --save-dev            | enter                       | some more files in node_modules |
|                                                     | check updated package.json  | see devDependencies ~           |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (need more advanced git practice for real world)    |                             |                                 |
| (making .gitignore file in home dir)                | touch .gitignore in home dir| .gitignore in home directory    |
| .gitignore -->                                      |                             |                                 |
| node_modules/                                       |                             |                                 |
| .DS_Store                                           |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (modify package.json)                               |                             |                                 |    
| ...
|
| "scripts": {
|     "build": "webpack"
|  },
| ...
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (configure webpack by making webpack.config.js)     |
| const path = require('path');
|
| module.exports = {
|  entry: './src/main.js',
|  output: {
|    filename: 'bundle.js',
|    path: path.resolve(__dirname, 'dist')
|  }
| };
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (making directory for coding itself)        
| mkdir dist src
| touch dist/index.html src/main.js src/journal.js
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (do something in index.html under dist dir)
| ....
| ....Even though it is not working in this stage, just write it and use it for entire setup for webpack
| ....
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (do something in journal.js under src dir)
| ....
| ....Even though it is not working in this stage, just write it and use it for entire setup for webpack
| ....
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (do something in main.js under src dir)
| ....
| ....Even though it is not working in this stage, just write it and use it for entire setup for webpack
| ....
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (bundling code in root dir)
| npm run build
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (add a line to .gitignore for excluding the dist folder)
|
| .gitignore --->
| node_modules/
| .DS_Store
| dist/
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (We need a bundle our css files, so we'll install style-loader)
|
| npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Update webpack.config.js)
|
| const path = require('path');
|
| module.exports = {
|   entry: './src/main.js',
|   output: {
|     filename: 'bundle.js',
|     path: path.resolve(__dirname, 'dist')
|   },
|   module: {
|     rules: [
|       {
|         test: /\.css$/,
|         use: [
|           'style-loader',
|           'css-loader'
|         ]
|       }
|     ]
|   }
| };
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Add css style or making image folder under src directory, blah blah blah)
|
| src/styles.css
| body {
|   background-color: #7FDBFF;
| }
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now we import css into our main.js (user-interface file) file under src directory.)
| src/main.js -->
| import './styles.css';
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (It's time to $ npm run build. Now if we refresh the browser, we'll see our new CSS rule has been applied.)
| npm run build                                       |             
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now, it is step for plugin for html and you need to install html webpack)        |                                 |
| npm install html-webpack-plugin@3.0.6 --save-dev
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Before we install the plugin, let's move our index.html file from the dist folder to the src folder.)
| (From now on, we'll let webpack handle bundling our HTML and outputting it to dist.)
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Let's also update webpack.config.js:)              |                             |                                 |
|
| const path = require('path');
| const HtmlWebpackPlugin = require('html-webpack-plugin');   <-------------------
|
| module.exports = {
|   entry: './src/main.js',
|   output: {
|     filename: 'bundle.js',
|     path: path.resolve(__dirname, 'dist')
|   },
|   plugins: [
|     new HtmlWebpackPlugin({           <---------------------
|       title: 'Ping Pong',
|       template: './src/index.html',
|       inject: 'body'
|     })
|   ],
|   module: {
|     rules: [
|       {
|         test: /\.css$/,
|         use: [
|           'style-loader',
|           'css-loader'
|         ]
|       }
|     ]
|   }
| };
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Before we $ npm run build,  remove the <script> tag currently linking our bundled JavaScript from index.html)
| (remove this line only: <script type="text/javascript" src="bundle.js"></script>)
| npm run build  |   |   It create index.html again in dist dir. |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (clean up clutterd dist dir....)
| npm install clean-webpack-plugin@0.1.18 --save-dev
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Then simply add the plugin to our configuration file:)
| ...
|
| const CleanWebpackPlugin = require('clean-webpack-plugin');   <---------------
|
| module.exports = {
|
|   ...
|
|   plugins: [
|     new CleanWebpackPlugin(['dist']),   // new line <---------------
|     new HtmlWebpackPlugin({
|       title: 'Ping Pong',
|       template: './src/index.html',
|       inject: 'body'
|     })
|   ],
|
|   ...
|
| }
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| npm run build
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Minifying (or "Uglifying") Code)
| npm install uglifyjs-webpack-plugin@1.2.2 --save-dev
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Next, we need to make the plugin available to our application: in webpack.config.js.....)
| ...
| const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  // new line     <--------------------
|
| module.exports = {
|   ...
|   plugins: [
|     new UglifyJsPlugin(),    // new line    <------------------
|     new CleanWebpackPlugin(['dist']),
|     new HtmlWebpackPlugin({
|       title: 'Ping Pong',
|       template: './src/index.html',
|       inject: 'body'
|     })
|   ],
|   ...
| }
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| npm run build
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (now we set up a live server to run our project on.)
|
| npm install webpack-dev-server@3.1.0 --save-dev
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now we update webpack.config.js)
|
| module.exports = {
|  entry: './src/main.js',
|  output: {
|    filename: 'bundle.js',
|    path: path.resolve(__dirname, 'dist')
|  }, <--------DON'T forget the comma------------
|  devtool: 'eval-source-map',  <------------------change these.
|  devServer: {                 <------------------change these.
|    contentBase: './dist'      <------------------change these.  
|  },                           <------------------change these.
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now we update webpack.config.js)
| new UglifyJsPlugin(),    ----------> new UglifyJsPlugin({ sourceMap: true }),
| npm run build | enter | nothing will happen .....
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (for package.json file,)
|   "scripts": {
|    "build": "webpack",
|    "start": "webpack-dev-server --open"
|  },
|
| npm run start | enter | it will pop out automatically new browser in your screen !!!
| This is great option for interactive development in real world situation.
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| You may need another command line prompt in your terminal ....
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (For Development and Production Modes, We can set the mode by altering the command for build in scripts:)
| package.json -->
| ...
|  "build": "webpack", ------------->  "build": "webpack --mode development",
| ...
| This next portion will allow our npm run start to also set its mode to development.
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (If you want interactive web server for coding and releasing distribution at the same time,
| do followings in package.json )
|
| "scripts": {
|    "build": "webpack --mode development",
|    "start": "npm run build; webpack-dev-server --open --mode development"   <---------------
|  },
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |



## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. Open file in a web browser such as Google Chrome.
3. add to do items
4. hit play button when ready

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)

## Support and contact details

If there are any questions, bugs or concerns, please contact taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **Tae Lee & Cord Walsh**
