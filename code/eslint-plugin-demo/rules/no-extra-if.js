/**
 * @fileoverview Rule to disallow if as the only statement in an if block
 * @author Will Klein
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

  return {
    "IfStatement": function(node) {
      var ancestors = context.getAncestors(),
        parent = ancestors.pop(),
        grandparent = ancestors.pop();

      if (
          // it has a parent of some kind
          parent &&
          
          // its parent is a block statement
          parent.type === "BlockStatement" &&
          
          // it has no siblings
          parent.body.length === 1 &&
          
          // it has a grandparent of some kind
          grandparent &&
          
          // its grandparent is an if statement
          grandparent.type === "IfStatement" &&
          
          // its parent (block) is the consequent of its grandparent (if statement)
          parent === grandparent.consequent) {
        context.report(node, "Unexpected if as the only statement in an if block.");
      }
    }
  };

};

module.exports.schema = [];
