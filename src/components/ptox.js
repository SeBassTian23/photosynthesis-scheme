/**
 * PTOX
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/ptox.svg';

const ptox = ({ reaction = true, color = '#C2AAFF', position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  if (color) {
    let shape = draw.findOne('#ptox #shape path');
    shape.fill(color);
  }

  if (!reaction) {
    let shape = draw.findOne('#ptox #reaction');
    shape.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#ptox');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default ptox;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#ptox');

  return {
    "id": "ptox",
    "headerTitle": "PTOX",
    "show": false,
    "options": [
      { "type": "check", "name": "reaction", "value": true, "label": "Reaction" },
      { "type": "color", "name": "color", "value": "#C2AAFF", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400-move.width() },
    ]
  }
}

export const legend = () => {
  return `The luminal plastid terminal oxidase (PTOX) can act as an electron sink by reducing oxygen (O₂) to water (H₂O).`
}