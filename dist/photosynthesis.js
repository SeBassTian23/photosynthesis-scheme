(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Photosynthesis"] = factory();
	else
		root["Photosynthesis"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/atp-synthase.js":
/*!****************************************!*\
  !*** ./src/components/atp-synthase.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * ATP synthase
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"atp-synthase\" transform=\"translate(0, 0)\">\n    <g id=\"base\">\n      <g id=\"i-subunit\">\n        <path d=\"M1034.112,291.597 L1062.208,291.597 C1066.083,291.597 1069.225,295.178 1069.225,299.597 L1069.225,382.957 C1069.225,387.375 1066.083,390.957 1062.208,390.957 L1034.112,390.957 C1030.237,390.957 1027.096,387.375 1027.096,382.957 L1027.096,299.597 C1027.096,295.178 1030.237,291.597 1034.112,291.597 z\" fill=\"#C7B29E\"/>\n        <path d=\"M1034.112,291.597 L1062.208,291.597 C1066.083,291.597 1069.225,295.178 1069.225,299.597 L1069.225,382.957 C1069.225,387.375 1066.083,390.957 1062.208,390.957 L1034.112,390.957 C1030.237,390.957 1027.096,387.375 1027.096,382.957 L1027.096,299.597 C1027.096,295.178 1030.237,291.597 1034.112,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"gamma-subunit\">\n        <path d=\"M1090.885,319.445 C1083.062,319.445 1076.72,301.671 1076.72,279.745 C1076.72,257.819 1083.062,240.045 1090.885,240.045 C1098.707,240.045 1105.049,257.819 1105.049,279.745 C1105.049,301.671 1098.707,319.445 1090.885,319.445 z\" fill=\"#F6E8D7\"/>\n        <path d=\"M1090.885,319.445 C1083.062,319.445 1076.72,301.671 1076.72,279.745 C1076.72,257.819 1083.062,240.045 1090.885,240.045 C1098.707,240.045 1105.049,257.819 1105.049,279.745 C1105.049,301.671 1098.707,319.445 1090.885,319.445 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"ii-subunit\">\n        <path d=\"M1027.424,383.195 C1021.48,383.195 1016.661,341.25 1016.661,289.508 C1016.661,237.766 1021.48,195.82 1027.424,195.82 C1033.369,195.82 1038.188,237.766 1038.188,289.508 C1038.188,341.25 1033.369,383.195 1027.424,383.195 z\" fill=\"#E4D3BD\"/>\n        <path d=\"M1027.424,383.195 C1021.48,383.195 1016.661,341.25 1016.661,289.508 C1016.661,237.766 1021.48,195.82 1027.424,195.82 C1033.369,195.82 1038.188,237.766 1038.188,289.508 C1038.188,341.25 1033.369,383.195 1027.424,383.195 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"c-ring\">\n        <path d=\"M1116.085,285.483 C1121.111,285.483 1125.185,310.134 1125.185,340.541 C1125.185,370.949 1121.111,395.6 1116.085,395.6 C1111.807,394.652 1110.306,383.081 1109.785,379.931 C1109.086,384.096 1108.368,388.379 1106.614,392.259 C1105.992,393.635 1105.138,395.347 1103.485,395.6 C1099.207,394.652 1097.706,383.081 1097.185,379.931 C1096.486,384.096 1095.768,388.379 1094.014,392.259 C1093.392,393.635 1092.538,395.347 1090.885,395.6 C1086.607,394.652 1085.106,383.081 1084.585,379.931 C1083.886,384.096 1083.168,388.379 1081.414,392.259 C1080.792,393.635 1079.938,395.347 1078.285,395.6 C1074.007,394.652 1072.505,383.078 1071.985,379.928 C1071.286,384.094 1070.567,388.378 1068.813,392.259 C1068.191,393.635 1067.337,395.347 1065.684,395.6 C1060.658,395.6 1056.584,370.949 1056.584,340.541 C1056.584,310.134 1060.658,285.483 1065.684,285.483 C1069.962,286.43 1071.464,298.005 1071.985,301.155 C1072.683,296.989 1073.402,292.705 1075.156,288.824 C1075.778,287.448 1076.632,285.736 1078.285,285.483 C1082.562,286.43 1084.065,298.003 1084.585,301.152 C1085.284,296.987 1086.002,292.704 1087.756,288.824 C1088.378,287.448 1089.232,285.736 1090.885,285.483 C1095.162,286.43 1096.665,298.003 1097.185,301.152 C1097.884,296.987 1098.602,292.704 1100.356,288.824 C1100.978,287.448 1101.832,285.736 1103.485,285.483 C1107.762,286.43 1109.265,298.003 1109.785,301.152 C1110.484,296.987 1111.202,292.704 1112.956,288.824 C1113.578,287.448 1114.432,285.736 1116.085,285.483 z\" fill=\"#E4D3BD\"/>\n        <path d=\"M1116.085,285.483 C1121.111,285.483 1125.185,310.134 1125.185,340.541 C1125.185,370.949 1121.111,395.6 1116.085,395.6 C1111.807,394.652 1110.306,383.081 1109.785,379.931 C1109.086,384.096 1108.368,388.379 1106.614,392.259 C1105.992,393.635 1105.138,395.347 1103.485,395.6 C1099.207,394.652 1097.706,383.081 1097.185,379.931 C1096.486,384.096 1095.768,388.379 1094.014,392.259 C1093.392,393.635 1092.538,395.347 1090.885,395.6 C1086.607,394.652 1085.106,383.081 1084.585,379.931 C1083.886,384.096 1083.168,388.379 1081.414,392.259 C1080.792,393.635 1079.938,395.347 1078.285,395.6 C1074.007,394.652 1072.505,383.078 1071.985,379.928 C1071.286,384.094 1070.567,388.378 1068.813,392.259 C1068.191,393.635 1067.337,395.347 1065.684,395.6 C1060.658,395.6 1056.584,370.949 1056.584,340.541 C1056.584,310.134 1060.658,285.483 1065.684,285.483 C1069.962,286.43 1071.464,298.005 1071.985,301.155 C1072.683,296.989 1073.402,292.705 1075.156,288.824 C1075.778,287.448 1076.632,285.736 1078.285,285.483 C1082.562,286.43 1084.065,298.003 1084.585,301.152 C1085.284,296.987 1086.002,292.704 1087.756,288.824 C1088.378,287.448 1089.232,285.736 1090.885,285.483 C1095.162,286.43 1096.665,298.003 1097.185,301.152 C1097.884,296.987 1098.602,292.704 1100.356,288.824 C1100.978,287.448 1101.832,285.736 1103.485,285.483 C1107.762,286.43 1109.265,298.003 1109.785,301.152 C1110.484,296.987 1111.202,292.704 1112.956,288.824 C1113.578,287.448 1114.432,285.736 1116.085,285.483 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"head\">\n      <g id=\"beta-subunit\">\n        <path d=\"M1122.002,258.488 C1108.427,258.488 1097.423,240.332 1097.423,217.937 C1097.423,195.542 1108.427,177.386 1122.002,177.386 C1135.577,177.386 1146.581,195.542 1146.581,217.937 C1146.581,240.332 1135.577,258.488 1122.002,258.488 z\" fill=\"#C7B29E\"/>\n        <path d=\"M1122.002,258.488 C1108.427,258.488 1097.423,240.332 1097.423,217.937 C1097.423,195.542 1108.427,177.386 1122.002,177.386 C1135.577,177.386 1146.581,195.542 1146.581,217.937 C1146.581,240.332 1135.577,258.488 1122.002,258.488 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"beta-subunit\">\n        <path d=\"M1059.766,258.488 C1046.191,258.488 1035.187,240.332 1035.187,217.937 C1035.187,195.542 1046.191,177.386 1059.766,177.386 C1073.341,177.386 1084.345,195.542 1084.345,217.937 C1084.345,240.332 1073.341,258.488 1059.766,258.488 z\" fill=\"#C7B29E\"/>\n        <path d=\"M1059.766,258.488 C1046.191,258.488 1035.187,240.332 1035.187,217.937 C1035.187,195.542 1046.191,177.386 1059.766,177.386 C1073.341,177.386 1084.345,195.542 1084.345,217.937 C1084.345,240.332 1073.341,258.488 1059.766,258.488 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"alpha-subunit\">\n        <path d=\"M1091.519,258.488 C1077.945,258.488 1066.94,240.332 1066.94,217.937 C1066.94,195.542 1077.945,177.386 1091.519,177.386 C1105.094,177.386 1116.098,195.542 1116.098,217.937 C1116.098,240.332 1105.094,258.488 1091.519,258.488 z\" fill=\"#D6C2AD\"/>\n        <path d=\"M1091.519,258.488 C1077.945,258.488 1066.94,240.332 1066.94,217.937 C1066.94,195.542 1077.945,177.386 1091.519,177.386 C1105.094,177.386 1116.098,195.542 1116.098,217.937 C1116.098,240.332 1105.094,258.488 1091.519,258.488 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"subunits\">\n      <text transform=\"matrix(1, 0, 0, 1, 1091.019, 249.488)\">\n        <tspan x=\"-2.62\" y=\"2.5\" font-family=\"STIXGeneral-Regular\" font-size=\"10\" fill=\"#000000\">\uD835\uDEFC</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1121.502, 249.488)\">\n        <tspan x=\"-2.465\" y=\"2.5\" font-family=\"STIXGeneral-Regular\" font-size=\"10\" fill=\"#000000\">\uD835\uDEFD</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1059.266, 249.488)\">\n        <tspan x=\"-2.465\" y=\"2.5\" font-family=\"STIXGeneral-Regular\" font-size=\"10\" fill=\"#000000\">\uD835\uDEFD</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1090.385, 272.773)\">\n        <tspan x=\"-2.14\" y=\"2.5\" font-family=\"STIXGeneral-Regular\" font-size=\"10\" fill=\"#000000\">\uD835\uDEFE</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1045.639, 370.657)\">\n        <tspan x=\"-1.389\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">I</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1026.924, 213.734)\">\n        <tspan x=\"-2.315\" y=\"2.5\" font-family=\"STIXGeneral-Regular\" font-size=\"10\" fill=\"#000000\">\uD835\uDEFF</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1026.924, 321.319)\">\n        <tspan x=\"-2.778\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">II</tspan>\n      </text>\n    </g>\n    <g id=\"reaction\">\n      <g>\n        <path d=\"M1035.563,172.122 C1054.158,191.868 1070.244,203.864 1091.281,203.864 C1117.669,203.864 1139.483,181.757 1154.852,165.192\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M1035.563,172.122 L1040.551,171.344 L1029.883,165.933 L1034.362,177.024 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 1021.553, 146.15)\">\n        <tspan x=\"-22.447\" y=\"7.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">ATP</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1180.086, 146.15)\">\n        <tspan x=\"-47.692\" y=\"7.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">ADP + P</tspan>\n        <tspan x=\"44.582\" y=\"7.212\" font-family=\"ArialMT\" font-size=\"14\" fill=\"#000000\">i</tspan>\n      </text>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 1079.385, 574.538)\">\n        <tspan x=\"-66.148\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">ATP Synthase</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var atpsynthase = function atpsynthase() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$subunits = _ref.subunits,
    subunits = _ref$subunits === void 0 ? false : _ref$subunits,
    _ref$reaction = _ref.reaction,
    reaction = _ref$reaction === void 0 ? true : _ref$reaction,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position,
    _ref$cRingColor = _ref.cRingColor,
    cRingColor = _ref$cRingColor === void 0 ? "#C7B29E" : _ref$cRingColor,
    _ref$alphaSubunitColo = _ref.alphaSubunitColor,
    alphaSubunitColor = _ref$alphaSubunitColo === void 0 ? "#D6C2AD" : _ref$alphaSubunitColo,
    _ref$betaSubunitColor = _ref.betaSubunitColor,
    betaSubunitColor = _ref$betaSubunitColor === void 0 ? "#C7B29E" : _ref$betaSubunitColor,
    _ref$gammaSubunitColo = _ref.gammaSubunitColor,
    gammaSubunitColor = _ref$gammaSubunitColo === void 0 ? "#F6E8D7" : _ref$gammaSubunitColo,
    _ref$iSubunitColor = _ref.iSubunitColor,
    iSubunitColor = _ref$iSubunitColor === void 0 ? "#C7B29E" : _ref$iSubunitColor,
    _ref$iiSubunitColor = _ref.iiSubunitColor,
    iiSubunitColor = _ref$iiSubunitColor === void 0 ? "E4D3BD" : _ref$iiSubunitColor;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!subunits) {
    var shape = draw.findOne('#atp-synthase > #subunits');
    shape.opacity(0);
  }
  if (!reaction) {
    var _shape = draw.findOne('#atp-synthase > #reaction');
    _shape.opacity(0);
  }
  if (!label) {
    var labelText = draw.findOne('#label');
    labelText.opacity(0);
  }
  if (cRingColor) {
    var _shape2 = draw.findOne('#atp-synthase #c-ring path');
    _shape2.fill(cRingColor);
  }
  if (alphaSubunitColor) {
    var _shape3 = draw.findOne('#atp-synthase #alpha-subunit path');
    _shape3.fill(alphaSubunitColor);
  }
  if (betaSubunitColor) {
    var shapes = draw.find('#atp-synthase #beta-subunit path');
    shapes.forEach(function (shape) {
      return shape.fill(betaSubunitColor);
    });
  }
  if (gammaSubunitColor) {
    var _shape4 = draw.findOne('#atp-synthase #gamma-subunit path');
    _shape4.fill(gammaSubunitColor);
  }
  if (iSubunitColor) {
    var _shape5 = draw.findOne('#atp-synthase #i-subunit path');
    _shape5.fill(iSubunitColor);
  }
  if (iiSubunitColor) {
    var _shape6 = draw.findOne('#atp-synthase #ii-subunit path');
    _shape6.fill(iiSubunitColor);
  }
  if (position) {
    var move = draw.findOne('#atp-synthase');
    move.transform({
      translateX: position - move.x(),
      origin: 'left'
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (atpsynthase);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#atp-synthase');
  return {
    "id": "atpsynthase",
    "headerTitle": "ATP Synthase",
    "show": true,
    "options": [{
      "type": "check",
      "name": "subunits",
      "value": false,
      "label": "Subunit Labels"
    }, {
      "type": "check",
      "name": "reaction",
      "value": true,
      "label": "Reaction Labels"
    }, {
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "cRingColor",
      "value": "#E4D3BD",
      "label": "c₁₄-Ring"
    }, {
      "type": "color",
      "name": "alphaSubunitColor",
      "value": "#D6C2AD",
      "label": "𝛼 - Subunits"
    }, {
      "type": "color",
      "name": "betaSubunitColor",
      "value": "#C7B29E",
      "label": "𝛽 - Subunits"
    }, {
      "type": "color",
      "name": "gammaSubunitColor",
      "value": "#F6E8D7",
      "label": "𝛾 - Subunits"
    }, {
      "type": "color",
      "name": "iSubunitColor",
      "value": "#C7B29E",
      "label": "I - Subunits"
    }, {
      "type": "color",
      "name": "iiSubunitColor",
      "value": "#E4D3BD",
      "label": "II - Subunits"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/cytochrome-b6f.js":
/*!******************************************!*\
  !*** ./src/components/cytochrome-b6f.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Cytochrome b₆f
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"cytochrome-b6f\" transform=\"translate(0, 0)\">\n    <g id=\"core\">\n      <path d=\"M655.498,267.457 C675.147,267.457 691.076,293.75 691.076,326.183 C691.192,332.982 690.245,339.323 688.994,345.965 C699.86,349.08 703.904,361.547 704.283,371.638 C704.283,386.256 695.46,398.106 684.576,398.106 C675.306,397.791 669.131,390.242 666.527,381.963 C663.169,383.981 659.363,384.747 655.498,384.909 C646.635,384.927 639.904,379.589 634.281,373.32 C640.079,370.835 644.441,366.313 644.888,359.837 C644.301,348.973 632.875,344.517 623.487,344.171 L621.677,344.237 C620.378,338.308 620.013,332.235 619.92,326.183 C619.992,321.52 619.905,324.167 620.268,318.247 C621.897,319.181 623.796,319.344 625.629,319.445 C633.624,319.445 640.104,312.363 640.104,303.627 C640.004,296.459 635.609,289.785 628.42,288.182 C633.651,277.454 643.014,267.978 655.498,267.457 z\" fill=\"#B2C7DA\"/>\n      <path d=\"M655.498,267.457 C675.147,267.457 691.076,293.75 691.076,326.183 C691.192,332.982 690.245,339.323 688.994,345.965 C699.86,349.08 703.904,361.547 704.283,371.638 C704.283,386.256 695.46,398.106 684.576,398.106 C675.306,397.791 669.131,390.242 666.527,381.963 C663.169,383.981 659.363,384.747 655.498,384.909 C646.635,384.927 639.904,379.589 634.281,373.32 C640.079,370.835 644.441,366.313 644.888,359.837 C644.301,348.973 632.875,344.517 623.487,344.171 L621.677,344.237 C620.378,338.308 620.013,332.235 619.92,326.183 C619.992,321.52 619.905,324.167 620.268,318.247 C621.897,319.181 623.796,319.344 625.629,319.445 C633.624,319.445 640.104,312.363 640.104,303.627 C640.004,296.459 635.609,289.785 628.42,288.182 C633.651,277.454 643.014,267.978 655.498,267.457 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"rieske\">\n      <path d=\"M661.032,384.909 C661.032,395.793 653.332,405.166 639.099,405.166 C624.867,405.166 613.944,397.91 613.944,387.026 C613.944,376.143 625.523,370.284 639.756,370.284 C653.988,370.284 661.032,374.025 661.032,384.909 z\" fill=\"#B2C7DA\"/>\n      <path d=\"M661.032,384.909 C661.032,395.793 653.332,405.166 639.099,405.166 C624.867,405.166 613.944,397.91 613.944,387.026 C613.944,376.143 625.523,370.284 639.756,370.284 C653.988,370.284 661.032,374.025 661.032,384.909 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <path d=\"M715.576,471.247 C704.692,471.247 695.869,459.397 695.869,444.779 C695.869,430.161 704.692,418.311 715.576,418.311 C726.46,418.311 735.283,430.161 735.283,444.779 C735.283,459.397 726.46,471.247 715.576,471.247 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" display=\"none\"/>\n    <path d=\"M652.677,417.378 C651.378,411.449 651.013,405.375 650.92,399.324 C650.992,394.66 650.905,397.307 651.268,391.387 C652.897,392.321 654.796,392.485 656.629,392.586 C664.624,392.586 671.104,385.504 671.104,376.767 C671.004,369.599 666.609,362.925 659.42,361.323 C664.651,350.595 674.014,341.119 686.498,340.598 C706.147,340.598 722.076,366.89 722.076,399.324 C722.076,431.757 706.147,458.049 686.498,458.049 C677.635,458.068 670.904,452.729 665.281,446.46 C671.079,443.976 675.441,439.454 675.888,432.978 C675.301,422.114 663.875,417.658 654.487,417.311 L652.677,417.378 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" display=\"none\"/>\n    <g id=\"cofactors\">\n      <g id=\"b6l\">\n        <text transform=\"matrix(1, 0, 0, 1, 666.625, 340.175)\">\n          <tspan x=\"-2.781\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">b</tspan>\n        </text>\n        <text transform=\"matrix(1, 0, 0, 1, 670.266, 343.072)\">\n          <tspan x=\"-1.668\" y=\"1\" font-family=\"Arial-ItalicMT\" font-size=\"6\" fill=\"#000000\">L</tspan>\n        </text>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 648.547, 306.901)\">\n        <tspan x=\"-5.558\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"2.221\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">n</tspan>\n      </text>\n      <path d=\"M656.401,344.833 L661.727,340.305\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M662.635,360.504 L657.061,355.749\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 687.415, 389.241)\">\n        <tspan x=\"-1.389\" y=\"1.5\" font-family=\"Arial-ItalicMT\" font-size=\"10\" fill=\"#000000\">f</tspan>\n      </text>\n      <path d=\"M684.843,383.195 L678.856,375.36\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 669.694, 367.504)\">\n        <tspan x=\"-13.793\" y=\"2.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Fe</tspan>\n        <tspan x=\"-2.123\" y=\"2.5\" font-family=\"LucidaGrande\" font-size=\"10\" fill=\"#000000\">\u2082</tspan>\n        <tspan x=\"2.095\" y=\"2.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">S</tspan>\n        <tspan x=\"8.765\" y=\"2.5\" font-family=\"LucidaGrande\" font-size=\"10\" fill=\"#000000\">\u2082</tspan>\n      </text>\n      <g id=\"b6h\">\n        <text transform=\"matrix(1, 0, 0, 1, 666.127, 314.582)\">\n          <tspan x=\"-2.781\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">b</tspan>\n        </text>\n        <text transform=\"matrix(1, 0, 0, 1, 670.266, 317.479)\">\n          <tspan x=\"-2.167\" y=\"1\" font-family=\"Arial-ItalicMT\" font-size=\"6\" fill=\"#000000\">H</tspan>\n        </text>\n      </g>\n      <path d=\"M667.23,330.916 L667.23,322.27\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 650.529, 350.479)\">\n        <tspan x=\"-5.558\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"2.221\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">p</tspan>\n      </text>\n      <path d=\"M661.975,313.358 L656.401,308.603\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 654.194, 574.038)\">\n        <tspan x=\"-72.705\" y=\"5\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Cytochrome </tspan>\n        <tspan x=\"46.332\" y=\"5\" font-family=\"Arial-ItalicMT\" font-size=\"21\" fill=\"#000000\">b</tspan>\n        <tspan x=\"58.011\" y=\"5\" font-family=\"LucidaGrande\" font-size=\"21\" fill=\"#000000\">\u2086</tspan>\n        <tspan x=\"66.871\" y=\"5\" font-family=\"Arial-ItalicMT\" font-size=\"21\" fill=\"#000000\">f</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var cytochromeB6f = function cytochromeB6f() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$coreColor = _ref.coreColor,
    coreColor = _ref$coreColor === void 0 ? "#B2C7DA" : _ref$coreColor,
    _ref$rieskeColor = _ref.rieskeColor,
    rieskeColor = _ref$rieskeColor === void 0 ? "#B2C7DA" : _ref$rieskeColor,
    _ref$rieske = _ref.rieske,
    rieske = _ref$rieske === void 0 ? true : _ref$rieske,
    _ref$cofactors = _ref.cofactors,
    cofactors = _ref$cofactors === void 0 ? false : _ref$cofactors,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (coreColor) {
    var coreShapes = draw.find('#cytochrome-b6f #core path');
    coreShapes.forEach(function (shape) {
      return shape.fill(coreColor);
    });
  }
  if (rieskeColor) {
    var rieskeShapes = draw.find('#cytochrome-b6f #rieske path');
    rieskeShapes.forEach(function (shape) {
      return shape.fill(rieskeColor);
    });
  }
  if (!cofactors) {
    var shape = draw.findOne('#cytochrome-b6f #cofactors');
    shape.opacity(0);
  }
  if (!rieske) {
    var _shape = draw.findOne('#cytochrome-b6f #rieske');
    _shape.opacity(0);
  }
  if (!label) {
    var labelText = draw.findOne('#cytochrome-b6f #label');
    labelText.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#cytochrome-b6f');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cytochromeB6f);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#cytochrome-b6f');
  return {
    "id": "cytochrome-b6f",
    "headerTitle": "Cytochrome&nbsp;<em>b₆f</em>",
    "show": true,
    "options": [{
      "type": "check",
      "name": "cofactors",
      "value": false,
      "label": "Cofactors"
    }, {
      "type": "check",
      "name": "rieske",
      "value": true,
      "label": "Rieske Complex"
    }, {
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "coreColor",
      "value": "#B2C7DA",
      "label": "Core Color"
    }, {
      "type": "color",
      "name": "rieskeColor",
      "value": "#B2C7DA",
      "label": "Rieske Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/cytochrome-c6.js":
/*!*****************************************!*\
  !*** ./src/components/cytochrome-c6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Cytochrome c₆
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"cytochrome-c6\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill=\"#FF2B2B\"/>\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"cofactor\">\n      <path d=\"M762.184,438.133 L761.2,435.103 L763.777,433.23 L766.355,435.103 L765.37,438.133 z M776.445,438.133 L777.43,435.103 L774.852,433.23 L772.275,435.103 L773.259,438.133 z M765.37,444.052 L766.355,447.082 L763.777,448.955 L761.2,447.082 L762.184,444.052 z M776.445,444.052 L777.43,447.082 L774.852,448.955 L772.275,447.082 L773.259,444.052 z M772.275,435.036 L769.315,432.886 L766.355,435.036 M772.275,447.14 L769.315,449.29 L766.355,447.14 M762.166,444.052 L760.015,441.092 L762.166,438.133 M776.522,444.052 L778.672,441.092 L776.522,438.133\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"0.75\"/>\n      <g>\n        <path d=\"M766.457,442.199 L766.457,438.923 L768.666,438.923 L768.666,439.31 L766.89,439.31 L766.89,440.324 L768.427,440.324 L768.427,440.711 L766.89,440.711 L766.89,442.199 z\" fill=\"#000000\"/>\n        <path d=\"M770.802,441.435 L771.218,441.486 Q771.119,441.85 770.853,442.051 Q770.588,442.252 770.174,442.252 Q769.654,442.252 769.349,441.932 Q769.044,441.611 769.044,441.032 Q769.044,440.434 769.352,440.103 Q769.66,439.772 770.152,439.772 Q770.628,439.772 770.929,440.096 Q771.231,440.42 771.231,441.008 Q771.231,441.044 771.229,441.115 L769.459,441.115 Q769.482,441.506 769.681,441.714 Q769.879,441.922 770.177,441.922 Q770.398,441.922 770.554,441.805 Q770.71,441.689 770.802,441.435 z M769.482,440.784 L770.807,440.784 Q770.78,440.485 770.655,440.335 Q770.462,440.103 770.156,440.103 Q769.879,440.103 769.691,440.288 Q769.502,440.474 769.482,440.784 z\" fill=\"#000000\"/>\n      </g>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 763.499, 480.233)\">\n      <tspan x=\"-28.347\" y=\"6.378\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Cyt c</tspan>\n      <tspan x=\"19.488\" y=\"6.378\" font-family=\"LucidaGrande\" font-size=\"21\" fill=\"#000000\">\u2086</tspan>\n    </text>\n  </g>\n</svg>";
var cytochromeC6 = function cytochromeC6() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#FF2B2B' : _ref$color,
    _ref$cofactor = _ref.cofactor,
    cofactor = _ref$cofactor === void 0 ? false : _ref$cofactor,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  var path = draw.findOne('#cytochrome-c6 #shape path');
  path.fill(color);
  if (!cofactor) {
    var shape = draw.findOne('#cytochrome-c6 #cofactor');
    shape.opacity(0);
  }
  if (!label) {
    var text = draw.findOne('#cytochrome-c6 text');
    text.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#cytochrome-c6');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cytochromeC6);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#cytochrome-c6');
  return {
    "id": "cytochrome-c6",
    "headerTitle": "Cytochrome c₆",
    "show": false,
    "options": [{
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "check",
      "name": "cofactor",
      "value": false,
      "label": "Cofactor"
    }, {
      "type": "color",
      "name": "color",
      "value": "#FF2B2B",
      "label": "Shape Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Cytochrome c\u2086 (Cyt c\u2086)";
};

/***/ }),

