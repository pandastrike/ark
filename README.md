# Ark

Ark allows you package up your browser Javascript using the Node module system. You can use `require` just like in Node. Put another way, you can reuse server-side code in the browser and still use `require` and NPM.

## Hat Tip

To [browserify][0], which was the original inspiration for Ark, and from which I took some code, such as the HTTP implementation.

[0]:http://browserify.org/

### Speaking Of Which ...

The obvious question is: *how is Ark different than browserify?* 

* Ark is more CoffeeScript-friendly. You don't need to add a transform or plugin to bundle CoffeeScript into your Ark. Also, most of Ark is actually implemented in CoffeeScript in case you want to fork or submit patches.

* Ark uses a CSON manifest file with glob expansion to decide what to package up. You can easily see what's include with the `list` command (or, programmatically, with the `list` method).

* Ark does *not* use the `package.json` `browser` field, or any other specification for generating your bundled JavaScript. Everything you need to know is in the manifest.

* Ark allows you to include any arbitrary files into your ark. You can then use the node `fs` API to read them. For example, we often bundle a configuration file that tells us where to find various backend resources.

* Ark is just simpler, both in terms of usage and implementation. 

## Installation

    npm install -g ark
    
## Usage

1. Create an `ark` directory in your source tree. Put stuff in that directory that you want to ship to the browser. In Ark parlance, that stuff is called "the ark."

2. Add in a `package.json` file to set the entry point for your ark (using the `main` property). 

3. Create a `ark.cson` file with the list of files and emulated Node APIs you want to bundled in your ark.

4. Package up your ark: `ark package -p <ark-directory> -o <path-to-javascript>`

### The Manifest

The manifest file might look like this:

    include: [
      "**/*.coffee"
      "package.json"
    ]
    apis: [ "assert", "child_process", "crypto", "events", "fs", "http",  
            "https", "module", "path", "querystring", "stream", "sys", "tty", 
            "url", "util" ]

That's it. There's never any question about which files or APIs are included, because you control it via the manifest.

#### Excluding Files

You can also exclude files. For example, if you want to make sure that no files within test directories are committed, you might do something like this:

    include: [
      "**/*.coffee"
      "package.json"
    ]
    exclude: [
      "**/test/**"
      "**/spec/**"
    ]
    apis: [ "assert", "child_process", "crypto", "events", "fs", "http",  
            "https", "module", "path", "querystring", "stream", "sys", "tty", 
            "url", "util" ]

#### Checking The Manifest

If you use glob expansion, you might want to see exactly what the result of the expansion is -- you can do this by using the list command:

    ark ls -p <manifest>

### More Details

See the [man page for more][1], or just type `ark help`.

[1]:https://raw.github.com/dyoder/ark/master/doc/USAGE

## API

You can also use Ark programmatically. It's pretty simple:

    Ark = require "ark"
    
    ark = new Ark
      path: "."
      manifest:
        include: [ "**/*.coffee", "package.json" ]
        exclude: [ "**/test/**", "**/spec/**" ]
        apis: [ "assert", "child_process", "crypto", "events", "fs", "http",  
          "https", "module", "path", "querystring", "stream", "sys", "tty", 
          "url", "util" ]
    ark.package()      

Other options include:

* **compilers**. This is just an object with file extensions as keys and functions that take a string and transform it somehow. The default compilers include one for CoffeeScript, but using this mechanism, you can include others. 

**Example** Suppose you want to compile Jade templates when you bundle your JavaScript so that they can simply be `require`d. You might write an Ark compiler like this:

    compileJade = do ->
      jade = require "jade"
      options = 
        client: true
        compileDebug: false
      (template) -> jade.compile template, options
      
    ark = new Ark
      path: "."
      compilers: jade: compileJade
      manifest:
        include: [ "**/*.coffee", "package.json" ]
        exclude: [ "**/test/**", "**/spec/**" ]
        apis: [ "assert", "child_process", "crypto", "events", "fs", "http",  
          "https", "module", "path", "querystring", "stream", "sys", "tty", 
          "url", "util" ]
      
### The `list` Function

You can also generate the full manifest, after glob expansion, with `list`, which returns an array of relative paths.

## Ark Middleware

New in 0.5.0 is the ability to use Ark as connect/express-style  middleware so that you don't need a build step while developing. You can run it like this:

    Ark = require "ark"
    connect = require "connect"
    app = connect()
    app.use connect.static("public")
    app.use Ark.middleware("my-ark-directory")

The Ark middleware keeps a "live" copy of the Ark in memory and only updates files that have changed.

## Roadmap

We've temporarily removed support for minification and beautification, as well as `mtime` checks for the command-line tool. We expect to add these back soon.

We also plan to add auto-generation of source maps and more sophistication to the middleware (for example, keeping the generated JavaScript cached so that it can just be returned directly if nothing has changed).

## Status

Ark is under active development and is still alpha-status. Please use with caution.



