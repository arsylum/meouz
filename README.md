
###Warning:###
*The code is in flux and immature and also not suited for a production environment that requires stability. I do not recommend using it at this time. Also the file namings might not be everyones cup of tea.*


# meaonz - KISSing the MEAN stack. 
Lean and lightweight boilerplate project to stirr up some small to medium sized mean applications. 
My personal very simple web starter using only npm as build tool. Inspired by Keith Cirkels [great Article on th subject](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).

## Oh no, not another one?!
The purist in me is not happy with the massive size of a bare-bone empty [mean.io](http://mean.io/) project (and the fact that I couldn't get it to work after a fair amount of problem tracking). So I decided to familiarize myself with the mean stack by adding all the ingredients myself, one at a time. Most notably:

**angular, autoprefixer, babel, bootstrap, browser-sync, expressjs, mongoose, node, npm, stylus, watch**

## Installation
Clone the entire folder to it's desired new habitat and run `npm install` from there. If you get no dreadful red error messages you can now activate the cat~~astrophe~~ with `npm start`.
 (*Requirements: MongoDB, browserify, potentially others...*)

## Structure
### rearz/ - Backend Server Code
Node server with expressjs and mongoose, for handling api calls and serving static files.
### inz/ - Frontend application code
* `inz/js/alpha.js` is main entry point of source. Pull in files with nodes `require()` or ES6 `import { name }  from 'file.js'` syntax. Get's all boiled down into `ouz/haz/spellz/main.js`
* `inz/styl/main.styl` is the main [stylus](http://stylus-lang.com/) file.

### ouz/ - Frontend static ressources.
Everything compiled from `inz/` is excreted here. View templates for the angular app go directly in `ouz/haz/drafz`.

## What it does so far
* Spy on your files and re-transpile the assets on changes.
* Serve stuff.

 ## Plans
 * add bloat
 * remove bloat
 * nodemon
 * angular2 eventually
 * optimized production build routine

