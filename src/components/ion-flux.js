/**
 * Ion Flux
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="ion-flux" transform="translate(0, 0)">
    <g id="ca-channel">
      <text transform="matrix(1, 0, 0, 1, 1209.563, 436.118)" id="Ca⁺">
        <tspan x="-20.402" y="8" font-family="ArialMT" font-size="24" fill="#000000">Ca</tspan>
        <tspan x="10.277" y="8" font-family="LucidaGrande" font-size="24" fill="#000000">⁺</tspan>
      </text>
      <g id="direction">
        <path d="M1210.063,409.591 L1210.063,254.585" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M1210.063,409.591 L1205.863,406.791 L1210.063,417.991 L1214.263,406.791 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
    </g>
    <g id="k-channel">
      <text transform="matrix(1, 0, 0, 1, 1280.918, 236.382)">
        <tspan x="-13.729" y="8" font-family="ArialMT" font-size="24" fill="#000000">H</tspan>
        <tspan x="3.604" y="8" font-family="LucidaGrande" font-size="24" fill="#000000">⁺</tspan>
      </text>
      <text transform="matrix(1, 0, 0, 1, 1269.368, 439.123)">
        <tspan x="-13.066" y="8" font-family="ArialMT" font-size="24" fill="#000000">K</tspan>
        <tspan x="2.941" y="8" font-family="LucidaGrande" font-size="24" fill="#000000">⁺</tspan>
      </text>
      <g id="direction">
        <path d="M1264.812,408.277 L1264.812,253.271" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M1264.812,408.277 L1260.612,405.477 L1264.812,416.677 L1269.012,405.477 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
      <g id="direction">
        <path d="M1274.923,265.298 L1274.923,420.304" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M1274.923,265.298 L1279.123,268.098 L1274.923,256.898 L1270.723,268.098 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
    </g>
  </g>
</svg>`;


const ionFlux = ({ kChannel = false, caChannel = false, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  if (!kChannel) {
    let shape = draw.findOne('#ion-flux #k-channel');
    shape.opacity(0);
  }

  if (!caChannel) {
    let shape = draw.findOne('#ion-flux #ca-channel');
    shape.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#ion-flux');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default ionFlux;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#ion-flux');

  return {
    "id": "ion-flux",
    "headerTitle": "Ion Flux",
    "show": false,
    "options": [
      { "type": "check", "name": "kChannel", "value": true, "label": "K⁺ ⇄ H⁺" },
      { "type": "check", "name": "caChannel", "value": true, "label": "→ Ca⁺" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return ``
}