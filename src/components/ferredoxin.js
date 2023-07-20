/**
 * Ferredoxin
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="ferredoxin" transform="translate(0, 0)">
    <g id="shape">
      <path d="M854.896,226.945 C845.475,226.945 837.837,219.307 837.837,209.886 C837.837,200.464 845.475,192.827 854.896,192.827 C864.318,192.827 871.956,200.464 871.956,209.886 C871.956,219.307 864.318,226.945 854.896,226.945 z" fill="#A08C79"/>
      <path d="M854.896,226.945 C845.475,226.945 837.837,219.307 837.837,209.886 C837.837,200.464 845.475,192.827 854.896,192.827 C864.318,192.827 871.956,200.464 871.956,209.886 C871.956,219.307 864.318,226.945 854.896,226.945 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
    </g>
    <text transform="matrix(1, 0, 0, 1, 882.063, 238.536)">
      <tspan x="-12.253" y="4.689" font-family="Arial,ArialMT" font-size="21" fill="#000000">Fd</tspan>
    </text>
  </g>
</svg>`;


const ferredoxin = ({ color = '#A08C79', label = true, position = true } = {}) => {
  let draw = SVG();

  draw.svg(el);

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
  draw.svg(el);

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