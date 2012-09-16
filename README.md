# Ark

Ark allows you package up your browser Javascript using the Node module system. You can use `require` just like in Node. Put another way, you can reuse server-side code in the browser and still use `require` and NPM.

**Ark is currently under development and is not ready for use.**

## Usage

To use static analysis to generate a manifest of what will be packaged up:

    ark manifest --static --source cs/lib/web > manifest.txt
    
Then you can package up the manifest like this:    
    
    ark package --uglify < manifest.txt >  web/js/web-api.js
    
Or, in one step, without static analysis (just packaging all your source files up):

    ark package --uglify --source cs/lib/web > web/js/web-api.js
    
Or, automagically picking up and compiling CoffeeScript:

    ark package --uglify web/js/web-api.js --source cs/src/web > web/js/web-api.js
    
You *must* have a `package.json` in your `--source` directory that has a `main` entry point defined.

## Status

**Ark is currently under development and is not ready for use.**

## Installation

    npm install -g ark
    
