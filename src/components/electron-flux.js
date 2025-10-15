/**
 * Electron Flux
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/electron-flux.svg';

const electronFlux = ({ pc_to_ps_i = true, b6f_to_pc = true, ps_i_to_fd = true, flow_q_cycle = true, ps_ii_to_pq = true, fd_to_cyt_b6f = false, fd_to_fnr = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

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
  draw.svg(svgContent);

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