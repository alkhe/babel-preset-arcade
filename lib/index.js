'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _babelPluginSyntaxJsx = require('babel-plugin-syntax-jsx');

var _babelPluginSyntaxJsx2 = _interopRequireDefault(_babelPluginSyntaxJsx);

var _babelPluginTransformArcadeJsx = require('babel-plugin-transform-arcade-jsx');

var _babelPluginTransformArcadeJsx2 = _interopRequireDefault(_babelPluginTransformArcadeJsx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	plugins: [_babelPluginSyntaxJsx2.default, _babelPluginTransformArcadeJsx2.default]
};