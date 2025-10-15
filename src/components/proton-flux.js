/**
 * Proton Flux
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/proton-flux.svg';

const protonFlux = ({ atp_synthase = true, stroma_ps_ii = true, stroma_b6f = true, b6f_lumen = true, ps_ii_atp_synthase = true, h2o_lumen = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

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
  draw.svg(svgContent);

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
  return `Light blue arrows indicate the transfer of protons (H⁺).`
}