/***/ "./src/components/electron-flux.js":
/*!*****************************************!*\
  !*** ./src/components/electron-flux.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Electron Flux
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"electron-flux\" transform=\"translate(0, 0)\">\n    <g id=\"pc-to-ps-i\">\n      <path d=\"M841.221,412.224 C823.496,431.894 808.142,443.837 788.078,443.837\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M841.221,412.224 L842.53,417.099 L846.763,405.911 L836.217,411.557 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"b6f-to-pc\">\n      <path d=\"M730.813,439.253 C713.872,434.135 699.731,416.062 689.304,401.988\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M730.813,439.253 L727.414,442.985 L739.118,440.515 L728.675,434.68 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"ps-i-to-fd\">\n      <path d=\"M852.334,249.445 L852.334,275.829\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M852.334,249.445 L856.534,252.245 L852.334,241.045 L848.134,252.245 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"fd-to-fnr\">\n      <path d=\"M869.148,165.664 L859.029,184.313\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M869.148,165.664 L871.505,170.128 L873.155,158.281 L864.122,166.122 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"flow-q-cycle\">\n      <g>\n        <path d=\"M552.895,352.348 C574.015,364.242 597.894,361.953 617.113,358.17\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n        <path d=\"M617.113,358.17 L615.25,362.862 L625.329,356.42 L613.5,354.646 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M628.891,307.535 C603.438,303.518 580.06,313.116 561.96,322.513\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n        <path d=\"M561.96,322.513 L562.441,317.488 L554.558,326.485 L566.413,324.889 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"ps-ii-to-pq\">\n      <path d=\"M496.773,320.56 C477.285,306.9 441.565,310.935 414.488,314.678\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M496.773,320.56 L491.858,321.71 L502.903,326.303 L497.601,315.581 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"fd-to-cyt-b6f\">\n      <path d=\"M673.549,253.71 C695.089,206.767 749.784,205.734 818.663,205.734\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M673.549,253.71 L670.667,249.566 L670.47,261.526 L678.483,252.645 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n  </g>\n</svg>";
var electronFlux = function electronFlux() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$pc_to_ps_i = _ref.pc_to_ps_i,
    pc_to_ps_i = _ref$pc_to_ps_i === void 0 ? true : _ref$pc_to_ps_i,
    _ref$b6f_to_pc = _ref.b6f_to_pc,
    b6f_to_pc = _ref$b6f_to_pc === void 0 ? true : _ref$b6f_to_pc,
    _ref$ps_i_to_fd = _ref.ps_i_to_fd,
    ps_i_to_fd = _ref$ps_i_to_fd === void 0 ? true : _ref$ps_i_to_fd,
    _ref$flow_q_cycle = _ref.flow_q_cycle,
    flow_q_cycle = _ref$flow_q_cycle === void 0 ? true : _ref$flow_q_cycle,
    _ref$ps_ii_to_pq = _ref.ps_ii_to_pq,
    ps_ii_to_pq = _ref$ps_ii_to_pq === void 0 ? true : _ref$ps_ii_to_pq,
    _ref$fd_to_cyt_b6f = _ref.fd_to_cyt_b6f,
    fd_to_cyt_b6f = _ref$fd_to_cyt_b6f === void 0 ? false : _ref$fd_to_cyt_b6f,
    _ref$fd_to_fnr = _ref.fd_to_fnr,
    fd_to_fnr = _ref$fd_to_fnr === void 0 ? true : _ref$fd_to_fnr,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (!pc_to_ps_i) {
    var shape = draw.findOne('#pc-to-ps-i');
    shape.opacity(0);
  }
  if (!b6f_to_pc) {
    var _shape = draw.findOne('#b6f-to-pc');
    _shape.opacity(0);
  }
  if (!ps_i_to_fd) {
    var _shape2 = draw.findOne('#ps-i-to-fd');
    _shape2.opacity(0);
  }
  if (!flow_q_cycle) {
    var _shape3 = draw.findOne('#flow-q-cycle');
    _shape3.opacity(0);
  }
  if (!ps_ii_to_pq) {
    var _shape4 = draw.findOne('#ps-ii-to-pq');
    _shape4.opacity(0);
  }
  if (!fd_to_cyt_b6f) {
    var _shape5 = draw.findOne('#fd-to-cyt-b6f');
    _shape5.opacity(0);
  }
  if (!fd_to_fnr) {
    var _shape6 = draw.findOne('#fd-to-fnr');
    _shape6.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#electron-flux');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (electronFlux);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#electron-flux');
  return {
    "id": "electron-flux",
    "headerTitle": "Electron Flux",
    "show": true,
    "options": [{
      "type": "check",
      "name": "ps_ii_to_pq",
      "value": true,
      "label": "Photosystem II → PQ"
    }, {
      "type": "check",
      "name": "flow_q_cycle",
      "value": true,
      "label": "PQH₂ → Cytochrome b₆f"
    }, {
      "type": "check",
      "name": "b6f_to_pc",
      "value": true,
      "label": "Cytochrome b₆f → PC"
    }, {
      "type": "check",
      "name": "pc_to_ps_i",
      "value": true,
      "label": "PC → Photosystem I"
    }, {
      "type": "check",
      "name": "ps_i_to_fd",
      "value": true,
      "label": "Photosystem I → Fd"
    }, {
      "type": "check",
      "name": "fd_to_fnr",
      "value": true,
      "label": "Fd → FNR"
    }, {
      "type": "check",
      "name": "fd_to_cyt_b6f",
      "value": true,
      "label": "Fd → Cytochrome b₆f"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Orange arrows indicate the transfer of electrons (e\u207B)";
};

/***/ }),

/***/ "./src/components/ferredoxin.js":
/*!**************************************!*\
  !*** ./src/components/ferredoxin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Ferredoxin
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ferredoxin\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M854.896,226.945 C845.475,226.945 837.837,219.307 837.837,209.886 C837.837,200.464 845.475,192.827 854.896,192.827 C864.318,192.827 871.956,200.464 871.956,209.886 C871.956,219.307 864.318,226.945 854.896,226.945 z\" fill=\"#A08C79\"/>\n      <path d=\"M854.896,226.945 C845.475,226.945 837.837,219.307 837.837,209.886 C837.837,200.464 845.475,192.827 854.896,192.827 C864.318,192.827 871.956,200.464 871.956,209.886 C871.956,219.307 864.318,226.945 854.896,226.945 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 882.063, 238.536)\">\n      <tspan x=\"-12.253\" y=\"4.689\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Fd</tspan>\n    </text>\n  </g>\n</svg>";
var ferredoxin = function ferredoxin() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#A08C79' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? true : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (color) {
    var shape = draw.findOne('#ferredoxin path');
    shape.fill(color);
  }
  if (!label) {
    var text = draw.findOne('#ferredoxin text');
    text.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#ferredoxin');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ferredoxin);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#ferredoxin');
  return {
    "id": "ferredoxin",
    "headerTitle": "Ferredoxin",
    "show": true,
    "options": [{
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "color",
      "value": "#A08C79",
      "label": "Shape Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Ferredoxin (Fd)";
};

/***/ }),

/***/ "./src/components/fnr.js":
/*!*******************************!*\
  !*** ./src/components/fnr.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * FNR
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"fnr\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M884.643,149.036 C875.221,149.036 867.584,141.398 867.584,131.977 C867.584,122.555 875.221,114.917 884.643,114.917 C894.065,114.917 901.702,122.555 901.702,131.977 C901.702,141.398 894.065,149.036 884.643,149.036 z\" fill=\"#EECC00\"/>\n      <path d=\"M884.643,149.036 C875.221,149.036 867.584,141.398 867.584,131.977 C867.584,122.555 875.221,114.917 884.643,114.917 C894.065,114.917 901.702,122.555 901.702,131.977 C901.702,141.398 894.065,149.036 884.643,149.036 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"reaction\">\n      <g>\n        <path d=\"M940.627,92.514 C922.032,112.26 905.946,124.255 884.91,124.255 C858.521,124.255 836.707,102.149 821.338,85.584\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M940.627,92.514 L941.828,97.416 L946.307,86.325 L935.639,91.736 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 828.651, 66.755)\">\n        <tspan x=\"-38.402\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">NADP</tspan>\n        <tspan x=\"28.277\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 963.656, 66.755)\">\n        <tspan x=\"-42.006\" y=\"7.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">NADPH</tspan>\n      </text>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 917.873, 162.576)\">\n      <tspan x=\"-21.579\" y=\"4.689\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">FNR</tspan>\n    </text>\n  </g>\n</svg>";
var fnr = function fnr() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$reaction = _ref.reaction,
    reaction = _ref$reaction === void 0 ? true : _ref$reaction,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#EECC00' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? true : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (color) {
    var shape = draw.findOne('#fnr #shape path');
    shape.fill(color);
  }
  if (!reaction) {
    var _shape = draw.findOne('#fnr #reaction');
    _shape.opacity(0);
  }
  if (!label) {
    var text = draw.findOne('#fnr > text');
    text.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#fnr');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fnr);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#fnr');
  return {
    "id": "fnr",
    "headerTitle": "FNR",
    "show": true,
    "options": [{
      "type": "check",
      "name": "reaction",
      "value": true,
      "label": "Reaction"
    }, {
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "color",
      "value": "#EECC00",
      "label": "Shape Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Ferredoxin NADP\u207A oxidoreductase (FNR)";
};

/***/ }),

