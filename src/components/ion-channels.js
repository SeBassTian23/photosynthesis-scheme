/**
 * Ion Channels
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="ion-channels" transform="translate(0, 0)">
    <g id="ca-channel">
      <g id="shape">
        <path d="M1227.972,372.685 L1219.594,383.444 L1227.972,372.685 L1219.594,383.444 L1200.532,383.444 L1219.594,383.444 L1200.532,383.444 L1192.154,372.685 L1200.532,383.444 L1192.154,372.685 L1192.154,290.132 L1192.154,372.685 L1192.154,290.132 L1227.972,290.132 L1192.154,290.132 L1227.972,290.132 L1227.972,372.685 L1227.972,290.132 L1227.972,372.685 z" fill="#959595"/>
        <path d="M1227.972,372.685 L1219.594,383.444 L1227.972,372.685 L1219.594,383.444 L1200.532,383.444 L1219.594,383.444 L1200.532,383.444 L1192.154,372.685 L1200.532,383.444 L1192.154,372.685 L1192.154,290.132 L1192.154,372.685 L1192.154,290.132 L1227.972,290.132 L1192.154,290.132 L1227.972,290.132 L1227.972,372.685 L1227.972,290.132 L1227.972,372.685 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
      </g>
    </g>
    <g id="k-channel">
      <g id="shape">
        <path d="M1260.337,383.444 L1279.399,383.444 L1287.777,372.685 L1287.777,300.89 L1279.399,290.132 L1260.337,290.132 L1251.959,300.89 L1251.959,372.685 L1260.337,383.444 z" fill="#959595"/>
        <path d="M1260.337,383.444 L1279.399,383.444 L1287.777,372.685 L1287.777,300.89 L1279.399,290.132 L1260.337,290.132 L1251.959,300.89 L1251.959,372.685 L1260.337,383.444 z" fill-opacity="0" stroke="#3B3838" stroke-width="1"/>
      </g>
    </g>
    <g id="pmf">
      <text transform="matrix(1, 0, 0, 1, 1358.84, 336.004)">
        <tspan x="-33.548" y="5.5" font-family="Arial,ArialMT" font-size="18" fill="#EE6600">ΔΨ/</tspan>
        <tspan x="-1.485" y="5.5" font-family="Arial,ArialMT" font-size="18" fill="#EE6600">Δ</tspan>
        <tspan x="10.538" y="5.5" font-family="Arial,ArialMT" font-size="18" fill="#EE6600">pH</tspan>
      </text>
    </g>
    <g id="label">
      <text transform="matrix(1, 0, 0, 1, 1243.67, 574.538)" id="Ion_Channels">
        <tspan x="-61.877" y="4.5" font-family="Arial,ArialMT" font-size="21" fill="#000000">Ion Channels</tspan>
      </text>
    </g>
  </g>
</svg>`;


const ionChannels = ({ kChannel = false, caChannel = false, label = true, pmf = false, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!kChannel) {
    let shape = draw.findOne('#ion-channels #k-channel');
    shape.opacity(0);
  }

  if (!caChannel) {
    let shape = draw.findOne('#ion-channels #ca-channel');
    shape.opacity(0);
  }

  if (!label) {
    let label = draw.findOne('#ion-channels #label');
    label.opacity(0);
  }

  if (!pmf) {
    let pmf = draw.findOne('#ion-channels #pmf');
    pmf.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#ion-channels');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default ionChannels;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#ion-channels');

  return {
    "id": "ion-channels",
    "headerTitle": "Ion Channels",
    "show": false,
    "options": [
      { "type": "check", "name": "kChannel", "value": true, "label": "K⁺ - Channel" },
      { "type": "check", "name": "caChannel", "value": true, "label": "Ca⁺ - Channel" },
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "check", "name": "pmf", "value": false, "label": "ΔΨ/ΔpH - Label" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return ``
}