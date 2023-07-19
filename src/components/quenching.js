/**
 * Quenching
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="quenching" transform="translate(0, 0)">
    <g id="pmf">
      <g>
        <path d="M134.204,442.013 C167.869,484.817 173.944,489.253 214.047,506.28 C248.338,520.839 363.007,515.226 393.063,515.933" fill-opacity="0" stroke="#EF2D37" stroke-width="4" stroke-dasharray="12,4"/>
        <path d="M134.204,442.013 L139.956,441.572 L128.283,434.456 L132.398,447.492 z" fill="#EF2D37" fill-opacity="1" stroke="#EF2D37" stroke-width="4" stroke-opacity="1"/>
      </g>
      <g>
        <path d="M260.647,406.851 C273.605,452.142 303.979,490.827 345.682,509.239 C381.841,525.203 455.614,508.552 480.194,498.857" fill-opacity="0" stroke="#EF2D37" stroke-width="4" stroke-dasharray="12,4"/>
        <path d="M260.647,406.851 L266.082,408.783 L258.306,397.54 L256.772,411.125 z" fill="#EF2D37" fill-opacity="1" stroke="#EF2D37" stroke-width="4" stroke-opacity="1"/>
      </g>
    </g>
    <g id="qi">
      <text transform="matrix(1, 0, 0, 1, 84.384, 180.776)">
        <tspan x="-10.008" y="7.455" font-family="Arial,ArialMT" font-size="24" fill="#000000">qI</tspan>
      </text>
      <g>
        <path d="M114.6,163.212 L144.5,139.069" fill-opacity="0" stroke="#EF2D37" stroke-width="4" stroke-dasharray="8,8"/>
        <path d="M114.6,163.212 L114.074,157.468 L107.131,169.244 L120.105,164.937 z" fill="#EF2D37" fill-opacity="1" stroke="#EF2D37" stroke-width="4" stroke-opacity="1"/>
      </g>
    </g>
    <g id="qe">
      <g>
        <path d="M205.418,405.643 L235.318,381.499" fill-opacity="0" stroke="#EF2D37" stroke-width="4" stroke-dasharray="8,8"/>
        <path d="M205.418,405.643 L204.892,399.898 L197.949,411.674 L210.923,407.367 z" fill="#EF2D37" fill-opacity="1" stroke="#EF2D37" stroke-width="4" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 181.616, 428.793)">
        <tspan x="-14.678" y="7.455" font-family="Arial,ArialMT" font-size="24" fill="#000000">qE</tspan>
      </text>
    </g>
  </g>
</svg>`;


const quenching = ({ qe = true, qi = true, pmf = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!qe) {
    let group = draw.findOne('#quenching #qe');
    group.opacity(0);
  }

  if (!qi) {
    let group = draw.findOne('#quenching #qi');
    group.opacity(0);
  }

  if (!pmf) {
    let group = draw.findOne('#quenching #pmf');
    group.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#quenching');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default quenching;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#quenching');

  return {
    "id": "quenching",
    "headerTitle": "Quenching",
    "show": false,
    "options": [
      { "type": "check", "name": "qe", "value": true, "label": "qE" },
      { "type": "check", "name": "qi", "value": true, "label": "qI" },
      { "type": "check", "name": "pmf", "value": true, "label": "<em>pmf</em>" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `The red, dashed arrows represent a subset of possible quenching mechanisms including qE and qI as well as the induction of qE through lumen acidification.`
}