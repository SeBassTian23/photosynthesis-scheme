/**
 * Plastoquinone
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="plastoquinone" transform="translate(0, 0)">
    <g id="shape">
      <path d="M519.983,354.984 L510.134,337.925 L519.983,320.865 L539.681,320.865 L549.53,337.925 L539.681,354.984 z" fill="#FFE698"/>
      <path d="M519.983,354.984 L510.134,337.925 L519.983,320.865 L539.681,320.865 L549.53,337.925 L539.681,354.984 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
    </g>
    <text transform="matrix(1, 0, 0, 1, 529.332, 390.225)">
      <tspan x="-45.271" y="5.689" font-family="ArialMT" font-size="21" fill="#000000">PQ/PQH</tspan>
      <tspan x="36.412" y="5.689" font-family="LucidaGrande" font-size="21" fill="#000000">₂</tspan>
    </text>
  </g>
</svg>`;

const plastoquinone = ({ color = '#FFE698', label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

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
  draw.svg(el);

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
  return `Plastoquinone/Plastoquinol (PQ/PQH₂)`
}