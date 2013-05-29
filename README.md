# Ark

Ark allows you package up your browser Javascript using the Node module system. You can use `require` just like in Node. Put another way, you can reuse server-side code in the browser and still use `require` and NPM.

## Hat Tip

To [browserify][0], which was the original inspiration for Ark, and from which I took some code, such as the HTTP implementation.

[0]:http://browserify.org/

### Speaking Of Which ...

The obvious question is: *how is Ark different than browserify?* 

* Ark is more CoffeeScript-friendly. You don't need to add a transform or plugin to bundle CoffeeScript into your Ark. Also, most of Ark is actually implemented in CoffeeScript in case you want to fork or submit patches.

* Ark uses a CSON manifest file to decide what to package up, so you have complete control over what's being shipped to the browser.

* Ark does *not* use the `package.json` `browser` field, or any other specification for generating your bundled JavaScript. Everything you need to know is in the manifest.

* Ark is just simpler, both in terms of usage and implementation. 

## Installation

    npm install -g ark
    
## Usage

1. Create an `ark` directory in your source tree. Put stuff in that directory that you want to ship to the browser. 

2. Give it a `package.json` file to set the entry point for your ark (using the `main` property). 

3. Create a `manifest.cson` file with the list of files and emulated Node APIs you want to bundle.

  The manifest file might look like this:

      root: "/Users/dan/Projects/ark/test"
      files: [
        "bar.coffee"
        "foo.coffee"
        "index.coffee"
        "package.json"
      ]
      apis: [ "assert", "child_process", "crypto", "events", "fs", "http",  
              "https", "module", "path", "querystring", "stream", "sys", "tty", 
              "url", "util" ]

4. Package up your ark:

      ark package -m <manifest> -f <path-to-javascript>

That's it. There's never any question about which files or APIs are included, because you control it via the manifest.

To package up your ark only if it's out-of-date, use the `-t` option:

  ark package -m <manifest> -f <path-to-javascript> -t

You can also use standard input for the manifest and standard output for the bundled JavaScript. However, you can't use standard output with the `-t` option.

## API

You can also use Ark programmatically. It's pretty simple:

    Ark = require "ark"
    
    Ark.package
      manifest: "./ark.cson"
      file: "js/application.js"
      
Other options include:

* **compilers**. This is just an object with file extensions as keys and functions that take a string and transform it somehow. The default compilers include one for CoffeeScript, but using this mechanism, you can include others. 

**Ex:** Suppose you want to compile Jade templates when you bundle your JavaScript so that they can simply be `require`d. You might write an Ark compiler like this:

    compileJade = do ->
      jade = require "jade"
      options = 
        client: true
        compileDebug: false
      (template) -> jade.compile template, options
      
    Ark.package
      manifest: "./ark.cson"
      file: "js/application.js"
      compilers: ".jade": compileJade
      
* **file**. This is just the path of the output file. If it's undefined, Ark will write to `stdout`.

* **minify**. This is a flag to indicate whether you want to minify the code. If true, ark will run the generated JavaScript through Uglify.js.

### The `mtime` Function

To run a command conditionally based on whether your Ark is out-of-date, use the `mtime` function, like this:

    Ark.mtime
      manifest: "./ark.cson"
      file: "js/application.js"
      -> console.log "The Ark must be rebuilt!"

## Status

Ark is under active development but is not yet production-ready.

