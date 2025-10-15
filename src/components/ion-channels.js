/**
 * Ion Channels
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/ion-channels.svg';

const ionChannels = ({ kChannel = false, caChannel = false, label = true, pmf = false, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

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
  draw.svg(svgContent);

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
  return `Transthylakoid ion channels allow in influx and efflux of ions between the stroma and lumen.`
}