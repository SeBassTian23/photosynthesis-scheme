/**
 * Stroma
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <defs>
    <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="700" y1="0" x2="700" y2="296.004">
      <stop offset="0.566" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#0070C4"/>
    </linearGradient>
  </defs>
  <g id="stroma" transform="translate(0, 0)">
    <text transform="matrix(1, 0, 0, 1, 1355.338, 279.014)">
      <tspan x="-34.518" y="7.212" font-family="ArialMT" font-size="24" fill="#000000">stroma</tspan>
    </text>
    <path d="M-0,0 L1400,0 L1400,296.004 L-0,296.004 L-0,0 z" fill="url(#Gradient_1)" id="shape" opacity="0.123"/>
  </g>
</svg>`;


const stroma = ({ fill = 'transparent', label = 'stroma', showLabel = true } = {}) => {

  let draw = SVG();
  draw.svg(el);

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
    ]
  }
}

export const legend = () => {
  return ``
}