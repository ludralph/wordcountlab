THIS IS THE SOLUTION TO THE BOOTCAMP EXERCISES DAY 1.

Coding Lab 2:
 The second coding lab is an implementation of word count in Javascript using Jasmine for TDD.  The coding lab 2 has a filename of wordcount.js and the test script is wordcounttest.js

 ## Setup

 * `npm install` to install the jasmine cli runner
 * `./node_modules/jasmine/bin/jasmine` to run tests

 ## Getting started with Jasmine on another project

 1. get jasmine via `npm install -g jasmine` or just with the local project with
    `npm install --save-dev jasmine`. In that case jasmine will be in
    `./node_modules/jasmine/bin/jasmine.js`
  * If you don't have a `package.json` you might want to `npm init` before
    installing locally so the jasmine requirement gets saved to your manifest
  * If installing locally you should probably add `node_modules` to `.gitignore`
 2. Are you testing only commonjs modules?
  * `jasmine init` to set up a spec folder and basic config for commonjs testing
  * create a `WhateverSpec.js` in the `spec` folder. You can also organize specs
    into any depth of folders under `spec`. Fill the test with a jasmine test
    suite.
  * the test should use the `require()` function to assign a commonjs module to
    a variable.
  * `jasmine` from project root to run tests
 3. Or are you testing some other non-commonjs javascript?
  * I think you'll need a `SpecRunner.html` to include your dependencies in
    script tags in order. It needs a bunch of other boilerplate too.
  * Download the [standalone version](https://github.com/jasmine/jasmine/releases)
    and unzip it into a `jasmine` folder. Or just copy/paste this:
    `mkdir jasmine && wget -O ./jasmine/jasmine.zip https://github.com/jasmine/jasmine/releases/download/v2.1.3/jasmine-standalone-2.1.3.zip && cd jasmine && unzip jasmine.zip && rm -f jasmine.zip && cd ..`
  * create a `WhateverSpec.js` in the `jasmine/spec` folder. You can also
    organize specs into any depth of folders under `spec`. Fill the test with a
    jasmine test suite.
  * open the `SpecRunner.html` in your browser
  * you can also use [jasmine-html-runner](https://www.npmjs.com/package/jasmine-html-runner)
    to run it on the command line
 =======