/***/ "./src/components/ion-channels.js":
/*!****************************************!*\
  !*** ./src/components/ion-channels.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Ion Channels
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ion-channels\" transform=\"translate(0, 0)\">\n    <g id=\"ca-channel\">\n      <g id=\"shape\">\n        <path d=\"M1227.972,372.685 L1219.594,383.444 L1227.972,372.685 L1219.594,383.444 L1200.532,383.444 L1219.594,383.444 L1200.532,383.444 L1192.154,372.685 L1200.532,383.444 L1192.154,372.685 L1192.154,290.132 L1192.154,372.685 L1192.154,290.132 L1227.972,290.132 L1192.154,290.132 L1227.972,290.132 L1227.972,372.685 L1227.972,290.132 L1227.972,372.685 z\" fill=\"#959595\"/>\n        <path d=\"M1227.972,372.685 L1219.594,383.444 L1227.972,372.685 L1219.594,383.444 L1200.532,383.444 L1219.594,383.444 L1200.532,383.444 L1192.154,372.685 L1200.532,383.444 L1192.154,372.685 L1192.154,290.132 L1192.154,372.685 L1192.154,290.132 L1227.972,290.132 L1192.154,290.132 L1227.972,290.132 L1227.972,372.685 L1227.972,290.132 L1227.972,372.685 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"k-channel\">\n      <g id=\"shape\">\n        <path d=\"M1260.337,383.444 L1279.399,383.444 L1287.777,372.685 L1287.777,300.89 L1279.399,290.132 L1260.337,290.132 L1251.959,300.89 L1251.959,372.685 L1260.337,383.444 z\" fill=\"#959595\"/>\n        <path d=\"M1260.337,383.444 L1279.399,383.444 L1287.777,372.685 L1287.777,300.89 L1279.399,290.132 L1260.337,290.132 L1251.959,300.89 L1251.959,372.685 L1260.337,383.444 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"pmf\">\n      <text transform=\"matrix(1, 0, 0, 1, 1358.84, 336.004)\">\n        <tspan x=\"-33.548\" y=\"5.5\" font-family=\"ArialMT\" font-size=\"18\" fill=\"#EE6600\">\u0394\u03A8/</tspan>\n        <tspan x=\"-1.485\" y=\"5.5\" font-family=\"ArialMT\" font-size=\"18\" fill=\"#EE6600\">\u0394</tspan>\n        <tspan x=\"10.538\" y=\"5.5\" font-family=\"ArialMT\" font-size=\"18\" fill=\"#EE6600\">pH</tspan>\n      </text>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 1243.67, 574.538)\" id=\"Ion_Channels\">\n        <tspan x=\"-61.877\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Ion Channels</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var ionChannels = function ionChannels() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$kChannel = _ref.kChannel,
    kChannel = _ref$kChannel === void 0 ? false : _ref$kChannel,
    _ref$caChannel = _ref.caChannel,
    caChannel = _ref$caChannel === void 0 ? false : _ref$caChannel,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$pmf = _ref.pmf,
    pmf = _ref$pmf === void 0 ? false : _ref$pmf,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!kChannel) {
    var shape = draw.findOne('#ion-channels #k-channel');
    shape.opacity(0);
  }
  if (!caChannel) {
    var _shape = draw.findOne('#ion-channels #ca-channel');
    _shape.opacity(0);
  }
  if (!label) {
    var _label = draw.findOne('#ion-channels #label');
    _label.opacity(0);
  }
  if (!pmf) {
    var _pmf = draw.findOne('#ion-channels #pmf');
    _pmf.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#ion-channels');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ionChannels);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#ion-channels');
  return {
    "id": "ion-channels",
    "headerTitle": "Ion Channels",
    "show": false,
    "options": [{
      "type": "check",
      "name": "kChannel",
      "value": true,
      "label": "K⁺ - Channel"
    }, {
      "type": "check",
      "name": "caChannel",
      "value": true,
      "label": "Ca⁺ - Channel"
    }, {
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "check",
      "name": "pmf",
      "value": false,
      "label": "ΔΨ/ΔpH - Label"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/ion-flux.js":
/*!************************************!*\
  !*** ./src/components/ion-flux.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Ion Flux
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ion-flux\" transform=\"translate(0, 0)\">\n    <g id=\"ca-channel\">\n      <text transform=\"matrix(1, 0, 0, 1, 1209.563, 436.118)\" id=\"Ca\u207A\">\n        <tspan x=\"-20.402\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">Ca</tspan>\n        <tspan x=\"10.277\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n      <g id=\"direction\">\n        <path d=\"M1210.063,409.591 L1210.063,254.585\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1210.063,409.591 L1205.863,406.791 L1210.063,417.991 L1214.263,406.791 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"k-channel\">\n      <text transform=\"matrix(1, 0, 0, 1, 1280.918, 236.382)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1269.368, 439.123)\">\n        <tspan x=\"-13.066\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">K</tspan>\n        <tspan x=\"2.941\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n      <g id=\"direction\">\n        <path d=\"M1264.812,408.277 L1264.812,253.271\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1264.812,408.277 L1260.612,405.477 L1264.812,416.677 L1269.012,405.477 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g id=\"direction\">\n        <path d=\"M1274.923,265.298 L1274.923,420.304\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1274.923,265.298 L1279.123,268.098 L1274.923,256.898 L1270.723,268.098 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n  </g>\n</svg>";
var ionFlux = function ionFlux() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$kChannel = _ref.kChannel,
    kChannel = _ref$kChannel === void 0 ? false : _ref$kChannel,
    _ref$caChannel = _ref.caChannel,
    caChannel = _ref$caChannel === void 0 ? false : _ref$caChannel,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!kChannel) {
    var shape = draw.findOne('#ion-flux #k-channel');
    shape.opacity(0);
  }
  if (!caChannel) {
    var _shape = draw.findOne('#ion-flux #ca-channel');
    _shape.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#ion-flux');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ionFlux);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#ion-flux');
  return {
    "id": "ion-flux",
    "headerTitle": "Ion Flux",
    "show": false,
    "options": [{
      "type": "check",
      "name": "kChannel",
      "value": true,
      "label": "K⁺ ⇄ H⁺"
    }, {
      "type": "check",
      "name": "caChannel",
      "value": true,
      "label": "→ Ca⁺"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/lumen.js":
/*!*********************************!*\
  !*** ./src/components/lumen.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Lumen
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"lumen\" transform=\"translate(0, 0)\">\n    <path d=\"M-0,376.004 L1400,376.004 L1400,600 L-0,600 L-0,376.004 z\" fill=\"#FFE5E5\"/>\n    <text transform=\"matrix(1, 0, 0, 1, 1358.84, 392.945)\">\n      <tspan x=\"-30.04\" y=\"7.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">lumen</tspan>\n    </text>\n  </g>\n</svg>";
var lumen = function lumen() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#FFE5E5' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'lumen' : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel;
  var draw = SVG();
  draw.svg(el);
  var path = draw.findOne('#lumen path');
  path.fill(color);
  var tspan = draw.findOne('#lumen tspan');
  tspan.text(label);
  if (!showLabel) {
    tspan = draw.findOne('#lumen text');
    tspan.opacity(0);
  }
  var op = draw.findOne('#lumen path');
  op.animate().transform({
    rotation: 45
  }, true);
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lumen);
var settings = function settings() {
  return {
    "id": "lumen",
    "headerTitle": "Lumen",
    "show": true,
    "options": [{
      "type": "text",
      "name": "label",
      "value": "lumen",
      "label": "Label"
    }, {
      "type": "check",
      "name": "showLabel",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "color",
      "value": "#FFE5E5",
      "label": "Background"
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/photosystem-i.js":
/*!*****************************************!*\
  !*** ./src/components/photosystem-i.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Photosystem I
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"photosystem-i\" transform=\"translate(0, 0)\">\n    <g id=\"antenna\">\n      <g id=\"lhca\">\n        <path d=\"M891.728,291.597 L916.885,291.597 C922.992,291.597 927.943,296.413 927.943,302.355 L927.943,374.15 C927.943,380.092 922.992,384.909 916.885,384.909 L891.728,384.909 C885.621,384.909 880.67,380.092 880.67,374.15 L880.67,302.355 C880.67,296.413 885.621,291.597 891.728,291.597 z\" fill=\"#008000\"/>\n        <path d=\"M891.728,291.597 L916.885,291.597 C922.992,291.597 927.943,296.413 927.943,302.355 L927.943,374.15 C927.943,380.092 922.992,384.909 916.885,384.909 L891.728,384.909 C885.621,384.909 880.67,380.092 880.67,374.15 L880.67,302.355 C880.67,296.413 885.621,291.597 891.728,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"lhca\">\n        <path d=\"M786.926,291.597 L812.083,291.597 C818.19,291.597 823.141,296.413 823.141,302.355 L823.141,374.15 C823.141,380.092 818.19,384.909 812.083,384.909 L786.926,384.909 C780.819,384.909 775.869,380.092 775.869,374.15 L775.869,302.355 C775.869,296.413 780.819,291.597 786.926,291.597 z\" fill=\"#008000\"/>\n        <path d=\"M786.926,291.597 L812.083,291.597 C818.19,291.597 823.141,296.413 823.141,302.355 L823.141,374.15 C823.141,380.092 818.19,384.909 812.083,384.909 L786.926,384.909 C780.819,384.909 775.869,380.092 775.869,374.15 L775.869,302.355 C775.869,296.413 780.819,291.597 786.926,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"core\">\n      <path d=\"M869.29,279.265 C886.885,279.265 901.148,305.674 901.148,338.253 C901.148,370.831 886.885,397.241 869.29,397.241 C862.033,397.14 856.035,392.784 851.656,387.306 C847.349,392.99 841.219,396.904 834.021,397.241 C816.427,397.241 802.164,370.831 802.164,338.253 C802.164,305.674 816.427,279.265 834.021,279.265 C841.278,279.365 847.276,283.721 851.656,289.199 C855.963,283.515 862.093,279.602 869.29,279.265 z\" fill=\"#0CB04B\"/>\n      <path d=\"M869.29,279.265 C886.885,279.265 901.148,305.674 901.148,338.253 C901.148,370.831 886.885,397.241 869.29,397.241 C862.033,397.14 856.035,392.784 851.656,387.306 C847.349,392.99 841.219,396.904 834.021,397.241 C816.427,397.241 802.164,370.831 802.164,338.253 C802.164,305.674 816.427,279.265 834.021,279.265 C841.278,279.365 847.276,283.721 851.656,289.199 C855.963,283.515 862.093,279.602 869.29,279.265 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 851.544, 378.284)\" id=\"center\">\n      <tspan x=\"-10.509\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"14\" fill=\"#000000\">P</tspan>\n      <tspan x=\"-1.171\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"7\" fill=\"#000000\">700</tspan>\n    </text>\n    <g id=\"cofactors\">\n      <text transform=\"matrix(1, 0, 0, 1, 839.873, 310.422)\">\n        <tspan x=\"-5.055\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">F</tspan>\n        <tspan x=\"1.053\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 855.114, 296.961)\">\n        <tspan x=\"-5.055\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">F</tspan>\n        <tspan x=\"1.053\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">B</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 851.544, 325.517)\">\n        <tspan x=\"-5.055\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">F</tspan>\n        <tspan x=\"1.053\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">X</tspan>\n      </text>\n      <path d=\"M845.989,318.422 L841.815,314.773\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M844.714,303.422 L848.888,299.835\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M839.814,378.658 L828.749,364.75\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M875.91,364.75 L864.844,378.658\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <path d=\"M825.237,354.881 L828.748,338.892\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M836.778,331.271 L845.329,327.239\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 827.814, 334.111)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">1B</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 825.167, 360.584)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">0B</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 877.883, 334.726)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">1A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 879.769, 360.584)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">0A</tspan>\n      </text>\n      <path d=\"M859.33,327.239 L867.88,331.271\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <path d=\"M875.91,338.892 L879.422,354.881\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n    </g>\n    <g id=\"light\">\n      <path d=\"M782.7,275.747 L765.376,255.981 L771.055,253.128 L757.394,229.837 L730.296,245.066 L754.259,261.862 L746.255,267.226 L769.287,283.728 L762.321,286.945 L799.497,313.819 L777.083,279.153 L782.7,275.747 z\" fill=\"#FFEC7F\"/>\n      <path d=\"M757.394,229.837 L771.055,253.128 L765.376,255.981 L782.7,275.747 L782.7,275.747 L777.083,279.153 L799.497,313.819 L762.321,286.945 L769.286,283.728 L746.255,267.226 L754.259,261.862 L730.296,245.066 L757.394,229.837 z M757.028,231.19 L732.171,245.159 L754.833,261.043 L756.027,261.881 L754.815,262.693 L748.01,267.253 L769.869,282.915 L771.265,283.915 L769.706,284.635 L764.292,287.136 L795.763,309.885 L776.243,279.696 L775.684,278.832 L776.564,278.298 L781.163,275.51 L764.624,256.641 L763.772,255.668 L764.927,255.088 L769.652,252.714 L757.028,231.19 z\" fill=\"#000000\"/>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 848.998, 574.538)\">\n        <tspan x=\"-66.527\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Photosystem I</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var photosystemI = function photosystemI() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$center = _ref.center,
    center = _ref$center === void 0 ? false : _ref$center,
    _ref$light = _ref.light,
    light = _ref$light === void 0 ? true : _ref$light,
    _ref$cofactors = _ref.cofactors,
    cofactors = _ref$cofactors === void 0 ? false : _ref$cofactors,
    _ref$antenna = _ref.antenna,
    antenna = _ref$antenna === void 0 ? true : _ref$antenna,
    _ref$lightColor = _ref.lightColor,
    lightColor = _ref$lightColor === void 0 ? "#FFEC7F" : _ref$lightColor,
    _ref$lightSize = _ref.lightSize,
    lightSize = _ref$lightSize === void 0 ? 1 : _ref$lightSize,
    _ref$coreColor = _ref.coreColor,
    coreColor = _ref$coreColor === void 0 ? "#0CB04B" : _ref$coreColor,
    _ref$antennaColor = _ref.antennaColor,
    antennaColor = _ref$antennaColor === void 0 ? "#008000" : _ref$antennaColor,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (coreColor) {
    var coreShapes = draw.find('#photosystem-i #core path');
    coreShapes.forEach(function (shape) {
      return shape.fill(coreColor);
    });
  }
  if (antennaColor) {
    var antennaShapes = draw.find('#photosystem-i #antenna path');
    antennaShapes.forEach(function (shape) {
      return shape.fill(antennaColor);
    });
  }
  if (lightColor) {
    var lightShape = draw.findOne('#photosystem-i #light path');
    lightShape.fill(lightColor);
  }
  if (!light) {
    var shape = draw.findOne('#photosystem-i #light');
    shape.opacity(0);
  }
  if (!center) {
    var _shape = draw.findOne('#photosystem-i #center');
    _shape.opacity(0);
  }
  if (!cofactors) {
    var _shape2 = draw.findOne('#photosystem-i #cofactors');
    _shape2.opacity(0);
  }
  if (!antenna) {
    var _shape3 = draw.findOne('#photosystem-i #antenna');
    _shape3.opacity(0);
  }
  if (!label) {
    var text = draw.findOne('#photosystem-i #label');
    text.opacity(0);
  }
  if (lightSize) {
    var _shape4 = draw.findOne('#photosystem-i #light');
    _shape4.transform({
      origin: 'bottom right',
      scale: Number(lightSize)
    });
  }
  if (position) {
    var move = draw.findOne('#photosystem-i');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photosystemI);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#photosystem-i');
  return {
    "id": "photosystem-i",
    "headerTitle": "Photosystem I",
    "show": true,
    "options": [{
      "type": "check",
      "name": "center",
      "value": false,
      "label": "Reaction Center"
    }, {
      "type": "check",
      "name": "cofactors",
      "value": false,
      "label": "Cofactors"
    }, {
      "type": "check",
      "name": "light",
      "value": true,
      "label": "Light"
    }, {
      "type": "check",
      "name": "antenna",
      "value": true,
      "label": "Antenna (LHCa)"
    }, {
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "coreColor",
      "value": "#0CB04B",
      "label": "Core Color"
    }, {
      "type": "color",
      "name": "lightColor",
      "value": "#FFEC7F",
      "label": "Light Color"
    }, {
      "type": "color",
      "name": "antennaColor",
      "value": "#008000",
      "label": "Antenna Color"
    }, {
      "type": "range",
      "name": "lightSize",
      "value": 1,
      "label": "Light (Size)",
      "step": "0.1",
      "min": "0.5",
      "max": "1.5"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/photosystem-ii-repair.js":
/*!*************************************************!*\
  !*** ./src/components/photosystem-ii-repair.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Photosystem II - repair
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <defs>\n    <pattern id=\"Pattern_1\" patternUnits=\"userSpaceOnUse\" x=\"227.713\" y=\"51.755\" width=\"40\" height=\"40\" patternTransform=\"matrix(0.29, 0, 0, 0.29, 0, 0)\">\n      <g transform=\"translate(-0, -0)\">\n        <path d=\"M40,0 L0,0 L0,40 L40,40 L40,0 z\" fill=\"#BFBFBF\"/>\n        <path d=\"M30,0 L40,10 L40,0 L30,0 z\" fill=\"#808080\"/>\n        <path d=\"M0,40 L0,30 L10,40 L0,40 z\" fill=\"#808080\"/>\n        <path d=\"M30,40 L40,40 L40,30 L10,0 L0,0 L0,10\" fill=\"#808080\"/>\n      </g>\n    </pattern>\n  </defs>\n  <g id=\"photosystem-ii-repair\" transform=\"translate(0, 0)\">\n    <g id=\"core\">\n      <path d=\"M279.906,51.517 C288.842,51.623 295.177,58.023 299.897,64.925 C290.659,66.659 285.627,75.039 285.22,83.924 C285.221,94.604 293.067,103.261 302.747,103.261 C305.751,103.28 307.465,102.621 310.077,101.404 C310.186,103.313 310.129,102.064 310.173,105.154 C310.122,119.439 304.257,142.573 293.484,152.939 C303.059,155.695 312.471,161.08 313.12,171.324 C313.12,183.2 301.054,192.827 286.169,192.827 C281.221,192.788 276.256,191.812 271.878,189.454 C267.545,191.967 262.502,192.628 257.588,192.827 C242.703,192.827 230.637,183.2 230.637,171.324 C231.039,163.41 235.938,161.4 241.853,156.682 L241.601,156.288 C244.383,159.803 248.31,162.117 252.796,162.371 C266.372,162.371 277.379,137.721 277.379,107.313 C276.802,91.44 275.15,71.912 264.517,58.977 C268.591,54.468 273.945,52.108 279.906,51.517 L279.906,51.517 z\" fill=\"#B4D66F\"/>\n      <path d=\"M279.906,51.517 C288.842,51.623 295.177,58.023 299.897,64.925 C290.659,66.659 285.627,75.039 285.22,83.924 C285.221,94.604 293.067,103.261 302.747,103.261 C305.751,103.28 307.465,102.621 310.077,101.404 C310.186,103.313 310.129,102.064 310.173,105.154 C310.122,119.439 304.257,142.573 293.484,152.939 C303.059,155.695 312.471,161.08 313.12,171.324 C313.12,183.2 301.054,192.827 286.169,192.827 C281.221,192.788 276.256,191.812 271.878,189.454 C267.545,191.967 262.502,192.628 257.588,192.827 C242.703,192.827 230.637,183.2 230.637,171.324 C231.039,163.41 235.938,161.4 241.853,156.682 L241.601,156.288 C244.383,159.803 248.31,162.117 252.796,162.371 C266.372,162.371 277.379,137.721 277.379,107.313 C276.802,91.44 275.15,71.912 264.517,58.977 C268.591,54.468 273.945,52.108 279.906,51.517 L279.906,51.517 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"d1\">\n      <g id=\"photosystem-ii-repair-d1\">\n        <path d=\"M252.296,161.871 C238.719,161.871 227.713,137.221 227.713,106.813 C227.713,76.405 238.719,51.755 252.296,51.755 C265.872,51.755 276.879,76.405 276.879,106.813 C276.879,137.221 265.872,161.871 252.296,161.871 z\" fill=\"url(#Pattern_1)\"/>\n        <path d=\"M252.296,161.871 C238.719,161.871 227.713,137.221 227.713,106.813 C227.713,76.405 238.719,51.755 252.296,51.755 C265.872,51.755 276.879,76.405 276.879,106.813 C276.879,137.221 265.872,161.871 252.296,161.871 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 251.954, 140.33)\">\n        <tspan x=\"-8.948\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"14\" fill=\"#000000\">D1</tspan>\n      </text>\n    </g>\n    <g id=\"antenna\">\n      <g id=\"lhcb\">\n        <path d=\"M199.103,64.684 L224.26,64.684 C230.367,64.684 235.318,69.225 235.318,74.826 L235.318,142.51 C235.318,148.112 230.367,152.652 224.26,152.652 L199.103,152.652 C192.996,152.652 188.045,148.112 188.045,142.51 L188.045,74.826 C188.045,69.225 192.996,64.684 199.103,64.684 z\" fill=\"#8BC300\"/>\n        <path d=\"M199.103,64.684 L224.26,64.684 C230.367,64.684 235.318,69.225 235.318,74.826 L235.318,142.51 C235.318,148.112 230.367,152.652 224.26,152.652 L199.103,152.652 C192.996,152.652 188.045,148.112 188.045,142.51 L188.045,74.826 C188.045,69.225 192.996,64.684 199.103,64.684 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"lhcb\">\n        <path d=\"M162.104,64.684 L187.261,64.684 C193.368,64.684 198.319,69.225 198.319,74.826 L198.319,142.51 C198.319,148.112 193.368,152.652 187.261,152.652 L162.104,152.652 C155.997,152.652 151.046,148.112 151.046,142.51 L151.046,74.826 C151.046,69.225 155.997,64.684 162.104,64.684 z\" fill=\"#8BC300\"/>\n        <path d=\"M162.104,64.684 L187.261,64.684 C193.368,64.684 198.319,69.225 198.319,74.826 L198.319,142.51 C198.319,148.112 193.368,152.652 187.261,152.652 L162.104,152.652 C155.997,152.652 151.046,148.112 151.046,142.51 L151.046,74.826 C151.046,69.225 155.997,64.684 162.104,64.684 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"cycle\">\n      <g>\n        <path d=\"M386.992,257.171 C392.09,218.842 396.374,189.139 383.483,161.597 C372.141,137.364 356.506,120.434 327.632,111.689\" fill-opacity=\"0\" stroke=\"#B4D66F\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M386.992,257.171 L382.647,253.376 L385.747,266.69 L392.166,254.621 z\" fill=\"#B4D66F\" fill-opacity=\"1\" stroke=\"#B4D66F\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M194.942,180.037 C170.999,199.57 168.196,215.87 172.831,236.127 C178.75,261.991 183.746,269.985 201.233,281.773\" fill-opacity=\"0\" stroke=\"#983432\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M194.942,180.037 L195.274,185.796 L202.609,174.261 L189.498,178.129 z\" fill=\"#983432\" fill-opacity=\"1\" stroke=\"#983432\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 138.727, 196.734)\">\n        <tspan x=\"-25.938\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"14\" fill=\"#000000\">damage</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 414.208, 173.962)\">\n        <tspan x=\"-19.114\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"14\" fill=\"#000000\">repair</tspan>\n      </text>\n    </g>\n    <g id=\"light\">\n      <path d=\"M161.912,52.225 L144.588,32.459 L150.267,29.606 L136.606,6.315 L109.508,21.544 L133.471,38.34 L125.467,43.703 L148.498,60.205 L141.533,63.422 L178.709,90.296 L156.295,55.631 L161.912,52.225 z\" fill=\"#FFEC7F\"/>\n      <path d=\"M136.606,6.315 L150.267,29.606 L144.588,32.459 L161.912,52.225 L161.912,52.225 L156.294,55.631 L178.708,90.296 L141.533,63.422 L148.498,60.205 L125.467,43.703 L133.471,38.34 L109.508,21.544 L136.606,6.315 z M136.24,7.668 L111.383,21.637 L134.044,37.521 L135.239,38.358 L134.027,39.17 L127.223,43.731 L149.081,59.392 L150.477,60.393 L148.918,61.113 L143.504,63.613 L174.975,86.363 L155.455,56.174 L154.896,55.309 L155.776,54.776 L160.374,51.987 L143.836,33.118 L142.984,32.146 L144.139,31.565 L148.864,29.191 L136.24,7.668 z\" fill=\"#000000\"/>\n    </g>\n  </g>\n</svg>";
var photosystemIIrepair = function photosystemIIrepair() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$coreColor = _ref.coreColor,
    coreColor = _ref$coreColor === void 0 ? "#B4D66F" : _ref$coreColor,
    _ref$lightColor = _ref.lightColor,
    lightColor = _ref$lightColor === void 0 ? "#FFEC7F" : _ref$lightColor,
    _ref$lightSize = _ref.lightSize,
    lightSize = _ref$lightSize === void 0 ? 1 : _ref$lightSize,
    _ref$antennaColor = _ref.antennaColor,
    antennaColor = _ref$antennaColor === void 0 ? "#8BC300" : _ref$antennaColor,
    _ref$d = _ref.d1,
    d1 = _ref$d === void 0 ? true : _ref$d,
    _ref$antenna = _ref.antenna,
    antenna = _ref$antenna === void 0 ? true : _ref$antenna,
    _ref$cycle = _ref.cycle,
    cycle = _ref$cycle === void 0 ? true : _ref$cycle,
    _ref$light = _ref.light,
    light = _ref$light === void 0 ? true : _ref$light,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (coreColor) {
    var coreShape = draw.findOne('#photosystem-ii-repair #core path');
    coreShape.fill(coreColor);
  }
  if (lightColor) {
    var lightShape = draw.findOne('#photosystem-ii-repair #light path');
    lightShape.fill(lightColor);
  }
  if (antennaColor) {
    var antennaShapes = draw.find('#photosystem-ii-repair #antenna path');
    antennaShapes.forEach(function (shape) {
      return shape.fill(antennaColor);
    });
  }
  if (!cycle) {
    var shape = draw.findOne('#photosystem-ii-repair #cycle');
    shape.opacity(0);
  }
  if (!d1) {
    var _shape = draw.findOne('#photosystem-ii-repair #d1');
    _shape.opacity(0);
  }
  if (!antenna) {
    var _shape2 = draw.findOne('#photosystem-ii-repair #antenna');
    _shape2.opacity(0);
  }
  if (!light) {
    var _shape3 = draw.findOne('#photosystem-ii-repair #light');
    _shape3.opacity(0);
  }
  if (lightSize) {
    var _shape4 = draw.findOne('#photosystem-ii-repair #light');
    _shape4.transform({
      origin: 'bottom right',
      scale: Number(lightSize)
    });
  }
  if (position) {
    var move = draw.findOne('#photosystem-ii-repair');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photosystemIIrepair);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#photosystem-ii-repair');
  return {
    "id": "photosystem-ii-repair",
    "headerTitle": "Photosystem II (repair)",
    "show": false,
    "options": [{
      "type": "check",
      "name": "antenna",
      "value": true,
      "label": "Antenna"
    }, {
      "type": "check",
      "name": "light",
      "value": true,
      "label": "Light"
    }, {
      "type": "check",
      "name": "d1",
      "value": true,
      "label": "D1 Subunit"
    }, {
      "type": "check",
      "name": "cycle",
      "value": true,
      "label": "Cycle Arrows"
    }, {
      "type": "color",
      "name": "coreColor",
      "value": "#B4D66F",
      "label": "Core Color"
    }, {
      "type": "color",
      "name": "lightColor",
      "value": "#FFEC7F",
      "label": "Light Color"
    }, {
      "type": "color",
      "name": "antennaColor",
      "value": "#8BC300",
      "label": "Antenna Color"
    }, {
      "type": "range",
      "name": "lightSize",
      "value": 1,
      "label": "Light (Size)",
      "step": "0.1",
      "min": "0.5",
      "max": "1.5"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Core subunit of Photosystem II (D1)";
};

/***/ }),

