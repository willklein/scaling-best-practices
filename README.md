# Scaling Best Practices with Syntax Trees
> Slides and material for a conference talk

## Proposal

There's a myriad of good and bad ways to write our JavaScript-and it keeps evolving! ES2015 is here, ES2016 is coming soon, and the language is changing faster than ever.

Fortunately, there is also a revolution in JavaScript tooling. New tools are here to help us understand and improve our code. Let's look at one of these tools, ESLint, and write our own rules to detect patterns in computer language. While we're at it, let's rediscover how languages are parsed, analyzed, and represented as abstract syntax trees.	

## Slides

[Midwest.io - November 2015](http://slides.com/willklein/scaling-best-practices)

[Nodevember - November 2015](http://slides.com/willklein/scaling-best-practices)

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

[Get Started with ESLint v1.0](http://devnull.guru/get-started-with-eslint/) - by Ian VanSchooten

[Linting JavaScript in 2015](http://blog.lauritz.me/linting-javascript-in-2015/) - by Lauritz Hilsøe

### Tools

[ESLint - Pluggable JavaScript linter](http://eslint.org)

[Esprima Parser demo](http://esprima.org/demo/parse.html) and related [blog post](http://ariya.ofilabs.com/2012/04/javascript-syntax-tree-visualization-with-esprima.html) by Ariya Hidayat

[metajs: visualize JavaScript AST execution](http://int3.github.io/metajs/) - for visualizing code stepping

### Docs

[ESLint: Working with Rules](http://eslint.org/docs/developer-guide/working-with-rules.html) - doc for writing rules in ESLint

[ESTree Spec](https://github.com/estree/estree/blob/master/spec.md) - core ESTree AST node types

[ESTree ES6 Spec](https://github.com/estree/estree/blob/master/es6.md) -  extensions to the core ESTree AST types to support the ES6 grammar

### Other Conference Talks

[Gurdas Nijor @ React.js Conf - Unlocking the Structure of Your React Applications with the AST](http://conf.reactjs.com/schedule.html#unlocking-the-structure-of-your-react-applications-with-the-ast)

[Mark Knichel @ JSConf EU 2014 - JavaScript Tools at Scale Using Type Information](https://www.youtube.com/watch?v=oXZaqHWq6cM)

[Dann Toliver @ JSConf US 2015 - Visualizing Process Evolution](http://2015.jsconf.us/speakers.html#toliver)

### Podcasts

[JavaScript Jabber 162 - ESLint with Jamund Ferguson](http://devchat.tv/js-jabber/162-jsj-eslint-with-jamund-ferguson)

### Support

[ESLint Gitter Chat](http://gitter.im/eslint/eslint) - These folks are very helpful

Tweet me [@willslab](https://twitter.com/willslab)
