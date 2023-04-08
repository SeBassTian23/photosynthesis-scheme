/**
 * Proton Flux
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="proton-flux" transform="translate(0, 0)">
    <g>
      <g id="ps-ii-atp-synthase">
        <path d="M997.144,487.575 C918.689,503.493 853.657,513.312 766.726,513.312 C664.863,513.312 581.4,508.078 522.072,496.247" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M997.144,487.575 L995.242,492.251 L1005.374,485.892 L993.559,484.021 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
      <g id="h2o_lumen">
        <path d="M489.463,462.261 C480.427,446.861 450.435,434.397 427.051,425.211" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M489.463,462.261 L484.632,460.797 L491.895,470.301 L492.672,458.365 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
    </g>
    <g id="atp-synthase">
      <g>
        <path d="M1124.963,99.587 C1103.894,118.51 1091.082,134.839 1091.082,156.221 L1091.082,407.359 C1091.082,434.065 1067.677,456.142 1050.138,471.697" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M1124.963,99.587 L1125.626,104.591 L1131.28,94.05 L1120.089,98.274 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 1151.418, 85.829)">
        <tspan x="-13.729" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">H⁺</tspan>
      </text>
      <text transform="matrix(1, 0, 0, 1, 1030.685, 480.747)">
        <tspan x="-13.729" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">H⁺</tspan>
      </text>
    </g>
    <g id="stroma-ps-ii">
      <g>
        <path d="M415.571,253.347 C414.877,268.923 422.449,282.144 430.181,292.514" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M430.181,292.514 L425.149,292.917 L435.383,299.109 L431.745,287.714 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 420.743, 237.847)">
        <tspan x="-13.729" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">H⁺</tspan>
      </text>
    </g>
    <g id="stroma-b6f">
      <g>
        <path d="M626.694,254.347 C627.388,269.923 619.816,283.144 612.084,293.514" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M612.084,293.514 L610.52,288.714 L606.882,300.109 L617.115,293.917 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 631.035, 238.847)">
        <tspan x="-13.729" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">H⁺</tspan>
      </text>
    </g>
    <g id="b6f-lumen">
      <g>
        <path d="M628.978,366.195 C599.455,375.608 595.214,405.38 621.862,421.125" fill-opacity="0" stroke="#00BCFF" stroke-width="3"/>
        <path d="M621.862,421.125 L617.513,423.689 L629.425,424.78 L621.168,416.126 z" fill="#00BCFF" fill-opacity="1" stroke="#00BCFF" stroke-width="3" stroke-opacity="1"/>
      </g>
      <text transform="matrix(1, 0, 0, 1, 652.013, 433.79)">
        <tspan x="-13.729" y="8" font-family="Arial,ArialMT" font-size="24" fill="#000000">H⁺</tspan>
      </text>
    </g>
  </g>
</svg>`;


const protonFlux = ({ atp_synthase = true, stroma_ps_ii = true, stroma_b6f = true, b6f_lumen = true, ps_ii_atp_synthase = true, h2o_lumen = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  if (!atp_synthase) {
    let shape = draw.findOne('#atp-synthase');
    shape.opacity(0);
  }
  if (!stroma_ps_ii) {
    let shape = draw.findOne('#stroma-ps-ii');
    shape.opacity(0);
  }
  if (!stroma_b6f) {
    let shape = draw.findOne('#stroma-b6f');
    shape.opacity(0);
  }
  if (!b6f_lumen) {
    let shape = draw.findOne('#b6f-lumen');
    shape.opacity(0);
  }
  if (!ps_ii_atp_synthase) {
    let shape = draw.findOne('#ps-ii-atp-synthase');
    shape.opacity(0);
  }
  if (!h2o_lumen) {
    let shape = draw.findOne('#h2o_lumen');
    shape.opacity(0);
  }
  if (position) {
    let move = draw.findOne('#proton-flux');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default protonFlux;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#proton-flux');

  return {
    "id": "proton-flux",
    "headerTitle": "Proton Flux",
    "show": true,
    "options": [
      { "type": "check", "name": "h2o_lumen", "value": true, "label": "H₂O → Lumen" },
      { "type": "check", "name": "ps_ii_atp_synthase", "value": true, "label": "Lumen → ATP-Synthase" },
      { "type": "check", "name": "atp_synthase", "value": true, "label": "ATP-Synthase" },
      { "type": "check", "name": "stroma_ps_ii", "value": true, "label": "Stroma → Photosystem II" },
      { "type": "check", "name": "stroma_b6f", "value": true, "label": "Stroma  → Cytochrome b₆f" },
      { "type": "check", "name": "b6f_lumen", "value": true, "label": "Cytochrome b₆f → Lumen" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Ligh blue arrows indicate the transfer of protons (H⁺)`
}