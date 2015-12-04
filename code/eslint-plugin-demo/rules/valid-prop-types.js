/**
 * @fileoverview Rule to disallow if as the only statement in an if block
 * @author Will Klein
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var validPropTypes = [
	'array',
	'bool',
	'func',
	'number',
	'object',
	'string'
];

module.exports = function(context) {

  return {
    "MemberExpression": function(node) {
			var ancestors = context.getAncestors();
			var parent = ancestors.pop();

			if (node.object.name === "React" &&
					node.property.name === "PropTypes" &&
					validPropTypes.indexOf(parent.property.name) === -1) {
        context.report(node, "Invalid PropType");
      }
    }
  };

};

module.exports.schema = [];
