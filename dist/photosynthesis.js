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

/***/ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "Animator": () => (/* binding */ Animator),
/* harmony export */   "Array": () => (/* binding */ SVGArray),
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Circle": () => (/* binding */ Circle),
/* harmony export */   "ClipPath": () => (/* binding */ ClipPath),
/* harmony export */   "Color": () => (/* binding */ Color),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Controller": () => (/* binding */ Controller),
/* harmony export */   "Defs": () => (/* binding */ Defs),
/* harmony export */   "Dom": () => (/* binding */ Dom),
/* harmony export */   "Ease": () => (/* binding */ Ease),
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Ellipse": () => (/* binding */ Ellipse),
/* harmony export */   "EventTarget": () => (/* binding */ EventTarget),
/* harmony export */   "ForeignObject": () => (/* binding */ ForeignObject),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "Gradient": () => (/* binding */ Gradient),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "Line": () => (/* binding */ Line),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "Marker": () => (/* binding */ Marker),
/* harmony export */   "Mask": () => (/* binding */ Mask),
/* harmony export */   "Matrix": () => (/* binding */ Matrix),
/* harmony export */   "Morphable": () => (/* binding */ Morphable),
/* harmony export */   "NonMorphable": () => (/* binding */ NonMorphable),
/* harmony export */   "Number": () => (/* binding */ SVGNumber),
/* harmony export */   "ObjectBag": () => (/* binding */ ObjectBag),
/* harmony export */   "PID": () => (/* binding */ PID),
/* harmony export */   "Path": () => (/* binding */ Path),
/* harmony export */   "PathArray": () => (/* binding */ PathArray),
/* harmony export */   "Pattern": () => (/* binding */ Pattern),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "PointArray": () => (/* binding */ PointArray),
/* harmony export */   "Polygon": () => (/* binding */ Polygon),
/* harmony export */   "Polyline": () => (/* binding */ Polyline),
/* harmony export */   "Queue": () => (/* binding */ Queue),
/* harmony export */   "Rect": () => (/* binding */ Rect),
/* harmony export */   "Runner": () => (/* binding */ Runner),
/* harmony export */   "SVG": () => (/* binding */ SVG),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "Spring": () => (/* binding */ Spring),
/* harmony export */   "Stop": () => (/* binding */ Stop),
/* harmony export */   "Style": () => (/* binding */ Style),
/* harmony export */   "Svg": () => (/* binding */ Svg),
/* harmony export */   "Symbol": () => (/* binding */ Symbol),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "TextPath": () => (/* binding */ TextPath),
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "TransformBag": () => (/* binding */ TransformBag),
/* harmony export */   "Tspan": () => (/* binding */ Tspan),
/* harmony export */   "Use": () => (/* binding */ Use),
/* harmony export */   "adopt": () => (/* binding */ adopt),
/* harmony export */   "assignNewId": () => (/* binding */ assignNewId),
/* harmony export */   "clearEvents": () => (/* binding */ clearEvents),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "defaults": () => (/* binding */ defaults),
/* harmony export */   "dispatch": () => (/* binding */ dispatch),
/* harmony export */   "easing": () => (/* binding */ easing),
/* harmony export */   "eid": () => (/* binding */ eid),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "find": () => (/* binding */ baseFind),
/* harmony export */   "getClass": () => (/* binding */ getClass),
/* harmony export */   "getEventTarget": () => (/* binding */ getEventTarget),
/* harmony export */   "getEvents": () => (/* binding */ getEvents),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "makeInstance": () => (/* binding */ makeInstance),
/* harmony export */   "makeMorphable": () => (/* binding */ makeMorphable),
/* harmony export */   "mockAdopt": () => (/* binding */ mockAdopt),
/* harmony export */   "namespaces": () => (/* binding */ namespaces),
/* harmony export */   "nodeOrNew": () => (/* binding */ nodeOrNew),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "parser": () => (/* binding */ parser),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "registerMorphableType": () => (/* binding */ registerMorphableType),
/* harmony export */   "registerWindow": () => (/* binding */ registerWindow),
/* harmony export */   "restoreWindow": () => (/* binding */ restoreWindow),
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "saveWindow": () => (/* binding */ saveWindow),
/* harmony export */   "utils": () => (/* binding */ utils),
/* harmony export */   "windowEvents": () => (/* binding */ windowEvents),
/* harmony export */   "withWindow": () => (/* binding */ withWindow),
/* harmony export */   "wrapWithAttrCheck": () => (/* binding */ wrapWithAttrCheck)
/* harmony export */ });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.2.0
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Mon Jun 12 2023 10:34:51 GMT+0200 (Central European Summer Time)
*/;
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    for (const _name of name) {
      registerMethods(_name, m);
    }

    return;
  }

  if (typeof name === 'object') {
    for (const _name in name) {
      registerMethods(_name, name[_name]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return [...new Set(names)];
}
function addMethodNames(_names) {
  names.push(..._names);
}

// Map function
function map(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to dash separated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/

function getOrigin(o, element) {
  const origin = o.origin; // First check if origin is in ox or originX

  let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center'; // Then check if origin was used and overwrite in that case

  if (origin != null) {
    [ox, oy] = Array.isArray(origin) ? origin : typeof origin === 'object' ? [origin.x, origin.y] : [origin, origin];
  } // Make sure to only call bbox when actually needed


  const condX = typeof ox === 'string';
  const condY = typeof oy === 'string';

  if (condX || condY) {
    const {
      height,
      width,
      x,
      y
    } = element.bbox(); // And only overwrite if string was passed for this specific axis

    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }

    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = {
  __proto__: null,
  map: map,
  filter: filter,
  radians: radians,
  degrees: degrees,
  camelCase: camelCase,
  unCamelCase: unCamelCase,
  capitalize: capitalize,
  proportionalSize: proportionalSize,
  getOrigin: getOrigin
};

// Default namespaces
const svg = 'http://www.w3.org/2000/svg';
const html = 'http://www.w3.org/1999/xhtml';
const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlink = 'http://www.w3.org/1999/xlink';
const svgjs = 'http://svgjs.dev/svgjs';

var namespaces = {
  __proto__: null,
  svg: svg,
  html: html,
  xmlns: xmlns,
  xlink: xlink,
  svgjs: svgjs
};

const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow(win = null, doc = null) {
  globals.window = win;
  globals.document = doc;
}
const save = {};
function saveWindow() {
  save.window = globals.window;
  save.document = globals.document;
}
function restoreWindow() {
  globals.window = save.window;
  globals.document = save.document;
}
function withWindow(win, fn) {
  saveWindow();
  registerWindow(win, win.document);
  fn(win, win.document);
  restoreWindow();
}
function getWindow() {
  return globals.window;
}

class Base {// constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}

const elements = {};
const root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name, ns = svg) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
  if (element instanceof Base) return element;

  if (typeof element === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  } // Make sure, that HTML elements are created with the correct namespace


  const wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(wrapper.firstChild); // make sure, that element doesn't have its wrapper attached

  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node && node.ownerDocument && node instanceof node.ownerDocument.defaultView.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance;

  if (node.nodeName === '#document-fragment') {
    return new elements.Fragment(node);
  } // initialize variables


  let className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
  adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

let did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (let i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }

  return node;
} // Method for extending objects

function extend(modules, methods) {
  let key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function (...args) {
    const o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

function siblings() {
  return this.parent().children();
} // Get the current position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  const i = this.position();
  const p = this.parent(); // move node one step forward

  p.add(this.remove(), i + 1);
  return this;
} // Send given element one step backward

function backward() {
  const i = this.position();
  const p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
} // Send given element all the way to the front

function front() {
  const p = this.parent(); // Move node forward

  p.add(this.remove());
  return this;
} // Send given element all the way to the back

function back() {
  const p = this.parent(); // Move node back

  p.add(this.remove(), 0);
  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
});

// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain

const transforms = /\)\s*,?\s*/; // Whitespace

const whitespace = /\s/g; // Test hex value

const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value

const isRgb = /^rgb\(/; // Test for blank string

const isBlank = /^(\s+)?$/; // Test for numeric string

const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url

const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

const delimiter = /[\s,]+/; // Test for path letter

const isPathLetter = /[MLHVCSQTAZ]/i;

var regex = {
  __proto__: null,
  numberAndUnit: numberAndUnit,
  hex: hex,
  rgb: rgb,
  reference: reference,
  transforms: transforms,
  whitespace: whitespace,
  isHex: isHex,
  isRgb: isRgb,
  isBlank: isBlank,
  isNumber: isNumber,
  isImage: isImage,
  delimiter: delimiter,
  isPathLetter: isPathLetter
};

function classes() {
  const attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    const array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes,
  hasClass,
  addClass,
  removeClass,
  toggleClass
});

function css(style, val) {
  const ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      const t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      for (const name of style) {
        const cased = camelCase(name);
        ret[name] = this.node.style[cased];
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (typeof style === 'object') {
      for (const name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? '' : style[name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css,
  show,
  hide,
  visible
});

function data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map(filter(this.node.attributes, el => el.nodeName.indexOf('data-') === 0), el => el.nodeName.slice(5)));
  } else if (a instanceof Array) {
    const data = {};

    for (const key of a) {
      data[key] = this.data(key);
    }

    return data;
  } else if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data
});

function remember(k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (const key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember,
  forget,
  memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  const integer = Math.round(component);
  const bounded = Math.max(0, Math.min(255, integer));
  const hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  const params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

class Color {
  constructor(...inputs) {
    this.init(...inputs);
  } // Test if given value is a color


  static isColor(color) {
    return color && (color instanceof Color || this.isRgb(color) || this.test(color));
  } // Test if given value is an rgb object


  static isRgb(color) {
    return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
  }
  /*
  Generating random colors
  */


  static random(mode = 'vibrant', t, u) {
    // Get the math modules
    const {
      random,
      round,
      sin,
      PI: pi
    } = Math; // Run the correct generator

    if (mode === 'vibrant') {
      const l = (81 - 57) * random() + 57;
      const c = (83 - 45) * random() + 45;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'sine') {
      t = t == null ? random() : t;
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'pastel') {
      const l = (94 - 86) * random() + 86;
      const c = (26 - 9) * random() + 9;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'dark') {
      const l = 10 + 10 * random();
      const c = (125 - 75) * random() + 86;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'rgb') {
      const r = 255 * random();
      const g = 255 * random();
      const b = 255 * random();
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'lab') {
      const l = 100 * random();
      const a = 256 * random() - 128;
      const b = 256 * random() - 128;
      const color = new Color(l, a, b, 'lab');
      return color;
    } else if (mode === 'grey') {
      const grey = 255 * random();
      const color = new Color(grey, grey, grey);
      return color;
    } else {
      throw new Error('Unsupported random color mode');
    }
  } // Test if given value is a color string


  static test(color) {
    return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
  }

  cmyk() {
    // Get the rgb values for the current color
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Get the cmyk values in an unbounded format

    const k = Math.min(1 - r, 1 - g, 1 - b);

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk');
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k); // Construct the new color

    const color = new Color(c, m, y, k, 'cmyk');
    return color;
  }

  hsl() {
    // Get the rgb values
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Find the maximum and minimum values to get the lightness

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // If the r, g, v values are identical then we are grey

    const isGrey = max === min; // Calculate the hue and saturation

    const delta = max - min;
    const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
    return color;
  }

  init(a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

    if (this.space) {
      for (const component in this.space) {
        delete this[this.space[component]];
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space;
      d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

      Object.assign(this, {
        _a: a,
        _b: b,
        _c: c,
        _d: d,
        space
      }); // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
      Object.assign(this, {
        _a: a[0],
        _b: a[1],
        _c: a[2],
        _d: a[3] || 0
      });
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b);
      Object.assign(this, values);
    } else if (typeof a === 'string') {
      if (isRgb.test(a)) {
        const noWhitespace = a.replace(whitespace, '');
        const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map(v => parseInt(v));
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else if (isHex.test(a)) {
        const hexParse = v => parseInt(v, 16);

        const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else throw Error('Unsupported string format, can\'t construct Color');
    } // Now add the components as a convenience


    const {
      _a,
      _b,
      _c,
      _d
    } = this;
    const components = this.space === 'rgb' ? {
      r: _a,
      g: _b,
      b: _c
    } : this.space === 'xyz' ? {
      x: _a,
      y: _b,
      z: _c
    } : this.space === 'hsl' ? {
      h: _a,
      s: _b,
      l: _c
    } : this.space === 'lab' ? {
      l: _a,
      a: _b,
      b: _c
    } : this.space === 'lch' ? {
      l: _a,
      c: _b,
      h: _c
    } : this.space === 'cmyk' ? {
      c: _a,
      m: _b,
      y: _c,
      k: _d
    } : {};
    Object.assign(this, components);
  }

  lab() {
    // Get the xyz color
    const {
      x,
      y,
      z
    } = this.xyz(); // Get the lab components

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z); // Construct and return a new color

    const color = new Color(l, a, b, 'lab');
    return color;
  }

  lch() {
    // Get the lab color directly
    const {
      l,
      a,
      b
    } = this.lab(); // Get the chromaticity and the hue using polar coordinates

    const c = Math.sqrt(a ** 2 + b ** 2);
    let h = 180 * Math.atan2(b, a) / Math.PI;

    if (h < 0) {
      h *= -1;
      h = 360 - h;
    } // Make a new color and return it


    const color = new Color(l, c, h, 'lch');
    return color;
  }
  /*
  Conversion Methods
  */


  rgb() {
    if (this.space === 'rgb') {
      return this;
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let {
        x,
        y,
        z
      } = this;

      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let {
          l,
          a,
          b
        } = this;

        if (this.space === 'lch') {
          const {
            c,
            h
          } = this;
          const dToR = Math.PI / 180;
          a = c * Math.cos(dToR * h);
          b = c * Math.sin(dToR * h);
        } // Undo the nonlinear function


        const yL = (l + 16) / 116;
        const xL = a / 500 + yL;
        const zL = yL - b / 200; // Get the xyz values

        const ct = 16 / 116;
        const mx = 0.008856;
        const nm = 7.787;
        x = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
        y = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
        z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
      } // Convert xyz to unbounded rgb values


      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

      const pow = Math.pow;
      const bd = 0.0031308;
      const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
      const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
      const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

      const color = new Color(255 * r, 255 * g, 255 * b);
      return color;
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let {
        h,
        s,
        l
      } = this;
      h /= 360;
      s /= 100;
      l /= 100; // If we are grey, then just make the color directly

      if (s === 0) {
        l *= 255;
        const color = new Color(l, l, l);
        return color;
      } // TODO I have no idea what this does :D If you figure it out, tell me!


      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q; // Get the rgb values

      const r = 255 * hueToRgb(p, q, h + 1 / 3);
      const g = 255 * hueToRgb(p, q, h);
      const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color

      const color = new Color(r, g, b);
      return color;
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const {
        c,
        m,
        y,
        k
      } = this; // Get the rgb values

      const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k)); // Form the color and return it

      const color = new Color(r, g, b);
      return color;
    } else {
      return this;
    }
  }

  toArray() {
    const {
      _a,
      _b,
      _c,
      _d,
      space
    } = this;
    return [_a, _b, _c, _d, space];
  }

  toHex() {
    const [r, g, b] = this._clamped().map(componentHex);

    return `#${r}${g}${b}`;
  }

  toRgb() {
    const [rV, gV, bV] = this._clamped();

    const string = `rgb(${rV},${gV},${bV})`;
    return string;
  }

  toString() {
    return this.toHex();
  }

  xyz() {
    // Normalise the red, green and blue values
    const {
      _a: r255,
      _b: g255,
      _c: b255
    } = this.rgb();
    const [r, g, b] = [r255, g255, b255].map(v => v / 255); // Convert to the lab rgb space

    const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

    const x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
    const y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
    const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

    const color = new Color(x, y, z, 'xyz');
    return color;
  }
  /*
  Input and Output methods
  */


  _clamped() {
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const {
      max,
      min,
      round
    } = Math;

    const format = v => max(0, min(round(v), 255));

    return [_a, _b, _c].map(format);
  }
  /*
  Constructing colors
  */


}

class Point {
  // Initialize
  constructor(...args) {
    this.init(...args);
  } // Clone point


  clone() {
    return new Point(this);
  }

  init(x, y) {
    const base = {
      x: 0,
      y: 0
    }; // ensure source as object

    const source = Array.isArray(x) ? {
      x: x[0],
      y: x[1]
    } : typeof x === 'object' ? {
      x: x.x,
      y: x.y
    } : {
      x: x,
      y: y
    }; // merge source

    this.x = source.x == null ? base.x : source.x;
    this.y = source.y == null ? base.y : source.y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }

  transform(m) {
    return this.clone().transformO(m);
  } // Transform point with matrix


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    const {
      x,
      y
    } = this; // Perform the matrix multiplication

    this.x = m.a * x + m.c * y + m.e;
    this.y = m.b * x + m.d * y + m.f;
    return this;
  }

}
function point(x, y) {
  return new Point(x, y).transformO(this.screenCTM().inverseO());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

class Matrix {
  constructor(...args) {
    this.init(...args);
  }

  static formatTransforms(o) {
    // Get all of the parameters required to form the matrix
    const flipBoth = o.flip === 'both' || o.flip === true;
    const flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
    const flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
    const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
    const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
    const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
    const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
    const shear = o.shear || 0;
    const theta = o.rotate || o.theta || 0;
    const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
    const ox = origin.x;
    const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. That is why NaN

    const position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
    const px = position.x;
    const py = position.y;
    const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
    const tx = translate.x;
    const ty = translate.y;
    const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
    const rx = relative.x;
    const ry = relative.y; // Populate all of the values

    return {
      scaleX,
      scaleY,
      skewX,
      skewY,
      shear,
      theta,
      rx,
      ry,
      tx,
      ty,
      ox,
      oy,
      px,
      py
    };
  }

  static fromArray(a) {
    return {
      a: a[0],
      b: a[1],
      c: a[2],
      d: a[3],
      e: a[4],
      f: a[5]
    };
  }

  static isMatrixLike(o) {
    return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
  } // left matrix, right matrix, target matrix which is overwritten


  static matrixMultiply(l, r, o) {
    // Work out the product directly
    const a = l.a * r.a + l.c * r.b;
    const b = l.b * r.a + l.d * r.b;
    const c = l.a * r.c + l.c * r.d;
    const d = l.b * r.c + l.d * r.d;
    const e = l.e + l.a * r.e + l.c * r.f;
    const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

    o.a = a;
    o.b = b;
    o.c = c;
    o.d = d;
    o.e = e;
    o.f = f;
    return o;
  }

  around(cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix);
  } // Transform around a center point


  aroundO(cx, cy, matrix) {
    const dx = cx || 0;
    const dy = cy || 0;
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
  } // Clones this matrix


  clone() {
    return new Matrix(this);
  } // Decomposes this matrix into its affine parameters


  decompose(cx = 0, cy = 0) {
    // Get the parameters from the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

    const determinant = a * d - b * c;
    const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix

    const sx = ccw * Math.sqrt(a * a + b * b);
    const thetaRad = Math.atan2(ccw * b, ccw * a);
    const theta = 180 / Math.PI * thetaRad;
    const ct = Math.cos(thetaRad);
    const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters

    const lam = (a * c + b * d) / determinant;
    const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

    const tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
    const ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  } // Check if two matrices are equal


  equals(other) {
    if (other === this) return true;
    const comp = new Matrix(other);
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
  } // Flip matrix on x or y, at a given offset


  flip(axis, around) {
    return this.clone().flipO(axis, around);
  }

  flipO(axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
  } // Initialize


  init(source) {
    const base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

    source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === 'object' && Matrix.isMatrixLike(source) ? source : typeof source === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

    this.a = source.a != null ? source.a : base.a;
    this.b = source.b != null ? source.b : base.b;
    this.c = source.c != null ? source.c : base.c;
    this.d = source.d != null ? source.d : base.d;
    this.e = source.e != null ? source.e : base.e;
    this.f = source.f != null ? source.f : base.f;
    return this;
  }

  inverse() {
    return this.clone().inverseO();
  } // Inverses matrix


  inverseO() {
    // Get the current parameters out of the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Invert the 2x2 matrix in the top left

    const det = a * d - b * c;
    if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

    const na = d / det;
    const nb = -b / det;
    const nc = -c / det;
    const nd = a / det; // Apply the inverted matrix to the top right

    const ne = -(na * e + nc * f);
    const nf = -(nb * e + nd * f); // Construct the inverted matrix

    this.a = na;
    this.b = nb;
    this.c = nc;
    this.d = nd;
    this.e = ne;
    this.f = nf;
    return this;
  }

  lmultiply(matrix) {
    return this.clone().lmultiplyO(matrix);
  }

  lmultiplyO(matrix) {
    const r = this;
    const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Left multiplies by the given matrix


  multiply(matrix) {
    return this.clone().multiplyO(matrix);
  }

  multiplyO(matrix) {
    // Get the matrices
    const l = this;
    const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Rotate matrix


  rotate(r, cx, cy) {
    return this.clone().rotateO(r, cx, cy);
  }

  rotateO(r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = radians(r);
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * cos - b * sin;
    this.b = b * cos + a * sin;
    this.c = c * cos - d * sin;
    this.d = d * cos + c * sin;
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
    return this;
  } // Scale matrix


  scale(x, y, cx, cy) {
    return this.clone().scaleO(...arguments);
  }

  scaleO(x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * x;
    this.b = b * y;
    this.c = c * x;
    this.d = d * y;
    this.e = e * x - cx * x + cx;
    this.f = f * y - cy * y + cy;
    return this;
  } // Shear matrix


  shear(a, cx, cy) {
    return this.clone().shearO(a, cx, cy);
  }

  shearO(lx, cx = 0, cy = 0) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.c = c + d * lx;
    this.e = e + f * lx - cy * lx;
    return this;
  } // Skew Matrix


  skew(x, y, cx, cy) {
    return this.clone().skewO(...arguments);
  }

  skewO(x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    } // Convert degrees to radians


    x = radians(x);
    y = radians(y);
    const lx = Math.tan(x);
    const ly = Math.tan(y);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.b = b + a * ly;
    this.c = c + d * lx;
    this.d = d + c * ly;
    this.e = e + f * lx - cy * lx;
    this.f = f + e * ly - cx * ly;
    return this;
  } // SkewX


  skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  } // SkewY


  skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  }

  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  } // Convert matrix to string


  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  } // Transform a matrix into another matrix by manipulating the space


  transform(o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      const matrix = new Matrix(o);
      return matrix.multiplyO(this);
    } // Get the proposed transformations and the current transformations


    const t = Matrix.formatTransforms(o);
    const current = this;
    const {
      x: ox,
      y: oy
    } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix

    const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
      // Doesn't work because t.px is also 0 if it wasn't passed

      const dx = isFinite(t.px) ? t.px - origin.x : 0;
      const dy = isFinite(t.py) ? t.py - origin.y : 0;
      transformer.translateO(dx, dy);
    } // Translate now after positioning


    transformer.translateO(t.tx, t.ty);
    return transformer;
  } // Translate matrix


  translate(x, y) {
    return this.clone().translateO(x, y);
  }

  translateO(x, y) {
    this.e += x || 0;
    this.f += y || 0;
    return this;
  }

  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }

}
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    const rect = this.rect(1, 1);
    const m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    const svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    const path = svg.path().node;
    parser.nodes = {
      svg,
      path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    const b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
class Box {
  constructor(...args) {
    this.init(...args);
  }

  addOffset() {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += globals.window.pageXOffset;
    this.y += globals.window.pageYOffset;
    return new Box(this);
  }

  init(source) {
    const base = [0, 0, 0, 0];
    source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
    this.x = source[0] || 0;
    this.y = source[1] || 0;
    this.width = this.w = source[2] || 0;
    this.height = this.h = source[3] || 0; // Add more bounding box properties

    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.cx = this.x + this.w / 2;
    this.cy = this.y + this.h / 2;
    return this;
  }

  isNulled() {
    return isNulledBox(this);
  } // Merge rect box with another, return a new instance


  merge(box) {
    const x = Math.min(this.x, box.x);
    const y = Math.min(this.y, box.y);
    const width = Math.max(this.x + this.width, box.x + box.width) - x;
    const height = Math.max(this.y + this.height, box.y + box.height) - y;
    return new Box(x, y, width, height);
  }

  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  }

  transform(m) {
    if (!(m instanceof Matrix)) {
      m = new Matrix(m);
    }

    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    const pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
    pts.forEach(function (p) {
      p = p.transform(m);
      xMin = Math.min(xMin, p.x);
      xMax = Math.max(xMax, p.x);
      yMin = Math.min(yMin, p.y);
      yMax = Math.max(yMax, p.y);
    });
    return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
  }

}