/***/ "./src/components/photosystem-ii.js":
/*!******************************************!*\
  !*** ./src/components/photosystem-ii.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Photosystem II
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"photosystem-ii\" transform=\"translate(0, 0)\">\n    <g id=\"fluorescence\">\n      <path d=\"M331.952,220.062 C336.305,226.505 338.122,223.592 339.949,227.289 C341.176,229.771 341.356,230.994 339.036,233.332 C337.741,234.529 336.758,236.616 337.815,238.755 C338.873,240.894 340.763,241.464 342.864,241.078 C344.608,240.757 346.856,241.262 347.914,243.401 C348.971,245.54 347.922,247.608 346.693,248.824 C345.274,250.227 344.416,252.107 345.473,254.246 C346.53,256.385 348.897,256.826 350.522,256.57 C352.248,256.298 354.514,256.754 355.571,258.893 C356.629,261.032 355.62,263.111 354.351,264.316 C352.79,265.797 352.073,267.599 353.131,269.738 C354.188,271.877 355.902,272.456 358.18,272.062 C359.916,271.761 362.172,272.246 363.229,274.385 C364.286,276.524 364.395,277.602 362.009,279.807 C360.714,281.004 359.731,283.091 360.788,285.23 C361.846,287.369 363.736,287.94 365.837,287.553 C367.581,287.233 369.829,287.738 370.887,289.877 C371.944,292.016 370.895,294.084 369.666,295.299 C368.247,296.702 367.389,298.583 368.446,300.722 C369.503,302.861 371.87,303.301 373.495,303.045 C375.221,302.773 377.487,303.23 378.544,305.369 C379.602,307.508 378.593,309.586 377.324,310.791 C375.763,312.273 375.046,314.075 376.104,316.214 C377.161,318.352 378.875,318.931 381.153,318.537 C382.889,318.236 385.145,318.721 386.202,320.86 C387.259,322.999 384.481,324.803 384.982,326.283\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"2\"/>\n      <path d=\"M331.952,220.062 L336.262,220.433 L328.486,213.751 L329.952,223.899 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"2\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"core\">\n      <path d=\"M395.811,281.773 C404.748,281.879 411.083,288.279 415.802,295.181 C406.565,296.915 401.533,305.296 401.126,314.18 C401.126,324.86 408.973,333.517 418.652,333.517 C421.657,333.536 423.371,332.878 425.982,331.661 C426.091,333.569 426.034,332.32 426.078,335.411 C426.027,349.696 420.163,372.829 409.389,383.195 C418.965,385.952 428.377,391.336 429.026,401.581 C429.026,413.456 416.959,423.083 402.074,423.083 C397.126,423.044 392.162,422.068 387.784,419.71 C383.45,422.223 378.407,422.885 373.493,423.083 C358.609,423.083 346.542,413.456 346.542,401.581 C346.945,393.666 351.844,391.657 357.758,386.938 C348.423,373.186 344.484,354.49 344.118,338.253 C344.118,307.845 355.125,283.194 368.701,283.194 C373.362,283.288 377.246,286.053 380.114,289.542 C384.329,284.992 389.565,282.053 395.811,281.773 L395.811,281.773 z\" fill=\"#B4D66F\"/>\n      <path d=\"M395.811,281.773 C404.748,281.879 411.083,288.279 415.802,295.181 C406.565,296.915 401.533,305.296 401.126,314.18 C401.126,324.86 408.973,333.517 418.652,333.517 C421.657,333.536 423.371,332.878 425.982,331.661 C426.091,333.569 426.034,332.32 426.078,335.411 C426.027,349.696 420.163,372.829 409.389,383.195 C418.965,385.952 428.377,391.336 429.026,401.581 C429.026,413.456 416.959,423.083 402.074,423.083 C397.126,423.044 392.162,422.068 387.784,419.71 C383.45,422.223 378.407,422.885 373.493,423.083 C358.609,423.083 346.542,413.456 346.542,401.581 C346.945,393.666 351.844,391.657 357.758,386.938 C348.423,373.186 344.484,354.49 344.118,338.253 C344.118,307.845 355.125,283.194 368.701,283.194 C373.362,283.288 377.246,286.053 380.114,289.542 C384.329,284.992 389.565,282.053 395.811,281.773 L395.811,281.773 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"antenna\">\n      <g id=\"lhcb\">\n        <path d=\"M315.009,292.94 L340.166,292.94 C346.273,292.94 351.224,297.481 351.224,303.083 L351.224,370.767 C351.224,376.368 346.273,380.909 340.166,380.909 L315.009,380.909 C308.902,380.909 303.951,376.368 303.951,370.767 L303.951,303.083 C303.951,297.481 308.902,292.94 315.009,292.94 z\" fill=\"#8CC400\"/>\n        <path d=\"M315.009,292.94 L340.166,292.94 C346.273,292.94 351.224,297.481 351.224,303.083 L351.224,370.767 C351.224,376.368 346.273,380.909 340.166,380.909 L315.009,380.909 C308.902,380.909 303.951,376.368 303.951,370.767 L303.951,303.083 C303.951,297.481 308.902,292.94 315.009,292.94 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"lhcb\">\n        <path d=\"M280.01,292.94 L305.167,292.94 C311.274,292.94 316.225,297.481 316.225,303.083 L316.225,370.767 C316.225,376.368 311.274,380.909 305.167,380.909 L280.01,380.909 C273.903,380.909 268.952,376.368 268.952,370.767 L268.952,303.083 C268.952,297.481 273.903,292.94 280.01,292.94 z\" fill=\"#8CC400\"/>\n        <path d=\"M280.01,292.94 L305.167,292.94 C311.274,292.94 316.225,297.481 316.225,303.083 L316.225,370.767 C316.225,376.368 311.274,380.909 305.167,380.909 L280.01,380.909 C273.903,380.909 268.952,376.368 268.952,370.767 L268.952,303.083 C268.952,297.481 273.903,292.94 280.01,292.94 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"water-split\">\n      <text transform=\"matrix(1, 0, 0, 1, 352.14, 464.889)\">\n        <tspan x=\"-23.062\" y=\"8.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"-5.73\" y=\"8.212\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u2082</tspan>\n        <tspan x=\"4.395\" y=\"8.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">O</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 421.816, 464.889)\">\n        <tspan x=\"-14.396\" y=\"8.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">O</tspan>\n        <tspan x=\"4.271\" y=\"8.212\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u2082</tspan>\n      </text>\n      <g>\n        <path d=\"M353.376,448.164 C353.363,428.717 367.707,412.942 385.413,412.93 C400.189,412.92 412.638,423.889 416.362,438.821\" fill-opacity=\"0\" stroke=\"#3A658B\" stroke-width=\"3\"/>\n        <path d=\"M416.362,438.821 L411.854,436.551 L417.381,447.159 L420.192,435.532 z\" fill=\"#3A658B\" fill-opacity=\"1\" stroke=\"#3A658B\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 503.931, 492.677)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 384.586, 374.195)\" id=\"photosystem-ii-center\">\n      <tspan x=\"-10.509\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"14\" fill=\"#000000\">P</tspan>\n      <tspan x=\"-1.171\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"7\" fill=\"#000000\">680</tspan>\n    </text>\n    <g id=\"cofactors\">\n      <text transform=\"matrix(1, 0, 0, 1, 371.868, 391.909)\">\n        <tspan x=\"-5.657\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Y</tspan>\n        <tspan x=\"1.013\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">z</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 398.541, 403.233)\">\n        <tspan x=\"-15.447\" y=\"2.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">CaMn</tspan>\n        <tspan x=\"11.228\" y=\"2.5\" font-family=\"LucidaGrande\" font-size=\"10\" fill=\"#000000\">\u2084</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 391.413, 317.33)\">\n        <tspan x=\"-5.89\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"1.888\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">B</tspan>\n      </text>\n      <path d=\"M382.041,400.106 L377.867,396.458\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M374.577,365.344 L367.782,356.562\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M364.772,344.205 L367.782,330.704\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M375.812,323.083 L384.362,319.051\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 365.733, 325.923)\">\n        <tspan x=\"-5.89\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"1.888\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 369.095, 352.397)\">\n        <tspan x=\"-11.898\" y=\"1.5\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Pheo</tspan>\n      </text>\n      <path d=\"M377.53,386.298 L383.103,381.544\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"light\">\n      <path d=\"M289.026,275.747 L271.702,255.981 L277.381,253.128 L263.72,229.837 L236.622,245.066 L260.584,261.862 L252.581,267.226 L275.612,283.728 L268.647,286.945 L305.822,313.819 L283.408,279.153 L289.026,275.747 z\" fill=\"#FFEC7F\"/>\n      <path d=\"M263.72,229.837 L277.381,253.128 L271.702,255.981 L289.026,275.747 L289.026,275.747 L283.408,279.153 L305.822,313.819 L268.647,286.945 L275.612,283.728 L252.581,267.226 L260.584,261.862 L236.622,245.066 L263.72,229.837 z M263.354,231.19 L238.497,245.159 L261.158,261.043 L262.353,261.881 L261.141,262.693 L254.336,267.253 L276.195,282.915 L277.591,283.915 L276.031,284.635 L270.618,287.136 L302.088,309.885 L282.569,279.696 L282.01,278.832 L282.89,278.298 L287.488,275.51 L270.949,256.641 L270.098,255.668 L271.253,255.088 L275.978,252.714 L263.354,231.19 z\" fill=\"#000000\"/>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 379.998, 574.538)\">\n        <tspan x=\"-69.445\" y=\"4.5\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Photosystem II</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var photosystemII = function photosystemII() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$coreColor = _ref.coreColor,
    coreColor = _ref$coreColor === void 0 ? "#B4D66F" : _ref$coreColor,
    _ref$lightColor = _ref.lightColor,
    lightColor = _ref$lightColor === void 0 ? "#FFEC7F" : _ref$lightColor,
    _ref$lightSize = _ref.lightSize,
    lightSize = _ref$lightSize === void 0 ? 1 : _ref$lightSize,
    _ref$antennaColor = _ref.antennaColor,
    antennaColor = _ref$antennaColor === void 0 ? "#8BC300" : _ref$antennaColor,
    _ref$antenna = _ref.antenna,
    antenna = _ref$antenna === void 0 ? true : _ref$antenna,
    _ref$light = _ref.light,
    light = _ref$light === void 0 ? true : _ref$light,
    _ref$cofactors = _ref.cofactors,
    cofactors = _ref$cofactors === void 0 ? false : _ref$cofactors,
    _ref$center = _ref.center,
    center = _ref$center === void 0 ? false : _ref$center,
    _ref$reaction = _ref.reaction,
    reaction = _ref$reaction === void 0 ? true : _ref$reaction,
    _ref$fluorescence = _ref.fluorescence,
    fluorescence = _ref$fluorescence === void 0 ? false : _ref$fluorescence,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (coreColor) {
    var coreShape = draw.findOne('#photosystem-ii #core path');
    coreShape.fill(coreColor);
  }
  if (lightColor) {
    var lightShape = draw.findOne('#photosystem-ii #light path');
    lightShape.fill(lightColor);
  }
  if (antennaColor) {
    var antennaShapes = draw.find('#photosystem-ii #antenna path');
    antennaShapes.forEach(function (shape) {
      return shape.fill(antennaColor);
    });
  }
  if (!cofactors) {
    var shape = draw.findOne('#photosystem-ii #cofactors');
    shape.opacity(0);
  }
  if (!center) {
    var _shape = draw.findOne('#photosystem-ii-center');
    _shape.opacity(0);
  }
  if (!antenna) {
    var _shape2 = draw.findOne('#photosystem-ii #antenna');
    _shape2.opacity(0);
  }
  if (!light) {
    var _shape3 = draw.findOne('#photosystem-ii #light');
    _shape3.opacity(0);
  }
  if (!reaction) {
    var _shape4 = draw.findOne('#photosystem-ii #water-split');
    _shape4.opacity(0);
  }
  if (!label) {
    var labelText = draw.findOne('#photosystem-ii #label');
    labelText.opacity(0);
  }
  if (!fluorescence) {
    var group = draw.findOne('#photosystem-ii #fluorescence');
    group.opacity(0);
  }
  if (lightSize) {
    var _shape5 = draw.findOne('#photosystem-ii #light');
    _shape5.transform({
      origin: 'bottom right',
      scale: Number(lightSize)
    });
  }
  if (position) {
    var move = draw.findOne('#photosystem-ii');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photosystemII);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#photosystem-ii');
  return {
    "id": "photosystem-ii",
    "headerTitle": "Photosystem II",
    "show": true,
    "options": [{
      "type": "check",
      "name": "antenna",
      "value": true,
      "label": "Antenna"
    }, {
      "type": "check",
      "name": "light",
      "value": true,
      "label": "Light"
    }, {
      "type": "check",
      "name": "center",
      "value": false,
      "label": "Reaction Center"
    }, {
      "type": "check",
      "name": "cofactors",
      "value": false,
      "label": "Cofactors"
    }, {
      "type": "check",
      "name": "reaction",
      "value": true,
      "label": "Water Split Reaction"
    }, {
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "check",
      "name": "fluorescence",
      "value": false,
      "label": "Fluorescence"
    }, {
      "type": "color",
      "name": "coreColor",
      "value": "#B4D66F",
      "label": "Core Color"
    }, {
      "type": "color",
      "name": "lightColor",
      "value": "#FFEC7F",
      "label": "Light Color"
    }, {
      "type": "color",
      "name": "antennaColor",
      "value": "#8BC300",
      "label": "Antenna Color"
    }, {
      "type": "range",
      "name": "lightSize",
      "value": 1,
      "label": "Light (Size)",
      "step": "0.1",
      "min": "0.5",
      "max": "1.5"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/plastocyanin.js":
/*!****************************************!*\
  !*** ./src/components/plastocyanin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Plastocyanin
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"plastocyanin\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill=\"#5B9BD5\"/>\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"cofactor\">\n      <text transform=\"matrix(1, 0, 0, 1, 774.896, 438.433)\">\n        <tspan x=\"-14.586\" y=\"5.378\" font-family=\"ArialMT\" font-size=\"10\" fill=\"#000000\">Cu</tspan>\n        <tspan x=\"-1.586\" y=\"2.078\" font-family=\"ArialMT\" font-size=\"6\" fill=\"#000000\">2+</tspan>\n      </text>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 768.896, 480.233)\">\n      <tspan x=\"-14.586\" y=\"5.378\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">Pc</tspan>\n    </text>\n  </g>\n</svg>";
var plastocyanin = function plastocyanin() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#5B9BD5' : _ref$color,
    _ref$cofactor = _ref.cofactor,
    cofactor = _ref$cofactor === void 0 ? false : _ref$cofactor,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  var path = draw.findOne('#plastocyanin #shape path');
  path.fill(color);
  if (!cofactor) {
    var shape = draw.findOne('#plastocyanin #cofactor');
    shape.opacity(0);
  }
  if (!label) {
    var text = draw.findOne('#plastocyanin > text');
    text.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#plastocyanin');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plastocyanin);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#plastocyanin');
  return {
    "id": "plastocyanin",
    "headerTitle": "Plastocyanin",
    "show": true,
    "options": [{
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "check",
      "name": "cofactor",
      "value": false,
      "label": "Cofactor"
    }, {
      "type": "color",
      "name": "color",
      "value": "#5B9BD5",
      "label": "Shape Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Plastocyanin (Pc) is a copper (Cu\xB2\u207A) containing, lumen localized protein, transfering electrons from cytochrome <em>f</em> to P\u2087\u2080\u2080.";
};

/***/ }),

