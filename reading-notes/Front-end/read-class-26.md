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
In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
You can put any valid JavaScript expression inside the curly braces in JSX.

In the example below, we embed the result of calling a JavaScript function, formatName(user), into an <h1> element.
```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
*We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.*

JSX is an Expression Too

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

Specifying Attributes with JSX

You may use quotes to specify string literals as attributes:
```
const element = <div tabIndex="0"></div>;
```
You may also use curly braces to embed a JavaScript expression in an attribute:
```
const element = <img src={user.avatarUrl}></img>;
```
Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

*Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.  For example, class becomes className in JSX, and tabindex becomes tabIndex.*

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

JSX Represents Objects

Babel compiles JSX down to React.createElement() calls.

These two examples are identical:
```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
```
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.

*We recommend using the “Babel” language definition for your editor of choice so that both ES6 and JSX code is properly highlighted.*

# https://reactjs.org/docs/rendering-elements.html

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:
```
const element = <h1>Hello, world</h1>;
```

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

*One might confuse elements with a more widely known concept of “components”. We will introduce components in the next section. Elements are what components are “made of”*

Let’s say there is a <div> somewhere in your HTML file:
```
<div id="root"></div>
```
We call this a “root” DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element into a root DOM node, pass both to ReactDOM.render():
```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Updating the Rendered Element

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

Consider this ticking clock example:
```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
It calls ReactDOM.render() every second from a setInterval() callback.

*In practice, most React apps only call ReactDOM.render() once. In the next sections we will learn how such code gets encapsulated into stateful components. We recommend that you don’t skip topics because they build on each other.*

React Only Updates What’s Necessary

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

In our experience, thinking about how the UI should look at any given moment, rather than how to change it over time, eliminates a whole class of bugs.

# https://reactjs.org/docs/components-and-props.html

Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

*For detailed APi reference to React component class definition, look here (https://reactjs.org/docs/react-component.html).*

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Function and Class Components
The simplest way to define a component is to write a JavaScript function:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an ES6 class to define a component:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
The above two components are equivalent from React’s point of view.

# https://reactjs.org/docs/conditional-rendering.html

Conditional Rendering
In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

As in login and log out button, or a greeting based on a user that's signed in or a guest.

Inline If with Logical && Operator
You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator.

Inline If-Else with Conditional Operator
Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.

Preventing Component from Rendering
In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

# https://reactjs.org/docs/handling-events.html

Handling Events
1. React events are named using camelCase, rather than lowercase.
1. With JSX you pass a function as the event handler, rather than a string.

Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. 

When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
