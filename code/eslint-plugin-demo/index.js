var noExtraIf = require('./rules/no-extra-if');
var validPropTypes = require('./rules/valid-prop-types');

module.exports = {
  rules: {
    'no-extra-if': noExtraIf,
    'valid-prop-types': validPropTypes
  }
};
