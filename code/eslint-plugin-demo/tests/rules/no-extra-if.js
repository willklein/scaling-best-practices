/**
 * @fileoverview Tests for no-extra-if rule.
 * @author Will Klein
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(linter);
eslintTester.addRuleTest("rules/no-extra-if", {

  // Examples of code that should not trigger the rule
  valid: [
    "if (a) { if (b) {;} ; }",
    "if (a) { ; if (b) {;} }",
    "if (a) {;} else { if (b) {;} }"
  ],

  // Examples of code that should trigger the rule
  invalid: [{
    code: "if (a) { if (b) {;} }",
    errors: [{
      message: "Unexpected if as the only statement in an if block.",
      type: "IfStatement"
    }]
  }]
});
