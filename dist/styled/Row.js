'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -', 'px;\n  margin-left: -', 'px;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -', 'px;\n  margin-left: -', 'px;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var css = {
  alignItems: {
    start: '\n      -ms-flex-align: start !important;\n      align-items: flex-start !important;\n    ',
    end: '\n      -ms-flex-align: end !important;\n      align-items: flex-end !important;\n    ',
    center: '\n      -ms-flex-align: center !important;\n      align-items: center !important;\n    ',
    baseline: '\n      -ms-flex-align: baseline !important;\n      align-items: baseline !important;\n    ',
    stretch: '\n      -ms-flex-align: stretch !important;\n      align-items: stretch !important;\n    '
  },
  justifyContent: {
    start: '\n      -ms-flex-pack: start !important;\n      justify-content: flex-start !important;\n    ',
    end: '\n      -ms-flex-pack: end !important;\n      justify-content: flex-end !important;\n    ',
    center: '\n      -ms-flex-pack: center !important;\n      justify-content: center !important;\n    ',
    between: '\n      -ms-flex-pack: justify !important;\n      justify-content: space-between !important;\n    ',
    around: '\n      -ms-flex-pack: distribute !important;\n      justify-content: space-around !important;\n    '
  }
};

var Row = _styledComponents2.default.div(_templateObject, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getRowPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getRowPadding();
}, function (p) {
  if (!p.theme || !p.theme.styledBootstrapGrid || !p.theme.styledBootstrapGrid.getRowPadding) {
    return 15;
  }
  return p.theme.styledBootstrapGrid.getRowPadding();
}, function (p) {
  return p.alignItems && css.alignItems[p.alignItems];
}, function (p) {
  return p.smAlignItems && _media2.default.xs(_templateObject2, css.alignItems[p.xsAlignItems]);
}, function (p) {
  return p.smAlignItems && _media2.default.sm(_templateObject2, css.alignItems[p.smAlignItems]);
}, function (p) {
  return p.mdAlignItems && _media2.default.md(_templateObject2, css.alignItems[p.mdAlignItems]);
}, function (p) {
  return p.lgAlignItems && _media2.default.lg(_templateObject2, css.alignItems[p.lgAlignItems]);
}, function (p) {
  return p.xlAlignItems && _media2.default.xl(_templateObject2, css.alignItems[p.xlAlignItems]);
}, function (p) {
  return p.justifyContent && css.justifyContent[p.justifyContent];
}, function (p) {
  return p.smJustifyContent && _media2.default.xs(_templateObject2, css.justifyContent[p.xsJustifyContent]);
}, function (p) {
  return p.smJustifyContent && _media2.default.sm(_templateObject2, css.justifyContent[p.smJustifyContent]);
}, function (p) {
  return p.mdJustifyContent && _media2.default.md(_templateObject2, css.justifyContent[p.mdJustifyContent]);
}, function (p) {
  return p.lgJustifyContent && _media2.default.lg(_templateObject2, css.justifyContent[p.lgJustifyContent]);
}, function (p) {
  return p.xlJustifyContent && _media2.default.xl(_templateObject2, css.justifyContent[p.xlJustifyContent]);
});

exports.default = Row;