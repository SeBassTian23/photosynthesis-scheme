/**
 * Photosystem II
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/photosystem-ii.svg';

const photosystemII = ({ coreColor = "#B4D66F", lightColor = "#FFEC7F", lightSize = 1, antennaColor = "#8BC300", antenna = true, light = true, cofactors = false, center = false, reaction = true, fluorescence = false, label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  if (coreColor) {
    let coreShape = draw.findOne('#photosystem-ii #core path');
    coreShape.fill(coreColor);
  }

  if (lightColor) {
    let lightShape = draw.findOne('#photosystem-ii #light path');
    lightShape.fill(lightColor)
  }

  if (antennaColor) {
    let antennaShapes = draw.find('#photosystem-ii #antenna path');
    antennaShapes.forEach(shape => shape.fill(antennaColor));
  }

  if (!cofactors) {
    let shape = draw.findOne('#photosystem-ii #cofactors');
    shape.opacity(0);
  }

  if (!center) {
    let shape = draw.findOne('#photosystem-ii-center');
    shape.opacity(0);
  }

  if (!antenna) {
    let shape = draw.findOne('#photosystem-ii #antenna');
    shape.opacity(0);
  }

  if (!light) {
    let shape = draw.findOne('#photosystem-ii #light');
    shape.opacity(0);
  }

  if (!reaction) {
    let shape = draw.findOne('#photosystem-ii #water-split');
    shape.opacity(0);
  }

  if (!label) {
    let labelText = draw.findOne('#photosystem-ii #label')
    labelText.opacity(0);
  }

  if (!fluorescence) {
    let group = draw.findOne('#photosystem-ii #fluorescence');
    group.opacity(0);
  }

  if (lightSize) {
    let shape = draw.findOne('#photosystem-ii #light');
    shape.transform({
      origin: 'bottom right',
      scale: Number(lightSize),
    });
  }

  if (position) {
    let move = draw.findOne('#photosystem-ii');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default photosystemII;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#photosystem-ii');

  return {
    "id": "photosystem-ii",
    "headerTitle": "Photosystem II",
    "show": true,
    "options": [
      { "type": "check", "name": "antenna", "value": true, "label": "Antenna" },
      { "type": "check", "name": "light", "value": true, "label": "Light" },
      { "type": "check", "name": "center", "value": false, "label": "Reaction Center" },
      { "type": "check", "name": "cofactors", "value": false, "label": "Cofactors" },
      { "type": "check", "name": "reaction", "value": true, "label": "Water Split Reaction" },
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "check", "name": "fluorescence", "value": false, "label": "Fluorescence" },
      { "type": "color", "name": "coreColor", "value": "#B4D66F", "label": "Core Color" },
      { "type": "color", "name": "lightColor", "value": "#FFEC7F", "label": "Light Color" },
      { "type": "color", "name": "antennaColor", "value": "#8BC300", "label": "Antenna Color" },
      { "type": "range", "name": "lightSize", "value": 1, "label": "Light (Size)", "step": "0.1", "min": "0.5", "max": "1.5" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Photosystem II (PSII), with its reaction center (P₆₈₀) oxidizes water when exited, producing electrons (e⁻) and protons (H⁺). The protons are deposited into the lumen and the electrons are transferred to the plastoquinone pool.`
}