# https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/

A webpack is a static module bundler and replaces the need for polyfills (helper code for browsers to interpret an application's code).

Webpacks create a dependency graph (consists of modules that your webapp needs to function as expected).  Depending on this graph a new package is created which consists of the bare minumum nuber of files required, usually a single bundle.js file, which can be plugged into the html file.

all dependencies will get listed in the package.json.

To create a React app without using the CLI tool ```create-react-app```

start with ```npm int``` to add the starter package with a package.json

add React and ReactDOM libraries:
```
npm i react react-dom --save
```
now add webpack to bundle the app together, and add hot reloading with the webpack dev server
```
npm i webpack webpack-dev-server webpack-cli --save--dev
```
*The ```--save--dev``` is to specify that these modules are just dev dependencies.*

Since React uses ES6 classes and import statements, add babel to transpile code into normal readable code for browsers that can't understand ES6.
```
npm i babel-core babel-loader @babel/preset-react     @babel/preset-env html-webpack-plugin --save-dev
```

*In the case of babel, we have loaded the core babel library first, then the loader, and finally 2 plugins or presets to work specifically with React and all the new ES2015 and ES6 onwards code.*

Now, add a webpack.config.js file to the root of the application, and add the following code:

```
const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  //This property defines where the application starts  entry:'./src/index.js',

  //This property defines the file path and the file name which will be used for deploying the bundled file  output:{    path: path.join(__dirname, '/dist'),    filename: 'bundle.js'  },

  //Setup loaders  module: {    rules: [      {        test: /\.js$/,         exclude: /node_modules/,        use: {          loader: 'babel-loader'        }      }    ]  },

// Setup plugin to use a HTML file for serving bundled js files plugins: [    new HtmlWebpackPlugin({      template: './src/index.html'    })  ]}
```

For the above lines:  First, we start by requiring the default path module to access the file location and make changes to the file location.

Next we require the HTMLWebpackPlugin to generate an HTML file to be used for serving bundled JavaScript file/files.

Then we have the export.module object with some properties in them. The first one is the entry property, which is used to specify which file webpack should start with to get the internal dependency graph created.

Next up is the output property specifying where the bundled file should be generated and what the name of the bundled file would be. This is done by the output.path and output.filename properties.

Next up are the loaders. This is to specify what webpack should do for a specific type for file. Remember that webpack out of box only understands JavaScript and JSON, but if your project has any other language used, this would be the place to specify what to do with that new language.

The information should be specified in an object for each module property, which further has an array of rules. There will be an object for every case. I have also specified to exclude everything in my node_modules folder.

Next up is the plugin property. This is used to extend the capabilities of webpack. Before a plugin can be used in the plugin array inside the module exports object, we need to require the same.

This particular plugin, as explained earlier, will use the specified file in our src folder. It’ll then use that as a template for our HTML file where all the bundled files will be automatically injected. There are a lot of other out of the box plugins that we could use.  Check ou t: https://webpack.js.org/plugins/

The last thing we need to do is create a .babelrc file to use the babel preset we installed and take care of the ES6 classes and import statements in our code. Add the following lines of code to the .babelrc file.
```
{  "presets": ["env", "react"]}

```
Add the below code in your index.js file.
```
import React from 'react';import ReactDOM from 'react-dom';import App from './Components/App';

ReactDOM.render(<App />, document.getElementById('app'));
```

So we simply import another file from our components folder, which you will create, and add another file in the folder called App.js. So let’s see what’s inside the App.js file:
```
import React, { Component } from 'react'

class App extends Component {  render() {    return (      <div>        <h1>Webpack + React setup</h1>      </div>    )  }}

export default App;

```

reloading. This means that every time a change is detected, the browser auto reloads the page and has the ability to build and bundle the entire application when the time comes.

We can do this by adding script values in the package.json file. Remove the test property in the scripts object of your package.json file and add these two scripts:
```
"start": "webpack-dev-server --mode development --open --hot",

"build": "webpack --mode production"

```
So now ```npm start ``` will run the HTML in the browser and any changes saved will refresh the page.  When ready to have the app bundles, run ```npm build``` and webpack will create an optimised bundle in your project folder which can be deployed on any web server.

# https://webpack.js.org/concepts/

webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

1. Entry
An entry point indicates which module webpack should use to begin building out its internal dependency graph.  You can specify a different or even multiple entry points in the webpack.config.js file.

1. Output
The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ./dist/main.js for the main output file and to the ./dist folder for any other generated file.  Configure this by specifying an output in the webpack.config.js file.

1. Loaders
Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.

At a high level, loaders have two properties in your webpack configuration:

  1. The test property identifies which file or files should be transformed.
  1. The use property indicates which loader should be used to do the transforming.

1. Plugins
 plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.

 In order to use a plugin, you need to ```require()``` it and add it to the ```plugins``` array. Most plugins are customizable through options. Since you can use a plugin multiple times in a configuration for different purposes, you need to create an instance of it by calling it with the ```new``` operator.

1. Mode
By setting the mode parameter to either ```development, production or none```, you can enable webpack's built-in optimizations that correspond to each environment. The default value is ```production```.

1. Browser Compatibility
webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack needs ```Promise``` for ```import() and require.ensure()```. If you want to support older browsers, you will need to load a polyfill before using these expressions.

1. Environment
webpack runs on Node.js version 8.x and higher.

# https://reactjs.org/docs/hello-world.html

In this guide, we will examine the building blocks of React apps: elements and components. Once you master them, you can create complex apps from small reusable pieces.

# https://reactjs.org/docs/introducing-jsx.html
```
const element = <h1>Hello, world!</h1>;
```
The above code is JSX, a syntax extension to JavaScript.  Use it with React to describe what the UI should look like.

Jsx produces React "elements."

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.

1. Embedding Expressions in JSX
