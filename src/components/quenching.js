/**
 * Quenching
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/quenching.svg';

const quenching = ({ qe = true, qi = true, pmf = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  // Add modifications here
  if (!qe) {
    let group = draw.findOne('#quenching #qe');
    group.opacity(0);
  }

  if (!qi) {
    let group = draw.findOne('#quenching #qi');
    group.opacity(0);
  }

  if (!pmf) {
    let group = draw.findOne('#quenching #pmf');
    group.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#quenching');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default quenching;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#quenching');

  return {
    "id": "quenching",
    "headerTitle": "Quenching",
    "show": false,
    "options": [
      { "type": "check", "name": "qe", "value": true, "label": "qE" },
      { "type": "check", "name": "qi", "value": true, "label": "qI" },
      { "type": "check", "name": "pmf", "value": true, "label": "<em>pmf</em>" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `The red, dashed arrows represent a subset of possible quenching mechanisms including qE and qI as well as the induction of qE through lumen acidification.`
}