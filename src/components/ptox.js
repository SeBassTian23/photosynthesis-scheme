/**
 * PTOX
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="ptox" transform="translate(0, 0)">
    <g id="shape">
      <path d="M529.832,302.301 C511.558,302.301 496.745,292.471 496.745,280.346 C496.745,268.22 511.558,258.39 529.832,258.39 C548.106,258.39 562.919,268.22 562.919,280.346 C562.919,292.471 548.106,302.301 529.832,302.301 z" fill="#C2AAFF"/>
      <path d="M529.832,302.301 C511.558,302.301 496.745,292.471 496.745,280.346 C496.745,268.22 511.558,258.39 529.832,258.39 C548.106,258.39 562.919,268.22 562.919,280.346 C562.919,292.471 548.106,302.301 529.832,302.301 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
    </g>
    <text transform="matrix(1, 0, 0, 1, 529.332, 279.846)">
      <tspan x="-24.341" y="5.5" font-family="Arial,ArialMT" font-size="18" fill="#000000">PTOX</tspan>
    </text>
    <g id="reaction">
      <g>
        <path d="M561.614,243.741 C551.06,257.538 541.669,265.828 529.576,265.828 C513.595,265.828 500.385,248.871 491.077,236.166" fill-opacity="0" stroke="#41719C" stroke-width="3"/>
        <path d="M561.614,243.741 L563.345,248.483 L566.582,236.968 L556.571,243.515 z" fill="#41719C" fill-opacity="1" stroke="#41719C" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 490.177, 214.32)">
        <tspan x="-14.396" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">O₂</tspan>
      </text>
      <text transform="matrix(1, 0, 0, 1, 570.337, 214.32)">
        <tspan x="-23.062" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">H₂O</tspan>
      </text>
    </g>
  </g>
</svg>`;


const ptox = ({ reaction = true, color = '#C2AAFF', position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  if (color) {
    let shape = draw.findOne('#ptox #shape path');
    shape.fill(color);
  }

  if (!reaction) {
    let shape = draw.findOne('#ptox #reaction');
    shape.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#ptox');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default ptox;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#ptox');

  return {
    "id": "ptox",
    "headerTitle": "PTOX",
    "show": false,
    "options": [
      { "type": "check", "name": "reaction", "value": true, "label": "Reaction" },
      { "type": "color", "name": "color", "value": "#C2AAFF", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400-move.width() },
    ]
  }
}

export const legend = () => {
  return `Plastid terminal oxidase (PTOX)`
}