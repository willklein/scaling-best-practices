# Toolmaking with ASTs
> Slides and material for a potential conference talk

## Proposal

We have complex, challenging problems when we implement our UI. If that wasn't hard enough, there's a myriad of good and bad ways to write our JavaScript-and it keeps evolving! ES6 is here, ES7 is showing up, and guess what, those are now called ES2015, ES2016, and there will be a 17, 18, 19...

Fortunately, there is also a revolution in JavaScript tooling. New tools are here to help us understand and improve our code. Let's look at one of these tools, ESLint, and peek under the hood! But first, let's also rediscover how languages are parsed, analyzed, and represented as abstract syntax trees.

During this session, we'll learn to reason about ASTs to detect good and bad patterns in computer language. To drive this home, we'll build our own tools by writing custom rules in ESLint.	

## Slides

These slides contain abbreviated speaker notes on each slide:

> [slides.com/willklein/toolmaking-with-asts (non-live version)](https://slides.com/willklein/toolmaking-with-asts-non-live)

The stock slides, no speaker notes:

> [slides.com/willklein/toolmaking-with-asts](https://slides.com/willklein/toolmaking-with-asts)

## Code

The slides have a simple, self-contained example, along with the code snippet for a simple ESLint rule. This repo has a richer example, a clone of TodoMVC in React. It also has the same rule broken out into a plugin, along with tests that you can run to experiment with modifications.

### Testing

To run the Mocha tests for the ESLint plugin, `cd` into the `code/eslint-plugin-demo` directory and run:

    npm test

## Further Learning

### Articles

[Maintaining JavaScript Code Quality with ESLint](https://www.paypal-engineering.com/2014/12/12/maintaining-javascript-code-quality-with-eslint/) - by Jamund Ferguson

[Lint Like It's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48) - by Dan Abramov

[Detect Problems in JavaScript Automatically with ESLint](http://davidwalsh.name/eslint) - by Jani Hartikainen

[Understanding the Real Advantages of Using ESLint](http://rangle.io/blog/understanding-the-real-advantages-of-using-eslint/) - by Evan Schultz

[Using eslint alongside the Firefox Hello code base to help productivity](https://blog.mozilla.org/standard8/2015/05/13/using-eslint-alongside-the-firefox-hello-code-base-to-help-productivity/) - by Standard8

### Tools

[Esprima Parser demo](http://esprima.org/demo/parse.html) and related [blog post](http://ariya.ofilabs.com/2012/04/javascript-syntax-tree-visualization-with-esprima.html) by Ariya Hidayat

[JointJS JavaScript AST visualizer](http://jointjs.com/demos/javascript-ast) - used to generate SVGs in the slides, great for visualizing ASTs

[metajs: visualize JavaScript AST execution](http://int3.github.io/metajs/) - for visualizing code stepping

### Docs

[ESLint: Working with Rules](http://eslint.org/docs/developer-guide/working-with-rules.html) - doc for writing rules in ESLint

[ESTree Spec](https://github.com/estree/estree/blob/master/spec.md) - core ESTree AST node types

[ESTree ES6 Spec](https://github.com/estree/estree/blob/master/es6.md) -  extensions to the core ESTree AST types to support the ES6 grammar

### Conference Talks

[Gurdas Nijor @ React.js Conf - Unlocking the Structure of Your React Applications with the AST](http://conf.reactjs.com/schedule.html#unlocking-the-structure-of-your-react-applications-with-the-ast)

[Dann Toliver @ JSConf US 2015 - Visualizing Process Evolution](http://2015.jsconf.us/speakers.html#toliver)

### Podcasts

[JavaScript Jabber 162 - ESLint with Jamund Ferguson](http://devchat.tv/js-jabber/162-jsj-eslint-with-jamund-ferguson)

### Support

[ESLint Gitter Chat](http://gitter.im/eslint/eslint) - These folks are very helpful

Tweet me [@willslab](https://twitter.com/willslab)
