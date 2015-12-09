# meouz
My personal very simple web development kickstarting framework using npm as build tool. Heavily inspired by Keith Cirkels [great Article on th subject](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/).

## Installation
Clone the entire folder to it's desired new habitat and run `npm install` from there. Now you can activate the cat~~astrophe~~ with `npm start`.

## What it does so far
Not that much actually
 * watch the `inz/styl` direcotry and on any file system chage parses and autoprefixes `main.styl` into `ouz/haz/css/main.css`
 * watch the `inz/js` directory and simply concatenate all files there in `ouz/haz/js/main.js`
 * automatically refresh the browser papge on changes in the `ouz/` dir.

 However the lag between saving a file and seeing the refresh magic happen is rather unsatisfactory.

 ## Plans
 * find a more sophisticated approach to optimized modular javascript that I like
 * try to make everything faster
 * make a production build routine
 * make it more versatile but keep it simple