function getBox(el, getBBoxFn, retry) {
  let box;

  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
    // by throwing an error here...

    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }

  return box;
}

function bbox() {
  // Function to get bbox is getBBox()
  const getBBox = node => node.getBBox(); // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again


  const retry = el => {
    try {
      const clone = el.clone().addTo(parser().svg).show();
      const box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      // We give up...
      throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
    }
  };

  const box = getBox(this, getBBox, retry);
  const bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  const getRBox = node => node.getBoundingClientRect();

  const retry = el => {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
  };

  const box = getBox(this, getRBox, retry);
  const rbox = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element

  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  } // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset


  return rbox.addOffset();
} // Checks whether the given point is inside the bounding box

function inside(x, y) {
  const box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },

    zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesn't help!
      let {
        width,
        height
      } = this.attr(['width', 'height']); // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ

      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      } // Giving up...


      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }

      const v = this.viewbox();
      const zoomX = width / v.width;
      const zoomY = height / v.height;
      const zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation

      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      const box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }

  }
});
register(Box, 'Box');

class List extends Array {
  constructor(arr = [], ...args) {
    super(arr, ...args);
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...arr);
  }

}
extend([List], {
  each(fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el, i, arr) => {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args);
      });
    }
  },

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

});
const reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function (...attrs) {
      return this.each(name, ...attrs);
    };

    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
  let n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  let n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace

function on(node, events, listener, binding, options) {
  const l = listener.bind(binding || node);
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    const ev = event.split('.')[0];
    const ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    const ev = event && event.split('.')[0];
    const ns = event && event.split('.')[1];
    let namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  const n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true,
      ...options
    });
    n.dispatchEvent(event);
  }

  return event;
}

class EventTarget extends Base {
  addEventListener() {}

  dispatch(event, data, options) {
    return dispatch(this, event, data, options);
  }

  dispatchEvent(event) {
    const bag = this.getEventHolder().events;
    if (!bag) return true;
    const events = bag[event.type];

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event);
      }
    }

    return !event.defaultPrevented;
  } // Fire given event


  fire(event, data, options) {
    this.dispatch(event, data, options);
    return this;
  }

  getEventHolder() {
    return this;
  }

  getEventTarget() {
    return this;
  } // Unbind event from listener


  off(event, listener, options) {
    off(this, event, listener, options);
    return this;
  } // Bind given event to listener


  on(event, listener, binding, options) {
    on(this, event, listener, binding, options);
    return this;
  }

  removeEventListener() {}

}
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

const timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

const attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = {
  __proto__: null,
  noop: noop,
  timeline: timeline,
  attrs: attrs
};

class SVGArray extends Array {
  constructor(...args) {
    super(...args);
    this.init(...args);
  }

  clone() {
    return new this.constructor(this);
  }

  init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...this.parse(arr));
    return this;
  } // Parse whitespace separated string


  parse(array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  }

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

  toSet() {
    return new Set(this);
  }

  toString() {
    return this.join(' ');
  } // Flattens the array if needed


  valueOf() {
    const ret = [];
    ret.push(...this);
    return ret;
  }

}

class SVGNumber {
  // Initialize
  constructor(...args) {
    this.init(...args);
  }

  convert(unit) {
    return new SVGNumber(this.value, unit);
  } // Divide number


  divide(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this / number, this.unit || number.unit);
  }

  init(value, unit) {
    unit = Array.isArray(value) ? value[1] : unit;
    value = Array.isArray(value) ? value[0] : value; // initialize defaults

    this.value = 0;
    this.unit = unit || ''; // parse value

    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]); // normalize

        if (unit[5] === '%') {
          this.value /= 100;
        } else if (unit[5] === 's') {
          this.value *= 1000;
        } // store unit


        this.unit = unit[5];
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }

    return this;
  } // Subtract number


  minus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this - number, this.unit || number.unit);
  } // Add number


  plus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this + number, this.unit || number.unit);
  } // Multiply number


  times(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this * number, this.unit || number.unit);
  }

  toArray() {
    return [this.value, this.unit];
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
  }

  valueOf() {
    return this.value;
  }

}

const hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;

    for (const node of val) {
      attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr);
      return last;
    }, {});
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

class Dom extends EventTarget {
  constructor(node, attrs) {
    super();
    this.node = node;
    this.type = node.nodeName;

    if (attrs && node !== attrs) {
      this.attr(attrs);
    }
  } // Add given element at a position


  add(element, i) {
    element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces

    if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
      element.removeNamespace();
    }

    if (i == null) {
      this.node.appendChild(element.node);
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i]);
    }

    return this;
  } // Add element to given container and return self


  addTo(parent, i) {
    return makeInstance(parent).put(this, i);
  } // Returns all child elements


  children() {
    return new List(map(this.node.children, function (node) {
      return adopt(node);
    }));
  } // Remove all elements in this container


  clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    }

    return this;
  } // Clone element


  clone(deep = true, assignNewIds = true) {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom(); // clone element

    let nodeClone = this.node.cloneNode(deep);

    if (assignNewIds) {
      // assign new id
      nodeClone = assignNewId(nodeClone);
    }

    return new this.constructor(nodeClone);
  } // Iterates over all children and invokes a given block


  each(block, deep) {
    const children = this.children();
    let i, il;

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [i, children]);

      if (deep) {
        children[i].each(block, deep);
      }
    }

    return this;
  }

  element(nodeName, attrs) {
    return this.put(new Dom(create(nodeName), attrs));
  } // Get first child


  first() {
    return adopt(this.node.firstChild);
  } // Get a element at the given index


  get(i) {
    return adopt(this.node.childNodes[i]);
  }

  getEventHolder() {
    return this.node;
  }

  getEventTarget() {
    return this.node;
  } // Checks if the given element is a child


  has(element) {
    return this.index(element) >= 0;
  }

  html(htmlOrFn, outerHTML) {
    return this.xml(htmlOrFn, outerHTML, html);
  } // Get / set id


  id(id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = eid(this.type);
    } // don't set directly with this.node.id to make `null` work correctly


    return this.attr('id', id);
  } // Gets index of given element


  index(element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node);
  } // Get the last child


  last() {
    return adopt(this.node.lastChild);
  } // matches the element vs a css selector


  matches(selector) {
    const el = this.node;
    const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
    return matcher && matcher.call(el, selector);
  } // Returns the parent element instance


  parent(type) {
    let parent = this; // check for parent

    if (!parent.node.parentNode) return null; // get parent element

    parent = adopt(parent.node.parentNode);
    if (!type) return parent; // loop through ancestors if type is given

    do {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
    } while (parent = adopt(parent.node.parentNode));

    return parent;
  } // Basically does the same as `add()` but returns the added element instead


  put(element, i) {
    element = makeInstance(element);
    this.add(element, i);
    return element;
  } // Add element to given container and return container


  putIn(parent, i) {
    return makeInstance(parent).add(this, i);
  } // Remove element


  remove() {
    if (this.parent()) {
      this.parent().removeElement(this);
    }

    return this;
  } // Remove a given child


  removeElement(element) {
    this.node.removeChild(element.node);
    return this;
  } // Replace this with element


  replace(element) {
    element = makeInstance(element);

    if (this.node.parentNode) {
      this.node.parentNode.replaceChild(element.node, this.node);
    }

    return element;
  }

  round(precision = 2, map = null) {
    const factor = 10 ** precision;
    const attrs = this.attr(map);

    for (const i in attrs) {
      if (typeof attrs[i] === 'number') {
        attrs[i] = Math.round(attrs[i] * factor) / factor;
      }
    }

    this.attr(attrs);
    return this;
  } // Import / Export raw svg


  svg(svgOrFn, outerSVG) {
    return this.xml(svgOrFn, outerSVG, svg);
  } // Return id on string conversion


  toString() {
    return this.id();
  }

  words(text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text;
    return this;
  }

  wrap(node) {
    const parent = this.parent();

    if (!parent) {
      return this.addTo(node);
    }

    const position = parent.index(this);
    return parent.put(node, position).put(this);
  } // write svgjs data to the dom


  writeDataToDom() {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom();
    });
    return this;
  } // Import / Export raw svg


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // act as getter if no svg string is given


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom

      this.writeDataToDom();
      let current = this; // An export modifier was passed

      if (xmlOrFn != null) {
        current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

        if (outerXML) {
          const result = xmlOrFn(current);
          current = result || current; // The user does not want this node? Well, then he gets nothing

          if (result === false) return '';
        } // Deep loop through all children and apply modifier


        current.each(function () {
          const result = xmlOrFn(this);

          const _this = result || this; // If modifier returns false, discard node


          if (result === false) {
            this.remove(); // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this);
          }
        }, true);
      } // Return outer or inner content


      return outerXML ? current.node.outerHTML : current.node.innerHTML;
    } // Act as setter if we got a string
    // The default for import is, that the current node is not replaced


    outerXML = outerXML == null ? false : outerXML; // Create temporary holder

    const well = create('wrapper', ns);
    const fragment = globals.document.createDocumentFragment(); // Dump raw svg

    well.innerHTML = xmlOrFn; // Transplant nodes into the fragment

    for (let len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild);
    }

    const parent = this.parent(); // Add the whole fragment at once

    return outerXML ? this.replace(fragment) && parent : this.add(fragment);
  }

}
extend(Dom, {
  attr,
  find,
  findOne
});
register(Dom, 'Dom');

class Element extends Dom {
  constructor(node, attrs) {
    super(node, attrs); // initialize data object

    this.dom = {}; // create circular reference

    this.node.instance = this;

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
  } // Move element by its center


  center(x, y) {
    return this.cx(x).cy(y);
  } // Move by center over x-axis


  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  } // Move by center over y-axis


  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  } // Get defs


  defs() {
    const root = this.root();
    return root && root.defs();
  } // Relative move over x and y axes


  dmove(x, y) {
    return this.dx(x).dy(y);
  } // Relative move over x axis


  dx(x = 0) {
    return this.x(new SVGNumber(x).plus(this.x()));
  } // Relative move over y axis


  dy(y = 0) {
    return this.y(new SVGNumber(y).plus(this.y()));
  }

  getEventHolder() {
    return this;
  } // Set height of element


  height(height) {
    return this.attr('height', height);
  } // Move element to given x and y values


  move(x, y) {
    return this.x(x).y(y);
  } // return array of all ancestors of given type up to the root svg


  parents(until = this.root()) {
    const isSelector = typeof until === 'string';

    if (!isSelector) {
      until = makeInstance(until);
    }

    const parents = new List();
    let parent = this;

    while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
      parents.push(parent);

      if (!isSelector && parent.node === until.node) {
        break;
      }

      if (isSelector && parent.matches(until)) {
        break;
      }

      if (parent.node === this.root().node) {
        // We worked our way to the root and didn't match `until`
        return null;
      }
    }

    return parents;
  } // Get referenced element form attribute value


  reference(attr) {
    attr = this.attr(attr);
    if (!attr) return null;
    const m = (attr + '').match(reference);
    return m ? makeInstance(m[1]) : null;
  } // Get parent document


  root() {
    const p = this.parent(getClass(root));
    return p && p.root();
  } // set given data to the elements data property


  setData(o) {
    this.dom = o;
    return this;
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
  } // Set width of element


  width(width) {
    return this.attr('width', width);
  } // write svgjs data to the dom


  writeDataToDom() {
    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
    }

    return super.writeDataToDom();
  } // Move over x-axis


  x(x) {
    return this.attr('x', x);
  } // Move over y-axis


  y(y) {
    return this.attr('y', y);
  }

}
extend(Element, {
  bbox,
  rbox,
  inside,
  point,
  ctm,
  screenCTM
});
register(Element, 'Element');

const sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  const extension = {};
  let i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function (lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function (x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function (direction = 'both', origin = 'center') {
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }

    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function (x, y = x) {
    const type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function (length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v]);

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
}); // Add events to elements

const methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  const matrix = (this.attr('transform') || '' // split transformations
  ).split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    const kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent, i) {
  if (this === parent) return this;
  const ctm = this.screenCTM();
  const pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot(i) {
  return this.toParent(this.root(), i);
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    const decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o,
      origin: getOrigin(o, this)
    };
  } // The user can pass a boolean, an Element or an Matrix or nothing


  const cleanRelative = relative === true ? this : relative || false;
  const result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform,
  matrixify,
  toParent,
  toRoot,
  transform
});

class Container extends Element {
  flatten(parent = this, index) {
    this.each(function () {
      if (this instanceof Container) {
        return this.flatten().ungroup();
      }
    });
    return this;
  }

  ungroup(parent = this.parent(), index = parent.index(this)) {
    // when parent != this, we want append all elements to the end
    index = index === -1 ? parent.children().length : index;
    this.each(function (i, children) {
      // reverse each
      return children[children.length - i - 1].toParent(parent, index);
    });
    return this.remove();
  }

}
register(Container, 'Container');

class Defs extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('defs', node), attrs);
  }

  flatten() {
    return this;
  }

  ungroup() {
    return this;
  }

}
register(Defs, 'Defs');

class Shape extends Element {}
register(Shape, 'Shape');

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx$1(x) {
  return this.attr('cx', x);
} // Move by center over y-axis

function cy$1(y) {
  return this.attr('cy', y);
} // Set width of element

function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = {
  __proto__: null,
  rx: rx,
  ry: ry,
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
};

class Ellipse extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('ellipse', node), attrs);
  }

  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
  }

}
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

class Fragment extends Dom {
  constructor(node = globals.document.createDocumentFragment()) {
    super(node);
  } // Import / Export raw xml


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // because this is a fragment we have to put all elements into a wrapper first
    // before we can get the innerXML from it


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      const wrapper = new Dom(create('wrapper', ns));
      wrapper.add(this.node.cloneNode(true));
      return wrapper.xml(false, ns);
    } // Act as setter if we got a string


    return super.xml(xmlOrFn, false, ns);
  }

}

register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = {
  __proto__: null,
  from: from,
  to: to
};

class Gradient extends Container {
  constructor(type, attrs) {
    super(nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'gradientTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*=' + this.id() + ']');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update gradient


  update(block) {
    // remove all stops
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url(#' + this.id() + ')';
  }

}
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient(...args) {
      return this.defs().gradient(...args);
    }

  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

class Pattern extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('pattern', node), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'patternTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*=' + this.id() + ']');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update pattern by rebuilding


  update(block) {
    // remove content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url(#' + this.id() + ')';
  }

}
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern(...args) {
      return this.defs().pattern(...args);
    }

  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

class Image extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('image', node), attrs);
  } // (re)load image


  load(url, callback) {
    if (!url) return this;
    const img = new globals.window.Image();
    on(img, 'load', function (e) {
      const p = this.parent(Pattern); // ensure image size

      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height);
      }

      if (p instanceof Pattern) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height());
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e);
      }
    }, this);
    on(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      off(img);
    });
    return this.attr('href', img.src = url, xlink);
  }

}
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, pattern => {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback);
    })
  }
});
register(Image, 'Image');

class PointArray extends SVGArray {
  // Get bounding box of points
  bbox() {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return new Box(minX, minY, maxX - minX, maxY - minY);
  } // Move point string


  move(x, y) {
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  } // Parse point string and flat array


  parse(array = [0, 0]) {
    const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths

    if (array instanceof Array) {
      array = Array.prototype.concat.apply([], array);
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (let i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  } // Resize poly string


  size(width, height) {
    let i;
    const box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  } // Convert array to line object


  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  } // Convert array to string


  toString() {
    const array = []; // convert to a poly point string

    for (let i = 0, il = this.length; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  }

  transform(m) {
    return this.clone().transformO(m);
  } // transform points with matrix (similar to Point.transform)


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    for (let i = this.length; i--;) {
      // Perform the matrix multiplication
      const [x, y] = this[i];
      this[i][0] = m.a * x + m.c * y + m.e;
      this[i][1] = m.b * x + m.d * y + m.f;
    }

    return this;
  }

}

const MorphArray = PointArray; // Move by left top corner over x-axis

function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  const b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  const b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = {
  __proto__: null,
  MorphArray: MorphArray,
  x: x$2,
  y: y$2,
  width: width$1,
  height: height$1
};

class Line extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('line', node), attrs);
  } // Get array


  array() {
    return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  } // Move by left top corner


  move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  } // Overwrite native plot() method


  plot(x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array();
    } else if (typeof y1 !== 'undefined') {
      x1 = {
        x1,
        y1,
        x2,
        y2
      };
    } else {
      x1 = new PointArray(x1).toLine();
    }

    return this.attr(x1);
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr(this.array().size(p.width, p.height).toLine());
  }

}
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

class Marker extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('marker', node), attrs);
  } // Set height of element


  height(height) {
    return this.attr('markerHeight', height);
  }

  orient(orient) {
    return this.attr('orient', orient);
  } // Set marker refX and refY


  ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  } // Return the fill id


  toString() {
    return 'url(#' + this.id() + ')';
  } // Update marker


  update(block) {
    // remove all content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Set width of element


  width(width) {
    return this.attr('markerWidth', width);
  }

}
registerMethods({
  Container: {
    marker(...args) {
      // Create marker element in defs
      return this.defs().marker(...args);
    }

  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker(marker, width, height, block) {
      let attr = ['marker']; // Build attribute name

      if (marker !== 'all') attr.push(marker);
      attr = attr.join('-'); // Set marker attribute

      marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, marker);
    }

  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

const easing = {
  '-': function (pos) {
    return pos;
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    let jumps = steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps);
      const jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
class Stepper {
  done() {
    return false;
  }

}
/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor(fn = timeline.ease) {
    super();
    this.ease = easing[fn] || fn;
  }

  step(from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to;
    }

    return from + (to - from) * this.ease(pos);
  }

}
/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor(fn) {
    super();
    this.stepper = fn;
  }

  done(c) {
    return c.done;
  }

  step(current, target, dt, c) {
    return this.stepper(current, target, dt, c);
  }

}

function recalculate() {
  // Apply the default parameters
  const duration = (this._duration || 500) / 1000;
  const overshoot = this._overshoot || 0; // Calculate the PID natural response

  const eps = 1e-10;
  const pi = Math.PI;
  const os = Math.log(overshoot / 100 + eps);
  const zeta = -os / Math.sqrt(pi * pi + os * os);
  const wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

class Spring extends Controller {
  constructor(duration = 500, overshoot = 0) {
    super();
    this.duration(duration).overshoot(overshoot);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    if (dt > 100) dt = 16;
    dt /= 1000; // Get the previous velocity

    const velocity = c.velocity || 0; // Apply the control to get the new position and store it

    const acceleration = -this.d * velocity - this.k * (current - target);
    const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

    c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
    return c.done ? target : newPosition;
  }

}
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
class PID extends Controller {
  constructor(p = 0.1, i = 0.01, d = 0, windup = 1000) {
    super();
    this.p(p).i(i).d(d).windup(windup);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    const p = target - current;
    let i = (c.integral || 0) + p * dt;
    const d = (p - (c.error || 0)) / dt;
    const windup = this._windup; // antiwindup

    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup));
    }

    c.error = p;
    c.integral = i;
    c.done = Math.abs(p) < 0.001;
    return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
  }

}
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

const segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function (c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function (c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function (c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function (c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function (c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
const mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

function makeAbsolut(parser) {
  const command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}

function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}

function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  const pathLetter = isPathLetter.test(token);

  if (pathLetter) {
    parser.segment = [token];
  } else {
    const lastCommand = parser.lastCommand;
    const small = lastCommand.toLowerCase();
    const isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }

  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}

function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;

  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}

function finalizeSegment(parser) {
  parser.inSegment = false;

  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }

  parser.segments.push(parser.segment);
}

function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  const isArc = parser.segment[0].toUpperCase() === 'A';
  const length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}

function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}

function pathParser(d, toAbsolute = true) {
  let index = 0;
  let token = '';
  const parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };

  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }

    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }

    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }

      parser.inNumber = true;
      parser.number += token;
      continue;
    }

    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }

      continue;
    }

    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.number += token;
      parser.inNumber = true;
      continue;
    }

    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }

    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }

      --index;
    }
  }

  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }

  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }

  return parser.segments;
}

function arrayToString(a) {
  let s = '';

  for (let i = 0, il = a.length; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

class PathArray extends SVGArray {
  // Get bounding box of path
  bbox() {
    parser().path.setAttribute('d', this.toString());
    return new Box(parser.nodes.path.getBBox());
  } // Move path string


  move(x, y) {
    // get bounding box of current situation
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (let l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  } // Absolutize and parse path to array


  parse(d = 'M0 0') {
    if (Array.isArray(d)) {
      d = Array.prototype.concat.apply([], d).toString();
    }

    return pathParser(d);
  } // Resize path string


  size(width, height) {
    // get bounding box of current situation
    const box = this.bbox();
    let i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  } // Convert array to string


  toString() {
    return arrayToString(this);
  }

}

const getClassForType = value => {
  const type = typeof value;

  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};

class Morphable {
  constructor(stepper) {
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  at(pos) {
    return this._morphObj.morph(this._from, this._to, pos, this._stepper, this._context);
  }

  done() {
    const complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
      return last && curr;
    }, true);

    return complete;
  }

  from(val) {
    if (val == null) {
      return this._from;
    }

    this._from = this._set(val);
    return this;
  }

  stepper(stepper) {
    if (stepper == null) return this._stepper;
    this._stepper = stepper;
    return this;
  }

  to(val) {
    if (val == null) {
      return this._to;
    }

    this._to = this._set(val);
    return this;
  }

  type(type) {
    // getter
    if (type == null) {
      return this._type;
    } // setter


    this._type = type;
    return this;
  }

  _set(value) {
    if (!this._type) {
      this.type(getClassForType(value));
    }

    let result = new this._type(value);

    if (this._type === Color) {
      result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
    }

    if (this._type === ObjectBag) {
      result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
    }

    result = result.toConsumable();
    this._morphObj = this._morphObj || new this._type();
    this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
      o.done = true;
      return o;
    });
    return result;
  }

}
class NonMorphable {
  constructor(...args) {
    this.init(...args);
  }

  init(val) {
    val = Array.isArray(val) ? val[0] : val;
    this.value = val;
    return this;
  }

  toArray() {
    return [this.value];
  }

  valueOf() {
    return this.value;
  }

}
class TransformBag {
  constructor(...args) {
    this.init(...args);
  }

  init(obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      };
    }

    Object.assign(this, TransformBag.defaults, obj);
    return this;
  }

  toArray() {
    const v = this;
    return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
  }

}
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};

const sortByKey = (a, b) => {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};

class ObjectBag {
  constructor(...args) {
    this.init(...args);
  }

