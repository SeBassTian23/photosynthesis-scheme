/**
 * FNR
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/fnr.svg';

const fnr = ({ reaction = true, color = '#EECC00', label = true, position = true } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  if (color) {
    let shape = draw.findOne('#fnr #shape path');
    shape.fill(color);
  }

  if (!reaction) {
    let shape = draw.findOne('#fnr #reaction');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#fnr > text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#fnr');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default fnr;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#fnr');

  return {
    "id": "fnr",
    "headerTitle": "FNR",
    "show": true,
    "options": [
      { "type": "check", "name": "reaction", "value": true, "label": "Reaction" },
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "color", "name": "color", "value": "#EECC00", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `The Ferredoxin NADP⁺ oxidoreductase (FNR) picks up an electron from Fd and reduces NADP⁺ to NADPH.`
}