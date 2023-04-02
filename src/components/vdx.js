/**
 * VDX
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="vdx" transform="translate(0, 0)">
    <g id="pathway">
      <g>
        <path d="M67.486,315.033 C79.998,302.088 91.109,294.301 105.432,294.301 C124.28,294.301 139.86,310.091 150.838,321.922" fill-opacity="0" stroke="#41719C" stroke-width="3"/>
        <path d="M67.486,315.033 L66.312,310.124 L61.772,321.191 L72.469,315.838 z" fill="#41719C" fill-opacity="1" stroke="#41719C" stroke-width="3" stroke-opacity="1"/>
      </g>
      <g>
        <path d="M184.506,335.088 L216.647,335.088" fill-opacity="0" stroke="#41719C" stroke-width="3"/>
        <path d="M216.647,335.088 L213.847,339.288 L225.047,335.088 L213.847,330.888 z" fill="#41719C" fill-opacity="1" stroke="#41719C" stroke-width="3" stroke-opacity="1"/>
      </g>
      <g>
        <path d="M144.445,357.925 C131.933,370.871 120.823,378.657 106.499,378.657 C87.651,378.657 72.071,362.868 61.093,351.037" fill-opacity="0" stroke="#41719C" stroke-width="3"/>
        <path d="M144.445,357.925 L145.619,362.835 L150.159,351.768 L139.462,357.121 z" fill="#41719C" fill-opacity="1" stroke="#41719C" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 45.556, 335.979)">
        <tspan x="-8.004" y="7.455" font-family="ArialMT" font-size="24" fill="#000000">V</tspan>
      </text>
      <text transform="matrix(1, 0, 0, 1, 165.375, 335.979)">
        <tspan x="-7.33" y="7.455" font-family="ArialMT" font-size="24" fill="#000000">Z</tspan>
      </text>
    </g>
    <g id="vde">
      <g>
        <path d="M105.966,427.106 C87.692,427.106 72.878,417.276 72.878,405.151 C72.878,393.025 87.692,383.195 105.966,383.195 C124.239,383.195 139.053,393.025 139.053,405.151 C139.053,417.276 124.239,427.106 105.966,427.106 z" fill="#A9D18E"/>
        <path d="M105.966,427.106 C87.692,427.106 72.878,417.276 72.878,405.151 C72.878,393.025 87.692,383.195 105.966,383.195 C124.239,383.195 139.053,393.025 139.053,405.151 C139.053,417.276 124.239,427.106 105.966,427.106 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 105.466, 404.651)">
        <tspan x="-24.674" y="7.5" font-family="ArialMT" font-size="24" fill="#000000">VDE</tspan>
      </text>
    </g>
    <g id="ze">
      <g>
        <path d="M105.966,291.597 C87.692,291.597 72.878,281.767 72.878,269.641 C72.878,257.516 87.692,247.686 105.966,247.686 C124.239,247.686 139.053,257.516 139.053,269.641 C139.053,281.767 124.239,291.597 105.966,291.597 z" fill="#FFE698"/>
        <path d="M105.966,291.597 C87.692,291.597 72.878,281.767 72.878,269.641 C72.878,257.516 87.692,247.686 105.966,247.686 C124.239,247.686 139.053,257.516 139.053,269.641 C139.053,281.767 124.239,291.597 105.966,291.597 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 105.466, 269.141)">
        <tspan x="-15.334" y="7.5" font-family="ArialMT" font-size="24" fill="#000000">ZE</tspan>
      </text>
    </g>
    <g id="psbs">
      <g id="psbs">
        <path d="M245.618,293.94 L270.775,293.94 C276.882,293.94 281.833,298.481 281.833,304.083 L281.833,371.767 C281.833,377.368 276.882,381.909 270.775,381.909 L245.618,381.909 C239.511,381.909 234.56,377.368 234.56,371.767 L234.56,304.083 C234.56,298.481 239.511,293.94 245.618,293.94 z" fill="#6C9700"/>
        <path d="M245.618,293.94 L270.775,293.94 C276.882,293.94 281.833,298.481 281.833,304.083 L281.833,371.767 C281.833,377.368 276.882,381.909 270.775,381.909 L245.618,381.909 C239.511,381.909 234.56,377.368 234.56,371.767 L234.56,304.083 C234.56,298.481 239.511,293.94 245.618,293.94 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 257.822, 367.077)">
        <tspan x="-16.731" y="4.073" font-family="ArialMT" font-size="14" fill="#000000">PsbS</tspan>
      </text>
    </g>
  </g>
</svg>`;

const vdx = ({ ze = true, vde = true, psbs = true, pathway = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!ze) {
    let shape = draw.findOne('#vdx #ze');
    shape.opacity(0);
  }

  if (!vde) {
    let shape = draw.findOne('#vdx #vde');
    shape.opacity(0);
  }

  if (!psbs) {
    let shape = draw.findOne('#vdx #psbs');
    shape.opacity(0);
  }

  if (!pathway) {
    let shape = draw.findOne('#vdx #pathway');
    shape.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#vdx');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default vdx;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#vdx');

  return {
    "id": "vdx",
    "headerTitle": "VDX",
    "show": false,
    "options": [
      { "type": "check", "name": "ze", "value": true, "label": "ZE" },
      { "type": "check", "name": "vde", "value": true, "label": "VDE" },
      { "type": "check", "name": "psbs", "value": true, "label": "PsbS" },
      { "type": "check", "name": "pathway", "value": true, "label": "Pathway" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Zeaxanthin epoxidase (ZE) Violaxanthin de-epoxidase (VDE) Violaxanthin (V) 
  Zeaxanthin (Z) Psbs`
}