/**
 * Stroma
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/stroma.svg';

const stroma = ({ color = '#0070C4', label = 'stroma', showLabel = true } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  let defsGradient = draw.defs().find('#Gradient_1 stop');
  defsGradient.each((stop) => {
    if (stop.attr('offset') == 1)
      stop.attr('stop-color', color);
  })

  let tspan = draw.findOne('#stroma tspan');
  tspan.text(label);

  if (!showLabel) {
    tspan = draw.findOne('#stroma text');
    tspan.opacity(0);
  }

  return draw.findOne('svg').svg(false);
}

export default stroma;

export const settings = () => {
  return {
    "id": "stroma",
    "headerTitle": "Stroma",
    "show": true,
    "options": [
      { "type": "text", "name": "label", "value": "stroma", "label": "Label" },
      { "type": "check", "name": "showLabel", "value": true, "label": "Label" },
      { "type": "color", "name": "color", "value": "#0070C4", "label": "Background Gradient" },
    ]
  }
}

export const legend = () => {
  return `The stroma is the space between the thylakoid membrane and the chloroplast envelope.`
}