/**
 * Photosystem I
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/photosystem-i.svg';

const photosystemI = ({ center = false, light = true, cofactors = false, antenna = true, lightColor = "#FFEC7F", lightSize = 1, coreColor = "#0CB04B", antennaColor = "#008000", label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  if (coreColor) {
    let coreShapes = draw.find('#photosystem-i #core path');
    coreShapes.forEach(shape => shape.fill(coreColor));
  }

  if (antennaColor) {
    let antennaShapes = draw.find('#photosystem-i #antenna path');
    antennaShapes.forEach(shape => shape.fill(antennaColor));
  }

  if (lightColor) {
    let lightShape = draw.findOne('#photosystem-i #light path');
    lightShape.fill(lightColor)
  }

  if (!light) {
    let shape = draw.findOne('#photosystem-i #light');
    shape.opacity(0);
  }

  if (!center) {
    let shape = draw.findOne('#photosystem-i #center');
    shape.opacity(0);
  }

  if (!cofactors) {
    let shape = draw.findOne('#photosystem-i #cofactors');
    shape.opacity(0);
  }

  if (!antenna) {
    let shape = draw.findOne('#photosystem-i #antenna');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#photosystem-i #label');
    text.opacity(0);
  }

  if (lightSize) {
    let shape = draw.findOne('#photosystem-i #light');
    shape.transform({
      origin: 'bottom right',
      scale: Number(lightSize),
    });
  }

  if (position) {
    let move = draw.findOne('#photosystem-i');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default photosystemI;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#photosystem-i')

  return {
    "id": "photosystem-i",
    "headerTitle": "Photosystem I",
    "show": true,
    "options": [
      { "type": "check", "name": "center", "value": false, "label": "Reaction Center" },
      { "type": "check", "name": "cofactors", "value": false, "label": "Cofactors" },
      { "type": "check", "name": "light", "value": true, "label": "Light" },
      { "type": "check", "name": "antenna", "value": true, "label": "Antenna (LHCa)" },
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "color", "name": "coreColor", "value": "#0CB04B", "label": "Core Color" },
      { "type": "color", "name": "lightColor", "value": "#FFEC7F", "label": "Light Color" },
      { "type": "color", "name": "antennaColor", "value": "#008000", "label": "Antenna Color" },
      { "type": "range", "name": "lightSize", "value": 1, "label": "Light (Size)", "step": "0.1", "min": "0.5", "max": "1.5" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `The reaction center of PSI (P₇₀₀) oxidizes the luminal electron donor PC or cytochrome c₆ after being excited and transfers the electron to the stromal acceptor, ferredoxin (Fd).`
}