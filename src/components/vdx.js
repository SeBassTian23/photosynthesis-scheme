/**
 * VDX
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/vdx.svg';

const vdx = ({ ze = true, vde = true, psbs = true, pathway = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

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
  draw.svg(svgContent);

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
  return `The inducible part of non-photochemical quenching (NPQ), qE, is mediated through PsbS and the xanthophyll cycle. With lumen acidification, the violaxanthin de-epoxidase (VDE) is activated, converting violaxanthin (V) into zeaxanthin (Z) and the sensor PsbS is protonated activating the quenching of excess excitation energy.`
}