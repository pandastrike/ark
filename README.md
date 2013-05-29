# Ark

Ark allows you package up your browser Javascript using the Node module system. You can use `require` just like in Node. Put another way, you can reuse server-side code in the browser and still use `require` and NPM.

# Hat Tip

To [browserify][0], which was the original inspiration for Ark.

## How Is Ark Different Than Browserify?

Ark is more CoffeeScript-friendly and uses a manifest file to decide what to package up, so you know exactly what is being shipped to the browser.

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

## Status

Ark is under active development but is not yet production-ready.