/***/ "./src/components/plastoquinone.js":
/*!*****************************************!*\
  !*** ./src/components/plastoquinone.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Plastoquinone
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"plastoquinone\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M519.983,354.984 L510.134,337.925 L519.983,320.865 L539.681,320.865 L549.53,337.925 L539.681,354.984 z\" fill=\"#FFE698\"/>\n      <path d=\"M519.983,354.984 L510.134,337.925 L519.983,320.865 L539.681,320.865 L549.53,337.925 L539.681,354.984 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 529.332, 390.225)\">\n      <tspan x=\"-45.271\" y=\"5.689\" font-family=\"ArialMT\" font-size=\"21\" fill=\"#000000\">PQ/PQH</tspan>\n      <tspan x=\"36.412\" y=\"5.689\" font-family=\"LucidaGrande\" font-size=\"21\" fill=\"#000000\">\u2082</tspan>\n    </text>\n  </g>\n</svg>";
var plastoquinone = function plastoquinone() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#FFE698' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  var path = draw.findOne('#plastoquinone #shape path');
  path.fill(color);
  if (!label) {
    var text = draw.findOne('#plastoquinone text');
    text.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#plastoquinone');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plastoquinone);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#plastoquinone');
  return {
    "id": "plastoquinone",
    "headerTitle": "Plastoquinone",
    "show": true,
    "options": [{
      "type": "check",
      "name": "label",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "color",
      "value": "#FFE698",
      "label": "Shape Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Plastoquinone/Plastoquinol (PQ/PQH\u2082)";
};

/***/ }),

/***/ "./src/components/proton-flux.js":
/*!***************************************!*\
  !*** ./src/components/proton-flux.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Proton Flux
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"proton-flux\" transform=\"translate(0, 0)\">\n    <g>\n      <g id=\"ps-ii-atp-synthase\">\n        <path d=\"M997.144,487.575 C918.689,503.493 853.657,513.312 766.726,513.312 C664.863,513.312 581.4,508.078 522.072,496.247\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M997.144,487.575 L995.242,492.251 L1005.374,485.892 L993.559,484.021 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g id=\"h2o_lumen\">\n        <path d=\"M489.463,462.261 C480.427,446.861 450.435,434.397 427.051,425.211\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M489.463,462.261 L484.632,460.797 L491.895,470.301 L492.672,458.365 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"atp-synthase\">\n      <g>\n        <path d=\"M1124.963,99.587 C1103.894,118.51 1091.082,134.839 1091.082,156.221 L1091.082,407.359 C1091.082,434.065 1067.677,456.142 1050.138,471.697\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1124.963,99.587 L1125.626,104.591 L1131.28,94.05 L1120.089,98.274 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 1151.418, 85.829)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1030.685, 480.747)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n    </g>\n    <g id=\"stroma-ps-ii\">\n      <g>\n        <path d=\"M415.571,253.347 C414.877,268.923 422.449,282.144 430.181,292.514\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M430.181,292.514 L425.149,292.917 L435.383,299.109 L431.745,287.714 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 420.743, 237.847)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n    </g>\n    <g id=\"stroma-b6f\">\n      <g>\n        <path d=\"M626.694,254.347 C627.388,269.923 619.816,283.144 612.084,293.514\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M612.084,293.514 L610.52,288.714 L606.882,300.109 L617.115,293.917 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 631.035, 238.847)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n    </g>\n    <g id=\"b6f-lumen\">\n      <g>\n        <path d=\"M628.978,366.195 C599.455,375.608 595.214,405.38 621.862,421.125\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M621.862,421.125 L617.513,423.689 L629.425,424.78 L621.168,416.126 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 652.013, 433.79)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"3.604\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u207A</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var protonFlux = function protonFlux() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$atp_synthase = _ref.atp_synthase,
    atp_synthase = _ref$atp_synthase === void 0 ? true : _ref$atp_synthase,
    _ref$stroma_ps_ii = _ref.stroma_ps_ii,
    stroma_ps_ii = _ref$stroma_ps_ii === void 0 ? true : _ref$stroma_ps_ii,
    _ref$stroma_b6f = _ref.stroma_b6f,
    stroma_b6f = _ref$stroma_b6f === void 0 ? true : _ref$stroma_b6f,
    _ref$b6f_lumen = _ref.b6f_lumen,
    b6f_lumen = _ref$b6f_lumen === void 0 ? true : _ref$b6f_lumen,
    _ref$ps_ii_atp_syntha = _ref.ps_ii_atp_synthase,
    ps_ii_atp_synthase = _ref$ps_ii_atp_syntha === void 0 ? true : _ref$ps_ii_atp_syntha,
    _ref$h2o_lumen = _ref.h2o_lumen,
    h2o_lumen = _ref$h2o_lumen === void 0 ? true : _ref$h2o_lumen,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (!atp_synthase) {
    var shape = draw.findOne('#atp-synthase');
    shape.opacity(0);
  }
  if (!stroma_ps_ii) {
    var _shape = draw.findOne('#stroma-ps-ii');
    _shape.opacity(0);
  }
  if (!stroma_b6f) {
    var _shape2 = draw.findOne('#stroma-b6f');
    _shape2.opacity(0);
  }
  if (!b6f_lumen) {
    var _shape3 = draw.findOne('#b6f-lumen');
    _shape3.opacity(0);
  }
  if (!ps_ii_atp_synthase) {
    var _shape4 = draw.findOne('#ps-ii-atp-synthase');
    _shape4.opacity(0);
  }
  if (!h2o_lumen) {
    var _shape5 = draw.findOne('#h2o_lumen');
    _shape5.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#proton-flux');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (protonFlux);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#proton-flux');
  return {
    "id": "proton-flux",
    "headerTitle": "Proton Flux",
    "show": true,
    "options": [{
      "type": "check",
      "name": "h2o_lumen",
      "value": true,
      "label": "H₂O → Lumen"
    }, {
      "type": "check",
      "name": "ps_ii_atp_synthase",
      "value": true,
      "label": "Lumen → ATP-Synthase"
    }, {
      "type": "check",
      "name": "atp_synthase",
      "value": true,
      "label": "ATP-Synthase"
    }, {
      "type": "check",
      "name": "stroma_ps_ii",
      "value": true,
      "label": "Stroma → Photosystem II"
    }, {
      "type": "check",
      "name": "stroma_b6f",
      "value": true,
      "label": "Stroma  → Cytochrome b₆f"
    }, {
      "type": "check",
      "name": "b6f_lumen",
      "value": true,
      "label": "Cytochrome b₆f → Lumen"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Ligh blue arrows indicate the transfer of protons (H\u207A)";
};

/***/ }),

/***/ "./src/components/ptox.js":
/*!********************************!*\
  !*** ./src/components/ptox.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * PTOX
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ptox\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M529.832,302.301 C511.558,302.301 496.745,292.471 496.745,280.346 C496.745,268.22 511.558,258.39 529.832,258.39 C548.106,258.39 562.919,268.22 562.919,280.346 C562.919,292.471 548.106,302.301 529.832,302.301 z\" fill=\"#C2AAFF\"/>\n      <path d=\"M529.832,302.301 C511.558,302.301 496.745,292.471 496.745,280.346 C496.745,268.22 511.558,258.39 529.832,258.39 C548.106,258.39 562.919,268.22 562.919,280.346 C562.919,292.471 548.106,302.301 529.832,302.301 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 529.332, 279.846)\">\n      <tspan x=\"-24.341\" y=\"5.5\" font-family=\"ArialMT\" font-size=\"18\" fill=\"#000000\">PTOX</tspan>\n    </text>\n    <g id=\"reaction\">\n      <g>\n        <path d=\"M561.614,243.741 C551.06,257.538 541.669,265.828 529.576,265.828 C513.595,265.828 500.385,248.871 491.077,236.166\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M561.614,243.741 L563.345,248.483 L566.582,236.968 L556.571,243.515 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 490.177, 218.32)\">\n        <tspan x=\"-14.396\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">O</tspan>\n        <tspan x=\"4.271\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u2082</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 570.337, 218.32)\">\n        <tspan x=\"-23.062\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">H</tspan>\n        <tspan x=\"-5.73\" y=\"8\" font-family=\"LucidaGrande\" font-size=\"24\" fill=\"#000000\">\u2082</tspan>\n        <tspan x=\"4.395\" y=\"8\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">O</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var ptox = function ptox() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$reaction = _ref.reaction,
    reaction = _ref$reaction === void 0 ? true : _ref$reaction,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#C2AAFF' : _ref$color,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);
  if (color) {
    var shape = draw.findOne('#ptox #shape path');
    shape.fill(color);
  }
  if (!reaction) {
    var _shape = draw.findOne('#ptox #reaction');
    _shape.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#ptox');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ptox);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#ptox');
  return {
    "id": "ptox",
    "headerTitle": "PTOX",
    "show": false,
    "options": [{
      "type": "check",
      "name": "reaction",
      "value": true,
      "label": "Reaction"
    }, {
      "type": "color",
      "name": "color",
      "value": "#C2AAFF",
      "label": "Shape Color"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Plastid terminal oxidase (PTOX)";
};

/***/ }),

/***/ "./src/components/quenching.js":
/*!*************************************!*\
  !*** ./src/components/quenching.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Quenching
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"quenching\" transform=\"translate(0, 0)\">\n    <g id=\"pmf\">\n      <g>\n        <path d=\"M134.204,442.013 C167.869,484.817 173.944,489.253 214.047,506.28 C248.338,520.839 363.007,515.226 393.063,515.933\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M134.204,442.013 L139.956,441.572 L128.283,434.456 L132.398,447.492 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M260.647,406.851 C273.605,452.142 303.979,490.827 345.682,509.239 C381.841,525.203 455.614,508.552 480.194,498.857\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M260.647,406.851 L266.082,408.783 L258.306,397.54 L256.772,411.125 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"qi\">\n      <text transform=\"matrix(1, 0, 0, 1, 84.384, 180.776)\">\n        <tspan x=\"-10.008\" y=\"7.455\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">qI</tspan>\n      </text>\n      <g>\n        <path d=\"M114.6,163.212 L144.5,139.069\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"8,8\"/>\n        <path d=\"M114.6,163.212 L114.074,157.468 L107.131,169.244 L120.105,164.937 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"qe\">\n      <g>\n        <path d=\"M205.418,405.643 L235.318,381.499\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"8,8\"/>\n        <path d=\"M205.418,405.643 L204.892,399.898 L197.949,411.674 L210.923,407.367 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 181.616, 428.793)\">\n        <tspan x=\"-14.678\" y=\"7.455\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">qE</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var quenching = function quenching() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$qe = _ref.qe,
    qe = _ref$qe === void 0 ? true : _ref$qe,
    _ref$qi = _ref.qi,
    qi = _ref$qi === void 0 ? true : _ref$qi,
    _ref$pmf = _ref.pmf,
    pmf = _ref$pmf === void 0 ? true : _ref$pmf,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!qe) {
    var group = draw.findOne('#quenching #qe');
    group.opacity(0);
  }
  if (!qi) {
    var _group = draw.findOne('#quenching #qi');
    _group.opacity(0);
  }
  if (!pmf) {
    var _group2 = draw.findOne('#quenching #pmf');
    _group2.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#quenching');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quenching);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#quenching');
  return {
    "id": "quenching",
    "headerTitle": "Quenching",
    "show": false,
    "options": [{
      "type": "check",
      "name": "qe",
      "value": true,
      "label": "qE"
    }, {
      "type": "check",
      "name": "qi",
      "value": true,
      "label": "qI"
    }, {
      "type": "check",
      "name": "pmf",
      "value": true,
      "label": "<em>pmf</em>"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/stroma.js":
/*!**********************************!*\
  !*** ./src/components/stroma.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Stroma
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <defs>\n    <linearGradient id=\"Gradient_1\" gradientUnits=\"userSpaceOnUse\" x1=\"700\" y1=\"0\" x2=\"700\" y2=\"296.004\">\n      <stop offset=\"0.566\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"/>\n      <stop offset=\"1\" stop-color=\"#0070C4\"/>\n    </linearGradient>\n  </defs>\n  <g id=\"stroma\" transform=\"translate(0, 0)\">\n    <text transform=\"matrix(1, 0, 0, 1, 1355.338, 279.014)\">\n      <tspan x=\"-34.518\" y=\"7.212\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">stroma</tspan>\n    </text>\n    <path d=\"M-0,0 L1400,0 L1400,296.004 L-0,296.004 L-0,0 z\" fill=\"url(#Gradient_1)\" id=\"shape\" opacity=\"0.123\"/>\n  </g>\n</svg>";
var stroma = function stroma() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#0070C4' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'stroma' : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel;
  var draw = SVG();
  draw.svg(el);
  var defsGradient = draw.defs().find('#Gradient_1 stop');
  defsGradient.each(function (stop) {
    if (stop.attr('offset') == 1) stop.attr('stop-color', color);
  });
  var tspan = draw.findOne('#stroma tspan');
  tspan.text(label);
  if (!showLabel) {
    tspan = draw.findOne('#stroma text');
    tspan.opacity(0);
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stroma);
var settings = function settings() {
  return {
    "id": "stroma",
    "headerTitle": "Stroma",
    "show": true,
    "options": [{
      "type": "text",
      "name": "label",
      "value": "stroma",
      "label": "Label"
    }, {
      "type": "check",
      "name": "showLabel",
      "value": true,
      "label": "Label"
    }, {
      "type": "color",
      "name": "color",
      "value": "#0070C4",
      "label": "Background Gradient"
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/thylakoidmembrane.js":
/*!*********************************************!*\
  !*** ./src/components/thylakoidmembrane.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * Thylakoid Membrane
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"thylakoidmembrane\" transform=\"translate(0, 0)\">\n    <path d=\"M-0,296.004 L1400,296.004 L1400,376.004 L-0,376.004 L-0,296.004 z\" fill=\"#DBDBDB\"/>\n    <path d=\"M0.5,296.504 L1400.5,296.504\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    <path d=\"M0.5,376.504 L1400.5,376.504\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n  </g>\n</svg>";
var thylakoidmembrane = function thylakoidmembrane() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#DBDBDB' : _ref$color;
  var draw = SVG();
  draw.svg(el);
  var path = draw.findOne('#thylakoidmembrane path');
  path.fill(color);
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thylakoidmembrane);
var settings = function settings() {
  return {
    "id": "thylakoidmembrane",
    "headerTitle": "Thylakoid Membrane",
    "show": true,
    "options": [{
      "type": "color",
      "name": "color",
      "value": "#DBDBDB",
      "label": "Background"
    }]
  };
};
var legend = function legend() {
  return "";
};

/***/ }),

/***/ "./src/components/vdx.js":
/*!*******************************!*\
  !*** ./src/components/vdx.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "legend": () => (/* binding */ legend),
/* harmony export */   "settings": () => (/* binding */ settings)
/* harmony export */ });
/**
 * VDX
 */