  align(other) {
    const values = this.values;

    for (let i = 0, il = values.length; i < il; ++i) {
      // If the type is the same we only need to check if the color is in the correct format
      if (values[i + 1] === other[i + 1]) {
        if (values[i + 1] === Color && other[i + 7] !== values[i + 7]) {
          const space = other[i + 7];
          const color = new Color(this.values.splice(i + 3, 5))[space]().toArray();
          this.values.splice(i + 3, 0, ...color);
        }

        i += values[i + 2] + 2;
        continue;
      }

      if (!other[i + 1]) {
        return this;
      } // The types differ, so we overwrite the new type with the old one
      // And initialize it with the types default (e.g. black for color or 0 for number)


      const defaultObject = new other[i + 1]().toArray(); // Than we fix the values array

      const toDelete = values[i + 2] + 3;
      values.splice(i, toDelete, other[i], other[i + 1], other[i + 2], ...defaultObject);
      i += values[i + 2] + 2;
    }

    return this;
  }

  init(objOrArr) {
    this.values = [];

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr.slice();
      return;
    }

    objOrArr = objOrArr || {};
    const entries = [];

    for (const i in objOrArr) {
      const Type = getClassForType(objOrArr[i]);
      const val = new Type(objOrArr[i]).toArray();
      entries.push([i, Type, val.length, ...val]);
    }

    entries.sort(sortByKey);
    this.values = entries.reduce((last, curr) => last.concat(curr), []);
    return this;
  }

  toArray() {
    return this.values;
  }

  valueOf() {
    const obj = {};
    const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {

    while (arr.length) {
      const key = arr.shift();
      const Type = arr.shift();
      const num = arr.shift();
      const values = arr.splice(0, num);
      obj[key] = new Type(values); // .valueOf()
    }

    return obj;
  }

}
const morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType(type = []) {
  morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
  extend(morphableTypes, {
    to(val) {
      return new Morphable().type(this.constructor).from(this.toArray()) // this.valueOf())
      .to(val);
    },

    fromArray(arr) {
      this.init(arr);
      return this;
    },

    toConsumable() {
      return this.toArray();
    },

    morph(from, to, pos, stepper, context) {
      const mapper = function (i, index) {
        return stepper.step(i, to[index], pos, context[index], context);
      };

      return this.fromArray(from.map(mapper));
    }

  });
}

class Path extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('path', node), attrs);
  } // Get array


  array() {
    return this._array || (this._array = new PathArray(this.attr('d')));
  } // Clear array cache


  clear() {
    delete this._array;
    return this;
  } // Set height of element


  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height);
  } // Move by left top corner


  move(x, y) {
    return this.attr('d', this.array().move(x, y));
  } // Plot new path


  plot(d) {
    return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr('d', this.array().size(p.width, p.height));
  } // Set width of element


  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height);
  } // Move by left top corner over x-axis


  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y);
  } // Move by left top corner over y-axis


  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y);
  }

} // Define morphable array

Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Set element size to given width and height

function size$1(width, height) {
  const p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = {
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
};

class Polygon extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polygon', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

class Polyline extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polyline', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

class Rect extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('rect', node), attrs);
  }

}
extend(Rect, {
  rx,
  ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  } // Shows us the first item in the list


  first() {
    return this._first && this._first.value;
  } // Shows us the last item in the list


  last() {
    return this._last && this._last.value;
  }

  push(value) {
    // An item stores an id and the provided value
    const item = typeof value.next !== 'undefined' ? value : {
      value: value,
      next: null,
      prev: null
    }; // Deal with the queue being empty or populated

    if (this._last) {
      item.prev = this._last;
      this._last.next = item;
      this._last = item;
    } else {
      this._last = item;
      this._first = item;
    } // Return the current item


    return item;
  } // Removes the item that was returned from the push


  remove(item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next;
    if (item.next) item.next.prev = item.prev;
    if (item === this._last) this._last = item.prev;
    if (item === this._first) this._first = item.next; // Invalidate item

    item.prev = null;
    item.next = null;
  }

  shift() {
    // Check if we have a value
    const remove = this._first;
    if (!remove) return null; // If we do, remove it and relink things

    this._first = remove.next;
    if (this._first) this._first.prev = null;
    this._last = this._first ? this._last : null;
    return remove.value;
  }

}

const Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: () => globals.window.performance || globals.window.Date,
  transforms: [],

  frame(fn) {
    // Store the node
    const node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },

  timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    const node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  immediate(fn) {
    // Add the immediate fn to the end of the queue
    const node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },

  clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },

  cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },

  _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    let nextTimeout = null;
    const lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    let nextFrame = null;
    const lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    let nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }

};

const makeSchedule = function (runnerInfo) {
  const start = runnerInfo.start;
  const duration = runnerInfo.runner.duration();
  const end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

const defaultSource = function () {
  const w = globals.window;
  return (w.performance || w.Date).now();
};

class Timeline extends EventTarget {
  // Construct a new timeline on the given element
  constructor(timeSource = defaultSource) {
    super();
    this._timeSource = timeSource; // Store the timing variables

    this._startTime = 0;
    this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    this._persist = 0; // Keep track of the running animations and their starting parameters

    this._nextFrame = null;
    this._paused = true;
    this._runners = [];
    this._runnerIds = [];
    this._lastRunnerId = -1;
    this._time = 0;
    this._lastSourceTime = 0;
    this._lastStepTime = 0; // Make sure that step is always called in class context

    this._step = this._stepFn.bind(this, false);
    this._stepImmediate = this._stepFn.bind(this, true);
  }

  active() {
    return !!this._nextFrame;
  }

  finish() {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1);
    return this.pause();
  } // Calculates the end of the timeline


  getEndTime() {
    const lastRunnerInfo = this.getLastRunnerInfo();
    const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
    const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
    return lastStartTime + lastDuration;
  }

  getEndTimeOfTimeline() {
    const endTimes = this._runners.map(i => i.start + i.runner.duration());

    return Math.max(0, ...endTimes);
  }

  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }

  getRunnerInfoById(id) {
    return this._runners[this._runnerIds.indexOf(id)] || null;
  }

  pause() {
    this._paused = true;
    return this._continue();
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  play() {
    // Now make sure we are not paused and continue the animation
    this._paused = false;
    return this.updateTime()._continue();
  }

  reverse(yes) {
    const currentSpeed = this.speed();
    if (yes == null) return this.speed(-currentSpeed);
    const positive = Math.abs(currentSpeed);
    return this.speed(yes ? -positive : positive);
  } // schedules a runner on the timeline


  schedule(runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule);
    } // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations directly


    let absoluteStartTime = 0;
    const endTime = this.getEndTime();
    delay = delay || 0; // Work out when to start the animation

    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime;
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay;
      delay = 0;
    } else if (when === 'now') {
      absoluteStartTime = this._time;
    } else if (when === 'relative') {
      const runnerInfo = this.getRunnerInfoById(runner.id);

      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay;
        delay = 0;
      }
    } else if (when === 'with-last') {
      const lastRunnerInfo = this.getLastRunnerInfo();
      const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      absoluteStartTime = lastStartTime;
    } else {
      throw new Error('Invalid value for the "when" parameter');
    } // Manage runner


    runner.unschedule();
    runner.timeline(this);
    const persist = runner.persist();
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    };
    this._lastRunnerId = runner.id;

    this._runners.push(runnerInfo);

    this._runners.sort((a, b) => a.start - b.start);

    this._runnerIds = this._runners.map(info => info.runner.id);

    this.updateTime()._continue();

    return this;
  }

  seek(dt) {
    return this.time(this._time + dt);
  }

  source(fn) {
    if (fn == null) return this._timeSource;
    this._timeSource = fn;
    return this;
  }

  speed(speed) {
    if (speed == null) return this._speed;
    this._speed = speed;
    return this;
  }

  stop() {
    // Go to start and pause
    this.time(0);
    return this.pause();
  }

  time(time) {
    if (time == null) return this._time;
    this._time = time;
    return this._continue(true);
  } // Remove the runner from this timeline


  unschedule(runner) {
    const index = this._runnerIds.indexOf(runner.id);

    if (index < 0) return this;

    this._runners.splice(index, 1);

    this._runnerIds.splice(index, 1);

    runner.timeline(null);
    return this;
  } // Makes sure, that after pausing the time doesn't jump


  updateTime() {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource();
    }

    return this;
  } // Checks if we are running and continues the animation


  _continue(immediateStep = false) {
    Animator.cancelFrame(this._nextFrame);
    this._nextFrame = null;
    if (immediateStep) return this._stepImmediate();
    if (this._paused) return this;
    this._nextFrame = Animator.frame(this._step);
    return this;
  }

  _stepFn(immediateStep = false) {
    // Get the time delta from the last time and update the time
    const time = this._timeSource();

    let dtSource = time - this._lastSourceTime;
    if (immediateStep) dtSource = 0;
    const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
    this._lastSourceTime = time; // Only update the time if we use the timeSource.
    // Otherwise use the current time

    if (!immediateStep) {
      // Update the time
      this._time += dtTime;
      this._time = this._time < 0 ? 0 : this._time;
    }

    this._lastStepTime = this._time;
    this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. That is why we need to set
    // the runner to position 0
    // FIXME:
    // However, resetting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attribute but in different times,
    // resetting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by resetting them backwards

    for (let k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[k];
      const runner = runnerInfo.runner; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
      // and try to reset it

      if (dtToStart <= 0) {
        runner.reset();
      }
    } // Run all of the runners directly


    let runnersLeft = false;

    for (let i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[i];
      const runner = runnerInfo.runner;
      let dt = dtTime; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet

      if (dtToStart <= 0) {
        runnersLeft = true;
        continue;
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart;
      }

      if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner

      const finished = runner.step(dt).done;

      if (!finished) {
        runnersLeft = true; // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        const endTime = runner.duration() - runner.time() + this._time;

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule();
          --i;
          --len;
        }
      }
    } // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--


    if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
      this._continue();
    } else {
      this.pause();
      this.fire('finished');
    }

    return this;
  }

}
registerMethods({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = timeline;
        return this;
      }
    }
  }
});

class Runner extends EventTarget {
  constructor(options) {
    super(); // Store a unique id on the runner, so that we can identify it later

    this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    this._element = null;
    this._timeline = null;
    this.done = false;
    this._queue = []; // Work out the stepper and the duration

    this._duration = typeof options === 'number' && options;
    this._isDeclarative = options instanceof Controller;
    this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    this._history = {}; // Store the state of the runner

    this.enabled = true;
    this._time = 0;
    this._lastTime = 0; // At creation, the runner is in reset state

    this._reseted = true; // Save transforms applied to this runner

    this.transforms = new Matrix();
    this.transformId = 1; // Looping variables

    this._haveReversed = false;
    this._reverse = false;
    this._loopsDone = 0;
    this._swing = false;
    this._wait = 0;
    this._times = 1;
    this._frameId = null; // Stores how long a runner is stored after being done

    this._persist = this._isDeclarative ? true : null;
  }

  static sanitise(duration, delay, when) {
    // Initialise the default parameters
    let times = 1;
    let swing = false;
    let wait = 0;
    duration = duration || timeline.duration;
    delay = delay || timeline.delay;
    when = when || 'last'; // If we have an object, unpack the values

    if (typeof duration === 'object' && !(duration instanceof Stepper)) {
      delay = duration.delay || delay;
      when = duration.when || when;
      swing = duration.swing || swing;
      times = duration.times || times;
      wait = duration.wait || wait;
      duration = duration.duration || timeline.duration;
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    };
  }

  active(enabled) {
    if (enabled == null) return this.enabled;
    this.enabled = enabled;
    return this;
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */


  addTransform(transform, index) {
    this.transforms.lmultiplyO(transform);
    return this;
  }

  after(fn) {
    return this.on('finished', fn);
  }

  animate(duration, delay, when) {
    const o = Runner.sanitise(duration, delay, when);
    const runner = new Runner(o.duration);
    if (this._timeline) runner.timeline(this._timeline);
    if (this._element) runner.element(this._element);
    return runner.loop(o).schedule(o.delay, o.when);
  }

  clearTransform() {
    this.transforms = new Matrix();
    return this;
  } // TODO: Keep track of all transformations so that deletion is faster


  clearTransformsFromQueue() {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter(item => {
        return !item.isTransform;
      });
    }
  }

  delay(delay) {
    return this.animate(0, delay);
  }

  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }

  during(fn) {
    return this.queue(null, fn);
  }

  ease(fn) {
    this._stepper = new Ease(fn);
    return this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  element(element) {
    if (element == null) return this._element;
    this._element = element;

    element._prepareRunner();

    return this;
  }

  finish() {
    return this.step(Infinity);
  }

  loop(times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing;
      wait = times.wait;
      times = times.times;
    } // Sanitise the values and store them


    this._times = times || Infinity;
    this._swing = swing || false;
    this._wait = wait || 0; // Allow true to be passed

    if (this._times === true) {
      this._times = Infinity;
    }

    return this;
  }

  loops(p) {
    const loopDuration = this._duration + this._wait;

    if (p == null) {
      const loopsDone = Math.floor(this._time / loopDuration);
      const relativeTime = this._time - loopsDone * loopDuration;
      const position = relativeTime / this._duration;
      return Math.min(loopsDone + position, this._times);
    }

    const whole = Math.floor(p);
    const partial = p % 1;
    const time = loopDuration * whole + this._duration * partial;
    return this.time(time);
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  position(p) {
    // Get all of the variables we need
    const x = this._time;
    const d = this._duration;
    const w = this._wait;
    const t = this._times;
    const s = this._swing;
    const r = this._reverse;
    let position;

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */
      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
        const backwards = swinging && !r || !swinging && r;
        const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
        const clipped = Math.max(Math.min(uncliped, 1), 0);
        return clipped;
      }; // Figure out the value by incorporating the start time


      const endTime = t * (w + d) - w;
      position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
      return position;
    } // Work out the loops done and add the position to the loops done


    const loopsDone = Math.floor(this.loops());
    const swingForward = s && loopsDone % 2 === 0;
    const forwards = swingForward && !r || r && swingForward;
    position = loopsDone + (forwards ? p : 1 - p);
    return this.loops(position);
  }

  progress(p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration());
    }

    return this.time(p * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */


  queue(initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || noop,
      runner: runFn || noop,
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    });

    const timeline = this.timeline();
    timeline && this.timeline()._continue();
    return this;
  }

  reset() {
    if (this._reseted) return this;
    this.time(0);
    this._reseted = true;
    return this;
  }

  reverse(reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse;
    return this;
  }

  schedule(timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof Timeline)) {
      when = delay;
      delay = timeline;
      timeline = this.timeline();
    } // If there is no timeline, yell at the user...


    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline');
    } // Schedule the runner on the timeline provided


    timeline.schedule(this, delay, when);
    return this;
  }

  step(dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this; // Update the time and get the new position

    dt = dt == null ? 16 : dt;
    this._time += dt;
    const position = this.position(); // Figure out if we need to run the stepper in this frame

    const running = this._lastPosition !== position && this._time >= 0;
    this._lastPosition = position; // Figure out if we just started

    const duration = this.duration();
    const justStarted = this._lastTime <= 0 && this._time > 0;
    const justFinished = this._lastTime < duration && this._time >= duration;
    this._lastTime = this._time;

    if (justStarted) {
      this.fire('start', this);
    } // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)


    const declarative = this._isDeclarative;
    this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reset state anymore

    this._reseted = false;
    let converged = false; // Call initialise and the run function

    if (running || declarative) {
      this._initialise(running); // clear the transforms on this runner so they dont get added again and again


      this.transforms = new Matrix();
      converged = this._run(declarative ? dt : position);
      this.fire('step', this);
    } // correct the done flag here
    // declarative animations itself know when they converged


    this.done = this.done || converged && declarative;

    if (justFinished) {
      this.fire('finished', this);
    }

    return this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */


  time(time) {
    if (time == null) {
      return this._time;
    }

    const dt = time - this._time;
    this.step(dt);
    return this;
  }

  timeline(timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline;
    this._timeline = timeline;
    return this;
  }

  unschedule() {
    const timeline = this.timeline();
    timeline && timeline.unschedule(this);
    return this;
  } // Run each initialise function in the runner if required


  _initialise(running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      const current = this._queue[i]; // Determine whether we need to initialise

      const needsIt = this._isDeclarative || !current.initialised && running;
      running = !current.finished; // Call the initialiser if we need to

      if (needsIt && running) {
        current.initialiser.call(this);
        current.initialised = true;
      }
    }
  } // Save a morpher to the morpher list so that we can retarget it later


  _rememberMorpher(method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }; // We have to resume the timeline in case a controller
    // is already done without being ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)

    if (this._isDeclarative) {
      const timeline = this.timeline();
      timeline && timeline.play();
    }
  } // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given


  _run(positionOrDt) {
    // Run all of the _queue directly
    let allfinished = true;

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      const current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue

      const converged = current.runner.call(this, positionOrDt);
      current.finished = current.finished || converged === true;
      allfinished = allfinished && current.finished;
    } // We report when all of the constructors are finished


    return allfinished;
  } // do nothing and return false


  _tryRetarget(method, target, extra) {
    if (this._history[method]) {
      // if the last method wasn't even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        const index = this._queue.indexOf(this._history[method].caller);

        this._queue.splice(index, 1);

        return false;
      } // for the case of transformations, we use the special retarget function
      // which has access to the outer scope


      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient

      } else {
        this._history[method].morpher.to(target);
      }

      this._history[method].caller.finished = false;
      const timeline = this.timeline();
      timeline && timeline.play();
      return true;
    }

    return false;
  }

}
Runner.id = 0;
class FakeRunner {
  constructor(transforms = new Matrix(), id = -1, done = true) {
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  clearTransformsFromQueue() {}

}
extend([Runner, FakeRunner], {
  mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }

}); // FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr);

const getRunnerTransform = runner => runner.transforms;

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  const runners = this._transformationRunners.runners;
  const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

class RunnerArray {
  constructor() {
    this.runners = [];
    this.ids = [];
  }

  add(runner) {
    if (this.runners.includes(runner)) return;
    const id = runner.id + 1;
    this.runners.push(runner);
    this.ids.push(id);
    return this;
  }

  clearBefore(id) {
    const deleteCnt = this.ids.indexOf(id + 1) || 1;
    this.ids.splice(0, deleteCnt, 0);
    this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(r => r.clearTransformsFromQueue());
    return this;
  }

  edit(id, newRunner) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1, id + 1);
    this.runners.splice(index, 1, newRunner);
    return this;
  }

  getByID(id) {
    return this.runners[this.ids.indexOf(id + 1)];
  }

  length() {
    return this.ids.length;
  }

  merge() {
    let lastRunner = null;

    for (let i = 0; i < this.runners.length; ++i) {
      const runner = this.runners[i];
      const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
      && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id);
        const newRunner = runner.mergeWith(lastRunner);
        this.edit(lastRunner.id, newRunner);
        lastRunner = newRunner;
        --i;
      } else {
        lastRunner = runner;
      }
    }

    return this;
  }

  remove(id) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1);
    this.runners.splice(index, 1);
    return this;
  }

}
registerMethods({
  Element: {
    animate(duration, delay, when) {
      const o = Runner.sanitise(duration, delay, when);
      const timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },

    delay(by, when) {
      return this.animate(0, by, when);
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },

    _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(runner => runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },

    _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. That is why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },

    _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }

  }
}); // Will output the elements from array A that are not in the array B

const difference = (a, b) => a.filter(x => !b.includes(x));

extend(Runner, {
  attr(a, v) {
    return this.styleAttr('attr', a, v);
  },

  // Add animatable styles
  css(s, v) {
    return this.styleAttr('css', s, v);
  },

  styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, {
        [nameOrAttrs]: val
      });
    }

    let attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    let morpher = new Morphable(this._stepper).to(attrs);
    let keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      const newKeys = Object.keys(newToAttrs);
      const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher

      if (differences.length) {
        // Get the values
        const addedFromAttrs = this.element()[type](differences); // Get the already initialized values

        const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new

        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      } // Get the object from the morpher


      const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes

      Object.assign(oldToAttrs, newToAttrs); // Change morpher target

      morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again

      keys = newKeys;
      attrs = newToAttrs;
    });

    this._rememberMorpher(type, morpher);

    return this;
  },

  zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    const isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morpher and set its type

    const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    let origin;
    let element;
    let current;
    let currentAngle;
    let startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      const {
        x,
        y
      } = new Point(origin).transform(element._currentTransform(this));
      let target = new Matrix({ ...transforms,
        origin: [x, y]
      });
      let start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        const rTarget = target.rotate;
        const rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        const possibilities = [rTarget - 360, rTarget, rTarget + 360];
        const distances = possibilities.map(a => Math.abs(a - rCurrent));
        const shortest = Math.min(...distances);
        const index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      const affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      } // overwrite the old transformations with the new ones


      transforms = { ...newTransforms,
        origin
      };
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },

  // Animatable x-axis
  x(x, relative) {
    return this._queueNumber('x', x);
  },

  // Animatable y-axis
  y(y) {
    return this._queueNumber('y', y);
  },

  dx(x = 0) {
    return this._queueNumberDelta('x', x);
  },

  dy(y = 0) {
    return this._queueNumberDelta('y', y);
  },

  dmove(x, y) {
    return this.dx(x).dy(y);
  },

  _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registered

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    let from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueObject(method, to) {
    // Try to change the target if we have this method already registered
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },

  // Animatable center x-axis
  cx(x) {
    return this._queueNumber('cx', x);
  },

  // Animatable center y-axis
  cy(y) {
    return this._queueNumber('cy', y);
  },

  // Add animatable move
  move(x, y) {
    return this.x(x).y(y);
  },

  // Add animatable center
  center(x, y) {
    return this.cx(x).cy(y);
  },

  // Add animatable size
  size(width, height) {
    // animate bbox based size for all other elements
    let box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },

  // Add animatable width
  width(width) {
    return this._queueNumber('width', width);
  },

  // Add animatable height
  height(height) {
    return this._queueNumber('height', height);
  },

  // Add animatable plot
  plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },

  // Add leading method
  leading(value) {
    return this._queueNumber('leading', value);
  },

  // Add animatable viewbox
  viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },

  update(o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }

});
extend(Runner, {
  rx,
  ry,
  from,
  to
});
register(Runner, 'Runner');

class Svg extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('svg', node), attrs);
    this.namespace();
  } // Creates and returns defs element


  defs() {
    if (!this.isRoot()) return this.root().defs();
    return adopt(this.node.querySelector('defs')) || this.put(new Defs());
  }

  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
  } // Add namespaces


  namespace() {
    if (!this.isRoot()) return this.root().namespace();
    return this.attr({
      xmlns: svg,
      version: '1.1'
    }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
  }

  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
  } // Check if this is a root svg
  // If not, call root() from this element


  root() {
    if (this.isRoot()) return this;
    return super.root();
  }

}
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

