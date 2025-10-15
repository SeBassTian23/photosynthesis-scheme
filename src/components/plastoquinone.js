/**
 * Plastoquinone
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/plastoquinone.svg';

const plastoquinone = ({ color = '#FFE698', label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  // Add modifications here
  let path = draw.findOne('#plastoquinone #shape path');
  path.fill(color);

  if (!label) {
    let text = draw.findOne('#plastoquinone text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#plastoquinone');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default plastoquinone;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#plastoquinone');

  return {
    "id": "plastoquinone",
    "headerTitle": "Plastoquinone",
    "show": true,
    "options": [
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "color", "name": "color", "value": "#FFE698", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Plastoquinone (PQ) is reduced to plastoquinol (PQH₂) at the Qʙ side of PSII. The electrons are shuttled to the cytochrome <em>b₆f</em> complex.`
}