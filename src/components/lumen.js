/**
 * Lumen
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="lumen" transform="translate(0, 0)">
    <path d="M-0,376.004 L1400,376.004 L1400,600 L-0,600 L-0,376.004 z" fill="#FFE5E5"/>
    <text transform="matrix(1, 0, 0, 1, 1358.84, 392.945)">
      <tspan x="-30.04" y="7.212" font-family="Arial,ArialMT" font-size="24" fill="#000000">lumen</tspan>
    </text>
  </g>
</svg>`;


const lumen = ({ color = '#FFE5E5', label = 'lumen', showLabel = true } = {}) => {

  let draw = SVG();
  draw.svg(el);

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