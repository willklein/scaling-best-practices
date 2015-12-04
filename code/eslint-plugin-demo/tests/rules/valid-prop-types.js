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
eslintTester.addRuleTest("rules/valid-prop-types", {

  // Examples of code that should not trigger the rule
  valid: [
    "{ someProp: React.PropTypes.bool }",
		"{ someProp: Meteor.PropTypes.batman }"
  ],

  // Examples of code that should trigger the rule
  invalid: [{
    code:"{ someProp: React.PropTypes.batman }",
    errors: [{
      message: "Invalid PropType",
      type: "MemberExpression"
    }]
  }]
});
