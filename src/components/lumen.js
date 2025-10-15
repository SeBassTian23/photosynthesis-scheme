/**
 * Lumen
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/lumen.svg';

const lumen = ({ color = '#FFE5E5', label = 'lumen', showLabel = true } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  let path = draw.findOne('#lumen path');
  path.fill(color)

  let tspan = draw.findOne('#lumen tspan');
  tspan.text(label);

  if (!showLabel) {
    tspan = draw.findOne('#lumen text');
    tspan.opacity(0);
  }

  let op = draw.findOne('#lumen path')
  op.animate().transform({ rotation: 45 }, true)

  return draw.findOne('svg').svg(false);
}

export default lumen;

export const settings = () => {
  return {
    "id": "lumen",
    "headerTitle": "Lumen",
    "show": true,
    "options": [
      { "type": "text", "name": "label", "value": "lumen", "label": "Label" },
      { "type": "check", "name": "showLabel", "value": true, "label": "Label" },
      { "type": "color", "name": "color", "value": "#FFE5E5", "label": "Background" },
    ]
  }
}

export const legend = () => {
  return `The lumen is enclosed by the thylakoid membrane.`
}