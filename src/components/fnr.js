/**
 * FNR
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="fnr" transform="translate(0, 0)">
    <g id="shape">
      <path d="M884.643,149.036 C875.221,149.036 867.584,141.398 867.584,131.977 C867.584,122.555 875.221,114.917 884.643,114.917 C894.065,114.917 901.702,122.555 901.702,131.977 C901.702,141.398 894.065,149.036 884.643,149.036 z" fill="#EECC00"/>
      <path d="M884.643,149.036 C875.221,149.036 867.584,141.398 867.584,131.977 C867.584,122.555 875.221,114.917 884.643,114.917 C894.065,114.917 901.702,122.555 901.702,131.977 C901.702,141.398 894.065,149.036 884.643,149.036 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
    </g>
    <g id="reaction">
      <g>
        <path d="M940.627,92.514 C922.032,112.26 905.946,124.255 884.91,124.255 C858.521,124.255 836.707,102.149 821.338,85.584" fill-opacity="0" stroke="#41719C" stroke-width="3"/>
        <path d="M940.627,92.514 L941.828,97.416 L946.307,86.325 L935.639,91.736 z" fill="#41719C" fill-opacity="1" stroke="#41719C" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 828.651, 66.755)">
        <tspan x="-38.402" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">NADP⁺</tspan>
      </text>
      <text transform="matrix(1, 0, 0, 1, 963.656, 66.755)">
        <tspan x="-42.006" y="7.212" font-family="Arial,ArialMT" font-size="24" fill="#000000">NADPH</tspan>
      </text>
    </g>
    <text transform="matrix(1, 0, 0, 1, 917.873, 162.576)">
      <tspan x="-21.579" y="4.689" font-family="Arial,ArialMT" font-size="21" fill="#000000">FNR</tspan>
    </text>
  </g>
</svg>`;


const fnr = ({ reaction = true, color = '#EECC00', label = true, position = true } = {}) => {

  let draw = SVG();
  draw.svg(el);

  if (color) {
    let shape = draw.findOne('#fnr #shape path');
    shape.fill(color);
  }

  if (!reaction) {
    let shape = draw.findOne('#fnr #reaction');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#fnr > text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#fnr');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default fnr;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#fnr');

  return {
    "id": "fnr",
    "headerTitle": "FNR",
    "show": true,
    "options": [
      { "type": "check", "name": "reaction", "value": true, "label": "Reaction" },
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "color", "name": "color", "value": "#EECC00", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Ferredoxin NADP⁺ oxidoreductase (FNR)`
}