/**
 * Cytochrome c₆
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/cytochrome-c6.svg';

const cytochromeC6 = ({ color = '#FF2B2B', cofactor = false, label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  // Add modifications here
  let path = draw.findOne('#cytochrome-c6 #shape path');
  path.fill(color);

  if (!cofactor) {
    let shape = draw.findOne('#cytochrome-c6 #cofactor');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#cytochrome-c6 text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#cytochrome-c6');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default cytochromeC6;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#cytochrome-c6');

  return {
    "id": "cytochrome-c6",
    "headerTitle": "Cytochrome c₆",
    "show": false,
    "options": [
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "check", "name": "cofactor", "value": false, "label": "Cofactor" },
      { "type": "color", "name": "color", "value": "#FF2B2B", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Cytochrome c₆ (Cyt c₆) is a small, heme (Feᴵᴵ) binding, luminal protein, transferring electrons from cytochrome <em>f</em> to P₇₀₀.`
}