var el = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"vdx\" transform=\"translate(0, 0)\">\n    <g id=\"pathway\">\n      <g>\n        <path d=\"M67.486,315.033 C79.998,302.088 91.109,294.301 105.432,294.301 C124.28,294.301 139.86,310.091 150.838,321.922\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M67.486,315.033 L66.312,310.124 L61.772,321.191 L72.469,315.838 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M184.506,335.088 L216.647,335.088\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M216.647,335.088 L213.847,339.288 L225.047,335.088 L213.847,330.888 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M144.445,357.925 C131.933,370.871 120.823,378.657 106.499,378.657 C87.651,378.657 72.071,362.868 61.093,351.037\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M144.445,357.925 L145.619,362.835 L150.159,351.768 L139.462,357.121 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 45.556, 335.979)\">\n        <tspan x=\"-8.004\" y=\"7.455\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">V</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 165.375, 335.979)\">\n        <tspan x=\"-7.33\" y=\"7.455\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">Z</tspan>\n      </text>\n    </g>\n    <g id=\"vde\">\n      <g>\n        <path d=\"M105.966,427.106 C87.692,427.106 72.878,417.276 72.878,405.151 C72.878,393.025 87.692,383.195 105.966,383.195 C124.239,383.195 139.053,393.025 139.053,405.151 C139.053,417.276 124.239,427.106 105.966,427.106 z\" fill=\"#A9D18E\"/>\n        <path d=\"M105.966,427.106 C87.692,427.106 72.878,417.276 72.878,405.151 C72.878,393.025 87.692,383.195 105.966,383.195 C124.239,383.195 139.053,393.025 139.053,405.151 C139.053,417.276 124.239,427.106 105.966,427.106 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 105.466, 404.651)\">\n        <tspan x=\"-24.674\" y=\"7.5\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">VDE</tspan>\n      </text>\n    </g>\n    <g id=\"ze\">\n      <g>\n        <path d=\"M105.966,291.597 C87.692,291.597 72.878,281.767 72.878,269.641 C72.878,257.516 87.692,247.686 105.966,247.686 C124.239,247.686 139.053,257.516 139.053,269.641 C139.053,281.767 124.239,291.597 105.966,291.597 z\" fill=\"#FFE698\"/>\n        <path d=\"M105.966,291.597 C87.692,291.597 72.878,281.767 72.878,269.641 C72.878,257.516 87.692,247.686 105.966,247.686 C124.239,247.686 139.053,257.516 139.053,269.641 C139.053,281.767 124.239,291.597 105.966,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 105.466, 269.141)\">\n        <tspan x=\"-15.334\" y=\"7.5\" font-family=\"ArialMT\" font-size=\"24\" fill=\"#000000\">ZE</tspan>\n      </text>\n    </g>\n    <g id=\"psbs\">\n      <g id=\"psbs\">\n        <path d=\"M245.618,293.94 L270.775,293.94 C276.882,293.94 281.833,298.481 281.833,304.083 L281.833,371.767 C281.833,377.368 276.882,381.909 270.775,381.909 L245.618,381.909 C239.511,381.909 234.56,377.368 234.56,371.767 L234.56,304.083 C234.56,298.481 239.511,293.94 245.618,293.94 z\" fill=\"#6C9700\"/>\n        <path d=\"M245.618,293.94 L270.775,293.94 C276.882,293.94 281.833,298.481 281.833,304.083 L281.833,371.767 C281.833,377.368 276.882,381.909 270.775,381.909 L245.618,381.909 C239.511,381.909 234.56,377.368 234.56,371.767 L234.56,304.083 C234.56,298.481 239.511,293.94 245.618,293.94 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 257.822, 367.077)\">\n        <tspan x=\"-16.731\" y=\"4.073\" font-family=\"ArialMT\" font-size=\"14\" fill=\"#000000\">PsbS</tspan>\n      </text>\n    </g>\n  </g>\n</svg>";
var vdx = function vdx() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$ze = _ref.ze,
    ze = _ref$ze === void 0 ? true : _ref$ze,
    _ref$vde = _ref.vde,
    vde = _ref$vde === void 0 ? true : _ref$vde,
    _ref$psbs = _ref.psbs,
    psbs = _ref$psbs === void 0 ? true : _ref$psbs,
    _ref$pathway = _ref.pathway,
    pathway = _ref$pathway === void 0 ? true : _ref$pathway,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!ze) {
    var shape = draw.findOne('#vdx #ze');
    shape.opacity(0);
  }
  if (!vde) {
    var _shape = draw.findOne('#vdx #vde');
    _shape.opacity(0);
  }
  if (!psbs) {
    var _shape2 = draw.findOne('#vdx #psbs');
    _shape2.opacity(0);
  }
  if (!pathway) {
    var _shape3 = draw.findOne('#vdx #pathway');
    _shape3.opacity(0);
  }
  if (position) {
    var move = draw.findOne('#vdx');
    move.transform({
      translateX: position - move.x()
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (vdx);
var settings = function settings() {
  var draw = SVG();
  draw.svg(el);
  var move = draw.findOne('#vdx');
  return {
    "id": "vdx",
    "headerTitle": "VDX",
    "show": false,
    "options": [{
      "type": "check",
      "name": "ze",
      "value": true,
      "label": "ZE"
    }, {
      "type": "check",
      "name": "vde",
      "value": true,
      "label": "VDE"
    }, {
      "type": "check",
      "name": "psbs",
      "value": true,
      "label": "PsbS"
    }, {
      "type": "check",
      "name": "pathway",
      "value": true,
      "label": "Pathway"
    }, {
      "type": "range",
      "name": "position",
      "value": move.x(),
      "label": "Position",
      "step": "1",
      "min": "0",
      "max": 1400 - move.width()
    }]
  };
};
var legend = function legend() {
  return "Zeaxanthin epoxidase (ZE) Violaxanthin de-epoxidase (VDE) Violaxanthin (V) \n  Zeaxanthin (Z) Psbs";
};

/***/ }),

/***/ "./src/constants/presets.js":
/*!**********************************!*\
  !*** ./src/constants/presets.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var presets = {
  'Complexes': [{
    title: 'Photosystem II',
    settings: {
      "photosystem-ii.show": "true",
      "photosystem-ii.options[0].antenna": "true",
      "photosystem-ii.options[1].light": "true",
      "photosystem-ii.options[3].center": "true",
      "photosystem-ii.options[4].cofactors": "true",
      "photosystem-ii.options[5].reaction": "true",
      "photosystem-ii.options[6].label": "true",
      "photosystem-ii.options[7].coreColor": "#b4d66f",
      "photosystem-ii.options[8].lightColor": "#ffec7f",
      "photosystem-ii.options[9].antennaColor": "#8bc300",
      "photosystem-ii.options[10].lightSize": "1",
      "photosystem-ii.options[11].position": "516",
      "photosystem-i.options[2].light": "true",
      "photosystem-i.options[3].antenna": "true",
      "photosystem-i.options[4].label": "true",
      "photosystem-i.options[5].coreColor": "#0cb04b",
      "photosystem-i.options[6].lightColor": "#ffec7f",
      "photosystem-i.options[7].antennaColor": "#008000",
      "photosystem-i.options[8].lightSize": "1",
      "photosystem-i.options[9].position": "730",
      "cytochrome-b6f.options[1].rieske": "true",
      "cytochrome-b6f.options[2].label": "true",
      "cytochrome-b6f.options[3].coreColor": "#b2c7da",
      "cytochrome-b6f.options[4].rieskeColor": "#b2c7da",
      "cytochrome-b6f.options[5].position": "581",
      "atpsynthase.options[1].reaction": "true",
      "atpsynthase.options[2].label": "true",
      "atpsynthase.options[3].cRingColor": "#e4d3bd",
      "atpsynthase.options[4].alphaSubunitColor": "#d6c2ad",
      "atpsynthase.options[5].betaSubunitColor": "#c7b29e",
      "atpsynthase.options[6].gammaSubunitColor": "#f6e8d7",
      "atpsynthase.options[7].iSubunitColor": "#c7b29e",
      "atpsynthase.options[8].iiSubunitColor": "#e4d3bd",
      "atpsynthase.options[9].position": "999",
      "ion-channels.options[0].kChannel": "true",
      "ion-channels.options[1].caChannel": "true",
      "ion-channels.options[2].label": "true",
      "ion-channels.options[4].position": "1182",
      "plastoquinone.show": "true",
      "plastoquinone.options[0].label": "true",
      "plastoquinone.options[1].color": "#ffe698",
      "plastoquinone.options[2].position": "766",
      "ferredoxin.options[0].label": "true",
      "ferredoxin.options[1].color": "#a08c79",
      "ferredoxin.options[2].position": "838",
      "cytochrome-c6.options[0].label": "true",
      "cytochrome-c6.options[2].color": "#ff2b2b",
      "cytochrome-c6.options[3].position": "735",
      "plastocyanin.options[0].label": "true",
      "plastocyanin.options[2].color": "#5b9bd5",
      "plastocyanin.options[3].position": "748",
      "fnr.options[0].reaction": "true",
      "fnr.options[1].label": "true",
      "fnr.options[2].color": "#eecc00",
      "fnr.options[3].position": "790",
      "ptox.options[0].reaction": "true",
      "ptox.options[1].color": "#c2aaff",
      "ptox.options[2].position": "476",
      "thylakoidmembrane.show": "true",
      "thylakoidmembrane.options[0].color": "#dbdbdb",
      "stroma.show": "true",
      "stroma.options[0].label": "stroma",
      "stroma.options[1].showLabel": "true",
      "lumen.show": "true",
      "lumen.options[0].label": "lumen",
      "lumen.options[1].showLabel": "true",
      "lumen.options[2].color": "#ffe5e5",
      "electron-flux.show": "true",
      "electron-flux.options[0].ps_ii_to_pq": "true",
      "electron-flux.options[7].position": "694",
      "proton-flux.show": "true",
      "proton-flux.options[0].h2o_lumen": "true",
      "proton-flux.options[3].stroma_ps_ii": "true",
      "proton-flux.options[6].position": "693",
      "ion-flux.options[0].kChannel": "true",
      "ion-flux.options[1].caChannel": "true",
      "ion-flux.options[2].position": "1189",
      "photosystem-ii-repair.options[0].antenna": "true",
      "photosystem-ii-repair.options[1].light": "true",
      "photosystem-ii-repair.options[2].d1": "true",
      "photosystem-ii-repair.options[3].cycle": "true",
      "photosystem-ii-repair.options[4].coreColor": "#b4d66f",
      "photosystem-ii-repair.options[5].lightColor": "#ffec7f",
      "photosystem-ii-repair.options[6].antennaColor": "#8bc300",
      "photosystem-ii-repair.options[7].lightSize": "1",
      "photosystem-ii-repair.options[8].position": "110",
      "vdx.options[0].ze": "true",
      "vdx.options[1].vde": "true",
      "vdx.options[2].psbs": "true",
      "vdx.options[3].pathway": "true",
      "vdx.options[4].position": "38",
      "regulation.options[0].qe": "true",
      "regulation.options[1].qi": "true",
      "regulation.options[2].pmf": "true",
      "regulation.options[3].position": "74",
      "photosystem-ii.options[2].fluorescence": "false",
      "photosystem-i.show": "false",
      "photosystem-i.options[0].center": "false",
      "photosystem-i.options[1].cofactors": "false",
      "cytochrome-b6f.show": "false",
      "cytochrome-b6f.options[0].cofactors": "false",
      "atpsynthase.show": "false",
      "atpsynthase.options[0].subunits": "false",
      "ion-channels.show": "false",
      "ion-channels.options[3].pmf": "false",
      "ferredoxin.show": "false",
      "cytochrome-c6.show": "false",
      "cytochrome-c6.options[1].cofactor": "false",
      "plastocyanin.show": "false",
      "plastocyanin.options[1].cofactor": "false",
      "fnr.show": "false",
      "ptox.show": "false",
      "electron-flux.options[1].flow_q_cycle": "false",
      "electron-flux.options[2].b6f_to_pc": "false",
      "electron-flux.options[3].pc_to_ps_i": "false",
      "electron-flux.options[4].ps_i_to_fd": "false",
      "electron-flux.options[5].fd_to_fnr": "false",
      "electron-flux.options[6].fd_to_cyt_b6f": "false",
      "proton-flux.options[1].ps_ii_atp_synthase": "false",
      "proton-flux.options[2].atp_synthase": "false",
      "proton-flux.options[4].stroma_b6f": "false",
      "proton-flux.options[5].b6f_lumen": "false",
      "ion-flux.show": "false",
      "photosystem-ii-repair.show": "false",
      "vdx.show": "false",
      "regulation.show": "false"
    }
  }, {
    title: 'Cytochrome b₆f',
    settings: {
      "photosystem-ii.options[0].antenna": "true",
      "photosystem-ii.options[1].light": "true",
      "photosystem-ii.options[5].reaction": "true",
      "photosystem-ii.options[6].label": "true",
      "photosystem-ii.options[7].coreColor": "#b4d66f",
      "photosystem-ii.options[8].lightColor": "#ffec7f",
      "photosystem-ii.options[9].antennaColor": "#8bc300",
      "photosystem-ii.options[10].lightSize": "1",
      "photosystem-ii.options[11].position": "237",
      "photosystem-i.options[2].light": "true",
      "photosystem-i.options[3].antenna": "true",
      "photosystem-i.options[4].label": "true",
      "photosystem-i.options[5].coreColor": "#0cb04b",
      "photosystem-i.options[6].lightColor": "#ffec7f",
      "photosystem-i.options[7].antennaColor": "#008000",
      "photosystem-i.options[8].lightSize": "1",
      "photosystem-i.options[9].position": "730",
      "cytochrome-b6f.show": "true",
      "cytochrome-b6f.options[0].cofactors": "true",
      "cytochrome-b6f.options[1].rieske": "true",
      "cytochrome-b6f.options[2].label": "true",
      "cytochrome-b6f.options[3].coreColor": "#b2c7da",
      "cytochrome-b6f.options[4].rieskeColor": "#b2c7da",
      "cytochrome-b6f.options[5].position": "623",
      "atpsynthase.options[1].reaction": "true",
      "atpsynthase.options[2].label": "true",
      "atpsynthase.options[3].cRingColor": "#e4d3bd",
      "atpsynthase.options[4].alphaSubunitColor": "#d6c2ad",
      "atpsynthase.options[5].betaSubunitColor": "#c7b29e",
      "atpsynthase.options[6].gammaSubunitColor": "#f6e8d7",
      "atpsynthase.options[7].iSubunitColor": "#c7b29e",
      "atpsynthase.options[8].iiSubunitColor": "#e4d3bd",
      "atpsynthase.options[9].position": "999",
      "ion-channels.options[0].kChannel": "true",
      "ion-channels.options[1].caChannel": "true",
      "ion-channels.options[2].label": "true",
      "ion-channels.options[4].position": "1182",
      "plastoquinone.show": "true",
      "plastoquinone.options[0].label": "true",
      "plastoquinone.options[1].color": "#ffe698",
      "plastoquinone.options[2].position": "518",
      "ferredoxin.options[0].label": "true",
      "ferredoxin.options[1].color": "#a08c79",
      "ferredoxin.options[2].position": "838",
      "cytochrome-c6.options[0].label": "true",
      "cytochrome-c6.options[2].color": "#ff2b2b",
      "cytochrome-c6.options[3].position": "735",
      "plastocyanin.show": "true",
      "plastocyanin.options[0].label": "true",
      "plastocyanin.options[2].color": "#5b9bd5",
      "plastocyanin.options[3].position": "796",
      "fnr.options[0].reaction": "true",
      "fnr.options[1].label": "true",
      "fnr.options[2].color": "#eecc00",
      "fnr.options[3].position": "790",
      "ptox.options[0].reaction": "true",
      "ptox.options[1].color": "#c2aaff",
      "ptox.options[2].position": "476",
      "thylakoidmembrane.show": "true",
      "thylakoidmembrane.options[0].color": "#dbdbdb",
      "stroma.show": "true",
      "stroma.options[0].label": "stroma",
      "stroma.options[1].showLabel": "true",
      "lumen.show": "true",
      "lumen.options[0].label": "lumen",
      "lumen.options[1].showLabel": "true",
      "lumen.options[2].color": "#ffe5e5",
      "electron-flux.show": "true",
      "electron-flux.options[1].flow_q_cycle": "true",
      "electron-flux.options[2].b6f_to_pc": "true",
      "electron-flux.options[7].position": "455",
      "proton-flux.show": "true",
      "proton-flux.options[4].stroma_b6f": "true",
      "proton-flux.options[5].b6f_lumen": "true",
      "proton-flux.options[6].position": "442",
      "ion-flux.options[0].kChannel": "true",
      "ion-flux.options[1].caChannel": "true",
      "ion-flux.options[2].position": "1189",
      "photosystem-ii-repair.options[0].antenna": "true",
      "photosystem-ii-repair.options[1].light": "true",
      "photosystem-ii-repair.options[2].d1": "true",
      "photosystem-ii-repair.options[3].cycle": "true",
      "photosystem-ii-repair.options[4].coreColor": "#b4d66f",
      "photosystem-ii-repair.options[5].lightColor": "#ffec7f",
      "photosystem-ii-repair.options[6].antennaColor": "#8bc300",
      "photosystem-ii-repair.options[7].lightSize": "1",
      "photosystem-ii-repair.options[8].position": "110",
      "vdx.options[0].ze": "true",
      "vdx.options[1].vde": "true",
      "vdx.options[2].psbs": "true",
      "vdx.options[3].pathway": "true",
      "vdx.options[4].position": "38",
      "regulation.options[0].qe": "true",
      "regulation.options[1].qi": "true",
      "regulation.options[2].pmf": "true",
      "regulation.options[3].position": "74",
      "photosystem-ii.show": "false",
      "photosystem-ii.options[2].fluorescence": "false",
      "photosystem-ii.options[3].center": "false",
      "photosystem-ii.options[4].cofactors": "false",
      "photosystem-i.show": "false",
      "photosystem-i.options[0].center": "false",
      "photosystem-i.options[1].cofactors": "false",
      "atpsynthase.show": "false",
      "atpsynthase.options[0].subunits": "false",
      "ion-channels.show": "false",
      "ion-channels.options[3].pmf": "false",
      "ferredoxin.show": "false",
      "cytochrome-c6.show": "false",
      "cytochrome-c6.options[1].cofactor": "false",
      "plastocyanin.options[1].cofactor": "false",
      "fnr.show": "false",
      "ptox.show": "false",
      "electron-flux.options[0].ps_ii_to_pq": "false",
      "electron-flux.options[3].pc_to_ps_i": "false",
      "electron-flux.options[4].ps_i_to_fd": "false",
      "electron-flux.options[5].fd_to_fnr": "false",
      "electron-flux.options[6].fd_to_cyt_b6f": "false",
      "proton-flux.options[0].h2o_lumen": "false",
      "proton-flux.options[1].ps_ii_atp_synthase": "false",
      "proton-flux.options[2].atp_synthase": "false",
      "proton-flux.options[3].stroma_ps_ii": "false",
      "ion-flux.show": "false",
      "photosystem-ii-repair.show": "false",
      "vdx.show": "false",
      "regulation.show": "false"
    }
  }, {
    title: 'Photosystem I',
    settings: {
      "photosystem-ii.options[0].antenna": "true",
      "photosystem-ii.options[1].light": "true",
      "photosystem-ii.options[5].reaction": "true",
      "photosystem-ii.options[6].label": "true",
      "photosystem-ii.options[7].coreColor": "#b4d66f",
      "photosystem-ii.options[8].lightColor": "#ffec7f",
      "photosystem-ii.options[9].antennaColor": "#8bc300",
      "photosystem-ii.options[10].lightSize": "1",
      "photosystem-ii.options[11].position": "237",
      "photosystem-i.show": "true",
      "photosystem-i.options[0].center": "true",
      "photosystem-i.options[1].cofactors": "true",
      "photosystem-i.options[2].light": "true",
      "photosystem-i.options[3].antenna": "true",
      "photosystem-i.options[4].label": "true",
      "photosystem-i.options[5].coreColor": "#0cb04b",
      "photosystem-i.options[6].lightColor": "#ffec7f",
      "photosystem-i.options[7].antennaColor": "#008000",
      "photosystem-i.options[8].lightSize": "1",
      "photosystem-i.options[9].position": "618",
      "cytochrome-b6f.options[1].rieske": "true",
      "cytochrome-b6f.options[2].label": "true",
      "cytochrome-b6f.options[3].coreColor": "#b2c7da",
      "cytochrome-b6f.options[4].rieskeColor": "#b2c7da",
      "cytochrome-b6f.options[5].position": "581",
      "atpsynthase.options[1].reaction": "true",
      "atpsynthase.options[2].label": "true",
      "atpsynthase.options[3].cRingColor": "#e4d3bd",
      "atpsynthase.options[4].alphaSubunitColor": "#d6c2ad",
      "atpsynthase.options[5].betaSubunitColor": "#c7b29e",
      "atpsynthase.options[6].gammaSubunitColor": "#f6e8d7",
      "atpsynthase.options[7].iSubunitColor": "#c7b29e",
      "atpsynthase.options[8].iiSubunitColor": "#e4d3bd",
      "atpsynthase.options[9].position": "999",
      "ion-channels.options[0].kChannel": "true",
      "ion-channels.options[1].caChannel": "true",
      "ion-channels.options[2].label": "true",
      "ion-channels.options[4].position": "1182",
      "plastoquinone.options[0].label": "true",
      "plastoquinone.options[1].color": "#ffe698",
      "plastoquinone.options[2].position": "484",
      "ferredoxin.show": "true",
      "ferredoxin.options[0].label": "true",
      "ferredoxin.options[1].color": "#a08c79",
      "ferredoxin.options[2].position": "722",
      "cytochrome-c6.options[0].label": "true",
      "cytochrome-c6.options[2].color": "#ff2b2b",
      "cytochrome-c6.options[3].position": "735",
      "plastocyanin.show": "true",
      "plastocyanin.options[0].label": "true",
      "plastocyanin.options[2].color": "#5b9bd5",
      "plastocyanin.options[3].position": "628",
      "fnr.show": "true",
      "fnr.options[0].reaction": "true",
      "fnr.options[1].label": "true",
      "fnr.options[2].color": "#eecc00",
      "fnr.options[3].position": "674",
      "ptox.options[0].reaction": "true",
      "ptox.options[1].color": "#c2aaff",
      "ptox.options[2].position": "476",
      "thylakoidmembrane.show": "true",
      "thylakoidmembrane.options[0].color": "#dbdbdb",
      "stroma.show": "true",
      "stroma.options[0].label": "stroma",
      "stroma.options[1].showLabel": "true",
      "lumen.show": "true",
      "lumen.options[0].label": "lumen",
      "lumen.options[1].showLabel": "true",
      "lumen.options[2].color": "#ffe5e5",
      "electron-flux.show": "true",
      "electron-flux.options[3].pc_to_ps_i": "true",
      "electron-flux.options[4].ps_i_to_fd": "true",
      "electron-flux.options[5].fd_to_fnr": "true",
      "electron-flux.options[7].position": "300",
      "proton-flux.options[0].h2o_lumen": "true",
      "proton-flux.options[1].ps_ii_atp_synthase": "true",
      "proton-flux.options[2].atp_synthase": "true",
      "proton-flux.options[3].stroma_ps_ii": "true",
      "proton-flux.options[4].stroma_b6f": "true",
      "proton-flux.options[5].b6f_lumen": "true",
      "proton-flux.options[6].position": "407",
      "ion-flux.options[0].kChannel": "true",
      "ion-flux.options[1].caChannel": "true",
      "ion-flux.options[2].position": "1189",
      "photosystem-ii-repair.options[0].antenna": "true",
      "photosystem-ii-repair.options[1].light": "true",
      "photosystem-ii-repair.options[2].d1": "true",
      "photosystem-ii-repair.options[3].cycle": "true",
      "photosystem-ii-repair.options[4].coreColor": "#b4d66f",
      "photosystem-ii-repair.options[5].lightColor": "#ffec7f",
      "photosystem-ii-repair.options[6].antennaColor": "#8bc300",
      "photosystem-ii-repair.options[7].lightSize": "1",
      "photosystem-ii-repair.options[8].position": "110",
      "vdx.options[0].ze": "true",
      "vdx.options[1].vde": "true",
      "vdx.options[2].psbs": "true",
      "vdx.options[3].pathway": "true",
      "vdx.options[4].position": "38",
      "regulation.options[0].qe": "true",
      "regulation.options[1].qi": "true",
      "regulation.options[2].pmf": "true",
      "regulation.options[3].position": "74",
      "photosystem-ii.show": "false",
      "photosystem-ii.options[2].fluorescence": "false",
      "photosystem-ii.options[3].center": "false",
      "photosystem-ii.options[4].cofactors": "false",
      "cytochrome-b6f.show": "false",
      "cytochrome-b6f.options[0].cofactors": "false",
      "atpsynthase.show": "false",
      "atpsynthase.options[0].subunits": "false",
      "ion-channels.show": "false",
      "ion-channels.options[3].pmf": "false",
      "plastoquinone.show": "false",
      "cytochrome-c6.show": "false",
      "cytochrome-c6.options[1].cofactor": "false",
      "plastocyanin.options[1].cofactor": "false",
      "ptox.show": "false",
      "electron-flux.options[0].ps_ii_to_pq": "false",
      "electron-flux.options[1].flow_q_cycle": "false",
      "electron-flux.options[2].b6f_to_pc": "false",
      "electron-flux.options[6].fd_to_cyt_b6f": "false",
      "proton-flux.show": "false",
      "ion-flux.show": "false",
      "photosystem-ii-repair.show": "false",
      "vdx.show": "false",
      "regulation.show": "false"
    }
  }, {
    title: 'ATP Synthase',
    settings: {
      "photosystem-ii.options[0].antenna": "true",
      "photosystem-ii.options[1].light": "true",
      "photosystem-ii.options[5].reaction": "true",
      "photosystem-ii.options[6].label": "true",
      "photosystem-ii.options[7].coreColor": "#b4d66f",
      "photosystem-ii.options[8].lightColor": "#ffec7f",
      "photosystem-ii.options[9].antennaColor": "#8bc300",
      "photosystem-ii.options[10].lightSize": "1",
      "photosystem-ii.options[11].position": "237",
      "photosystem-i.options[2].light": "true",
      "photosystem-i.options[3].antenna": "true",
      "photosystem-i.options[4].label": "true",
      "photosystem-i.options[5].coreColor": "#0cb04b",
      "photosystem-i.options[6].lightColor": "#ffec7f",
      "photosystem-i.options[7].antennaColor": "#008000",
      "photosystem-i.options[8].lightSize": "1",
      "photosystem-i.options[9].position": "730",
      "cytochrome-b6f.options[1].rieske": "true",
      "cytochrome-b6f.options[2].label": "true",
      "cytochrome-b6f.options[3].coreColor": "#b2c7da",
      "cytochrome-b6f.options[4].rieskeColor": "#b2c7da",
      "cytochrome-b6f.options[5].position": "581",
      "atpsynthase.show": "true",
      "atpsynthase.options[0].subunits": "true",
      "atpsynthase.options[1].reaction": "true",
      "atpsynthase.options[2].label": "true",
      "atpsynthase.options[3].cRingColor": "#e4d3bd",
      "atpsynthase.options[4].alphaSubunitColor": "#d6c2ad",
      "atpsynthase.options[5].betaSubunitColor": "#c7b29e",
      "atpsynthase.options[6].gammaSubunitColor": "#f6e8d7",
      "atpsynthase.options[7].iSubunitColor": "#c7b29e",
      "atpsynthase.options[8].iiSubunitColor": "#e4d3bd",
      "atpsynthase.options[9].position": "623",
      "ion-channels.show": "true",
      "ion-channels.options[3].pmf": "true",
      "ion-channels.options[4].position": "679",
      "plastoquinone.options[0].label": "true",
      "plastoquinone.options[1].color": "#ffe698",
      "plastoquinone.options[2].position": "484",
      "ferredoxin.options[0].label": "true",
      "ferredoxin.options[1].color": "#a08c79",
      "ferredoxin.options[2].position": "838",
      "cytochrome-c6.options[0].label": "true",
      "cytochrome-c6.options[2].color": "#ff2b2b",
      "cytochrome-c6.options[3].position": "735",
      "plastocyanin.options[0].label": "true",
      "plastocyanin.options[2].color": "#5b9bd5",
      "plastocyanin.options[3].position": "748",
      "fnr.options[0].reaction": "true",
      "fnr.options[1].label": "true",
      "fnr.options[2].color": "#eecc00",
      "fnr.options[3].position": "790",
      "ptox.options[0].reaction": "true",
      "ptox.options[1].color": "#c2aaff",
      "ptox.options[2].position": "476",
      "thylakoidmembrane.show": "true",
      "thylakoidmembrane.options[0].color": "#dbdbdb",
      "stroma.show": "true",
      "stroma.options[0].label": "stroma",
      "stroma.options[1].showLabel": "true",
      "lumen.show": "true",
      "lumen.options[0].label": "lumen",
      "lumen.options[1].showLabel": "true",
      "lumen.options[2].color": "#ffe5e5",
      "electron-flux.options[0].ps_ii_to_pq": "true",
      "electron-flux.options[1].flow_q_cycle": "true",
      "electron-flux.options[2].b6f_to_pc": "true",
      "electron-flux.options[3].pc_to_ps_i": "true",
      "electron-flux.options[4].ps_i_to_fd": "true",
      "electron-flux.options[5].fd_to_fnr": "true",
      "electron-flux.options[6].fd_to_cyt_b6f": "true",
      "electron-flux.options[7].position": "414",
      "proton-flux.show": "true",
      "proton-flux.options[2].atp_synthase": "true",
      "proton-flux.options[6].position": "31",
      "ion-flux.options[0].kChannel": "true",
      "ion-flux.options[1].caChannel": "true",
      "ion-flux.options[2].position": "1189",
      "photosystem-ii-repair.options[0].antenna": "true",
      "photosystem-ii-repair.options[1].light": "true",
      "photosystem-ii-repair.options[2].d1": "true",
      "photosystem-ii-repair.options[3].cycle": "true",
      "photosystem-ii-repair.options[4].coreColor": "#b4d66f",
      "photosystem-ii-repair.options[5].lightColor": "#ffec7f",
      "photosystem-ii-repair.options[6].antennaColor": "#8bc300",
      "photosystem-ii-repair.options[7].lightSize": "1",
      "photosystem-ii-repair.options[8].position": "110",
      "vdx.options[0].ze": "true",
      "vdx.options[1].vde": "true",
      "vdx.options[2].psbs": "true",
      "vdx.options[3].pathway": "true",
      "vdx.options[4].position": "38",
      "regulation.options[0].qe": "true",
      "regulation.options[1].qi": "true",
      "regulation.options[2].pmf": "true",
      "regulation.options[3].position": "74",
      "photosystem-ii.show": "false",
      "photosystem-ii.options[2].fluorescence": "false",
      "photosystem-ii.options[3].center": "false",
      "photosystem-ii.options[4].cofactors": "false",
      "photosystem-i.show": "false",
      "photosystem-i.options[0].center": "false",
      "photosystem-i.options[1].cofactors": "false",
      "cytochrome-b6f.show": "false",
      "cytochrome-b6f.options[0].cofactors": "false",
      "ion-channels.options[0].kChannel": "false",
      "ion-channels.options[1].caChannel": "false",
      "ion-channels.options[2].label": "false",
      "plastoquinone.show": "false",
      "ferredoxin.show": "false",
      "cytochrome-c6.show": "false",
      "cytochrome-c6.options[1].cofactor": "false",
      "plastocyanin.show": "false",
      "plastocyanin.options[1].cofactor": "false",
      "fnr.show": "false",
      "ptox.show": "false",
      "electron-flux.show": "false",
      "proton-flux.options[0].h2o_lumen": "false",
      "proton-flux.options[1].ps_ii_atp_synthase": "false",
      "proton-flux.options[3].stroma_ps_ii": "false",
      "proton-flux.options[4].stroma_b6f": "false",
      "proton-flux.options[5].b6f_lumen": "false",
      "ion-flux.show": "false",
      "photosystem-ii-repair.show": "false",
      "vdx.show": "false",
      "regulation.show": "false"
    }
  }],
  'Miscellaneous': [{
    title: "Show me Everything!",
    settings: {
      "photosystem-ii.show": "true",
      "photosystem-ii.options[0].antenna": "true",
      "photosystem-ii.options[1].light": "true",
      "photosystem-ii.options[2].fluorescence": "true",
      "photosystem-ii.options[3].center": "true",
      "photosystem-ii.options[4].cofactors": "true",
      "photosystem-ii.options[5].reaction": "true",
      "photosystem-ii.options[6].label": "true",
      "photosystem-ii.options[7].coreColor": "#b4d66f",
      "photosystem-ii.options[8].lightColor": "#ffec7f",
      "photosystem-ii.options[9].antennaColor": "#8bc300",
      "photosystem-ii.options[10].lightSize": "1",
      "photosystem-ii.options[11].position": "237",
      "photosystem-i.show": "true",
      "photosystem-i.options[0].center": "true",
      "photosystem-i.options[1].cofactors": "true",
      "photosystem-i.options[2].light": "true",
      "photosystem-i.options[3].antenna": "true",
      "photosystem-i.options[4].label": "true",
      "photosystem-i.options[5].coreColor": "#0cb04b",
      "photosystem-i.options[6].lightColor": "#ffec7f",
      "photosystem-i.options[7].antennaColor": "#008000",
      "photosystem-i.options[8].lightSize": "1",
      "photosystem-i.options[9].position": "730",
      "cytochrome-b6f.show": "true",
      "cytochrome-b6f.options[0].cofactors": "true",
      "cytochrome-b6f.options[1].rieske": "true",
      "cytochrome-b6f.options[2].label": "true",
      "cytochrome-b6f.options[3].coreColor": "#b2c7da",
      "cytochrome-b6f.options[4].rieskeColor": "#b2c7da",
      "cytochrome-b6f.options[5].position": "581",
      "atpsynthase.show": "true",
      "atpsynthase.options[0].subunits": "true",
      "atpsynthase.options[1].reaction": "true",
      "atpsynthase.options[2].label": "true",
      "atpsynthase.options[3].cRingColor": "#e4d3bd",
      "atpsynthase.options[4].alphaSubunitColor": "#d6c2ad",
      "atpsynthase.options[5].betaSubunitColor": "#c7b29e",
      "atpsynthase.options[6].gammaSubunitColor": "#f6e8d7",
      "atpsynthase.options[7].iSubunitColor": "#c7b29e",
      "atpsynthase.options[8].iiSubunitColor": "#e4d3bd",
      "atpsynthase.options[9].position": "999",
      "ion-channels.show": "true",
      "ion-channels.options[0].kChannel": "true",
      "ion-channels.options[1].caChannel": "true",
      "ion-channels.options[2].label": "true",
      "ion-channels.options[3].pmf": "true",
      "ion-channels.options[4].position": "1182",
      "plastoquinone.show": "true",
      "plastoquinone.options[0].label": "true",
      "plastoquinone.options[1].color": "#ffe698",
      "plastoquinone.options[2].position": "484",
      "ferredoxin.show": "true",
      "ferredoxin.options[0].label": "true",
      "ferredoxin.options[1].color": "#a08c79",
      "ferredoxin.options[2].position": "838",
      "cytochrome-c6.options[0].label": "true",
      "cytochrome-c6.options[2].color": "#ff2b2b",
      "cytochrome-c6.options[3].position": "735",
      "plastocyanin.show": "true",
      "plastocyanin.options[0].label": "true",
      "plastocyanin.options[1].cofactor": "true",
      "plastocyanin.options[2].color": "#5b9bd5",
      "plastocyanin.options[3].position": "748",
      "fnr.show": "true",
      "fnr.options[0].reaction": "true",
      "fnr.options[1].label": "true",
      "fnr.options[2].color": "#eecc00",
      "fnr.options[3].position": "790",
      "ptox.show": "true",
      "ptox.options[0].reaction": "true",
      "ptox.options[1].color": "#c2aaff",
      "ptox.options[2].position": "476",
      "thylakoidmembrane.show": "true",
      "thylakoidmembrane.options[0].color": "#dbdbdb",
      "stroma.show": "true",
      "stroma.options[0].label": "stroma",
      "stroma.options[1].showLabel": "true",
      "lumen.show": "true",
      "lumen.options[0].label": "lumen",
      "lumen.options[1].showLabel": "true",
      "lumen.options[2].color": "#ffe5e5",
      "electron-flux.show": "true",
      "electron-flux.options[0].ps_ii_to_pq": "true",
      "electron-flux.options[1].flow_q_cycle": "true",
      "electron-flux.options[2].b6f_to_pc": "true",
      "electron-flux.options[3].pc_to_ps_i": "true",
      "electron-flux.options[4].ps_i_to_fd": "true",
      "electron-flux.options[5].fd_to_fnr": "true",
      "electron-flux.options[6].fd_to_cyt_b6f": "true",
      "electron-flux.options[7].position": "414",
      "proton-flux.show": "true",
      "proton-flux.options[0].h2o_lumen": "true",
      "proton-flux.options[1].ps_ii_atp_synthase": "true",
      "proton-flux.options[2].atp_synthase": "true",
      "proton-flux.options[3].stroma_ps_ii": "true",
      "proton-flux.options[4].stroma_b6f": "true",
      "proton-flux.options[5].b6f_lumen": "true",
      "proton-flux.options[6].position": "407",
      "ion-flux.show": "true",
      "ion-flux.options[0].kChannel": "true",
      "ion-flux.options[1].caChannel": "true",
      "ion-flux.options[2].position": "1189",
      "photosystem-ii-repair.show": "true",
      "photosystem-ii-repair.options[0].antenna": "true",
      "photosystem-ii-repair.options[1].light": "true",
      "photosystem-ii-repair.options[2].d1": "true",
      "photosystem-ii-repair.options[3].cycle": "true",
      "photosystem-ii-repair.options[4].coreColor": "#b4d66f",
      "photosystem-ii-repair.options[5].lightColor": "#ffec7f",
      "photosystem-ii-repair.options[6].antennaColor": "#8bc300",
      "photosystem-ii-repair.options[7].lightSize": "1",
      "photosystem-ii-repair.options[8].position": "110",
      "vdx.show": "true",
      "vdx.options[0].ze": "true",
      "vdx.options[1].vde": "true",
      "vdx.options[2].psbs": "true",
      "vdx.options[3].pathway": "true",
      "vdx.options[4].position": "38",
      "regulation.show": "true",
      "regulation.options[0].qe": "true",
      "regulation.options[1].qi": "true",
      "regulation.options[2].pmf": "true",
      "regulation.options[3].position": "74",
      "cytochrome-c6.show": "false",
      "cytochrome-c6.options[1].cofactor": "false"
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (presets);

/***/ }),

