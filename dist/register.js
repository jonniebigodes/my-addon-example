"use strict";

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _components = require("@storybook/components");

var _api = require("@storybook/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// .storybook/my-addon/register.js
var PARAM_KEY = "myAddon";
var ADDON_ID = "myaddon";
var PANEL_ID = "".concat(ADDON_ID, "/panel"); // give a unique name for the panel

/* const MyPanel = () => <div>MyAddon</div>; */

var MyPanel = function MyPanel() {
  var value = (0, _api.useParameter)(PARAM_KEY, null);
  var item = value ? value.data : "No story parameter defined";
  return /*#__PURE__*/_react["default"].createElement("div", null, item);
};

_addons.addons.register(ADDON_ID, function (api) {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: "My Addon",
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, {
        active: active,
        key: key
      }, /*#__PURE__*/_react["default"].createElement(MyPanel, null));
    }
  });
});