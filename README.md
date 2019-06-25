# Week5Tuesday-Journal

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
| ...                                                 |                             |                                 |
|                                                     |                             |                                 |
| "scripts": {                                        |                             |                                 |
|     "build": "webpack"                              |                             |                                 |
|  },                                                 |                             |                                 |
| ...                                                 |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (configure webpack by making webpack.config.js)     |                             |                                 |
| const path = require('path');                       |                             |                                 |
|                                                     |                             |                                 |
| module.exports = {                                  |                             |                                 |
|  entry: './src/main.js',                            |                             |                                 |
|  output: {                                          |                             |                                 |
|    filename: 'bundle.js',                           |                             |                                 |
|    path: path.resolve(__dirname, 'dist')            |                             |                                 |
|  }                                                  |                             |                                 |
| };                                                  |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (making directory for coding itself)                |                             |                                 |
| mkdir dist src                                      |                             |                                 |
| touch dist/index.html src/main.js src/journal.js    |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (do something in index.html under dist dir)         |                             |                                 |
| ....                                                |                             |                                 |
| ....Even though it is not working in this stage, just write it and use it for entire setup for webpack  ||          |
| ....                                                |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (do something in journal.js under src dir)          |                             |                                 |
| ....                                                |                             |                                 |
| ....Even though it is not working in this stage, just write it and use it for entire setup for webpack    ||        |
| ....                                                |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (do something in main.js under src dir)             |                             |                                 |
| ....                                                |                             |                                 |
| ....Even though it is not working in this stage, just write it and use it for entire setup for webpack    ||        |
| ....                                                |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (bundling code in root dir)                         |                             |                                 |
| npm run build                                       |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (add a line to .gitignore for excluding the dist folder) |                        |                                 |
|                                                     |                             |                                 |
| .gitignore --->                                     |                             |                                 |
| node_modules/                                       |                             |                                 |
| .DS_Store                                           |                             |                                 |
| dist/                                               |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (We need a bundle our css files, so we'll install style-loader)                   |                                 |
|                                                     |                             |                                 |
| npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev                     |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Update webpack.config.js)                          |                             |                                 |    
|                                                     |                             |                                 |  
| const path = require('path');                       |                             |                                 |    
|                                                     |                             |                                 |  
| module.exports = {                                  |                             |                                 |                      
|   entry: './src/main.js',                           |                             |                                 |                            
|   output: {                                         |                             |                                 |              
|     filename: 'bundle.js',                          |                             |                                 |                              
|     path: path.resolve(__dirname, 'dist')           |                             |                                 |                                            
|   },                                                |                             |                                 |        
|   module: {                                         |                             |                                 |              
|     rules: [                                        |                             |                                 |                
|       {                                             |                             |                                 |          
|         test: /\.css$/,                             |                             |                                 |                          
|         use: [                                      |                             |                                 |                  
|           'style-loader',                           |                             |                                 |                            
|           'css-loader'                              |                             |                                 |                          
|         ]                                           |                             |                                 |            
|       }                                             |                             |                                 |          
|     ]                                               |                             |                                 |        
|   }                                                 |                             |                                 |      
| };                                                  |                             |                                 |      
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Add css style or making image folder under src directory, blah blah blah)|       |                                 |
|                                                     |                             |                                 |
| src/styles.css                                      |                             |                                 |
| body {                                              |                             |                                 |
|   background-color: #7FDBFF;                        |                             |                                 |
| }                                                   |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now we import css into our main.js (user-interface file) file under src directory.) | |                            |
| src/main.js -->                                     |                             |                                 |
| import './styles.css';                              |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (It's time to $ npm run build. Now if we refresh the browser, we'll see our new CSS rule has been applied.) | |     |    
| npm run build                                       |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now, it is step for plugin for html and you need to install html webpack)        |                                 |
| npm install html-webpack-plugin@3.0.6 --save-dev    |                             |                                 |
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Before we install the plugin, let's move our index.html file from the dist folder to the src folder.) | |          |
| (From now on, we'll let webpack handle bundling our HTML and outputting it to dist.) | |                            |                 
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Let's also update webpack.config.js:)              |                             |                                 |
|                                                     |                             |                                 |
| const path = require('path');                       |                             |                                 |
| const HtmlWebpackPlugin = require('html-webpack-plugin');   <------------------ | |                                 |
|                                                     |                             |                                 |
| module.exports = {                                  |                             |                                 |
|   entry: './src/main.js',                           |                             |                                 |
|   output: {                                         |                             |                                 |
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
| (Now we will add eslint and eslint-loader, which allows us to use the linter with webpack.)
|
| npm install eslint@4.18.2 --save-dev
| npm install eslint-loader@2.0.0 --save-dev
|
| (Now we update the webpack.config.js)
|
|module.exports = {
|   ...
|   module: {
|     rules: [
|       {
|         test: /\.css$/,
|         use: [
|           'style-loader',
|           'css-loader'
|         ]
|       },                  <------------add this comma!
|       {                             <--------add these
|         test: /\.js$/,              <--------add these
|         exclude: /node_modules/,    <--------add these
|         loader: "eslint-loader"     <--------add these
|       }                             <--------add these
|     ]
|   }
| };
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Now make a .eslintrc file in the root directory of the project and add this code.)
|
| {
|     "parserOptions": {
|         "ecmaVersion": 6,
|         "sourceType": "module"
|     },
|     "extends": "eslint:recommended",
|     "env": {
|       "es6": true,
|       "browser": true,
|       "jquery": true
|     },
|     "rules": {
|         "semi": 1,
|         "indent": ["warn", 2],
|         "no-console": "warn",
|         "no-debugger": "warn"
|     }
| }
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| npm run build
| (if you have any errors for undefined variables, comment them out if necessary, until fixed.)
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (now let's change the script in our package.json file.)
|
| "scripts": {
|    "build": "webpack --mode development",
|    "start": "npm run build; webpack-dev-server --open --mode development", <---add comma
|    "lint": "eslint src/*.js"                <----------------------new line
|  },
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| npm run lint
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |

| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| Readme for actual coding today ...... |||
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
|

### spec
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (install jQuery for development & Production)
| npm install jquery --save
| (Don't forget to remove the scripts tag for jQuery from index.html)
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Make sure you have jQuery and Popper.js installed properly first before installing Bootstrap.)
| npm install popper.js --save
| npm install bootstrap --save
| (You will see these lines in package.json --->
| ...
|  "dependencies": {
|    "bootstrap": "^4.0.0",
|    "jquery": "^3.3.1",
|    "popper.js": "^1.14.0"
|  })
| ...
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (In main.js, we add these two lines)
| import 'bootstrap';
| import 'bootstrap/dist/css/bootstrap.min.css';
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (installing Jasmine ....)
| npm install jasmine-core@2.99.0 --save-dev
| npm install jasmine@3.1.0 --save-dev
| (Next, we'll initialize Jasmine:)
| ./node_modules/.bin/jasmine init
| (In package.json, add this line but don't forget the comma )
| ...
| "scripts": {
| "lint": "eslint src/*.js", <-------- add comma before "test": "jasmine"  
| "test": "jasmine"
| }
| ....
| (run test command for jasmine ...)
| npm test
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |

 ### spec
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (installing Karma and don't forget to do npm install before doing these steps.)
| npm install karma@2.0.0 --save-dev
| npm install karma-jasmine@1.1.1 --save-dev
| npm install karma-chrome-launcher@2.2.0 --save-dev
| npm install karma-cli@1.0.1 -g
| npm install karma-cli@1.0.1 --save-dev
| npm install karma-webpack@2.0.13 --save-dev
| npm install karma-jquery@0.2.2 --save-dev
| npm install karma-jasmine-html-reporter@0.2.2 --save-dev
| npm install karma-sourcemap-loader@0.3.7 --save-dev
| karma init
| (You’ll be prompted to answer a series of questions. Go ahead and hit Enter until the prompts are finished. If you receive |  bash error after running this command, this could be because your machine doesn't recognize the karma command.
| Double-check that you've successfully installed Karma CLI globally with $ npm install -g karma-cli, as mentioned above.
| You may need to quit and re-start your Terminal.)
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (Configuring Karma ---> karma.conf.js in home directory.)
| const webpackConfig = require('./webpack.config.js');
|
| module.exports = function(config) {
|  config.set({
|    basePath: '',
|    frameworks: ['jquery-3.2.1', 'jasmine'],
|    files: [
|      'src/*.js',
|      'spec/*spec.js'
|    ],
|    webpack: webpackConfig,
|    exclude: [
|    ],
|    preprocessors: {
|      'src/*.js': ['webpack', 'sourcemap'],
|      'spec/*spec.js': ['webpack', 'sourcemap']
|    },
|    plugins: [
|      'karma-jquery',
|      'karma-webpack',
|      'karma-jasmine',
|      'karma-chrome-launcher',
|      'karma-jasmine-html-reporter',
|      'karma-sourcemap-loader'
|    ],
|    reporters: ['progress', 'kjhtml'],
|    port: 9876,
|    colors: true,
|    logLevel: config.LOG_INFO,
|    autoWatch: true,
|    browsers: ['Chrome'],
|    singleRun: false,
|    concurrency: Infinity
|  })
| }
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (add test line in package.json)
| ----> package.json
| ...
|   "scripts": {
|     "test": "./node_modules/karma/bin/karma start karma.conf.js"  <------  "test": "jasmine" // repalce jasmine!
|   },
| ...
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
| (modify webpack.config.js for karma)
|          ...
|          exclude: [                  <-------------
|            /node_modules/,           <-------------
|            /spec/                    <------------- add these line!
|          ],                          <------------- don't forget comma!
|          ...
| :-------------------------------------------------- | :-------------------------- | :------------------------------ |
|           













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
