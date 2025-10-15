/**
 * Ion Flux
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/ion-flux.svg';

const ionFlux = ({ kChannel = false, caChannel = false, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

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
  draw.svg(svgContent);

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
  return `The ions Ca⁺ and K⁺ act as counter ions to the initial build-up of the proton gradient (H⁺) allowing to store part of the <em>pmf</em> as ΔΨ (electric component of <em>pmf</em>) during steady-state.`
}