class Symbol extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('symbol', node), attrs);
  }

}
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new Symbol());
    })
  }
});
register(Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function length() {
  return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter

function x$1(x, box = this.bbox()) {
  if (x == null) {
    return box.x;
  }

  return this.attr('x', this.attr('x') + x - box.x);
} // Move over y-axis

function y$1(y, box = this.bbox()) {
  if (y == null) {
    return box.y;
  }

  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
  return this.x(x, box).y(y, box);
} // Move center over x-axis

function cx(x, box = this.bbox()) {
  if (x == null) {
    return box.cx;
  }

  return this.attr('x', this.attr('x') + x - box.cx);
} // Move center over y-axis

function cy(y, box = this.bbox()) {
  if (y == null) {
    return box.cy;
  }

  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y, box = this.bbox()) {
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
} // Enable / disable build mode

function build(build) {
  this._build = !!build;
  return this;
}

var textable = {
  __proto__: null,
  plain: plain,
  length: length,
  x: x$1,
  y: y$1,
  move: move$1,
  cx: cx,
  cy: cy,
  center: center,
  ax: ax,
  ay: ay,
  amove: amove,
  build: build
};

class Text extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('text', node), attrs);
    this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    this._rebuild = true; // enable automatic updating of dy values

    this._build = false; // disable build mode for adding multiple lines
  } // Set / get leading


  leading(value) {
    // act as getter
    if (value == null) {
      return this.dom.leading;
    } // act as setter


    this.dom.leading = new SVGNumber(value);
    return this.rebuild();
  } // Rebuild appearance type


  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild;
    } // define position of all lines


    if (this._rebuild) {
      const self = this;
      let blankLineOffset = 0;
      const leading = this.dom.leading;
      this.each(function (i) {
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
        const dy = leading * new SVGNumber(fontSize);

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'));

          if (this.text() === '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', i ? dy + blankLineOffset : 0);
            blankLineOffset = 0;
          }
        }
      });
      this.fire('rebuild');
    }

    return this;
  } // overwrite method from parent to set data properly


  setData(o) {
    this.dom = o;
    this.dom.leading = new SVGNumber(o.leading || 1.3);
    return this;
  } // Set the text content


  text(text) {
    // act as getter
    if (text === undefined) {
      const children = this.node.childNodes;
      let firstLine = 0;
      text = '';

      for (let i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1;
          continue;
        } // add newline if its not the first child and newLined is set to true


        if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
          text += '\n';
        } // add content of this node


        text += children[i].textContent;
      }

      return text;
    } // remove existing content


    this.clear().build(true);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = (text + '').split('\n'); // build new lines

      for (let j = 0, jl = text.length; j < jl; j++) {
        this.newLine(text[j]);
      }
    } // disable build mode and rebuild lines


    return this.build(false).rebuild();
  }

}
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

class Tspan extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('tspan', node), attrs);
    this._build = false; // disable build mode for adding multiple lines
  } // Shortcut dx


  dx(dx) {
    return this.attr('dx', dx);
  } // Shortcut dy


  dy(dy) {
    return this.attr('dy', dy);
  } // Create new line


  newLine() {
    // mark new line
    this.dom.newLined = true; // fetch parent

    const text = this.parent(); // early return in case we are not in a text element

    if (!(text instanceof Text)) {
      return this;
    }

    const i = text.index(this);
    const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
    const dy = text.dom.leading * new SVGNumber(fontSize); // apply new position

    return this.dy(i ? dy : 0).attr('x', text.x());
  } // Set text content


  text(text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    if (typeof text === 'function') {
      this.clear().build(true);
      text.call(this, this);
      this.build(false);
    } else {
      this.plain(text);
    }

    return this;
  }

}
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text = '') {
      const tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function (text = '') {
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

class Circle extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('circle', node), attrs);
  }

  radius(r) {
    return this.attr('r', r);
  } // Radius x value


  rx(rx) {
    return this.attr('r', rx);
  } // Alias radius x value


  ry(ry) {
    return this.rx(ry);
  }

  size(size) {
    return this.radius(new SVGNumber(size).divide(2));
  }

}
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size = 0) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

class ClipPath extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('clipPath', node), attrs);
  } // Unclip all clipped elements and remove itself


  remove() {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip();
    }); // remove clipPath from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [clip-path*=' + this.id() + ']');
  }

}
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference('clip-path');
    },

    clipWith(element) {
      // use given clip or create a new one
      const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url(#' + clipper.id() + ')');
    },

    // Unclip element
    unclip() {
      return this.attr('clip-path', null);
    }

  }
});
register(ClipPath, 'ClipPath');

class ForeignObject extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('foreignObject', node), attrs);
  }

}
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach((child, i) => {
    let bbox; // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements

    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    } // Get childs matrix


    const m = new Matrix(child); // Translate childs matrix by amount and
    // transform it back into parents space

    const matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

    const p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function height(height, box = this.bbox()) {
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
  const dx = x - box.x;
  const dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
  const p = proportionalSize(this, width, height, box);
  const scaleX = p.width / box.width;
  const scaleY = p.height / box.height;
  this.children().forEach((child, i) => {
    const o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function width(width, box = this.bbox()) {
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = {
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: height,
  move: move,
  size: size,
  width: width,
  x: x,
  y: y
};

class G extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('g', node), attrs);
  }

}
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

class A extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('a', node), attrs);
  } // Link target attribute


  target(target) {
    return this.attr('target', target);
  } // Link url


  to(url) {
    return this.attr('href', url, xlink);
  }

}
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink() {
      const link = this.linker();
      if (!link) return this;
      const parent = link.parent();

      if (!parent) {
        return this.remove();
      }

      const index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },

    linkTo(url) {
      // reuse old link if possible
      let link = this.linker();

      if (!link) {
        link = new A();
        this.wrap(link);
      }

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this;
    },

    linker() {
      const link = this.parent();

      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }

      return null;
    }

  }
});
register(A, 'A');

class Mask extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('mask', node), attrs);
  } // Unmask all masked elements and remove itself


  remove() {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask();
    }); // remove mask from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [mask*=' + this.id() + ']');
  }

}
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference('mask');
    },

    maskWith(element) {
      // use given mask or create a new one
      const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url(#' + masker.id() + ')');
    },

    // Unmask element
    unmask() {
      return this.attr('mask', null);
    }

  }
});
register(Mask, 'Mask');

class Stop extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('stop', node), attrs);
  } // add color stops


  update(o) {
    if (typeof o === 'number' || o instanceof SVGNumber) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    } // set attributes


    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
    return this;
  }

}
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function (offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  let ret = selector + '{';

  for (const i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

class Style extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('style', node), attrs);
  }

  addText(w = '') {
    this.node.textContent += w;
    return this;
  }

  font(name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    });
  }

  rule(selector, obj) {
    return this.addText(cssRule(selector, obj));
  }

}
registerMethods('Dom', {
  style(selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  },

  fontface(name, src, params) {
    return this.put(new Style()).font(name, src, params);
  }

});
register(Style, 'Style');

class TextPath extends Text {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('textPath', node), attrs);
  } // return the array of the path track element


  array() {
    const track = this.track();
    return track ? track.array() : null;
  } // Plot path if any


  plot(d) {
    const track = this.track();
    let pathArray = null;

    if (track) {
      pathArray = track.plot(d);
    }

    return d == null ? pathArray : this;
  } // Get the path element


  track() {
    return this.reference('href');
  }

}
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track, importNodes = true) {
      const textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      let node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),

    // Get the textPath children
    textPath() {
      return this.findOne('textPath');
    }

  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),

    targets() {
      return baseFind('svg textPath').filter(node => {
        return (node.attr('href') || '').includes(this.id());
      }); // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*=' + this.id() + ']')
    }

  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

class Use extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('use', node), attrs);
  } // Use element as a reference


  use(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, xlink);
  }

}
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
const SVG = makeInstance;
extend([Svg, Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray, Point]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map


/***/ }),

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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_atp_synthase_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/atp-synthase.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/atp-synthase.svg");
/**
 * ATP synthase
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_atp_synthase_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_atp_synthase_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The ATP synthase is a molecular motor that catalyzes the condensation reaction of adenosine diphosphate (ADP) and inorganic phosphate (P\u1D62) to adenosine triphosphate (ATP) by utilizing a proton gradient between the stroma and lumen generated by proton deposition into the lumen by PSII water oxidation and the Q-cycle.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_cytochrome_b6f_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/cytochrome-b6f.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/cytochrome-b6f.svg");
/**
 * Cytochrome b₆f
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_cytochrome_b6f_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_cytochrome_b6f_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The cytochrome <em>b\u2086f</em> complex oxidizes PQH\u2082 to PQ while pumping protons from the stroma into the lumen in the so-called Q-cycle. The electrons from PQH\u2082 are then transferred via the cytochrome <em>f</em> subunit to the luminal electron donor for photosystem I (PSI).";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_cytochrome_c6_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/cytochrome-c6.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/cytochrome-c6.svg");
/**
 * Cytochrome c₆
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_cytochrome_c6_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_cytochrome_c6_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Cytochrome c\u2086 (Cyt c\u2086) is a small, heme (Fe\u1D35\u1D35) binding, luminal protein, transferring electrons from cytochrome <em>f</em> to P\u2087\u2080\u2080.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_electron_flux_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/electron-flux.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/electron-flux.svg");
/**
 * Electron Flux
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_electron_flux_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_electron_flux_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Orange arrows indicate the transfer of electrons (e\u207B).";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_ferredoxin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/ferredoxin.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ferredoxin.svg");
/**
 * Ferredoxin
 */



var ferredoxin = function ferredoxin() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#A08C79' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? true : _ref$position;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ferredoxin_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ferredoxin_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Ferredoxin (Fd) binds to the stromal acceptor side of PSI where it is reduced and, during linear electron flow, the electron is transferred onto ferredoxin NADP\u207A oxidoreductase (FNR).";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_fnr_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/fnr.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/fnr.svg");
/**
 * FNR
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_fnr_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_fnr_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The Ferredoxin NADP\u207A oxidoreductase (FNR) picks up an electron from Fd and reduces NADP\u207A to NADPH.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_ion_channels_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/ion-channels.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ion-channels.svg");
/**
 * Ion Channels
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ion_channels_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ion_channels_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Transthylakoid ion channels allow in influx and efflux of ions between the stroma and lumen.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_ion_flux_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/ion-flux.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ion-flux.svg");
/**
 * Ion Flux
 */



var ionFlux = function ionFlux() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$kChannel = _ref.kChannel,
    kChannel = _ref$kChannel === void 0 ? false : _ref$kChannel,
    _ref$caChannel = _ref.caChannel,
    caChannel = _ref$caChannel === void 0 ? false : _ref$caChannel,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ion_flux_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ion_flux_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The ions Ca\u207A and K\u207A act as counter ions to the initial build-up of the proton gradient (H\u207A) allowing to store part of the <em>pmf</em> as \u0394\u03A8 (electric component of <em>pmf</em>) during steady-state.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_lumen_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/lumen.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/lumen.svg");
/**
 * Lumen
 */



var lumen = function lumen() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#FFE5E5' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'lumen' : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_lumen_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The lumen is enclosed by the thylakoid membrane.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_photosystem_i_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/photosystem-i.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-i.svg");
/**
 * Photosystem I
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_photosystem_i_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_photosystem_i_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The reaction center of PSI (P\u2087\u2080\u2080) oxidizes the luminal electron donor PC or cytochrome c\u2086 after being excited and transfers the electron to the stromal acceptor, ferredoxin (Fd).";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_photosystem_ii_repair_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/photosystem-ii-repair.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-ii-repair.svg");
/**
 * Photosystem II - repair
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_photosystem_ii_repair_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_photosystem_ii_repair_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Photodamaged PSII undergoes repair in a multi-step process in which the PSII core moves from the grana to the stroma thylakoids. The damaged D1 subunit is replaced and the PSII monomers are migrating back to the grana thylakoids for dimerization and supercomplex assembly.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_photosystem_ii_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/photosystem-ii.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-ii.svg");
/**
 * Photosystem II
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_photosystem_ii_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_photosystem_ii_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Photosystem II (PSII), with its reaction center (P\u2086\u2088\u2080) oxidizes water when exited, producing electrons (e\u207B) and protons (H\u207A). The protons are deposited into the lumen and the electrons are transferred to the plastoquinone pool.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_plastocyanin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/plastocyanin.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/plastocyanin.svg");
/**
 * Plastocyanin
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_plastocyanin_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_plastocyanin_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Plastocyanin (Pc) is a small copper (Cu\xB2\u207A) containing luminal protein that transfers electrons from cytochrome <em>f</em> to P\u2087\u2080\u2080.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_plastoquinone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/plastoquinone.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/plastoquinone.svg");
/**
 * Plastoquinone
 */



var plastoquinone = function plastoquinone() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#FFE698' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? true : _ref$label,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_plastoquinone_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_plastoquinone_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Plastoquinone (PQ) is reduced to plastoquinol (PQH\u2082) at the Q\u0299 side of PSII. The electrons are shuttled to the cytochrome <em>b\u2086f</em> complex.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_proton_flux_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/proton-flux.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/proton-flux.svg");
/**
 * Proton Flux
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_proton_flux_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_proton_flux_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "Light blue arrows indicate the transfer of protons (H\u207A).";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_ptox_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/ptox.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ptox.svg");
/**
 * PTOX
 */



var ptox = function ptox() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$reaction = _ref.reaction,
    reaction = _ref$reaction === void 0 ? true : _ref$reaction,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#C2AAFF' : _ref$color,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? null : _ref$position;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ptox_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_ptox_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The luminal plastid terminal oxidase (PTOX) can act as an electron sink by reducing oxygen (O\u2082) to water (H\u2082O).";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_quenching_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/quenching.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/quenching.svg");
/**
 * Quenching
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_quenching_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_quenching_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The red, dashed arrows represent a subset of possible quenching mechanisms including qE and qI as well as the induction of qE through lumen acidification.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_stroma_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/stroma.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/stroma.svg");
/**
 * Stroma
 */



var stroma = function stroma() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#0070C4' : _ref$color,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'stroma' : _ref$label,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_stroma_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The stroma is the space between the thylakoid membrane and the chloroplast envelope.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_thylakoidmembrane_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/thylakoidmembrane.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/thylakoidmembrane.svg");
/**
 * Thylakoid Membrane
 */



var thylakoidmembrane = function thylakoidmembrane() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#DBDBDB' : _ref$color,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? true : _ref$border;
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_thylakoidmembrane_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var path = draw.findOne('#thylakoidmembrane path');
  path.fill(color);
  if (!border) {
    var borders = draw.find('#thylakoidmembrane path');
    borders.forEach(function (shape) {
      if (shape.attr('stroke-width') > 0) shape.remove();
    });
  }
  return draw.findOne('svg').svg(false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thylakoidmembrane);
