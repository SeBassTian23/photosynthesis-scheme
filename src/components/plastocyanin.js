/**
 * Plastocyanin
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="plastocyanin" transform="translate(0, 0)">
    <g id="shape">
      <path d="M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z" fill="#5B9BD5"/>
      <path d="M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z" fill-opacity="0" stroke="#000000" stroke-width="1"/>
    </g>
    <g id="cofactor">
      <text transform="matrix(1, 0, 0, 1, 774.896, 438.433)">
        <tspan x="-14.586" y="5.378" font-family="Arial,ArialMT" font-size="10" fill="#000000">Cu²⁺</tspan>
      </text>
    </g>
    <text transform="matrix(1, 0, 0, 1, 768.896, 480.233)">
      <tspan x="-14.586" y="5.378" font-family="Arial,ArialMT" font-size="21" fill="#000000">Pc</tspan>
    </text>
  </g>
</svg>`;

const plastocyanin = ({ color = '#5B9BD5', cofactor = false, label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  let path = draw.findOne('#plastocyanin #shape path');
  path.fill(color);

  if (!cofactor) {
    let shape = draw.findOne('#plastocyanin #cofactor');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#plastocyanin > text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#plastocyanin');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default plastocyanin;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#plastocyanin');

  return {
    "id": "plastocyanin",
    "headerTitle": "Plastocyanin",
    "show": true,
    "options": [
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "check", "name": "cofactor", "value": false, "label": "Cofactor" },
      { "type": "color", "name": "color", "value": "#5B9BD5", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Plastocyanin (Pc) is a small copper (Cu²⁺) containing luminal protein that transfers electrons from cytochrome <em>f</em> to P₇₀₀.`
}