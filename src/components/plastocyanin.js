/**
 * Plastocyanin
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/plastocyanin.svg';

const plastocyanin = ({ color = '#5B9BD5', cofactor = false, label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  // Add modifications here
  let path = draw.findOne('#plastocyanin #shape path');
  path.fill(color);

  if (!cofactor) {
    let shape = draw.findOne('#plastocyanin #cofactor');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#plastocyanin > text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#plastocyanin');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default plastocyanin;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#plastocyanin');

  return {
    "id": "plastocyanin",
    "headerTitle": "Plastocyanin",
    "show": true,
    "options": [
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "check", "name": "cofactor", "value": false, "label": "Cofactor" },
      { "type": "color", "name": "color", "value": "#5B9BD5", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Plastocyanin (Pc) is a small copper (Cu²⁺) containing luminal protein that transfers electrons from cytochrome <em>f</em> to P₇₀₀.`
}