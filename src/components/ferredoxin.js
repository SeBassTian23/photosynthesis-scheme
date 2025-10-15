/**
 * Ferredoxin
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/ferredoxin.svg';

const ferredoxin = ({ color = '#A08C79', label = true, position = true } = {}) => {
  let draw = SVG();

  draw.svg(svgContent);

  if (color) {
    let shape = draw.findOne('#ferredoxin path');
    shape.fill(color);
  }

  if (!label) {
    let text = draw.findOne('#ferredoxin text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#ferredoxin');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default ferredoxin;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#ferredoxin');

  return {
    "id": "ferredoxin",
    "headerTitle": "Ferredoxin",
    "show": true,
    "options": [
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "color", "name": "color", "value": "#A08C79", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Ferredoxin (Fd) binds to the stromal acceptor side of PSI where it is reduced and, during linear electron flow, the electron is transferred onto ferredoxin NADP⁺ oxidoreductase (FNR).`
}