var settings = function settings() {
  return {
    "id": "thylakoidmembrane",
    "headerTitle": "Thylakoid Membrane",
    "show": true,
    "options": [{
      "type": "check",
      "name": "border",
      "value": true,
      "label": "Border"
    }, {
      "type": "color",
      "name": "color",
      "value": "#DBDBDB",
      "label": "Background"
    }]
  };
};
var legend = function legend() {
  return "The thylakoid membrane is a system of interconnected membranes organized in grana stacks and stroma lamellae and harboring the complexes of the photosynthetic machinery.";
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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var _raw_loader_svgs_vdx_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!raw-loader!../svgs/vdx.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/vdx.svg");
/**
 * VDX
 */



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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_vdx_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)();
  draw.svg(_raw_loader_svgs_vdx_svg__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
  return "The inducible part of non-photochemical quenching (NPQ), qE, is mediated through PsbS and the xanthophyll cycle. With lumen acidification, the violaxanthin de-epoxidase (VDE) is activated, converting violaxanthin (V) into zeaxanthin (Z) and the sensor PsbS is protonated activating the quenching of excess excitation energy.";
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
      "photosystem-ii": {
        "show": true,
        "antenna": true,
        "light": true,
        "center": true,
        "cofactors": true,
        "reaction": true,
        "label": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 516,
        "fluorescence": false
      },
      "photosystem-i": {
        "light": true,
        "antenna": true,
        "label": true,
        "coreColor": "#0cb04b",
        "lightColor": "#ffec7f",
        "antennaColor": "#008000",
        "lightSize": 1,
        "position": 730,
        "show": false,
        "center": false,
        "cofactors": false
      },
      "cytochrome-b6f": {
        "rieske": true,
        "label": true,
        "coreColor": "#b2c7da",
        "rieskeColor": "#b2c7da",
        "position": 581,
        "show": false,
        "cofactors": false
      },
      "atpsynthase": {
        "reaction": true,
        "label": true,
        "cRingColor": "#e4d3bd",
        "alphaSubunitColor": "#d6c2ad",
        "betaSubunitColor": "#c7b29e",
        "gammaSubunitColor": "#f6e8d7",
        "iSubunitColor": "#c7b29e",
        "iiSubunitColor": "#e4d3bd",
        "position": 999,
        "show": false,
        "subunits": false
      },
      "ion-channels": {
        "kChannel": true,
        "caChannel": true,
        "label": true,
        "position": 1182,
        "show": false,
        "pmf": false
      },
      "plastoquinone": {
        "show": true,
        "label": true,
        "color": "#ffe698",
        "position": 766
      },
      "ferredoxin": {
        "label": true,
        "color": "#a08c79",
        "position": 838,
        "show": false
      },
      "cytochrome-c6": {
        "label": true,
        "color": "#ff2b2b",
        "position": 735,
        "show": false,
        "cofactor": false
      },
      "plastocyanin": {
        "label": true,
        "color": "#5b9bd5",
        "position": 748,
        "show": false,
        "cofactor": false
      },
      "fnr": {
        "reaction": true,
        "label": true,
        "color": "#eecc00",
        "position": 790,
        "show": false
      },
      "ptox": {
        "reaction": true,
        "color": "#c2aaff",
        "position": 476,
        "show": false
      },
      "thylakoidmembrane": {
        "show": true,
        "color": "#dbdbdb"
      },
      "stroma": {
        "show": true,
        "label": "stroma",
        "showLabel": true
      },
      "lumen": {
        "show": true,
        "label": "lumen",
        "showLabel": true,
        "color": "#ffe5e5"
      },
      "electron-flux": {
        "show": true,
        "ps_ii_to_pq": true,
        "position": 694,
        "flow_q_cycle": false,
        "b6f_to_pc": false,
        "pc_to_ps_i": false,
        "ps_i_to_fd": false,
        "fd_to_fnr": false,
        "fd_to_cyt_b6f": false
      },
      "proton-flux": {
        "show": true,
        "h2o_lumen": true,
        "stroma_ps_ii": true,
        "position": 693,
        "ps_ii_atp_synthase": false,
        "atp_synthase": false,
        "stroma_b6f": false,
        "b6f_lumen": false
      },
      "ion-flux": {
        "kChannel": true,
        "caChannel": true,
        "position": 1189,
        "show": false
      },
      "photosystem-ii-repair": {
        "antenna": true,
        "light": true,
        "d1": true,
        "cycle": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 110,
        "show": false
      },
      "vdx": {
        "ze": true,
        "vde": true,
        "psbs": true,
        "pathway": true,
        "position": 38,
        "show": false
      },
      "regulation": {
        "qe": true,
        "qi": true,
        "pmf": true,
        "position": 74,
        "show": false
      }
    }
  }, {
    title: 'Cytochrome b₆f',
    settings: {
      "photosystem-ii": {
        "antenna": true,
        "light": true,
        "reaction": true,
        "label": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 237,
        "show": false,
        "fluorescence": false,
        "center": false,
        "cofactors": false
      },
      "photosystem-i": {
        "light": true,
        "antenna": true,
        "label": true,
        "coreColor": "#0cb04b",
        "lightColor": "#ffec7f",
        "antennaColor": "#008000",
        "lightSize": 1,
        "position": 730,
        "show": false,
        "center": false,
        "cofactors": false
      },
      "cytochrome-b6f": {
        "show": true,
        "cofactors": true,
        "rieske": true,
        "label": true,
        "coreColor": "#b2c7da",
        "rieskeColor": "#b2c7da",
        "position": 623
      },
      "atpsynthase": {
        "reaction": true,
        "label": true,
        "cRingColor": "#e4d3bd",
        "alphaSubunitColor": "#d6c2ad",
        "betaSubunitColor": "#c7b29e",
        "gammaSubunitColor": "#f6e8d7",
        "iSubunitColor": "#c7b29e",
        "iiSubunitColor": "#e4d3bd",
        "position": 999,
        "show": false,
        "subunits": false
      },
      "ion-channels": {
        "kChannel": true,
        "caChannel": true,
        "label": true,
        "position": 1182,
        "show": false,
        "pmf": false
      },
      "plastoquinone": {
        "show": true,
        "label": true,
        "color": "#ffe698",
        "position": 518
      },
      "ferredoxin": {
        "label": true,
        "color": "#a08c79",
        "position": 838,
        "show": false
      },
      "cytochrome-c6": {
        "label": true,
        "color": "#ff2b2b",
        "position": 735,
        "show": false,
        "cofactor": false
      },
      "plastocyanin": {
        "show": true,
        "label": true,
        "color": "#5b9bd5",
        "position": 796,
        "cofactor": false
      },
      "fnr": {
        "reaction": true,
        "label": true,
        "color": "#eecc00",
        "position": 790,
        "show": false
      },
      "ptox": {
        "reaction": true,
        "color": "#c2aaff",
        "position": 476,
        "show": false
      },
      "thylakoidmembrane": {
        "show": true,
        "color": "#dbdbdb"
      },
      "stroma": {
        "show": true,
        "label": "stroma",
        "showLabel": true
      },
      "lumen": {
        "show": true,
        "label": "lumen",
        "showLabel": true,
        "color": "#ffe5e5"
      },
      "electron-flux": {
        "show": true,
        "flow_q_cycle": true,
        "b6f_to_pc": true,
        "position": 455,
        "ps_ii_to_pq": false,
        "pc_to_ps_i": false,
        "ps_i_to_fd": false,
        "fd_to_fnr": false,
        "fd_to_cyt_b6f": false
      },
      "proton-flux": {
        "show": true,
        "stroma_b6f": true,
        "b6f_lumen": true,
        "position": 442,
        "h2o_lumen": false,
        "ps_ii_atp_synthase": false,
        "atp_synthase": false,
        "stroma_ps_ii": false
      },
      "ion-flux": {
        "kChannel": true,
        "caChannel": true,
        "position": 1189,
        "show": false
      },
      "photosystem-ii-repair": {
        "antenna": true,
        "light": true,
        "d1": true,
        "cycle": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 110,
        "show": false
      },
      "vdx": {
        "ze": true,
        "vde": true,
        "psbs": true,
        "pathway": true,
        "position": 38,
        "show": false
      },
      "regulation": {
        "qe": true,
        "qi": true,
        "pmf": true,
        "position": 74,
        "show": false
      }
    }
  }, {
    title: 'Photosystem I',
    settings: {
      "photosystem-ii": {
        "antenna": true,
        "light": true,
        "reaction": true,
        "label": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 237,
        "show": false,
        "fluorescence": false,
        "center": false,
        "cofactors": false
      },
      "photosystem-i": {
        "show": true,
        "center": true,
        "cofactors": true,
        "light": true,
        "antenna": true,
        "label": true,
        "coreColor": "#0cb04b",
        "lightColor": "#ffec7f",
        "antennaColor": "#008000",
        "lightSize": 1,
        "position": 618
      },
      "cytochrome-b6f": {
        "rieske": true,
        "label": true,
        "coreColor": "#b2c7da",
        "rieskeColor": "#b2c7da",
        "position": 581,
        "show": false,
        "cofactors": false
      },
      "atpsynthase": {
        "reaction": true,
        "label": true,
        "cRingColor": "#e4d3bd",
        "alphaSubunitColor": "#d6c2ad",
        "betaSubunitColor": "#c7b29e",
        "gammaSubunitColor": "#f6e8d7",
        "iSubunitColor": "#c7b29e",
        "iiSubunitColor": "#e4d3bd",
        "position": 999,
        "show": false,
        "subunits": false
      },
      "ion-channels": {
        "kChannel": true,
        "caChannel": true,
        "label": true,
        "position": 1182,
        "show": false,
        "pmf": false
      },
      "plastoquinone": {
        "label": true,
        "color": "#ffe698",
        "position": 484,
        "show": false
      },
      "ferredoxin": {
        "show": true,
        "label": true,
        "color": "#a08c79",
        "position": 722
      },
      "cytochrome-c6": {
        "label": true,
        "color": "#ff2b2b",
        "position": 735,
        "show": false,
        "cofactor": false
      },
      "plastocyanin": {
        "show": true,
        "label": true,
        "color": "#5b9bd5",
        "position": 628,
        "cofactor": false
      },
      "fnr": {
        "show": true,
        "reaction": true,
        "label": true,
        "color": "#eecc00",
        "position": 674
      },
      "ptox": {
        "reaction": true,
        "color": "#c2aaff",
        "position": 476,
        "show": false
      },
      "thylakoidmembrane": {
        "show": true,
        "color": "#dbdbdb"
      },
      "stroma": {
        "show": true,
        "label": "stroma",
        "showLabel": true
      },
      "lumen": {
        "show": true,
        "label": "lumen",
        "showLabel": true,
        "color": "#ffe5e5"
      },
      "electron-flux": {
        "show": true,
        "pc_to_ps_i": true,
        "ps_i_to_fd": true,
        "fd_to_fnr": true,
        "position": 300,
        "ps_ii_to_pq": false,
        "flow_q_cycle": false,
        "b6f_to_pc": false,
        "fd_to_cyt_b6f": false
      },
      "proton-flux": {
        "h2o_lumen": true,
        "ps_ii_atp_synthase": true,
        "atp_synthase": true,
        "stroma_ps_ii": true,
        "stroma_b6f": true,
        "b6f_lumen": true,
        "position": 407,
        "show": false
      },
      "ion-flux": {
        "kChannel": true,
        "caChannel": true,
        "position": 1189,
        "show": false
      },
      "photosystem-ii-repair": {
        "antenna": true,
        "light": true,
        "d1": true,
        "cycle": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 110,
        "show": false
      },
      "vdx": {
        "ze": true,
        "vde": true,
        "psbs": true,
        "pathway": true,
        "position": 38,
        "show": false
      },
      "regulation": {
        "qe": true,
        "qi": true,
        "pmf": true,
        "position": 74,
        "show": false
      }
    }
  }, {
    title: 'ATP Synthase',
    settings: {
      "photosystem-ii": {
        "antenna": true,
        "light": true,
        "reaction": true,
        "label": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 237,
        "show": false,
        "fluorescence": false,
        "center": false,
        "cofactors": false
      },
      "photosystem-i": {
        "light": true,
        "antenna": true,
        "label": true,
        "coreColor": "#0cb04b",
        "lightColor": "#ffec7f",
        "antennaColor": "#008000",
        "lightSize": 1,
        "position": 730,
        "show": false,
        "center": false,
        "cofactors": false
      },
      "cytochrome-b6f": {
        "rieske": true,
        "label": true,
        "coreColor": "#b2c7da",
        "rieskeColor": "#b2c7da",
        "position": 581,
        "show": false,
        "cofactors": false
      },
      "atpsynthase": {
        "show": true,
        "subunits": true,
        "reaction": true,
        "label": true,
        "cRingColor": "#e4d3bd",
        "alphaSubunitColor": "#d6c2ad",
        "betaSubunitColor": "#c7b29e",
        "gammaSubunitColor": "#f6e8d7",
        "iSubunitColor": "#c7b29e",
        "iiSubunitColor": "#e4d3bd",
        "position": 623
      },
      "ion-channels": {
        "show": true,
        "pmf": true,
        "position": 679,
        "kChannel": false,
        "caChannel": false,
        "label": false
      },
      "plastoquinone": {
        "label": true,
        "color": "#ffe698",
        "position": 484,
        "show": false
      },
      "ferredoxin": {
        "label": true,
        "color": "#a08c79",
        "position": 838,
        "show": false
      },
      "cytochrome-c6": {
        "label": true,
        "color": "#ff2b2b",
        "position": 735,
        "show": false,
        "cofactor": false
      },
      "plastocyanin": {
        "label": true,
        "color": "#5b9bd5",
        "position": 748,
        "show": false,
        "cofactor": false
      },
      "fnr": {
        "reaction": true,
        "label": true,
        "color": "#eecc00",
        "position": 790,
        "show": false
      },
      "ptox": {
        "reaction": true,
        "color": "#c2aaff",
        "position": 476,
        "show": false
      },
      "thylakoidmembrane": {
        "show": true,
        "color": "#dbdbdb"
      },
      "stroma": {
        "show": true,
        "label": "stroma",
        "showLabel": true
      },
      "lumen": {
        "show": true,
        "label": "lumen",
        "showLabel": true,
        "color": "#ffe5e5"
      },
      "electron-flux": {
        "ps_ii_to_pq": true,
        "flow_q_cycle": true,
        "b6f_to_pc": true,
        "pc_to_ps_i": true,
        "ps_i_to_fd": true,
        "fd_to_fnr": true,
        "fd_to_cyt_b6f": true,
        "position": 414,
        "show": false
      },
      "proton-flux": {
        "show": true,
        "atp_synthase": true,
        "position": 31,
        "h2o_lumen": false,
        "ps_ii_atp_synthase": false,
        "stroma_ps_ii": false,
        "stroma_b6f": false,
        "b6f_lumen": false
      },
      "ion-flux": {
        "kChannel": true,
        "caChannel": true,
        "position": 1189,
        "show": false
      },
      "photosystem-ii-repair": {
        "antenna": true,
        "light": true,
        "d1": true,
        "cycle": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 110,
        "show": false
      },
      "vdx": {
        "ze": true,
        "vde": true,
        "psbs": true,
        "pathway": true,
        "position": 38,
        "show": false
      },
      "regulation": {
        "qe": true,
        "qi": true,
        "pmf": true,
        "position": 74,
        "show": false
      }
    }
  }],
  'Miscellaneous': [{
    title: "Show me Everything!",
    settings: {
      "photosystem-ii": {
        "show": true,
        "antenna": true,
        "light": true,
        "center": true,
        "cofactors": true,
        "reaction": true,
        "label": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 237,
        "fluorescence": false
      },
      "photosystem-i": {
        "show": true,
        "center": true,
        "cofactors": true,
        "light": true,
        "antenna": true,
        "label": true,
        "coreColor": "#0cb04b",
        "lightColor": "#ffec7f",
        "antennaColor": "#008000",
        "lightSize": 1,
        "position": 730
      },
      "cytochrome-b6f": {
        "show": true,
        "cofactors": true,
        "rieske": true,
        "label": true,
        "coreColor": "#b2c7da",
        "rieskeColor": "#b2c7da",
        "position": 581
      },
      "atpsynthase": {
        "show": true,
        "subunits": true,
        "reaction": true,
        "label": true,
        "cRingColor": "#e4d3bd",
        "alphaSubunitColor": "#d6c2ad",
        "betaSubunitColor": "#c7b29e",
        "gammaSubunitColor": "#f6e8d7",
        "iSubunitColor": "#c7b29e",
        "iiSubunitColor": "#e4d3bd",
        "position": 999
      },
      "ion-channels": {
        "show": true,
        "kChannel": true,
        "caChannel": true,
        "label": true,
        "pmf": true,
        "position": 1182
      },
      "plastoquinone": {
        "show": true,
        "label": true,
        "color": "#ffe698",
        "position": 484
      },
      "ferredoxin": {
        "show": true,
        "label": true,
        "color": "#a08c79",
        "position": 838
      },
      "cytochrome-c6": {
        "label": true,
        "color": "#ff2b2b",
        "position": 735,
        "show": false,
        "cofactor": false
      },
      "plastocyanin": {
        "show": true,
        "label": true,
        "cofactor": true,
        "color": "#5b9bd5",
        "position": 748
      },
      "fnr": {
        "show": true,
        "reaction": true,
        "label": true,
        "color": "#eecc00",
        "position": 790
      },
      "ptox": {
        "show": true,
        "reaction": true,
        "color": "#c2aaff",
        "position": 476
      },
      "electron-flux": {
        "show": true,
        "ps_ii_to_pq": true,
        "flow_q_cycle": true,
        "b6f_to_pc": true,
        "pc_to_ps_i": true,
        "ps_i_to_fd": true,
        "fd_to_fnr": true,
        "fd_to_cyt_b6f": true,
        "position": 414
      },
      "proton-flux": {
        "show": true,
        "h2o_lumen": true,
        "ps_ii_atp_synthase": true,
        "atp_synthase": true,
        "stroma_ps_ii": true,
        "stroma_b6f": true,
        "b6f_lumen": true,
        "position": 407
      },
      "ion-flux": {
        "show": true,
        "kChannel": true,
        "caChannel": true,
        "position": 1189
      },
      "photosystem-ii-repair": {
        "show": true,
        "antenna": true,
        "light": true,
        "d1": true,
        "cycle": true,
        "coreColor": "#b4d66f",
        "lightColor": "#ffec7f",
        "antennaColor": "#8bc300",
        "lightSize": 1,
        "position": 110
      },
      "vdx": {
        "show": true,
        "ze": true,
        "vde": true,
        "psbs": true,
        "pathway": true,
        "position": 38
      },
      "quenching": {
        "show": true,
        "qe": true,
        "qi": true,
        "pmf": true,
        "position": 74
      },
      "thylakoidmembrane": {
        "show": true,
        "border": true,
        "color": "#dbdbdb"
      },
      "stroma": {
        "show": true,
        "label": "stroma",
        "showLabel": true,
        "color": "#0070c4"
      },
      "lumen": {
        "show": true,
        "label": "lumen",
        "showLabel": true,
        "color": "#ffe5e5"
      }
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

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


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

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


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

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


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

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


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

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


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

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


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

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


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

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


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

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


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

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


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

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


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

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


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

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


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

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


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

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


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

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


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

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


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

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


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

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


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

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


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


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/atp-synthase.svg":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/atp-synthase.svg ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"atp-synthase\" transform=\"translate(0, 0)\">\n    <g id=\"base\">\n      <g id=\"i-subunit\">\n        <path d=\"M1034.112,291.597 L1062.208,291.597 C1066.083,291.597 1069.225,295.178 1069.225,299.597 L1069.225,382.957 C1069.225,387.375 1066.083,390.957 1062.208,390.957 L1034.112,390.957 C1030.237,390.957 1027.096,387.375 1027.096,382.957 L1027.096,299.597 C1027.096,295.178 1030.237,291.597 1034.112,291.597 z\" fill=\"#C7B29E\"/>\n        <path d=\"M1034.112,291.597 L1062.208,291.597 C1066.083,291.597 1069.225,295.178 1069.225,299.597 L1069.225,382.957 C1069.225,387.375 1066.083,390.957 1062.208,390.957 L1034.112,390.957 C1030.237,390.957 1027.096,387.375 1027.096,382.957 L1027.096,299.597 C1027.096,295.178 1030.237,291.597 1034.112,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"gamma-subunit\">\n        <path d=\"M1090.885,319.445 C1083.062,319.445 1076.72,301.671 1076.72,279.745 C1076.72,257.819 1083.062,240.045 1090.885,240.045 C1098.707,240.045 1105.049,257.819 1105.049,279.745 C1105.049,301.671 1098.707,319.445 1090.885,319.445 z\" fill=\"#F6E8D7\"/>\n        <path d=\"M1090.885,319.445 C1083.062,319.445 1076.72,301.671 1076.72,279.745 C1076.72,257.819 1083.062,240.045 1090.885,240.045 C1098.707,240.045 1105.049,257.819 1105.049,279.745 C1105.049,301.671 1098.707,319.445 1090.885,319.445 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"ii-subunit\">\n        <path d=\"M1027.424,383.195 C1021.48,383.195 1016.661,341.25 1016.661,289.508 C1016.661,237.766 1021.48,195.82 1027.424,195.82 C1033.369,195.82 1038.188,237.766 1038.188,289.508 C1038.188,341.25 1033.369,383.195 1027.424,383.195 z\" fill=\"#E4D3BD\"/>\n        <path d=\"M1027.424,383.195 C1021.48,383.195 1016.661,341.25 1016.661,289.508 C1016.661,237.766 1021.48,195.82 1027.424,195.82 C1033.369,195.82 1038.188,237.766 1038.188,289.508 C1038.188,341.25 1033.369,383.195 1027.424,383.195 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"c-ring\">\n        <path d=\"M1116.085,285.483 C1121.111,285.483 1125.185,310.134 1125.185,340.541 C1125.185,370.949 1121.111,395.6 1116.085,395.6 C1111.807,394.652 1110.306,383.081 1109.785,379.931 C1109.086,384.096 1108.368,388.379 1106.614,392.259 C1105.992,393.635 1105.138,395.347 1103.485,395.6 C1099.207,394.652 1097.706,383.081 1097.185,379.931 C1096.486,384.096 1095.768,388.379 1094.014,392.259 C1093.392,393.635 1092.538,395.347 1090.885,395.6 C1086.607,394.652 1085.106,383.081 1084.585,379.931 C1083.886,384.096 1083.168,388.379 1081.414,392.259 C1080.792,393.635 1079.938,395.347 1078.285,395.6 C1074.007,394.652 1072.505,383.078 1071.985,379.928 C1071.286,384.094 1070.567,388.378 1068.813,392.259 C1068.191,393.635 1067.337,395.347 1065.684,395.6 C1060.658,395.6 1056.584,370.949 1056.584,340.541 C1056.584,310.134 1060.658,285.483 1065.684,285.483 C1069.962,286.43 1071.464,298.005 1071.985,301.155 C1072.683,296.989 1073.402,292.705 1075.156,288.824 C1075.778,287.448 1076.632,285.736 1078.285,285.483 C1082.562,286.43 1084.065,298.003 1084.585,301.152 C1085.284,296.987 1086.002,292.704 1087.756,288.824 C1088.378,287.448 1089.232,285.736 1090.885,285.483 C1095.162,286.43 1096.665,298.003 1097.185,301.152 C1097.884,296.987 1098.602,292.704 1100.356,288.824 C1100.978,287.448 1101.832,285.736 1103.485,285.483 C1107.762,286.43 1109.265,298.003 1109.785,301.152 C1110.484,296.987 1111.202,292.704 1112.956,288.824 C1113.578,287.448 1114.432,285.736 1116.085,285.483 z\" fill=\"#E4D3BD\"/>\n        <path d=\"M1116.085,285.483 C1121.111,285.483 1125.185,310.134 1125.185,340.541 C1125.185,370.949 1121.111,395.6 1116.085,395.6 C1111.807,394.652 1110.306,383.081 1109.785,379.931 C1109.086,384.096 1108.368,388.379 1106.614,392.259 C1105.992,393.635 1105.138,395.347 1103.485,395.6 C1099.207,394.652 1097.706,383.081 1097.185,379.931 C1096.486,384.096 1095.768,388.379 1094.014,392.259 C1093.392,393.635 1092.538,395.347 1090.885,395.6 C1086.607,394.652 1085.106,383.081 1084.585,379.931 C1083.886,384.096 1083.168,388.379 1081.414,392.259 C1080.792,393.635 1079.938,395.347 1078.285,395.6 C1074.007,394.652 1072.505,383.078 1071.985,379.928 C1071.286,384.094 1070.567,388.378 1068.813,392.259 C1068.191,393.635 1067.337,395.347 1065.684,395.6 C1060.658,395.6 1056.584,370.949 1056.584,340.541 C1056.584,310.134 1060.658,285.483 1065.684,285.483 C1069.962,286.43 1071.464,298.005 1071.985,301.155 C1072.683,296.989 1073.402,292.705 1075.156,288.824 C1075.778,287.448 1076.632,285.736 1078.285,285.483 C1082.562,286.43 1084.065,298.003 1084.585,301.152 C1085.284,296.987 1086.002,292.704 1087.756,288.824 C1088.378,287.448 1089.232,285.736 1090.885,285.483 C1095.162,286.43 1096.665,298.003 1097.185,301.152 C1097.884,296.987 1098.602,292.704 1100.356,288.824 C1100.978,287.448 1101.832,285.736 1103.485,285.483 C1107.762,286.43 1109.265,298.003 1109.785,301.152 C1110.484,296.987 1111.202,292.704 1112.956,288.824 C1113.578,287.448 1114.432,285.736 1116.085,285.483 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"head\">\n      <g id=\"beta-subunit\">\n        <path d=\"M1122.002,258.488 C1108.427,258.488 1097.423,240.332 1097.423,217.937 C1097.423,195.542 1108.427,177.386 1122.002,177.386 C1135.577,177.386 1146.581,195.542 1146.581,217.937 C1146.581,240.332 1135.577,258.488 1122.002,258.488 z\" fill=\"#C7B29E\"/>\n        <path d=\"M1122.002,258.488 C1108.427,258.488 1097.423,240.332 1097.423,217.937 C1097.423,195.542 1108.427,177.386 1122.002,177.386 C1135.577,177.386 1146.581,195.542 1146.581,217.937 C1146.581,240.332 1135.577,258.488 1122.002,258.488 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"beta-subunit\">\n        <path d=\"M1059.766,258.488 C1046.191,258.488 1035.187,240.332 1035.187,217.937 C1035.187,195.542 1046.191,177.386 1059.766,177.386 C1073.341,177.386 1084.345,195.542 1084.345,217.937 C1084.345,240.332 1073.341,258.488 1059.766,258.488 z\" fill=\"#C7B29E\"/>\n        <path d=\"M1059.766,258.488 C1046.191,258.488 1035.187,240.332 1035.187,217.937 C1035.187,195.542 1046.191,177.386 1059.766,177.386 C1073.341,177.386 1084.345,195.542 1084.345,217.937 C1084.345,240.332 1073.341,258.488 1059.766,258.488 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"alpha-subunit\">\n        <path d=\"M1091.519,258.488 C1077.945,258.488 1066.94,240.332 1066.94,217.937 C1066.94,195.542 1077.945,177.386 1091.519,177.386 C1105.094,177.386 1116.098,195.542 1116.098,217.937 C1116.098,240.332 1105.094,258.488 1091.519,258.488 z\" fill=\"#D6C2AD\"/>\n        <path d=\"M1091.519,258.488 C1077.945,258.488 1066.94,240.332 1066.94,217.937 C1066.94,195.542 1077.945,177.386 1091.519,177.386 C1105.094,177.386 1116.098,195.542 1116.098,217.937 C1116.098,240.332 1105.094,258.488 1091.519,258.488 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"subunits\">\n      <text transform=\"matrix(1, 0, 0, 1, 1091.019, 249.488)\">\n        <tspan x=\"-2.62\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">𝛼</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1121.502, 249.488)\">\n        <tspan x=\"-2.465\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">𝛽</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1059.266, 249.488)\">\n        <tspan x=\"-2.465\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">𝛽</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1090.385, 272.773)\">\n        <tspan x=\"-2.14\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">𝛾</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1045.639, 370.657)\">\n        <tspan x=\"-1.389\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">I</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1026.924, 213.734)\">\n        <tspan x=\"-2.315\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">𝛿</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1026.924, 321.319)\">\n        <tspan x=\"-2.778\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">II</tspan>\n      </text>\n    </g>\n    <g id=\"reaction\">\n      <g>\n        <path d=\"M1035.563,172.122 C1054.158,191.868 1070.244,203.864 1091.281,203.864 C1117.669,203.864 1139.483,181.757 1154.852,165.192\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M1035.563,172.122 L1040.551,171.344 L1029.883,165.933 L1034.362,177.024 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 1021.553, 146.15)\">\n        <tspan x=\"-22.447\" y=\"7.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">ATP</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1180.086, 146.15)\">\n        <tspan x=\"-47.692\" y=\"7.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">ADP + P</tspan>\n        <tspan x=\"44.582\" y=\"7.212\" font-family=\"Arial,ArialMT\" font-size=\"14\" fill=\"#000000\">i</tspan>\n      </text>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 1079.385, 574.538)\">\n        <tspan x=\"-66.148\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">ATP Synthase</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/cytochrome-b6f.svg":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/cytochrome-b6f.svg ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"cytochrome-b6f\" transform=\"translate(0, 0)\">\n    <g id=\"core\">\n      <path d=\"M655.498,267.457 C675.147,267.457 691.076,293.75 691.076,326.183 C691.192,332.982 690.245,339.323 688.994,345.965 C699.86,349.08 703.904,361.547 704.283,371.638 C704.283,386.256 695.46,398.106 684.576,398.106 C675.306,397.791 669.131,390.242 666.527,381.963 C663.169,383.981 659.363,384.747 655.498,384.909 C646.635,384.927 639.904,379.589 634.281,373.32 C640.079,370.835 644.441,366.313 644.888,359.837 C644.301,348.973 632.875,344.517 623.487,344.171 L621.677,344.237 C620.378,338.308 620.013,332.235 619.92,326.183 C619.992,321.52 619.905,324.167 620.268,318.247 C621.897,319.181 623.796,319.344 625.629,319.445 C633.624,319.445 640.104,312.363 640.104,303.627 C640.004,296.459 635.609,289.785 628.42,288.182 C633.651,277.454 643.014,267.978 655.498,267.457 z\" fill=\"#B2C7DA\"/>\n      <path d=\"M655.498,267.457 C675.147,267.457 691.076,293.75 691.076,326.183 C691.192,332.982 690.245,339.323 688.994,345.965 C699.86,349.08 703.904,361.547 704.283,371.638 C704.283,386.256 695.46,398.106 684.576,398.106 C675.306,397.791 669.131,390.242 666.527,381.963 C663.169,383.981 659.363,384.747 655.498,384.909 C646.635,384.927 639.904,379.589 634.281,373.32 C640.079,370.835 644.441,366.313 644.888,359.837 C644.301,348.973 632.875,344.517 623.487,344.171 L621.677,344.237 C620.378,338.308 620.013,332.235 619.92,326.183 C619.992,321.52 619.905,324.167 620.268,318.247 C621.897,319.181 623.796,319.344 625.629,319.445 C633.624,319.445 640.104,312.363 640.104,303.627 C640.004,296.459 635.609,289.785 628.42,288.182 C633.651,277.454 643.014,267.978 655.498,267.457 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"rieske\">\n      <path d=\"M661.032,384.909 C661.032,395.793 653.332,405.166 639.099,405.166 C624.867,405.166 613.944,397.91 613.944,387.026 C613.944,376.143 625.523,370.284 639.756,370.284 C653.988,370.284 661.032,374.025 661.032,384.909 z\" fill=\"#B2C7DA\"/>\n      <path d=\"M661.032,384.909 C661.032,395.793 653.332,405.166 639.099,405.166 C624.867,405.166 613.944,397.91 613.944,387.026 C613.944,376.143 625.523,370.284 639.756,370.284 C653.988,370.284 661.032,374.025 661.032,384.909 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <path d=\"M715.576,471.247 C704.692,471.247 695.869,459.397 695.869,444.779 C695.869,430.161 704.692,418.311 715.576,418.311 C726.46,418.311 735.283,430.161 735.283,444.779 C735.283,459.397 726.46,471.247 715.576,471.247 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" display=\"none\"/>\n    <path d=\"M652.677,417.378 C651.378,411.449 651.013,405.375 650.92,399.324 C650.992,394.66 650.905,397.307 651.268,391.387 C652.897,392.321 654.796,392.485 656.629,392.586 C664.624,392.586 671.104,385.504 671.104,376.767 C671.004,369.599 666.609,362.925 659.42,361.323 C664.651,350.595 674.014,341.119 686.498,340.598 C706.147,340.598 722.076,366.89 722.076,399.324 C722.076,431.757 706.147,458.049 686.498,458.049 C677.635,458.068 670.904,452.729 665.281,446.46 C671.079,443.976 675.441,439.454 675.888,432.978 C675.301,422.114 663.875,417.658 654.487,417.311 L652.677,417.378 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"2\" display=\"none\"/>\n    <g id=\"cofactors\">\n      <g id=\"b6l\">\n        <text transform=\"matrix(1, 0, 0, 1, 666.625, 340.175)\">\n          <tspan x=\"-2.781\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">b</tspan>\n        </text>\n        <text transform=\"matrix(1, 0, 0, 1, 670.266, 343.072)\">\n          <tspan x=\"-1.668\" y=\"1\" font-family=\"Arial,ArialMT\" font-size=\"6\" font-style=\"italic\" fill=\"#000000\">L</tspan>\n        </text>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 648.547, 306.901)\">\n        <tspan x=\"-5.558\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"2.221\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">n</tspan>\n      </text>\n      <path d=\"M656.401,344.833 L661.727,340.305\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M662.635,360.504 L657.061,355.749\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 687.415, 389.241)\">\n        <tspan x=\"-1.389\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" font-style=\"italic\" fill=\"#000000\">f</tspan>\n      </text>\n      <path d=\"M684.843,383.195 L678.856,375.36\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 669.694, 367.504)\">\n        <tspan x=\"-13.793\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Fe₂S₂</tspan>\n      </text>\n      <g id=\"b6h\">\n        <text transform=\"matrix(1, 0, 0, 1, 666.127, 314.582)\">\n          <tspan x=\"-2.781\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">b</tspan>\n        </text>\n        <text transform=\"matrix(1, 0, 0, 1, 670.266, 317.479)\">\n          <tspan x=\"-2.167\" y=\"1\" font-family=\"Arial,ArialMT\" font-size=\"6\" font-style=\"italic\" fill=\"#000000\">H</tspan>\n        </text>\n      </g>\n      <path d=\"M667.23,330.916 L667.23,322.27\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 650.529, 350.479)\">\n        <tspan x=\"-5.558\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"2.221\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">p</tspan>\n      </text>\n      <path d=\"M661.975,313.358 L656.401,308.603\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 654.194, 574.038)\">\n        <tspan x=\"-72.705\" y=\"5\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Cytochrome </tspan>\n        <tspan x=\"46.332\" y=\"5\" font-family=\"Arial,ArialMT\" font-size=\"21\" font-style=\"italic\" fill=\"#000000\">b₆f</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/cytochrome-c6.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/cytochrome-c6.svg ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"cytochrome-c6\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill=\"#FF2B2B\"/>\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"cofactor\">\n      <path d=\"M762.184,438.133 L761.2,435.103 L763.777,433.23 L766.355,435.103 L765.37,438.133 z M776.445,438.133 L777.43,435.103 L774.852,433.23 L772.275,435.103 L773.259,438.133 z M765.37,444.052 L766.355,447.082 L763.777,448.955 L761.2,447.082 L762.184,444.052 z M776.445,444.052 L777.43,447.082 L774.852,448.955 L772.275,447.082 L773.259,444.052 z M772.275,435.036 L769.315,432.886 L766.355,435.036 M772.275,447.14 L769.315,449.29 L766.355,447.14 M762.166,444.052 L760.015,441.092 L762.166,438.133 M776.522,444.052 L778.672,441.092 L776.522,438.133\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"0.75\"/>\n      <g>\n        <path d=\"M766.457,442.199 L766.457,438.923 L768.666,438.923 L768.666,439.31 L766.89,439.31 L766.89,440.324 L768.427,440.324 L768.427,440.711 L766.89,440.711 L766.89,442.199 z\" fill=\"#000000\"/>\n        <path d=\"M770.802,441.435 L771.218,441.486 Q771.119,441.85 770.853,442.051 Q770.588,442.252 770.174,442.252 Q769.654,442.252 769.349,441.932 Q769.044,441.611 769.044,441.032 Q769.044,440.434 769.352,440.103 Q769.66,439.772 770.152,439.772 Q770.628,439.772 770.929,440.096 Q771.231,440.42 771.231,441.008 Q771.231,441.044 771.229,441.115 L769.459,441.115 Q769.482,441.506 769.681,441.714 Q769.879,441.922 770.177,441.922 Q770.398,441.922 770.554,441.805 Q770.71,441.689 770.802,441.435 z M769.482,440.784 L770.807,440.784 Q770.78,440.485 770.655,440.335 Q770.462,440.103 770.156,440.103 Q769.879,440.103 769.691,440.288 Q769.502,440.474 769.482,440.784 z\" fill=\"#000000\"/>\n      </g>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 763.499, 480.233)\">\n      <tspan x=\"-28.347\" y=\"6.378\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Cyt c₆</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/electron-flux.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/electron-flux.svg ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"electron-flux\" transform=\"translate(0, 0)\">\n    <g id=\"pc-to-ps-i\">\n      <path d=\"M841.221,412.224 C823.496,431.894 808.142,443.837 788.078,443.837\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M841.221,412.224 L842.53,417.099 L846.763,405.911 L836.217,411.557 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"b6f-to-pc\">\n      <path d=\"M730.813,439.253 C713.872,434.135 699.731,416.062 689.304,401.988\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M730.813,439.253 L727.414,442.985 L739.118,440.515 L728.675,434.68 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"ps-i-to-fd\">\n      <path d=\"M852.334,249.445 L852.334,275.829\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M852.334,249.445 L856.534,252.245 L852.334,241.045 L848.134,252.245 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"fd-to-fnr\">\n      <path d=\"M869.148,165.664 L859.029,184.313\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M869.148,165.664 L871.505,170.128 L873.155,158.281 L864.122,166.122 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"flow-q-cycle\">\n      <g>\n        <path d=\"M552.895,352.348 C574.015,364.242 597.894,361.953 617.113,358.17\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n        <path d=\"M617.113,358.17 L615.25,362.862 L625.329,356.42 L613.5,354.646 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M628.891,307.535 C603.438,303.518 580.06,313.116 561.96,322.513\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n        <path d=\"M561.96,322.513 L562.441,317.488 L554.558,326.485 L566.413,324.889 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"ps-ii-to-pq\">\n      <path d=\"M496.773,320.56 C477.285,306.9 441.565,310.935 414.488,314.678\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M496.773,320.56 L491.858,321.71 L502.903,326.303 L497.601,315.581 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"fd-to-cyt-b6f\">\n      <path d=\"M673.549,253.71 C695.089,206.767 749.784,205.734 818.663,205.734\" fill-opacity=\"0\" stroke=\"#F8941D\" stroke-width=\"3\"/>\n      <path d=\"M673.549,253.71 L670.667,249.566 L670.47,261.526 L678.483,252.645 z\" fill=\"#F8941D\" fill-opacity=\"1\" stroke=\"#F8941D\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ferredoxin.svg":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/ferredoxin.svg ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ferredoxin\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M854.896,226.945 C845.475,226.945 837.837,219.307 837.837,209.886 C837.837,200.464 845.475,192.827 854.896,192.827 C864.318,192.827 871.956,200.464 871.956,209.886 C871.956,219.307 864.318,226.945 854.896,226.945 z\" fill=\"#A08C79\"/>\n      <path d=\"M854.896,226.945 C845.475,226.945 837.837,219.307 837.837,209.886 C837.837,200.464 845.475,192.827 854.896,192.827 C864.318,192.827 871.956,200.464 871.956,209.886 C871.956,219.307 864.318,226.945 854.896,226.945 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 882.063, 238.536)\">\n      <tspan x=\"-12.253\" y=\"4.689\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Fd</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/fnr.svg":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/fnr.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"fnr\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M884.643,149.036 C875.221,149.036 867.584,141.398 867.584,131.977 C867.584,122.555 875.221,114.917 884.643,114.917 C894.065,114.917 901.702,122.555 901.702,131.977 C901.702,141.398 894.065,149.036 884.643,149.036 z\" fill=\"#EECC00\"/>\n      <path d=\"M884.643,149.036 C875.221,149.036 867.584,141.398 867.584,131.977 C867.584,122.555 875.221,114.917 884.643,114.917 C894.065,114.917 901.702,122.555 901.702,131.977 C901.702,141.398 894.065,149.036 884.643,149.036 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"reaction\">\n      <g>\n        <path d=\"M940.627,92.514 C922.032,112.26 905.946,124.255 884.91,124.255 C858.521,124.255 836.707,102.149 821.338,85.584\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M940.627,92.514 L941.828,97.416 L946.307,86.325 L935.639,91.736 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 828.651, 66.755)\">\n        <tspan x=\"-38.402\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">NADP⁺</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 963.656, 66.755)\">\n        <tspan x=\"-42.006\" y=\"7.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">NADPH</tspan>\n      </text>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 917.873, 162.576)\">\n      <tspan x=\"-21.579\" y=\"4.689\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">FNR</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ion-channels.svg":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/ion-channels.svg ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ion-channels\" transform=\"translate(0, 0)\">\n    <g id=\"ca-channel\">\n      <g id=\"shape\">\n        <path d=\"M1227.972,372.685 L1219.594,383.444 L1227.972,372.685 L1219.594,383.444 L1200.532,383.444 L1219.594,383.444 L1200.532,383.444 L1192.154,372.685 L1200.532,383.444 L1192.154,372.685 L1192.154,290.132 L1192.154,372.685 L1192.154,290.132 L1227.972,290.132 L1192.154,290.132 L1227.972,290.132 L1227.972,372.685 L1227.972,290.132 L1227.972,372.685 z\" fill=\"#959595\"/>\n        <path d=\"M1227.972,372.685 L1219.594,383.444 L1227.972,372.685 L1219.594,383.444 L1200.532,383.444 L1219.594,383.444 L1200.532,383.444 L1192.154,372.685 L1200.532,383.444 L1192.154,372.685 L1192.154,290.132 L1192.154,372.685 L1192.154,290.132 L1227.972,290.132 L1192.154,290.132 L1227.972,290.132 L1227.972,372.685 L1227.972,290.132 L1227.972,372.685 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"k-channel\">\n      <g id=\"shape\">\n        <path d=\"M1260.337,383.444 L1279.399,383.444 L1287.777,372.685 L1287.777,300.89 L1279.399,290.132 L1260.337,290.132 L1251.959,300.89 L1251.959,372.685 L1260.337,383.444 z\" fill=\"#959595\"/>\n        <path d=\"M1260.337,383.444 L1279.399,383.444 L1287.777,372.685 L1287.777,300.89 L1279.399,290.132 L1260.337,290.132 L1251.959,300.89 L1251.959,372.685 L1260.337,383.444 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"pmf\">\n      <text transform=\"matrix(1, 0, 0, 1, 1358.84, 336.004)\">\n        <tspan x=\"-33.548\" y=\"5.5\" font-family=\"Arial,ArialMT\" font-size=\"18\" fill=\"#EE6600\">ΔΨ/</tspan>\n        <tspan x=\"-1.485\" y=\"5.5\" font-family=\"Arial,ArialMT\" font-size=\"18\" fill=\"#EE6600\">Δ</tspan>\n        <tspan x=\"10.538\" y=\"5.5\" font-family=\"Arial,ArialMT\" font-size=\"18\" fill=\"#EE6600\">pH</tspan>\n      </text>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 1243.67, 574.538)\" id=\"Ion_Channels\">\n        <tspan x=\"-61.877\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Ion Channels</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ion-flux.svg":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/ion-flux.svg ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ion-flux\" transform=\"translate(0, 0)\">\n    <g id=\"ca-channel\">\n      <text transform=\"matrix(1, 0, 0, 1, 1209.563, 436.118)\" id=\"Ca⁺\">\n        <tspan x=\"-20.402\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">Ca⁺</tspan>\n      </text>\n      <g id=\"direction\">\n        <path d=\"M1210.063,409.591 L1210.063,254.585\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1210.063,409.591 L1205.863,406.791 L1210.063,417.991 L1214.263,406.791 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"k-channel\">\n      <text transform=\"matrix(1, 0, 0, 1, 1280.918, 236.382)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1269.368, 439.123)\">\n        <tspan x=\"-13.066\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">K⁺</tspan>\n      </text>\n      <g id=\"direction\">\n        <path d=\"M1264.812,408.277 L1264.812,253.271\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1264.812,408.277 L1260.612,405.477 L1264.812,416.677 L1269.012,405.477 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g id=\"direction\">\n        <path d=\"M1274.923,265.298 L1274.923,420.304\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1274.923,265.298 L1279.123,268.098 L1274.923,256.898 L1270.723,268.098 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/lumen.svg":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/lumen.svg ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"lumen\" transform=\"translate(0, 0)\">\n    <path d=\"M-0,376.004 L1400,376.004 L1400,600 L-0,600 L-0,376.004 z\" fill=\"#FFE5E5\"/>\n    <text transform=\"matrix(1, 0, 0, 1, 1358.84, 392.945)\">\n      <tspan x=\"-30.04\" y=\"7.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">lumen</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-i.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-i.svg ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"photosystem-i\" transform=\"translate(0, 0)\">\n    <g id=\"antenna\">\n      <g id=\"lhca\">\n        <path d=\"M891.728,291.597 L916.885,291.597 C922.992,291.597 927.943,296.413 927.943,302.355 L927.943,374.15 C927.943,380.092 922.992,384.909 916.885,384.909 L891.728,384.909 C885.621,384.909 880.67,380.092 880.67,374.15 L880.67,302.355 C880.67,296.413 885.621,291.597 891.728,291.597 z\" fill=\"#008000\"/>\n        <path d=\"M891.728,291.597 L916.885,291.597 C922.992,291.597 927.943,296.413 927.943,302.355 L927.943,374.15 C927.943,380.092 922.992,384.909 916.885,384.909 L891.728,384.909 C885.621,384.909 880.67,380.092 880.67,374.15 L880.67,302.355 C880.67,296.413 885.621,291.597 891.728,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"lhca\">\n        <path d=\"M786.926,291.597 L812.083,291.597 C818.19,291.597 823.141,296.413 823.141,302.355 L823.141,374.15 C823.141,380.092 818.19,384.909 812.083,384.909 L786.926,384.909 C780.819,384.909 775.869,380.092 775.869,374.15 L775.869,302.355 C775.869,296.413 780.819,291.597 786.926,291.597 z\" fill=\"#008000\"/>\n        <path d=\"M786.926,291.597 L812.083,291.597 C818.19,291.597 823.141,296.413 823.141,302.355 L823.141,374.15 C823.141,380.092 818.19,384.909 812.083,384.909 L786.926,384.909 C780.819,384.909 775.869,380.092 775.869,374.15 L775.869,302.355 C775.869,296.413 780.819,291.597 786.926,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"core\">\n      <path d=\"M869.29,279.265 C886.885,279.265 901.148,305.674 901.148,338.253 C901.148,370.831 886.885,397.241 869.29,397.241 C862.033,397.14 856.035,392.784 851.656,387.306 C847.349,392.99 841.219,396.904 834.021,397.241 C816.427,397.241 802.164,370.831 802.164,338.253 C802.164,305.674 816.427,279.265 834.021,279.265 C841.278,279.365 847.276,283.721 851.656,289.199 C855.963,283.515 862.093,279.602 869.29,279.265 z\" fill=\"#0CB04B\"/>\n      <path d=\"M869.29,279.265 C886.885,279.265 901.148,305.674 901.148,338.253 C901.148,370.831 886.885,397.241 869.29,397.241 C862.033,397.14 856.035,392.784 851.656,387.306 C847.349,392.99 841.219,396.904 834.021,397.241 C816.427,397.241 802.164,370.831 802.164,338.253 C802.164,305.674 816.427,279.265 834.021,279.265 C841.278,279.365 847.276,283.721 851.656,289.199 C855.963,283.515 862.093,279.602 869.29,279.265 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 851.544, 378.284)\" id=\"center\">\n      <tspan x=\"-10.509\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"14\" fill=\"#000000\">P</tspan>\n      <tspan x=\"-1.171\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"7\" fill=\"#000000\">700</tspan>\n    </text>\n    <g id=\"cofactors\">\n      <text transform=\"matrix(1, 0, 0, 1, 839.873, 310.422)\">\n        <tspan x=\"-5.055\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">F</tspan>\n        <tspan x=\"1.053\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 855.114, 296.961)\">\n        <tspan x=\"-5.055\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">F</tspan>\n        <tspan x=\"1.053\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">B</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 851.544, 325.517)\">\n        <tspan x=\"-5.055\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">F</tspan>\n        <tspan x=\"1.053\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">X</tspan>\n      </text>\n      <path d=\"M845.989,318.422 L841.815,314.773\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M844.714,303.422 L848.888,299.835\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M839.814,378.658 L828.749,364.75\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M875.91,364.75 L864.844,378.658\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <path d=\"M825.237,354.881 L828.748,338.892\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M836.778,331.271 L845.329,327.239\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 827.814, 334.111)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">1B</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 825.167, 360.584)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">0B</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 877.883, 334.726)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">1A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 879.769, 360.584)\">\n        <tspan x=\"-7.004\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">A</tspan>\n        <tspan x=\"-0.334\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">0A</tspan>\n      </text>\n      <path d=\"M859.33,327.239 L867.88,331.271\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n      <path d=\"M875.91,338.892 L879.422,354.881\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n    </g>\n    <g id=\"light\">\n      <path d=\"M782.7,275.747 L765.376,255.981 L771.055,253.128 L757.394,229.837 L730.296,245.066 L754.259,261.862 L746.255,267.226 L769.287,283.728 L762.321,286.945 L799.497,313.819 L777.083,279.153 L782.7,275.747 z\" fill=\"#FFEC7F\"/>\n      <path d=\"M757.394,229.837 L771.055,253.128 L765.376,255.981 L782.7,275.747 L782.7,275.747 L777.083,279.153 L799.497,313.819 L762.321,286.945 L769.286,283.728 L746.255,267.226 L754.259,261.862 L730.296,245.066 L757.394,229.837 z M757.028,231.19 L732.171,245.159 L754.833,261.043 L756.027,261.881 L754.815,262.693 L748.01,267.253 L769.869,282.915 L771.265,283.915 L769.706,284.635 L764.292,287.136 L795.763,309.885 L776.243,279.696 L775.684,278.832 L776.564,278.298 L781.163,275.51 L764.624,256.641 L763.772,255.668 L764.927,255.088 L769.652,252.714 L757.028,231.19 z\" fill=\"#000000\"/>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 848.998, 574.538)\">\n        <tspan x=\"-66.527\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Photosystem I</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-ii-repair.svg":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-ii-repair.svg ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <defs>\n    <pattern id=\"Pattern_1\" patternUnits=\"userSpaceOnUse\" x=\"227.713\" y=\"51.755\" width=\"40\" height=\"40\" patternTransform=\"matrix(0.29, 0, 0, 0.29, 0, 0)\">\n      <g transform=\"translate(-0, -0)\">\n        <path d=\"M40,0 L0,0 L0,40 L40,40 L40,0 z\" fill=\"#BFBFBF\"/>\n        <path d=\"M30,0 L40,10 L40,0 L30,0 z\" fill=\"#808080\"/>\n        <path d=\"M0,40 L0,30 L10,40 L0,40 z\" fill=\"#808080\"/>\n        <path d=\"M30,40 L40,40 L40,30 L10,0 L0,0 L0,10\" fill=\"#808080\"/>\n      </g>\n    </pattern>\n  </defs>\n  <g id=\"photosystem-ii-repair\" transform=\"translate(0, 0)\">\n    <g id=\"core\">\n      <path d=\"M279.906,51.517 C288.842,51.623 295.177,58.023 299.897,64.925 C290.659,66.659 285.627,75.039 285.22,83.924 C285.221,94.604 293.067,103.261 302.747,103.261 C305.751,103.28 307.465,102.621 310.077,101.404 C310.186,103.313 310.129,102.064 310.173,105.154 C310.122,119.439 304.257,142.573 293.484,152.939 C303.059,155.695 312.471,161.08 313.12,171.324 C313.12,183.2 301.054,192.827 286.169,192.827 C281.221,192.788 276.256,191.812 271.878,189.454 C267.545,191.967 262.502,192.628 257.588,192.827 C242.703,192.827 230.637,183.2 230.637,171.324 C231.039,163.41 235.938,161.4 241.853,156.682 L241.601,156.288 C244.383,159.803 248.31,162.117 252.796,162.371 C266.372,162.371 277.379,137.721 277.379,107.313 C276.802,91.44 275.15,71.912 264.517,58.977 C268.591,54.468 273.945,52.108 279.906,51.517 L279.906,51.517 z\" fill=\"#B4D66F\"/>\n      <path d=\"M279.906,51.517 C288.842,51.623 295.177,58.023 299.897,64.925 C290.659,66.659 285.627,75.039 285.22,83.924 C285.221,94.604 293.067,103.261 302.747,103.261 C305.751,103.28 307.465,102.621 310.077,101.404 C310.186,103.313 310.129,102.064 310.173,105.154 C310.122,119.439 304.257,142.573 293.484,152.939 C303.059,155.695 312.471,161.08 313.12,171.324 C313.12,183.2 301.054,192.827 286.169,192.827 C281.221,192.788 276.256,191.812 271.878,189.454 C267.545,191.967 262.502,192.628 257.588,192.827 C242.703,192.827 230.637,183.2 230.637,171.324 C231.039,163.41 235.938,161.4 241.853,156.682 L241.601,156.288 C244.383,159.803 248.31,162.117 252.796,162.371 C266.372,162.371 277.379,137.721 277.379,107.313 C276.802,91.44 275.15,71.912 264.517,58.977 C268.591,54.468 273.945,52.108 279.906,51.517 L279.906,51.517 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"d1\">\n      <g id=\"photosystem-ii-repair-d1\">\n        <path d=\"M252.296,161.871 C238.719,161.871 227.713,137.221 227.713,106.813 C227.713,76.405 238.719,51.755 252.296,51.755 C265.872,51.755 276.879,76.405 276.879,106.813 C276.879,137.221 265.872,161.871 252.296,161.871 z\" fill=\"url(#Pattern_1)\"/>\n        <path d=\"M252.296,161.871 C238.719,161.871 227.713,137.221 227.713,106.813 C227.713,76.405 238.719,51.755 252.296,51.755 C265.872,51.755 276.879,76.405 276.879,106.813 C276.879,137.221 265.872,161.871 252.296,161.871 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 251.954, 140.33)\">\n        <tspan x=\"-8.948\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"14\" fill=\"#000000\">D1</tspan>\n      </text>\n    </g>\n    <g id=\"antenna\">\n      <g id=\"lhcb\">\n        <path d=\"M199.103,64.684 L224.26,64.684 C230.367,64.684 235.318,69.225 235.318,74.826 L235.318,142.51 C235.318,148.112 230.367,152.652 224.26,152.652 L199.103,152.652 C192.996,152.652 188.045,148.112 188.045,142.51 L188.045,74.826 C188.045,69.225 192.996,64.684 199.103,64.684 z\" fill=\"#8BC300\"/>\n        <path d=\"M199.103,64.684 L224.26,64.684 C230.367,64.684 235.318,69.225 235.318,74.826 L235.318,142.51 C235.318,148.112 230.367,152.652 224.26,152.652 L199.103,152.652 C192.996,152.652 188.045,148.112 188.045,142.51 L188.045,74.826 C188.045,69.225 192.996,64.684 199.103,64.684 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"lhcb\">\n        <path d=\"M162.104,64.684 L187.261,64.684 C193.368,64.684 198.319,69.225 198.319,74.826 L198.319,142.51 C198.319,148.112 193.368,152.652 187.261,152.652 L162.104,152.652 C155.997,152.652 151.046,148.112 151.046,142.51 L151.046,74.826 C151.046,69.225 155.997,64.684 162.104,64.684 z\" fill=\"#8BC300\"/>\n        <path d=\"M162.104,64.684 L187.261,64.684 C193.368,64.684 198.319,69.225 198.319,74.826 L198.319,142.51 C198.319,148.112 193.368,152.652 187.261,152.652 L162.104,152.652 C155.997,152.652 151.046,148.112 151.046,142.51 L151.046,74.826 C151.046,69.225 155.997,64.684 162.104,64.684 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"cycle\">\n      <g>\n        <path d=\"M386.992,257.171 C392.09,218.842 396.374,189.139 383.483,161.597 C372.141,137.364 356.506,120.434 327.632,111.689\" fill-opacity=\"0\" stroke=\"#B4D66F\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M386.992,257.171 L382.647,253.376 L385.747,266.69 L392.166,254.621 z\" fill=\"#B4D66F\" fill-opacity=\"1\" stroke=\"#B4D66F\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M194.942,180.037 C170.999,199.57 168.196,215.87 172.831,236.127 C178.75,261.991 183.746,269.985 201.233,281.773\" fill-opacity=\"0\" stroke=\"#983432\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M194.942,180.037 L195.274,185.796 L202.609,174.261 L189.498,178.129 z\" fill=\"#983432\" fill-opacity=\"1\" stroke=\"#983432\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 138.727, 196.734)\">\n        <tspan x=\"-25.938\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"14\" fill=\"#000000\">damage</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 414.208, 173.962)\">\n        <tspan x=\"-19.114\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"14\" fill=\"#000000\">repair</tspan>\n      </text>\n    </g>\n    <g id=\"light\">\n      <path d=\"M161.912,52.225 L144.588,32.459 L150.267,29.606 L136.606,6.315 L109.508,21.544 L133.471,38.34 L125.467,43.703 L148.498,60.205 L141.533,63.422 L178.709,90.296 L156.295,55.631 L161.912,52.225 z\" fill=\"#FFEC7F\"/>\n      <path d=\"M136.606,6.315 L150.267,29.606 L144.588,32.459 L161.912,52.225 L161.912,52.225 L156.294,55.631 L178.708,90.296 L141.533,63.422 L148.498,60.205 L125.467,43.703 L133.471,38.34 L109.508,21.544 L136.606,6.315 z M136.24,7.668 L111.383,21.637 L134.044,37.521 L135.239,38.358 L134.027,39.17 L127.223,43.731 L149.081,59.392 L150.477,60.393 L148.918,61.113 L143.504,63.613 L174.975,86.363 L155.455,56.174 L154.896,55.309 L155.776,54.776 L160.374,51.987 L143.836,33.118 L142.984,32.146 L144.139,31.565 L148.864,29.191 L136.24,7.668 z\" fill=\"#000000\"/>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-ii.svg":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/photosystem-ii.svg ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"photosystem-ii\" transform=\"translate(0, 0)\">\n    <g id=\"fluorescence\">\n      <path d=\"M331.952,220.062 C336.305,226.505 338.122,223.592 339.949,227.289 C341.176,229.771 341.356,230.994 339.036,233.332 C337.741,234.529 336.758,236.616 337.815,238.755 C338.873,240.894 340.763,241.464 342.864,241.078 C344.608,240.757 346.856,241.262 347.914,243.401 C348.971,245.54 347.922,247.608 346.693,248.824 C345.274,250.227 344.416,252.107 345.473,254.246 C346.53,256.385 348.897,256.826 350.522,256.57 C352.248,256.298 354.514,256.754 355.571,258.893 C356.629,261.032 355.62,263.111 354.351,264.316 C352.79,265.797 352.073,267.599 353.131,269.738 C354.188,271.877 355.902,272.456 358.18,272.062 C359.916,271.761 362.172,272.246 363.229,274.385 C364.286,276.524 364.395,277.602 362.009,279.807 C360.714,281.004 359.731,283.091 360.788,285.23 C361.846,287.369 363.736,287.94 365.837,287.553 C367.581,287.233 369.829,287.738 370.887,289.877 C371.944,292.016 370.895,294.084 369.666,295.299 C368.247,296.702 367.389,298.583 368.446,300.722 C369.503,302.861 371.87,303.301 373.495,303.045 C375.221,302.773 377.487,303.23 378.544,305.369 C379.602,307.508 378.593,309.586 377.324,310.791 C375.763,312.273 375.046,314.075 376.104,316.214 C377.161,318.352 378.875,318.931 381.153,318.537 C382.889,318.236 385.145,318.721 386.202,320.86 C387.259,322.999 384.481,324.803 384.982,326.283\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"2\"/>\n      <path d=\"M331.952,220.062 L336.262,220.433 L328.486,213.751 L329.952,223.899 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"2\" stroke-opacity=\"1\"/>\n    </g>\n    <g id=\"core\">\n      <path d=\"M395.811,281.773 C404.748,281.879 411.083,288.279 415.802,295.181 C406.565,296.915 401.533,305.296 401.126,314.18 C401.126,324.86 408.973,333.517 418.652,333.517 C421.657,333.536 423.371,332.878 425.982,331.661 C426.091,333.569 426.034,332.32 426.078,335.411 C426.027,349.696 420.163,372.829 409.389,383.195 C418.965,385.952 428.377,391.336 429.026,401.581 C429.026,413.456 416.959,423.083 402.074,423.083 C397.126,423.044 392.162,422.068 387.784,419.71 C383.45,422.223 378.407,422.885 373.493,423.083 C358.609,423.083 346.542,413.456 346.542,401.581 C346.945,393.666 351.844,391.657 357.758,386.938 C348.423,373.186 344.484,354.49 344.118,338.253 C344.118,307.845 355.125,283.194 368.701,283.194 C373.362,283.288 377.246,286.053 380.114,289.542 C384.329,284.992 389.565,282.053 395.811,281.773 L395.811,281.773 z\" fill=\"#B4D66F\"/>\n      <path d=\"M395.811,281.773 C404.748,281.879 411.083,288.279 415.802,295.181 C406.565,296.915 401.533,305.296 401.126,314.18 C401.126,324.86 408.973,333.517 418.652,333.517 C421.657,333.536 423.371,332.878 425.982,331.661 C426.091,333.569 426.034,332.32 426.078,335.411 C426.027,349.696 420.163,372.829 409.389,383.195 C418.965,385.952 428.377,391.336 429.026,401.581 C429.026,413.456 416.959,423.083 402.074,423.083 C397.126,423.044 392.162,422.068 387.784,419.71 C383.45,422.223 378.407,422.885 373.493,423.083 C358.609,423.083 346.542,413.456 346.542,401.581 C346.945,393.666 351.844,391.657 357.758,386.938 C348.423,373.186 344.484,354.49 344.118,338.253 C344.118,307.845 355.125,283.194 368.701,283.194 C373.362,283.288 377.246,286.053 380.114,289.542 C384.329,284.992 389.565,282.053 395.811,281.773 L395.811,281.773 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"antenna\">\n      <g id=\"lhcb\">\n        <path d=\"M315.009,292.94 L340.166,292.94 C346.273,292.94 351.224,297.481 351.224,303.083 L351.224,370.767 C351.224,376.368 346.273,380.909 340.166,380.909 L315.009,380.909 C308.902,380.909 303.951,376.368 303.951,370.767 L303.951,303.083 C303.951,297.481 308.902,292.94 315.009,292.94 z\" fill=\"#8CC400\"/>\n        <path d=\"M315.009,292.94 L340.166,292.94 C346.273,292.94 351.224,297.481 351.224,303.083 L351.224,370.767 C351.224,376.368 346.273,380.909 340.166,380.909 L315.009,380.909 C308.902,380.909 303.951,376.368 303.951,370.767 L303.951,303.083 C303.951,297.481 308.902,292.94 315.009,292.94 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <g id=\"lhcb\">\n        <path d=\"M280.01,292.94 L305.167,292.94 C311.274,292.94 316.225,297.481 316.225,303.083 L316.225,370.767 C316.225,376.368 311.274,380.909 305.167,380.909 L280.01,380.909 C273.903,380.909 268.952,376.368 268.952,370.767 L268.952,303.083 C268.952,297.481 273.903,292.94 280.01,292.94 z\" fill=\"#8CC400\"/>\n        <path d=\"M280.01,292.94 L305.167,292.94 C311.274,292.94 316.225,297.481 316.225,303.083 L316.225,370.767 C316.225,376.368 311.274,380.909 305.167,380.909 L280.01,380.909 C273.903,380.909 268.952,376.368 268.952,370.767 L268.952,303.083 C268.952,297.481 273.903,292.94 280.01,292.94 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n    </g>\n    <g id=\"water-split\">\n      <text transform=\"matrix(1, 0, 0, 1, 352.14, 464.889)\">\n        <tspan x=\"-23.062\" y=\"8.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H₂O</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 421.816, 464.889)\">\n        <tspan x=\"-14.396\" y=\"8.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">O₂</tspan>\n      </text>\n      <g>\n        <path d=\"M353.376,448.164 C353.363,428.717 367.707,412.942 385.413,412.93 C400.189,412.92 412.638,423.889 416.362,438.821\" fill-opacity=\"0\" stroke=\"#3A658B\" stroke-width=\"3\"/>\n        <path d=\"M416.362,438.821 L411.854,436.551 L417.381,447.159 L420.192,435.532 z\" fill=\"#3A658B\" fill-opacity=\"1\" stroke=\"#3A658B\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 503.931, 492.677)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 384.586, 374.195)\" id=\"photosystem-ii-center\">\n      <tspan x=\"-10.509\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"14\" fill=\"#000000\">P</tspan>\n      <tspan x=\"-1.171\" y=\"4.5\" font-family=\"Arial-BoldMT\" font-size=\"7\" fill=\"#000000\">680</tspan>\n    </text>\n    <g id=\"cofactors\">\n      <text transform=\"matrix(1, 0, 0, 1, 371.868, 391.909)\">\n        <tspan x=\"-5.657\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Y</tspan>\n        <tspan x=\"1.013\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">z</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 398.541, 403.233)\">\n        <tspan x=\"-15.447\" y=\"2.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">CaMn₄</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 391.413, 317.33)\">\n        <tspan x=\"-5.89\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"1.888\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">B</tspan>\n      </text>\n      <path d=\"M382.041,400.106 L377.867,396.458\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M374.577,365.344 L367.782,356.562\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M364.772,344.205 L367.782,330.704\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <path d=\"M375.812,323.083 L384.362,319.051\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n      <text transform=\"matrix(1, 0, 0, 1, 365.733, 325.923)\">\n        <tspan x=\"-5.89\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Q</tspan>\n        <tspan x=\"1.888\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"6\" fill=\"#000000\">A</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 369.095, 352.397)\">\n        <tspan x=\"-11.898\" y=\"1.5\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Pheo</tspan>\n      </text>\n      <path d=\"M377.53,386.298 L383.103,381.544\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"light\">\n      <path d=\"M289.026,275.747 L271.702,255.981 L277.381,253.128 L263.72,229.837 L236.622,245.066 L260.584,261.862 L252.581,267.226 L275.612,283.728 L268.647,286.945 L305.822,313.819 L283.408,279.153 L289.026,275.747 z\" fill=\"#FFEC7F\"/>\n      <path d=\"M263.72,229.837 L277.381,253.128 L271.702,255.981 L289.026,275.747 L289.026,275.747 L283.408,279.153 L305.822,313.819 L268.647,286.945 L275.612,283.728 L252.581,267.226 L260.584,261.862 L236.622,245.066 L263.72,229.837 z M263.354,231.19 L238.497,245.159 L261.158,261.043 L262.353,261.881 L261.141,262.693 L254.336,267.253 L276.195,282.915 L277.591,283.915 L276.031,284.635 L270.618,287.136 L302.088,309.885 L282.569,279.696 L282.01,278.832 L282.89,278.298 L287.488,275.51 L270.949,256.641 L270.098,255.668 L271.253,255.088 L275.978,252.714 L263.354,231.19 z\" fill=\"#000000\"/>\n    </g>\n    <g id=\"label\">\n      <text transform=\"matrix(1, 0, 0, 1, 379.998, 574.538)\">\n        <tspan x=\"-69.445\" y=\"4.5\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Photosystem II</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/plastocyanin.svg":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/plastocyanin.svg ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"plastocyanin\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill=\"#5B9BD5\"/>\n      <path d=\"M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    </g>\n    <g id=\"cofactor\">\n      <text transform=\"matrix(1, 0, 0, 1, 774.896, 438.433)\">\n        <tspan x=\"-14.586\" y=\"5.378\" font-family=\"Arial,ArialMT\" font-size=\"10\" fill=\"#000000\">Cu²⁺</tspan>\n      </text>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 768.896, 480.233)\">\n      <tspan x=\"-14.586\" y=\"5.378\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">Pc</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/plastoquinone.svg":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/plastoquinone.svg ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"plastoquinone\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M519.983,354.984 L510.134,337.925 L519.983,320.865 L539.681,320.865 L549.53,337.925 L539.681,354.984 z\" fill=\"#FFE698\"/>\n      <path d=\"M519.983,354.984 L510.134,337.925 L519.983,320.865 L539.681,320.865 L549.53,337.925 L539.681,354.984 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 529.332, 390.225)\">\n      <tspan x=\"-45.271\" y=\"5.689\" font-family=\"Arial,ArialMT\" font-size=\"21\" fill=\"#000000\">PQ/PQH₂</tspan>\n    </text>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/proton-flux.svg":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/proton-flux.svg ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"proton-flux\" transform=\"translate(0, 0)\">\n    <g>\n      <g id=\"ps-ii-atp-synthase\">\n        <path d=\"M997.144,487.575 C918.689,503.493 853.657,513.312 766.726,513.312 C664.863,513.312 581.4,508.078 522.072,496.247\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M997.144,487.575 L995.242,492.251 L1005.374,485.892 L993.559,484.021 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g id=\"h2o_lumen\">\n        <path d=\"M489.463,462.261 C480.427,446.861 450.435,434.397 427.051,425.211\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M489.463,462.261 L484.632,460.797 L491.895,470.301 L492.672,458.365 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"atp-synthase\">\n      <g>\n        <path d=\"M1124.963,99.587 C1103.894,118.51 1091.082,134.839 1091.082,156.221 L1091.082,407.359 C1091.082,434.065 1067.677,456.142 1050.138,471.697\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M1124.963,99.587 L1125.626,104.591 L1131.28,94.05 L1120.089,98.274 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 1151.418, 85.829)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 1030.685, 480.747)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n    </g>\n    <g id=\"stroma-ps-ii\">\n      <g>\n        <path d=\"M415.571,253.347 C414.877,268.923 422.449,282.144 430.181,292.514\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M430.181,292.514 L425.149,292.917 L435.383,299.109 L431.745,287.714 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 420.743, 237.847)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n    </g>\n    <g id=\"stroma-b6f\">\n      <g>\n        <path d=\"M626.694,254.347 C627.388,269.923 619.816,283.144 612.084,293.514\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M612.084,293.514 L610.52,288.714 L606.882,300.109 L617.115,293.917 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 631.035, 238.847)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n    </g>\n    <g id=\"b6f-lumen\">\n      <g>\n        <path d=\"M628.978,366.195 C599.455,375.608 595.214,405.38 621.862,421.125\" fill-opacity=\"0\" stroke=\"#00BCFF\" stroke-width=\"3\"/>\n        <path d=\"M621.862,421.125 L617.513,423.689 L629.425,424.78 L621.168,416.126 z\" fill=\"#00BCFF\" fill-opacity=\"1\" stroke=\"#00BCFF\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 652.013, 433.79)\">\n        <tspan x=\"-13.729\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H⁺</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/ptox.svg":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/ptox.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"ptox\" transform=\"translate(0, 0)\">\n    <g id=\"shape\">\n      <path d=\"M529.832,302.301 C511.558,302.301 496.745,292.471 496.745,280.346 C496.745,268.22 511.558,258.39 529.832,258.39 C548.106,258.39 562.919,268.22 562.919,280.346 C562.919,292.471 548.106,302.301 529.832,302.301 z\" fill=\"#C2AAFF\"/>\n      <path d=\"M529.832,302.301 C511.558,302.301 496.745,292.471 496.745,280.346 C496.745,268.22 511.558,258.39 529.832,258.39 C548.106,258.39 562.919,268.22 562.919,280.346 C562.919,292.471 548.106,302.301 529.832,302.301 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n    </g>\n    <text transform=\"matrix(1, 0, 0, 1, 529.332, 279.846)\">\n      <tspan x=\"-24.341\" y=\"5.5\" font-family=\"Arial,ArialMT\" font-size=\"18\" fill=\"#000000\">PTOX</tspan>\n    </text>\n    <g id=\"reaction\">\n      <g>\n        <path d=\"M561.614,243.741 C551.06,257.538 541.669,265.828 529.576,265.828 C513.595,265.828 500.385,248.871 491.077,236.166\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M561.614,243.741 L563.345,248.483 L566.582,236.968 L556.571,243.515 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 490.177, 214.32)\">\n        <tspan x=\"-14.396\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">O₂</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 570.337, 214.32)\">\n        <tspan x=\"-23.062\" y=\"8\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">H₂O</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/quenching.svg":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/quenching.svg ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"quenching\" transform=\"translate(0, 0)\">\n    <g id=\"pmf\">\n      <g>\n        <path d=\"M134.204,442.013 C167.869,484.817 173.944,489.253 214.047,506.28 C248.338,520.839 363.007,515.226 393.063,515.933\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M134.204,442.013 L139.956,441.572 L128.283,434.456 L132.398,447.492 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M260.647,406.851 C273.605,452.142 303.979,490.827 345.682,509.239 C381.841,525.203 455.614,508.552 480.194,498.857\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"12,4\"/>\n        <path d=\"M260.647,406.851 L266.082,408.783 L258.306,397.54 L256.772,411.125 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"qi\">\n      <text transform=\"matrix(1, 0, 0, 1, 84.384, 180.776)\">\n        <tspan x=\"-10.008\" y=\"7.455\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">qI</tspan>\n      </text>\n      <g>\n        <path d=\"M114.6,163.212 L144.5,139.069\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"8,8\"/>\n        <path d=\"M114.6,163.212 L114.074,157.468 L107.131,169.244 L120.105,164.937 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n    </g>\n    <g id=\"qe\">\n      <g>\n        <path d=\"M205.418,405.643 L235.318,381.499\" fill-opacity=\"0\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-dasharray=\"8,8\"/>\n        <path d=\"M205.418,405.643 L204.892,399.898 L197.949,411.674 L210.923,407.367 z\" fill=\"#EF2D37\" fill-opacity=\"1\" stroke=\"#EF2D37\" stroke-width=\"4\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 181.616, 428.793)\">\n        <tspan x=\"-14.678\" y=\"7.455\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">qE</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/stroma.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/stroma.svg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <defs>\n    <linearGradient id=\"Gradient_1\" gradientUnits=\"userSpaceOnUse\" x1=\"700\" y1=\"0\" x2=\"700\" y2=\"296.004\">\n      <stop offset=\"0.566\" stop-color=\"#FFFFFF\" stop-opacity=\"1\"/>\n      <stop offset=\"1\" stop-color=\"#0070C4\"/>\n    </linearGradient>\n  </defs>\n  <g id=\"stroma\" transform=\"translate(0, 0)\">\n    <text transform=\"matrix(1, 0, 0, 1, 1355.338, 279.014)\">\n      <tspan x=\"-34.518\" y=\"7.212\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">stroma</tspan>\n    </text>\n    <path d=\"M-0,0 L1400,0 L1400,296.004 L-0,296.004 L-0,0 z\" fill=\"url(#Gradient_1)\" id=\"shape\" opacity=\"0.123\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/thylakoidmembrane.svg":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/thylakoidmembrane.svg ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"thylakoidmembrane\" transform=\"translate(0, 0)\">\n    <path d=\"M-0,296.004 L1400,296.004 L1400,376.004 L-0,376.004 L-0,296.004 z\" fill=\"#DBDBDB\"/>\n    <path d=\"M0.5,296.504 L1400.5,296.504\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n    <path d=\"M0.5,376.504 L1400.5,376.504\" fill-opacity=\"0\" stroke=\"#000000\" stroke-width=\"1\"/>\n  </g>\n</svg>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/svgs/vdx.svg":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/svgs/vdx.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0\" y=\"0\" width=\"1400\" height=\"600\" viewBox=\"0, 0, 1400, 600\">\n  <g id=\"vdx\" transform=\"translate(0, 0)\">\n    <g id=\"pathway\">\n      <g>\n        <path d=\"M67.486,315.033 C79.998,302.088 91.109,294.301 105.432,294.301 C124.28,294.301 139.86,310.091 150.838,321.922\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M67.486,315.033 L66.312,310.124 L61.772,321.191 L72.469,315.838 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M184.506,335.088 L216.647,335.088\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M216.647,335.088 L213.847,339.288 L225.047,335.088 L213.847,330.888 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <g>\n        <path d=\"M144.445,357.925 C131.933,370.871 120.823,378.657 106.499,378.657 C87.651,378.657 72.071,362.868 61.093,351.037\" fill-opacity=\"0\" stroke=\"#41719C\" stroke-width=\"3\"/>\n        <path d=\"M144.445,357.925 L145.619,362.835 L150.159,351.768 L139.462,357.121 z\" fill=\"#41719C\" fill-opacity=\"1\" stroke=\"#41719C\" stroke-width=\"3\" stroke-opacity=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 45.556, 335.979)\">\n        <tspan x=\"-8.004\" y=\"7.455\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">V</tspan>\n      </text>\n      <text transform=\"matrix(1, 0, 0, 1, 165.375, 335.979)\">\n        <tspan x=\"-7.33\" y=\"7.455\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">Z</tspan>\n      </text>\n    </g>\n    <g id=\"vde\">\n      <g>\n        <path d=\"M105.966,427.106 C87.692,427.106 72.878,417.276 72.878,405.151 C72.878,393.025 87.692,383.195 105.966,383.195 C124.239,383.195 139.053,393.025 139.053,405.151 C139.053,417.276 124.239,427.106 105.966,427.106 z\" fill=\"#A9D18E\"/>\n        <path d=\"M105.966,427.106 C87.692,427.106 72.878,417.276 72.878,405.151 C72.878,393.025 87.692,383.195 105.966,383.195 C124.239,383.195 139.053,393.025 139.053,405.151 C139.053,417.276 124.239,427.106 105.966,427.106 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 105.466, 404.651)\">\n        <tspan x=\"-24.674\" y=\"7.5\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">VDE</tspan>\n      </text>\n    </g>\n    <g id=\"ze\">\n      <g>\n        <path d=\"M105.966,291.597 C87.692,291.597 72.878,281.767 72.878,269.641 C72.878,257.516 87.692,247.686 105.966,247.686 C124.239,247.686 139.053,257.516 139.053,269.641 C139.053,281.767 124.239,291.597 105.966,291.597 z\" fill=\"#FFE698\"/>\n        <path d=\"M105.966,291.597 C87.692,291.597 72.878,281.767 72.878,269.641 C72.878,257.516 87.692,247.686 105.966,247.686 C124.239,247.686 139.053,257.516 139.053,269.641 C139.053,281.767 124.239,291.597 105.966,291.597 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 105.466, 269.141)\">\n        <tspan x=\"-15.334\" y=\"7.5\" font-family=\"Arial,ArialMT\" font-size=\"24\" fill=\"#000000\">ZE</tspan>\n      </text>\n    </g>\n    <g id=\"psbs\">\n      <g id=\"psbs\">\n        <path d=\"M245.618,293.94 L270.775,293.94 C276.882,293.94 281.833,298.481 281.833,304.083 L281.833,371.767 C281.833,377.368 276.882,381.909 270.775,381.909 L245.618,381.909 C239.511,381.909 234.56,377.368 234.56,371.767 L234.56,304.083 C234.56,298.481 239.511,293.94 245.618,293.94 z\" fill=\"#6C9700\"/>\n        <path d=\"M245.618,293.94 L270.775,293.94 C276.882,293.94 281.833,298.481 281.833,304.083 L281.833,371.767 C281.833,377.368 276.882,381.909 270.775,381.909 L245.618,381.909 C239.511,381.909 234.56,377.368 234.56,371.767 L234.56,304.083 C234.56,298.481 239.511,293.94 245.618,293.94 z\" fill-opacity=\"0\" stroke=\"#3B3838\" stroke-width=\"1\"/>\n      </g>\n      <text transform=\"matrix(1, 0, 0, 1, 257.822, 367.077)\">\n        <tspan x=\"-16.731\" y=\"4.073\" font-family=\"Arial,ArialMT\" font-size=\"14\" fill=\"#000000\">PsbS</tspan>\n      </text>\n    </g>\n  </g>\n</svg>\n");

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
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ "./node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/settings */ "./src/constants/settings.js");
/* harmony import */ var _constants_references__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/references */ "./src/constants/references.js");
/* harmony import */ var _constants_presets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/presets */ "./src/constants/presets.js");
/* harmony import */ var _components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/thylakoidmembrane */ "./src/components/thylakoidmembrane.js");
/* harmony import */ var _components_lumen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/lumen */ "./src/components/lumen.js");
/* harmony import */ var _components_stroma__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/stroma */ "./src/components/stroma.js");
/* harmony import */ var _components_photosystem_ii__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/photosystem-ii */ "./src/components/photosystem-ii.js");
/* harmony import */ var _components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/photosystem-ii-repair */ "./src/components/photosystem-ii-repair.js");
/* harmony import */ var _components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cytochrome-b6f */ "./src/components/cytochrome-b6f.js");
/* harmony import */ var _components_plastocyanin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/plastocyanin */ "./src/components/plastocyanin.js");
/* harmony import */ var _components_photosystem_i__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/photosystem-i */ "./src/components/photosystem-i.js");
/* harmony import */ var _components_atp_synthase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/atp-synthase */ "./src/components/atp-synthase.js");
/* harmony import */ var _components_vdx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/vdx */ "./src/components/vdx.js");
/* harmony import */ var _components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cytochrome-c6 */ "./src/components/cytochrome-c6.js");
/* harmony import */ var _components_plastoquinone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/plastoquinone */ "./src/components/plastoquinone.js");
/* harmony import */ var _components_ferredoxin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ferredoxin */ "./src/components/ferredoxin.js");
/* harmony import */ var _components_fnr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/fnr */ "./src/components/fnr.js");
/* harmony import */ var _components_electron_flux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/electron-flux */ "./src/components/electron-flux.js");
/* harmony import */ var _components_proton_flux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/proton-flux */ "./src/components/proton-flux.js");
/* harmony import */ var _components_ptox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ptox */ "./src/components/ptox.js");
/* harmony import */ var _components_ion_channels__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/ion-channels */ "./src/components/ion-channels.js");
/* harmony import */ var _components_ion_flux__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/ion-flux */ "./src/components/ion-flux.js");
/* harmony import */ var _components_quenching__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/quenching */ "./src/components/quenching.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





