/***/ "./src/constants/references.js":
/*!*************************************!*\
  !*** ./src/constants/references.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var references = ["Kramer, D. M., Avenson, T. J. and Edwards, G. E. (2004) Dynamic flexibility in the light reactions of photosynthesis governed by both electron and proton transfer reactions. Trends Plant Sci 9, 349-357."];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (references);

/***/ }),

/***/ "./src/constants/settings.js":
/*!***********************************!*\
  !*** ./src/constants/settings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "layers": () => (/* binding */ layers),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _components_atp_synthase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/atp-synthase */ "./src/components/atp-synthase.js");
/* harmony import */ var _components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cytochrome-b6f */ "./src/components/cytochrome-b6f.js");
/* harmony import */ var _components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cytochrome-c6 */ "./src/components/cytochrome-c6.js");
/* harmony import */ var _components_electron_flux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/electron-flux */ "./src/components/electron-flux.js");
/* harmony import */ var _components_ferredoxin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ferredoxin */ "./src/components/ferredoxin.js");
/* harmony import */ var _components_fnr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/fnr */ "./src/components/fnr.js");
/* harmony import */ var _components_ion_channels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ion-channels */ "./src/components/ion-channels.js");
/* harmony import */ var _components_ion_flux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ion-flux */ "./src/components/ion-flux.js");
/* harmony import */ var _components_lumen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/lumen */ "./src/components/lumen.js");
/* harmony import */ var _components_photosystem_i__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/photosystem-i */ "./src/components/photosystem-i.js");
/* harmony import */ var _components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/photosystem-ii-repair */ "./src/components/photosystem-ii-repair.js");
/* harmony import */ var _components_photosystem_ii__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/photosystem-ii */ "./src/components/photosystem-ii.js");
/* harmony import */ var _components_plastocyanin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/plastocyanin */ "./src/components/plastocyanin.js");
/* harmony import */ var _components_plastoquinone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/plastoquinone */ "./src/components/plastoquinone.js");
/* harmony import */ var _components_proton_flux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/proton-flux */ "./src/components/proton-flux.js");
/* harmony import */ var _components_ptox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ptox */ "./src/components/ptox.js");
/* harmony import */ var _components_quenching__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/quenching */ "./src/components/quenching.js");
/* harmony import */ var _components_stroma__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/stroma */ "./src/components/stroma.js");
/* harmony import */ var _components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/thylakoidmembrane */ "./src/components/thylakoidmembrane.js");
/* harmony import */ var _components_vdx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/vdx */ "./src/components/vdx.js");




















var settings = [_components_atp_synthase__WEBPACK_IMPORTED_MODULE_0__.settings(), _components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_18__.settings(), _components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_1__.settings(), _components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_2__.settings(), _components_electron_flux__WEBPACK_IMPORTED_MODULE_3__.settings(), _components_ferredoxin__WEBPACK_IMPORTED_MODULE_4__.settings(), _components_fnr__WEBPACK_IMPORTED_MODULE_5__.settings(), _components_ion_channels__WEBPACK_IMPORTED_MODULE_6__.settings(), _components_ion_flux__WEBPACK_IMPORTED_MODULE_7__.settings(), _components_lumen__WEBPACK_IMPORTED_MODULE_8__.settings(), _components_photosystem_i__WEBPACK_IMPORTED_MODULE_9__.settings(), _components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_10__.settings(), _components_photosystem_ii__WEBPACK_IMPORTED_MODULE_11__.settings(), _components_plastocyanin__WEBPACK_IMPORTED_MODULE_12__.settings(), _components_plastoquinone__WEBPACK_IMPORTED_MODULE_13__.settings(), _components_proton_flux__WEBPACK_IMPORTED_MODULE_14__.settings(), _components_ptox__WEBPACK_IMPORTED_MODULE_15__.settings(), _components_quenching__WEBPACK_IMPORTED_MODULE_16__.settings(), _components_stroma__WEBPACK_IMPORTED_MODULE_17__.settings(), _components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_18__.settings(), _components_vdx__WEBPACK_IMPORTED_MODULE_19__.settings()];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);
var layers = ["stroma", "lumen", "thylakoidmembrane", "electron-flux", "proton-flux", "quenching", "photosystem-ii", "photosystem-ii-repair", "plastoquinone", "cytochrome-b6f", "cytochrome-c6", "plastocyanin", "photosystem-i", "atpsynthase", "vdx", "ferredoxin", "fnr", "ptox", "ion-channels", "ion-flux"];
var menu = {
  "Protein Complexes": ["photosystem-ii", "photosystem-i", "cytochrome-b6f", "atpsynthase", "ion-channels"],
  "Electron Carriers": ["plastoquinone", "ferredoxin", "cytochrome-c6", "plastocyanin", "fnr", "ptox"],
  "Fluxes": ["electron-flux", "proton-flux", "ion-flux"],
  "Regulation": ["photosystem-ii-repair", "vdx", "quenching"],
  "Thylakoid": ["thylakoidmembrane", "stroma", "lumen"]
};

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Photosynthesis)
/* harmony export */ });
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/settings */ "./src/constants/settings.js");
/* harmony import */ var _constants_references__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/references */ "./src/constants/references.js");
/* harmony import */ var _constants_presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/presets */ "./src/constants/presets.js");
/* harmony import */ var _components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/thylakoidmembrane */ "./src/components/thylakoidmembrane.js");
/* harmony import */ var _components_lumen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/lumen */ "./src/components/lumen.js");
/* harmony import */ var _components_stroma__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stroma */ "./src/components/stroma.js");
/* harmony import */ var _components_photosystem_ii__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/photosystem-ii */ "./src/components/photosystem-ii.js");
/* harmony import */ var _components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/photosystem-ii-repair */ "./src/components/photosystem-ii-repair.js");
/* harmony import */ var _components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cytochrome-b6f */ "./src/components/cytochrome-b6f.js");
/* harmony import */ var _components_plastocyanin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/plastocyanin */ "./src/components/plastocyanin.js");
/* harmony import */ var _components_photosystem_i__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/photosystem-i */ "./src/components/photosystem-i.js");
/* harmony import */ var _components_atp_synthase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/atp-synthase */ "./src/components/atp-synthase.js");
/* harmony import */ var _components_vdx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/vdx */ "./src/components/vdx.js");
/* harmony import */ var _components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/cytochrome-c6 */ "./src/components/cytochrome-c6.js");
/* harmony import */ var _components_plastoquinone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/plastoquinone */ "./src/components/plastoquinone.js");
/* harmony import */ var _components_ferredoxin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ferredoxin */ "./src/components/ferredoxin.js");
/* harmony import */ var _components_fnr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/fnr */ "./src/components/fnr.js");
/* harmony import */ var _components_electron_flux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/electron-flux */ "./src/components/electron-flux.js");
/* harmony import */ var _components_proton_flux__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/proton-flux */ "./src/components/proton-flux.js");
/* harmony import */ var _components_ptox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ptox */ "./src/components/ptox.js");
/* harmony import */ var _components_ion_channels__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ion-channels */ "./src/components/ion-channels.js");
/* harmony import */ var _components_ion_flux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/ion-flux */ "./src/components/ion-flux.js");
/* harmony import */ var _components_quenching__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/quenching */ "./src/components/quenching.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


























