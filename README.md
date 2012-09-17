# Ark

Ark allows you package up your browser Javascript using the Node module system. You can use `require` just like in Node. Put another way, you can reuse server-side code in the browser and still use `require` and NPM.

## Installation

    npm install -g ark
    
## Usage

Generate a manifest of what will be packaged up:

    ark manifest --source cs/lib/web > manifest.json
    
Then you can package up the manifest like this:    
    
    ark package < manifest.json >  web/js/web-api.js
    
Or, in one step:

    ark package --source cs/lib/web > web/js/web-api.js
        
**Note** You *must* have a `package.json` in your `--source` directory that has a `main` entry point defined.


## Status

Ark is currently under development and is not ready for production use.