var _menu = /*#__PURE__*/new WeakMap();
var _layers = /*#__PURE__*/new WeakMap();
var _settings = /*#__PURE__*/new WeakMap();
var _initialSettings = /*#__PURE__*/new WeakMap();
var _componentSettings = /*#__PURE__*/new WeakMap();
var _presets = /*#__PURE__*/new WeakMap();
var _getNestedChanges = /*#__PURE__*/new WeakSet();
var _settingsJSON = /*#__PURE__*/new WeakSet();
var _elementInputCheck = /*#__PURE__*/new WeakSet();
var _elementInputSwitch = /*#__PURE__*/new WeakSet();
var _elementInputText = /*#__PURE__*/new WeakSet();
var _elementInputColor = /*#__PURE__*/new WeakSet();
var _elementInputRange = /*#__PURE__*/new WeakSet();
var Photosynthesis = /*#__PURE__*/function () {
  function Photosynthesis(width, height) {
    _classCallCheck(this, Photosynthesis);
    _classPrivateMethodInitSpec(this, _elementInputRange);
    _classPrivateMethodInitSpec(this, _elementInputColor);
    _classPrivateMethodInitSpec(this, _elementInputText);
    _classPrivateMethodInitSpec(this, _elementInputSwitch);
    _classPrivateMethodInitSpec(this, _elementInputCheck);
    _classPrivateMethodInitSpec(this, _settingsJSON);
    _classPrivateMethodInitSpec(this, _getNestedChanges);
    _classPrivateFieldInitSpec(this, _menu, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _layers, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _settings, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _initialSettings, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _componentSettings, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _presets, {
      writable: true,
      value: void 0
    });
    this.width = width || 1400;
    this.height = height || 600;
    _classPrivateFieldSet(this, _componentSettings, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_constants_settings__WEBPACK_IMPORTED_MODULE_6__["default"]));
    _classPrivateFieldSet(this, _initialSettings, _classPrivateMethodGet(this, _settingsJSON, _settingsJSON2).call(this));
    _classPrivateFieldSet(this, _settings, _classPrivateFieldGet(this, _initialSettings));
    _classPrivateFieldSet(this, _menu, _constants_settings__WEBPACK_IMPORTED_MODULE_6__.menu || {});
    _classPrivateFieldSet(this, _layers, _constants_settings__WEBPACK_IMPORTED_MODULE_6__.layers || []);
    _classPrivateFieldSet(this, _presets, _constants_presets__WEBPACK_IMPORTED_MODULE_8__["default"]);
    this.references = _constants_references__WEBPACK_IMPORTED_MODULE_7__["default"];
  }
  _createClass(Photosynthesis, [{
    key: "build",
    value: function build() {
      var draw = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().size(this.width, this.height);

      // Set viewbox
      draw.viewbox("0 0 ".concat(this.width, " ").concat(this.height));

      // Apply options
      for (var i in _classPrivateFieldGet(this, _layers)) {
        var key = _classPrivateFieldGet(this, _layers)[i];
        if (this.settings[key] && this.settings[key].show) {
          var options = _objectSpread({}, this.settings[key]);
          switch (key) {
            case 'stroma':
              draw.svg((0,_components_stroma__WEBPACK_IMPORTED_MODULE_11__["default"])(_objectSpread({}, options)));
              break;
            case 'thylakoidmembrane':
              draw.svg((0,_components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_9__["default"])(_objectSpread({}, options)));
              break;
            case 'lumen':
              draw.svg((0,_components_lumen__WEBPACK_IMPORTED_MODULE_10__["default"])(_objectSpread({}, options)));
              break;
            case 'plastoquinone':
              draw.svg((0,_components_plastoquinone__WEBPACK_IMPORTED_MODULE_20__["default"])(_objectSpread({}, options)));
              break;
            case 'plastocyanin':
              draw.svg((0,_components_plastocyanin__WEBPACK_IMPORTED_MODULE_15__["default"])(_objectSpread({}, options)));
              break;
            case 'cytochrome-c6':
              draw.svg((0,_components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_19__["default"])(_objectSpread({}, options)));
              break;
            case 'photosystem-i':
              draw.svg((0,_components_photosystem_i__WEBPACK_IMPORTED_MODULE_16__["default"])(_objectSpread({}, options)));
              break;
            case 'atpsynthase':
              draw.svg((0,_components_atp_synthase__WEBPACK_IMPORTED_MODULE_17__["default"])(_objectSpread({}, options)));
              break;
            case 'photosystem-ii':
              draw.svg((0,_components_photosystem_ii__WEBPACK_IMPORTED_MODULE_12__["default"])(_objectSpread({}, options)));
              break;
            case 'photosystem-ii-repair':
              draw.svg((0,_components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_13__["default"])(_objectSpread({}, options)));
              break;
            case 'cytochrome-b6f':
              draw.svg((0,_components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_14__["default"])(_objectSpread({}, options)));
              break;
            case 'vdx':
              draw.svg((0,_components_vdx__WEBPACK_IMPORTED_MODULE_18__["default"])(_objectSpread({}, options)));
              break;
            case 'ferredoxin':
              draw.svg((0,_components_ferredoxin__WEBPACK_IMPORTED_MODULE_21__["default"])(_objectSpread({}, options)));
              break;
            case 'fnr':
              draw.svg((0,_components_fnr__WEBPACK_IMPORTED_MODULE_22__["default"])(_objectSpread({}, options)));
              break;
            case 'electron-flux':
              draw.svg((0,_components_electron_flux__WEBPACK_IMPORTED_MODULE_23__["default"])(_objectSpread({}, options)));
              break;
            case 'proton-flux':
              draw.svg((0,_components_proton_flux__WEBPACK_IMPORTED_MODULE_24__["default"])(_objectSpread({}, options)));
              break;
            case 'ptox':
              draw.svg((0,_components_ptox__WEBPACK_IMPORTED_MODULE_25__["default"])(_objectSpread({}, options)));
              break;
            case 'ion-channels':
              draw.svg((0,_components_ion_channels__WEBPACK_IMPORTED_MODULE_26__["default"])(_objectSpread({}, options)));
              break;
            case 'ion-flux':
              draw.svg((0,_components_ion_flux__WEBPACK_IMPORTED_MODULE_27__["default"])(_objectSpread({}, options)));
              break;
            case 'quenching':
              draw.svg((0,_components_quenching__WEBPACK_IMPORTED_MODULE_28__["default"])(_objectSpread({}, options)));
              break;
          }
        }
      }

      // Final SVG
      return draw.svg();
    }
  }, {
    key: "settingsSave",
    get: function get() {
      var current = this.settings;
      var initial = _classPrivateFieldGet(this, _initialSettings);
      return _classPrivateMethodGet(this, _getNestedChanges, _getNestedChanges2).call(this, current, initial);
    }
  }, {
    key: "settings",
    get: function get() {
      return _classPrivateFieldGet(this, _settings);
    },
    set: function set(obj) {
      _classPrivateFieldSet(this, _settings, lodash_merge__WEBPACK_IMPORTED_MODULE_4___default()(_classPrivateFieldGet(this, _settings), obj));
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet(this, _settings, lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_classPrivateFieldGet(this, _initialSettings)));
    }
  }, {
    key: "settingsHTML",
    value: function settingsHTML() {
      var _this = this;
      var elCount = 0;
      var html = '<form id="settingsform">';
      var _loop = function _loop(header) {
        var uid = "ps-" + crypto.randomUUID();
        var accordionid = "ps-" + crypto.randomUUID();
        html += "<div style=\"cursor:pointer;\" class=\"small fw-bold mt-3 mb-2 d-flex justify-content-between align-items-center\" data-bs-toggle=\"collapse\" data-bs-target=\"#".concat(uid, "\" aria-controls=\"Toggle ").concat(header, "\">\n        ").concat(header, "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-expand me-1\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z\"/>\n        </svg>\n      </div>");
        html += "<div class=\"collapse ".concat(!elCount ? "show" : "", "\" id=\"").concat(uid, "\" data-bs-parent=\"#settingsform\">");
        // data-bs-parent="#selector"
        html += "<div class=\"accordion\" id=\"".concat(accordionid, "\">");
        var _loop2 = function _loop2(i) {
          var idx = _classPrivateFieldGet(_this, _componentSettings).findIndex(function (itm) {
            return itm.id == _classPrivateFieldGet(_this, _menu)[header][i];
          });
          if (idx == -1) return "continue";
          if (_classPrivateFieldGet(_this, _componentSettings)[idx].show === undefined && _classPrivateFieldGet(_this, _componentSettings)[idx].options === undefined) return "continue";
          html += "<div class=\"accordion-item\">\n          <h2 class=\"accordion-header\" id=\"heading".concat(idx, "\">\n            <button class=\"accordion-button collapsed ps-5\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapse").concat(idx, "\" aria-expanded=\"").concat(elCount === 0 ? 'true' : 'false', "\" aria-controls=\"collapse").concat(idx, "\">\n            ").concat(_classPrivateFieldGet(_this, _componentSettings)[idx].headerTitle, "\n            </button>\n            ").concat(_classPrivateMethodGet(_this, _elementInputSwitch, _elementInputSwitch2).call(_this, [_classPrivateFieldGet(_this, _componentSettings)[idx].id, 'show'].join('.'), {
            value: _classPrivateFieldGet(_this, _componentSettings)[idx].show,
            label: '',
            disabled: _classPrivateFieldGet(_this, _componentSettings)[idx].disabled || false
          }), "\n          </h2>\n          <div id=\"collapse").concat(idx, "\" class=\"accordion-collapse collapse\" aria-labelledby=\"heading").concat(idx, "\" data-bs-parent=\"#").concat(accordionid, "\">\n            <div class=\"accordion-body\">");
          if (_classPrivateFieldGet(_this, _componentSettings)[idx].options !== undefined && _classPrivateFieldGet(_this, _componentSettings)[idx].options.length > 0) {
            for (var _i in _classPrivateFieldGet(_this, _componentSettings)[idx].options) {
              var option = _classPrivateFieldGet(_this, _componentSettings)[idx].options[_i];
              var name = [_classPrivateFieldGet(_this, _componentSettings)[idx].id, option.name].join('.');
              switch (option.type) {
                case 'color':
                  html += _classPrivateMethodGet(_this, _elementInputColor, _elementInputColor2).call(_this, name, _objectSpread({}, option));
                  break;
                case 'text':
                  html += _classPrivateMethodGet(_this, _elementInputText, _elementInputText2).call(_this, name, _objectSpread({}, option));
                  break;
                case 'check':
                  html += _classPrivateMethodGet(_this, _elementInputCheck, _elementInputCheck2).call(_this, name, _objectSpread({}, option));
                  break;
                case 'range':
                  html += _classPrivateMethodGet(_this, _elementInputRange, _elementInputRange2).call(_this, name, _objectSpread({}, option));
                  break;
                case 'separator':
                  html += "<div class=\"separator\"><hr></div>";
                  break;
              }
            }
          } else {
            html += "<div class=\"form-text\">No settings available</div>";
          }
          html += "</div>\n          </div>\n        </div>";
          elCount++;
        };
        for (var i in _classPrivateFieldGet(_this, _menu)[header]) {
          var _ret = _loop2(i);
          if (_ret === "continue") continue;
        }
        html += "</div>";
        html += "</div>";
      };
      for (var header in _classPrivateFieldGet(this, _menu)) {
        _loop(header);
      }
      html += '</form>';
      return html;
    }
  }, {
    key: "applyPreset",
    value: function applyPreset(id) {
      var _get;
      _classPrivateFieldSet(this, _settings, ((_get = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(_classPrivateFieldGet(this, _presets), id)) === null || _get === void 0 ? void 0 : _get.settings) || {});
    }
  }, {
    key: "presets",
    get: function get() {
      return _classPrivateFieldGet(this, _presets);
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
      var textblocks = {};
      var textblocksArray = [];
      for (var i in _classPrivateFieldGet(this, _layers)) {
        var key = _classPrivateFieldGet(this, _layers)[i];
        if (this.settings[key] && this.settings[key].show) {
          switch (key) {
            case 'stroma':
              textblocksArray.push((0,_components_stroma__WEBPACK_IMPORTED_MODULE_11__.legend)());
              break;
            case 'thylakoidmembrane':
              textblocksArray.push((0,_components_thylakoidmembrane__WEBPACK_IMPORTED_MODULE_9__.legend)());
              break;
            case 'lumen':
              textblocksArray.push((0,_components_lumen__WEBPACK_IMPORTED_MODULE_10__.legend)());
              break;
            case 'plastoquinone':
              textblocksArray.push((0,_components_plastoquinone__WEBPACK_IMPORTED_MODULE_20__.legend)());
              break;
            case 'plastocyanin':
              textblocksArray.push((0,_components_plastocyanin__WEBPACK_IMPORTED_MODULE_15__.legend)());
              break;
            case 'cytochrome-c6':
              textblocksArray.push((0,_components_cytochrome_c6__WEBPACK_IMPORTED_MODULE_19__.legend)());
              break;
            case 'photosystem-i':
              textblocksArray.push((0,_components_photosystem_i__WEBPACK_IMPORTED_MODULE_16__.legend)());
              break;
            case 'atpsynthase':
              textblocksArray.push((0,_components_atp_synthase__WEBPACK_IMPORTED_MODULE_17__.legend)());
              break;
            case 'photosystem-ii':
              textblocksArray.push((0,_components_photosystem_ii__WEBPACK_IMPORTED_MODULE_12__.legend)());
              break;
            case 'photosystem-ii-repair':
              textblocksArray.push((0,_components_photosystem_ii_repair__WEBPACK_IMPORTED_MODULE_13__.legend)());
              break;
            case 'cytochrome-b6f':
              textblocksArray.push((0,_components_cytochrome_b6f__WEBPACK_IMPORTED_MODULE_14__.legend)());
              break;
            case 'vdx':
              textblocksArray.push((0,_components_vdx__WEBPACK_IMPORTED_MODULE_18__.legend)());
              break;
            case 'ferredoxin':
              textblocksArray.push((0,_components_ferredoxin__WEBPACK_IMPORTED_MODULE_21__.legend)());
              break;
            case 'fnr':
              textblocksArray.push((0,_components_fnr__WEBPACK_IMPORTED_MODULE_22__.legend)());
              break;
            case 'electron-flux':
              textblocksArray.push((0,_components_electron_flux__WEBPACK_IMPORTED_MODULE_23__.legend)());
              break;
            case 'proton-flux':
              textblocksArray.push((0,_components_proton_flux__WEBPACK_IMPORTED_MODULE_24__.legend)());
              break;
            case 'ptox':
              textblocksArray.push((0,_components_ptox__WEBPACK_IMPORTED_MODULE_25__.legend)());
              break;
            case 'ion-channels':
              textblocksArray.push((0,_components_ion_channels__WEBPACK_IMPORTED_MODULE_26__.legend)());
              break;
            case 'ion-flux':
              textblocksArray.push((0,_components_ion_flux__WEBPACK_IMPORTED_MODULE_27__.legend)());
              break;
            case 'quenching':
              textblocksArray.push((0,_components_quenching__WEBPACK_IMPORTED_MODULE_28__.legend)());
              break;
          }
        }
      }
      return "<em>The photosynthetic machinery in higher plants and most green algae</em>.\n    ".concat(textblocksArray.join(' '));
    }
  }]);
  return Photosynthesis;
}();
function _getNestedChanges2(obj1, obj2) {
  var changes = {};
  for (var key in obj2) {
    var val1 = obj1 === null || obj1 === void 0 ? void 0 : obj1[key];
    var val2 = obj2[key];
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default()(val1) && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default()(val2)) {
      // Recursively check nested objects
      var nestedChanges = _classPrivateMethodGet(this, _getNestedChanges, _getNestedChanges2).call(this, val1, val2);
      if (Object.keys(nestedChanges).length > 0) {
        changes[key] = nestedChanges;
      }
    } else if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(val1, val2)) {
      changes[key] = val2;
    }
  }
  return changes;
}
function _settingsJSON2() {
  var s = {};
  for (var i in _classPrivateFieldGet(this, _componentSettings)) {
    s[_classPrivateFieldGet(this, _componentSettings)[i].id] = {};
    for (var _i2 = 0, _Object$entries = Object.entries(_classPrivateFieldGet(this, _componentSettings)[i]); _i2 < _Object$entries.length; _i2++) {
      var a = _Object$entries[_i2];
      if (!['id', 'disabled', 'options', 'headerTitle'].includes(a[0])) s[_classPrivateFieldGet(this, _componentSettings)[i].id][a[0]] = a[1];
      if (a[0] === 'options') {
        var _iterator = _createForOfIteratorHelper(a[1]),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var b = _step.value;
            if (b.name) s[_classPrivateFieldGet(this, _componentSettings)[i].id][b.name] = b.value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }
  return s;
}
function _elementInputCheck2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'check';
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? true : _ref$value,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'label' : _ref$label;
  var id = "ps-" + crypto.randomUUID();
  return "<div class=\"form-check mb-1\">\n      <input class=\"form-check-input\" name=\"".concat(name, "\" type=\"checkbox\" value=\"", true, "\" id=\"").concat(id, "\" ").concat(value ? 'checked' : '', ">\n      <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(label, "</label>\n    </div>");
}
function _elementInputSwitch2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'switch';
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref2$value = _ref2.value,
    value = _ref2$value === void 0 ? true : _ref2$value,
    _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? 'label' : _ref2$label,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  var id = "ps-" + crypto.randomUUID();
  return "<div class=\"form-check form-switch fs-6\" style=\"position:relative; margin:-2.1rem .5rem .6rem .5rem; z-index:10; width:2em;\">\n    <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" name=\"".concat(name, "\" value=\"", true, "\" id=\"").concat(id, "\" ").concat(value ? 'checked' : '', " ").concat(disabled ? 'disabled' : '', " switch>\n    <label class=\"form-check-label\" for=\"").concat(id, "\">").concat(label, "</label>\n  </div>");
}
function _elementInputText2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'text';
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref3$value = _ref3.value,
    value = _ref3$value === void 0 ? 'Text' : _ref3$value,
    _ref3$label = _ref3.label,
    label = _ref3$label === void 0 ? 'label' : _ref3$label;
  var id = "ps-" + crypto.randomUUID();
  return "<div class=\"mb-1\">\n      <label for=\"".concat(id, "\" class=\"form-label\">").concat(label, "</label>\n      <input type=\"text\" class=\"form-control form-control\" name=\"").concat(name, "\" id=\"").concat(id, "\" placeholder=\"").concat(value, "\" value=\"").concat(value, "\">\n    </div>");
}
function _elementInputColor2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'color';
  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref4$value = _ref4.value,
    value = _ref4$value === void 0 ? '#000000' : _ref4$value,
    _ref4$label = _ref4.label,
    label = _ref4$label === void 0 ? 'label' : _ref4$label;
  var id = "ps-" + crypto.randomUUID();
  return "<div class=\"d-flex\">\n      <input type=\"color\" class=\"form-control form-control-color\" name=\"".concat(name, "\" id=\"").concat(id, "\" value=\"").concat(value, "\" title=\"Choose ").concat(label, " color\">\n      <label for=\"").concat(id, "\" class=\"col-sm-9 col-form-label\">").concat(label, "</label>\n    </div>");
}
function _elementInputRange2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'range';
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref5$value = _ref5.value,
    value = _ref5$value === void 0 ? -1 : _ref5$value,
    _ref5$label = _ref5.label,
    label = _ref5$label === void 0 ? 'label' : _ref5$label,
    _ref5$step = _ref5.step,
    step = _ref5$step === void 0 ? 1 : _ref5$step,
    _ref5$min = _ref5.min,
    min = _ref5$min === void 0 ? 0 : _ref5$min,
    _ref5$max = _ref5.max,
    max = _ref5$max === void 0 ? 1 : _ref5$max;
  var id = "ps-" + crypto.randomUUID();
  return "<div class=\"mt-1\">\n    <label for=\"".concat(id, "\" class=\"form-label\" style=\"margin-bottom:-1.5rem\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi\" viewBox=\"0 0 16 16\">\n        <path d=\"M8 1.99911C7.72386 1.99911 7.5 2.22296 7.5 2.49911L7.5 8.29211L5.354 6.14511C5.15849 5.9496 4.84151 5.9496 4.646 6.14511C4.45049 6.34062 4.45049 6.6576 4.646 6.85311L7.646 9.85311C7.7398 9.94715 7.86717 10 8 10C8.13283 10 8.2602 9.94715 8.354 9.85311L11.354 6.85311C11.5495 6.6576 11.5495 6.34062 11.354 6.14511C11.1585 5.9496 10.8415 5.9496 10.646 6.14511L8.5 8.29211L8.5 2.49911C8.5 2.22296 8.27614 1.99911 8 1.99911ZM1 12.5C1 12.2239 1.22386 12 1.5 12L14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13L1.5 13C1.22386 13 1 12.7761 1 12.5Z\" fill=\"#000000\" fill-rule=\"nonzero\" opacity=\"1\" stroke=\"none\"/>\n      </svg>\n      ").concat(label, "\n    </label>\n    <input type=\"range\" class=\"form-range\" name=\"").concat(name, "\" id=\"").concat(id, "\" value=\"").concat(value, "\" min=\"").concat(min, "\" max=\"").concat(max, "\" step=\"").concat(step, "\">      \n    </div>");
}

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=photosynthesis.js.map