var Photosynthesis = /*#__PURE__*/function () {
  function Photosynthesis(width, height) {
    _classCallCheck(this, Photosynthesis);
    this.width = width || 1400;
    this.height = height || 600;
    this.menu = _constants_settings__WEBPACK_IMPORTED_MODULE_3__.menu || {};
    this.layers = _constants_settings__WEBPACK_IMPORTED_MODULE_3__.layers || [];
    this.settings = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(_constants_settings__WEBPACK_IMPORTED_MODULE_3__["default"]) || [];
    this.settingsInitial = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(_constants_settings__WEBPACK_IMPORTED_MODULE_3__["default"]);
    this.presets = _constants_presets__WEBPACK_IMPORTED_MODULE_5__["default"];
    this.references = _constants_references__WEBPACK_IMPORTED_MODULE_4__["default"];
  }
  _createClass(Photosynthesis, [{
    key: "build",
    value: function build() {
      var _this = this;
      var draw = SVG().size(this.width, this.height);

      // Set viewbox
      draw.viewbox("0 0 ".concat(this.width, " ").concat(this.height));

      // Apply options
      var _loop = function _loop(i) {
        var key = _this.settings.findIndex(function (itm) {
          return itm.id == _this.layers[i];
        });
        if (_this.settings[key] && _this.settings[key].show) {
          options = _this.parseOptions(_this.settings[key].options);
          switch (_this.settings[key].id) {
            case 'stroma':
              draw.svg((0,_components_stroma__WEBPACK_IMPORTED_MODULE_8__["default"])(_objectSpread({}, options)));
              break;
            case 'thylakoidmembrane':
              draw.svg((0,_components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread({}, options)));
              break;
            case 'lumen':
              draw.svg((0,_components_lumen__WEBPACK_IMPORTED_MODULE_7__["default"])(_objectSpread({}, options)));
              break;
            case 'plastoquinone':
              draw.svg((0,_components_plastoquinone__WEBPACK_IMPORTED_MODULE_17__["default"])(_objectSpread({}, options)));
              break;
            case 'plastocyanin':
              draw.svg((0,_components_plastocyanin__WEBPACK_IMPORTED_MODULE_12__["default"])(_objectSpread({}, options)));
              break;
            case 'cytochrome-c6':
              draw.svg((0,_components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_16__["default"])(_objectSpread({}, options)));
              break;
            case 'photosystem-i':
              draw.svg((0,_components_photosystem_i__WEBPACK_IMPORTED_MODULE_13__["default"])(_objectSpread({}, options)));
              break;
            case 'atpsynthase':
              draw.svg((0,_components_atp_synthase__WEBPACK_IMPORTED_MODULE_14__["default"])(_objectSpread({}, options)));
              break;
            case 'photosystem-ii':
              draw.svg((0,_components_photosystem_ii__WEBPACK_IMPORTED_MODULE_9__["default"])(_objectSpread({}, options)));
              break;
            case 'photosystem-ii-repair':
              draw.svg((0,_components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_10__["default"])(_objectSpread({}, options)));
              break;
            case 'cytochrome-b6f':
              draw.svg((0,_components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_11__["default"])(_objectSpread({}, options)));
              break;
            case 'vdx':
              draw.svg((0,_components_vdx__WEBPACK_IMPORTED_MODULE_15__["default"])(_objectSpread({}, options)));
              break;
            case 'ferredoxin':
              draw.svg((0,_components_ferredoxin__WEBPACK_IMPORTED_MODULE_18__["default"])(_objectSpread({}, options)));
              break;
            case 'fnr':
              draw.svg((0,_components_fnr__WEBPACK_IMPORTED_MODULE_19__["default"])(_objectSpread({}, options)));
              break;
            case 'electron-flux':
              draw.svg((0,_components_electron_flux__WEBPACK_IMPORTED_MODULE_20__["default"])(_objectSpread({}, options)));
              break;
            case 'proton-flux':
              draw.svg((0,_components_proton_flux__WEBPACK_IMPORTED_MODULE_21__["default"])(_objectSpread({}, options)));
              break;
            case 'ptox':
              draw.svg((0,_components_ptox__WEBPACK_IMPORTED_MODULE_22__["default"])(_objectSpread({}, options)));
              break;
            case 'ion-channels':
              draw.svg((0,_components_ion_channels__WEBPACK_IMPORTED_MODULE_23__["default"])(_objectSpread({}, options)));
              break;
            case 'ion-flux':
              draw.svg((0,_components_ion_flux__WEBPACK_IMPORTED_MODULE_24__["default"])(_objectSpread({}, options)));
              break;
            case 'quenching':
              draw.svg((0,_components_quenching__WEBPACK_IMPORTED_MODULE_25__["default"])(_objectSpread({}, options)));
              break;
          }
        }
      };
      for (var i in this.layers) {
        var options;
        _loop(i);
      }

      // Final SVG
      return draw.svg();
    }
  }, {
    key: "parseOptions",
    value: function parseOptions(obj) {
      if (obj === undefined) return {};
      var options = {};
      obj.forEach(function (itm) {
        options[itm.name] = itm.value;
        return options;
      });
      return options;
    }
  }, {
    key: "reset",
    value: function reset() {
      return this.settings = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(this.settingsInitial);
    }
  }, {
    key: "update",
    value: function update(obj) {
      var current = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(this.settings);
      if (!Array.isArray(obj)) {
        var _loop2 = function _loop2() {
          // Parse Value
          var value = obj[key];
          if (value == 'true') value = true;
          if (value == 'false') value = false;

          // Modify Key
          var modkey = key.split('.');
          var idx = current.findIndex(function (itm) {
            return itm.id == modkey[0];
          });
          modkey = modkey.slice(1);
          if (modkey[0] !== undefined && modkey[0].match(/^options\[/)) {
            modkey = modkey.slice(0, -1).join('.') + '.value';
          } else {
            modkey = modkey.join('.');
          }
          lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(current[idx], modkey, value);
        };
        for (var key in obj) {
          _loop2();
        }
      }
      this.settings = current;
    }
  }, {
    key: "settingsHTML",
    value: function settingsHTML() {
      var _this2 = this;
      var elCount = 0;
      var html = '<form id="settingsform">';
      var _loop3 = function _loop3(header) {
        var uid = "ps-" + crypto.randomUUID();
        var accordionid = "ps-" + crypto.randomUUID();
        html += "<div style=\"cursor:pointer;\" class=\"small fw-bold mt-3 mb-2 d-flex justify-content-between align-items-center\" data-bs-toggle=\"collapse\" data-bs-target=\"#".concat(uid, "\" aria-controls=\"Toggle ").concat(header, "\">\n        ").concat(header, "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-expand me-1\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z\"/>\n        </svg>\n      </div>");
        html += "<div class=\"collapse ".concat(!elCount ? "show" : "", "\" id=\"").concat(uid, "\" data-bs-parent=\"#settingsform\">");
        // data-bs-parent="#selector"
        html += "<div class=\"accordion\" id=\"".concat(accordionid, "\">");
        var _loop4 = function _loop4(i) {
          var idx = _this2.settings.findIndex(function (itm) {
            return itm.id == _this2.menu[header][i];
          });
          if (idx == -1) return "continue";
          if (_this2.settings[idx].show === undefined && _this2.settings[idx].options === undefined) return "continue";
          html += "<div class=\"accordion-item\">\n          <h2 class=\"accordion-header\" id=\"heading".concat(idx, "\">\n            <button class=\"accordion-button collapsed ps-5\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse").concat(idx, "\" aria-expanded=\"").concat(elCount === 0 ? 'true' : 'false', "\" aria-controls=\"collapse").concat(idx, "\">\n            ").concat(_this2.settings[idx].headerTitle, "\n            </button>\n            ").concat(_this2.elementInputSwitch([_this2.settings[idx].id, 'show'].join('.'), _this2.settings[idx].show, ""), "\n          </h2>\n          <div id=\"collapse").concat(idx, "\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading").concat(idx, "\" data-bs-parent=\"#").concat(accordionid, "\">\n            <div class=\"accordion-body\">");
          if (_this2.settings[idx].options !== undefined && _this2.settings[idx].options.length > 0) {
            for (var _i in _this2.settings[idx].options) {
              var option = _this2.settings[idx].options[_i];
              var name = [_this2.settings[idx].id, "options[".concat(_i, "]"), option.name].join('.');
              if (option.type == 'color') html += _this2.elementInputColor(name, option.value, option.label);
              if (option.type == 'text') html += _this2.elementInputText(name, option.value, option.label);
              if (option.type == 'check') html += _this2.elementInputCheck(name, option.value, option.label);
              if (option.type == 'range') html += _this2.elementInputRange(name, option.value, option.label, option.step, option.min, option.max);
            }
          } else {
            html += "<div class=\"form-text\">No settings available</div>";
          }
          html += "</div>\n          </div>\n        </div>";
          elCount++;
        };
        for (var i in _this2.menu[header]) {
          var _ret = _loop4(i);
          if (_ret === "continue") continue;
        }
        html += "</div>";
        html += "</div>";
      };
      for (var header in this.menu) {
        _loop3(header);
      }
      html += '</form>';
      return html;
    }
  }, {
    key: "getPreset",
    value: function getPreset(id) {
      var preset = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(this.presets, id, {});
      return preset.settings || {};
    }
  }, {
    key: "presetsHTML",
    value: function presetsHTML() {
      var html = "<select class=\"form-select\" aria-label=\"Default select example\" id=\"presets-selector\">";
      html += "<option value=\"-1\" disabled selected>Select&hellip;</option>";
      for (var group in this.presets) {
        html += "<optgroup label=\"".concat(group, "\">");
        for (var i in this.presets[group]) html += "<option value=\"".concat(group, "[").concat(i, "]\">").concat(this.presets[group][i].title, "</option>");
        html += "</optgroup>";
      }
      html += "</select>";
      return html;
    }
  }, {
    key: "elementInputCheck",
    value: function elementInputCheck() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'check';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
      var id = "ps-" + crypto.randomUUID();
      return "<div class=\"form-check mb-1\">\n      <input class=\"form-check-input\" name=\"".concat(name, "\" type=\"checkbox\" value=\"", true, "\" id=\"").concat(id, "\" ").concat(value ? 'checked' : '', ">\n      <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(label, "</label>\n    </div>");
    }
  }, {
    key: "elementInputSwitch",
    value: function elementInputSwitch() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'switch';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
      var id = "ps-" + crypto.randomUUID();
      return "<div class=\"form-check form-switch fs-6\" style=\"position:relative; margin:-2.1rem .5rem .6rem .5rem; z-index:10; width:2em;\">\n    <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" name=\"".concat(name, "\" value=\"", true, "\" id=\"").concat(id, "\" ").concat(value ? 'checked' : '', ">\n    <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(label, "</label>\n  </div>");
    }
  }, {
    key: "elementInputText",
    value: function elementInputText() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Text';
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
      var id = "ps-" + crypto.randomUUID();
      return "<div class=\"mb-1\">\n      <label for=\"".concat(id, "\" class=\"form-label\">").concat(label, "</label>\n      <input type=\"text\" class=\"form-control form-control\" name=\"").concat(name, "\" id=\"").concat(id, "\" placeholder=\"").concat(value, "\" value=\"").concat(value, "\">\n    </div>");
    }
  }, {
    key: "elementInputColor",
    value: function elementInputColor() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'color';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#000000';
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
      var id = "ps-" + crypto.randomUUID();
      return "<div class=\"d-flex\">\n      <input type=\"color\" class=\"form-control form-control-color\" name=\"".concat(name, "\" id=\"").concat(id, "\" value=\"").concat(value, "\" title=\"Choose ").concat(label, " color\">\n      <label for=\"").concat(id, "\" class=\"col-sm-9 col-form-label\">").concat(label, "</label>\n    </div>");
    }
  }, {
    key: "elementInputRange",
    value: function elementInputRange() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'range';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'label';
      var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var min = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var max = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var id = "ps-" + crypto.randomUUID();
      return "<div class=\"mt-1\">\n    <label for=\"".concat(id, "\" class=\"form-label\" style=\"margin-bottom:-1.5rem\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi\" viewBox=\"0 0 16 16\">\n        <path d=\"M8 1.99911C7.72386 1.99911 7.5 2.22296 7.5 2.49911L7.5 8.29211L5.354 6.14511C5.15849 5.9496 4.84151 5.9496 4.646 6.14511C4.45049 6.34062 4.45049 6.6576 4.646 6.85311L7.646 9.85311C7.7398 9.94715 7.86717 10 8 10C8.13283 10 8.2602 9.94715 8.354 9.85311L11.354 6.85311C11.5495 6.6576 11.5495 6.34062 11.354 6.14511C11.1585 5.9496 10.8415 5.9496 10.646 6.14511L8.5 8.29211L8.5 2.49911C8.5 2.22296 8.27614 1.99911 8 1.99911ZM1 12.5C1 12.2239 1.22386 12 1.5 12L14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13L1.5 13C1.22386 13 1 12.7761 1 12.5Z\" fill=\"#000000\" fill-rule=\"nonzero\" opacity=\"1\" stroke=\"none\"/>\n      </svg>\n      ").concat(label, "\n    </label>\n    <input type=\"range\" class=\"form-range\" name=\"").concat(name, "\" id=\"").concat(id, "\" value=\"").concat(value, "\" min=\"").concat(min, "\" max=\"").concat(max, "\" step=\"").concat(step, "\">      \n    </div>");
    }
  }, {
    key: "referencesHTML",
    value: function referencesHTML() {
      var html = '<ol class="list-style ps-3 small">';
      for (var i in this.references) {
        html += "<li>".concat(this.references[i], "</li>");
      }
      html += '</ol>';
      return html;
    }
  }, {
    key: "legend",
    value: function legend() {
      var _this3 = this;
      var textblocks = {};
      var textblocksArray = [];
      var _loop5 = function _loop5(i) {
        var key = _this3.settings.findIndex(function (itm) {
          return itm.id == _this3.layers[i];
        });
        if (_this3.settings[key] && _this3.settings[key].show) {
          switch (_this3.settings[key].id) {
            case 'stroma':
              textblocks[_this3.settings[key].id] = (0,_components_stroma__WEBPACK_IMPORTED_MODULE_8__.legend)();
              textblocksArray.push((0,_components_stroma__WEBPACK_IMPORTED_MODULE_8__.legend)());
              break;
            case 'thylakoidmembrane':
              textblocks[_this3.settings[key].id] = (0,_components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_6__.legend)();
              textblocksArray.push((0,_components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_6__.legend)());
              break;
            case 'lumen':
              textblocks[_this3.settings[key].id] = (0,_components_lumen__WEBPACK_IMPORTED_MODULE_7__.legend)();
              textblocksArray.push((0,_components_lumen__WEBPACK_IMPORTED_MODULE_7__.legend)());
              break;
            case 'plastoquinone':
              textblocks[_this3.settings[key].id] = (0,_components_plastoquinone__WEBPACK_IMPORTED_MODULE_17__.legend)();
              textblocksArray.push((0,_components_plastoquinone__WEBPACK_IMPORTED_MODULE_17__.legend)());
              break;
            case 'plastocyanin':
              textblocks[_this3.settings[key].id] = (0,_components_plastocyanin__WEBPACK_IMPORTED_MODULE_12__.legend)();
              textblocksArray.push((0,_components_plastocyanin__WEBPACK_IMPORTED_MODULE_12__.legend)());
              break;
            case 'cytochrome-c6':
              textblocks[_this3.settings[key].id] = (0,_components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_16__.legend)();
              textblocksArray.push((0,_components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_16__.legend)());
              break;
            case 'photosystem-i':
              textblocks[_this3.settings[key].id] = (0,_components_photosystem_i__WEBPACK_IMPORTED_MODULE_13__.legend)();
              textblocksArray.push((0,_components_photosystem_i__WEBPACK_IMPORTED_MODULE_13__.legend)());
              break;
            case 'atpsynthase':
              textblocks[_this3.settings[key].id] = (0,_components_atp_synthase__WEBPACK_IMPORTED_MODULE_14__.legend)();
              textblocksArray.push((0,_components_atp_synthase__WEBPACK_IMPORTED_MODULE_14__.legend)());
              break;
            case 'photosystem-ii':
              textblocks[_this3.settings[key].id] = (0,_components_photosystem_ii__WEBPACK_IMPORTED_MODULE_9__.legend)();
              textblocksArray.push((0,_components_photosystem_ii__WEBPACK_IMPORTED_MODULE_9__.legend)());
              break;
            case 'photosystem-ii-repair':
              textblocks[_this3.settings[key].id] = (0,_components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_10__.legend)();
              textblocksArray.push((0,_components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_10__.legend)());
              break;
            case 'cytochrome-b6f':
              textblocks[_this3.settings[key].id] = (0,_components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_11__.legend)();
              textblocksArray.push((0,_components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_11__.legend)());
              break;
            case 'vdx':
              textblocks[_this3.settings[key].id] = (0,_components_vdx__WEBPACK_IMPORTED_MODULE_15__.legend)();
              textblocksArray.push((0,_components_vdx__WEBPACK_IMPORTED_MODULE_15__.legend)());
              break;
            case 'ferredoxin':
              textblocks[_this3.settings[key].id] = (0,_components_ferredoxin__WEBPACK_IMPORTED_MODULE_18__.legend)();
              textblocksArray.push((0,_components_ferredoxin__WEBPACK_IMPORTED_MODULE_18__.legend)());
              break;
            case 'fnr':
              textblocks[_this3.settings[key].id] = (0,_components_fnr__WEBPACK_IMPORTED_MODULE_19__.legend)();
              textblocksArray.push((0,_components_fnr__WEBPACK_IMPORTED_MODULE_19__.legend)());
              break;
            case 'electron-flux':
              textblocks[_this3.settings[key].id] = (0,_components_electron_flux__WEBPACK_IMPORTED_MODULE_20__.legend)();
              textblocksArray.push((0,_components_electron_flux__WEBPACK_IMPORTED_MODULE_20__.legend)());
              break;
            case 'proton-flux':
              textblocks[_this3.settings[key].id] = (0,_components_proton_flux__WEBPACK_IMPORTED_MODULE_21__.legend)();
              textblocksArray.push((0,_components_proton_flux__WEBPACK_IMPORTED_MODULE_21__.legend)());
              break;
            case 'ptox':
              textblocks[_this3.settings[key].id] = (0,_components_ptox__WEBPACK_IMPORTED_MODULE_22__.legend)();
              textblocksArray.push((0,_components_ptox__WEBPACK_IMPORTED_MODULE_22__.legend)());
              break;
            case 'ion-channels':
              textblocks[_this3.settings[key].id] = (0,_components_ion_channels__WEBPACK_IMPORTED_MODULE_23__.legend)();
              textblocksArray.push((0,_components_ion_channels__WEBPACK_IMPORTED_MODULE_23__.legend)());
              break;
            case 'ion-flux':
              textblocks[_this3.settings[key].id] = (0,_components_ion_flux__WEBPACK_IMPORTED_MODULE_24__.legend)();
              textblocksArray.push((0,_components_ion_flux__WEBPACK_IMPORTED_MODULE_24__.legend)());
              break;
            case 'quenching':
              textblocks[_this3.settings[key].id] = (0,_components_quenching__WEBPACK_IMPORTED_MODULE_25__.legend)();
              textblocksArray.push((0,_components_quenching__WEBPACK_IMPORTED_MODULE_25__.legend)());
              break;
          }
        }
      };
      for (var i in this.layers) {
        _loop5(i);
      }

      // Dark blue arrow indicate reactions creating products of Photosynthesis including O₂,
      // NADPH and ATP. 

      return "The photosynthetic machinery in higher plants and green algae (with exceptions).\n    ".concat(textblocksArray.join(' '));
    }
  }]);
  return Photosynthesis;
}();

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=photosynthesis.js.map