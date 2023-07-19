/**
 * Electron Flux
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="electron-flux" transform="translate(0, 0)">
    <g id="pc-to-ps-i">
      <path d="M841.221,412.224 C823.496,431.894 808.142,443.837 788.078,443.837" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
      <path d="M841.221,412.224 L842.53,417.099 L846.763,405.911 L836.217,411.557 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
    </g>
    <g id="b6f-to-pc">
      <path d="M730.813,439.253 C713.872,434.135 699.731,416.062 689.304,401.988" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
      <path d="M730.813,439.253 L727.414,442.985 L739.118,440.515 L728.675,434.68 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
    </g>
    <g id="ps-i-to-fd">
      <path d="M852.334,249.445 L852.334,275.829" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
      <path d="M852.334,249.445 L856.534,252.245 L852.334,241.045 L848.134,252.245 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
    </g>
    <g id="fd-to-fnr">
      <path d="M869.148,165.664 L859.029,184.313" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
      <path d="M869.148,165.664 L871.505,170.128 L873.155,158.281 L864.122,166.122 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
    </g>
    <g id="flow-q-cycle">
      <g>
        <path d="M552.895,352.348 C574.015,364.242 597.894,361.953 617.113,358.17" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
        <path d="M617.113,358.17 L615.25,362.862 L625.329,356.42 L613.5,354.646 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
      </g>
      <g>
        <path d="M628.891,307.535 C603.438,303.518 580.06,313.116 561.96,322.513" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
        <path d="M561.96,322.513 L562.441,317.488 L554.558,326.485 L566.413,324.889 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
      </g>
    </g>
    <g id="ps-ii-to-pq">
      <path d="M496.773,320.56 C477.285,306.9 441.565,310.935 414.488,314.678" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
      <path d="M496.773,320.56 L491.858,321.71 L502.903,326.303 L497.601,315.581 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
    </g>
    <g id="fd-to-cyt-b6f">
      <path d="M673.549,253.71 C695.089,206.767 749.784,205.734 818.663,205.734" fill-opacity="0" stroke="#F8941D" stroke-width="3"/>
      <path d="M673.549,253.71 L670.667,249.566 L670.47,261.526 L678.483,252.645 z" fill="#F8941D" fill-opacity="1" stroke="#F8941D" stroke-width="3" stroke-opacity="1"/>
    </g>
  </g>
</svg>`;

const electronFlux = ({ pc_to_ps_i = true, b6f_to_pc = true, ps_i_to_fd = true, flow_q_cycle = true, ps_ii_to_pq = true, fd_to_cyt_b6f = false, fd_to_fnr = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  if (!pc_to_ps_i) {
    let shape = draw.findOne('#pc-to-ps-i');
    shape.opacity(0);
  }
  if (!b6f_to_pc) {
    let shape = draw.findOne('#b6f-to-pc');
    shape.opacity(0);
  }
  if (!ps_i_to_fd) {
    let shape = draw.findOne('#ps-i-to-fd');
    shape.opacity(0);
  }
  if (!flow_q_cycle) {
    let shape = draw.findOne('#flow-q-cycle');
    shape.opacity(0);
  }
  if (!ps_ii_to_pq) {
    let shape = draw.findOne('#ps-ii-to-pq');
    shape.opacity(0);
  }
  if (!fd_to_cyt_b6f) {
    let shape = draw.findOne('#fd-to-cyt-b6f');
    shape.opacity(0);
  }
  if (!fd_to_fnr) {
    let shape = draw.findOne('#fd-to-fnr');
    shape.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#electron-flux');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default electronFlux;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#electron-flux');

  return {
    "id": "electron-flux",
    "headerTitle": "Electron Flux",
    "show": true,
    "options": [
      { "type": "check", "name": "ps_ii_to_pq", "value": true, "label": "Photosystem II → PQ" },
      { "type": "check", "name": "flow_q_cycle", "value": true, "label": "PQH₂ → Cytochrome b₆f" },
      { "type": "check", "name": "b6f_to_pc", "value": true, "label": "Cytochrome b₆f → PC" },
      { "type": "check", "name": "pc_to_ps_i", "value": true, "label": "PC → Photosystem I" },
      { "type": "check", "name": "ps_i_to_fd", "value": true, "label": "Photosystem I → Fd" },
      { "type": "check", "name": "fd_to_fnr", "value": true, "label": "Fd → FNR" },
      { "type": "check", "name": "fd_to_cyt_b6f", "value": true, "label": "Fd → Cytochrome b₆f" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Orange arrows indicate the transfer of electrons (e⁻).`
}