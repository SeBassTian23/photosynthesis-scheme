/**
 * Photosystem II - repair
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/photosystem-ii-repair.svg';

const photosystemIIrepair = ({ coreColor = "#B4D66F", lightColor = "#FFEC7F", lightSize = 1, antennaColor = "#8BC300", d1 = true, antenna = true, cycle = true, light = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  if (coreColor) {
    let coreShape = draw.findOne('#photosystem-ii-repair #core path');
    coreShape.fill(coreColor);
  }

  if (lightColor) {
    let lightShape = draw.findOne('#photosystem-ii-repair #light path');
    lightShape.fill(lightColor)
  }

  if (antennaColor) {
    let antennaShapes = draw.find('#photosystem-ii-repair #antenna path');
    antennaShapes.forEach(shape => shape.fill(antennaColor));
  }

  if (!cycle) {
    let shape = draw.findOne('#photosystem-ii-repair #cycle');
    shape.opacity(0);
  }

  if (!d1) {
    let shape = draw.findOne('#photosystem-ii-repair #d1');
    shape.opacity(0);
  }

  if (!antenna) {
    let shape = draw.findOne('#photosystem-ii-repair #antenna');
    shape.opacity(0);
  }

  if (!light) {
    let shape = draw.findOne('#photosystem-ii-repair #light');
    shape.opacity(0);
  }

  if (lightSize) {
    let shape = draw.findOne('#photosystem-ii-repair #light');
    shape.transform({
      origin: 'bottom right',
      scale: Number(lightSize),
    });
  }

  if (position) {
    let move = draw.findOne('#photosystem-ii-repair');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default photosystemIIrepair;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#photosystem-ii-repair');

  return {
    "id": "photosystem-ii-repair",
    "headerTitle": "Photosystem II (repair)",
    "show": false,
    "options": [
      { "type": "check", "name": "antenna", "value": true, "label": "Antenna" },
      { "type": "check", "name": "light", "value": true, "label": "Light" },
      { "type": "check", "name": "d1", "value": true, "label": "D1 Subunit" },
      { "type": "check", "name": "cycle", "value": true, "label": "Cycle Arrows" },
      { "type": "color", "name": "coreColor", "value": "#B4D66F", "label": "Core Color" },
      { "type": "color", "name": "lightColor", "value": "#FFEC7F", "label": "Light Color" },
      { "type": "color", "name": "antennaColor", "value": "#8BC300", "label": "Antenna Color" },
      { "type": "range", "name": "lightSize", "value": 1, "label": "Light (Size)", "step": "0.1", "min": "0.5", "max": "1.5" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Photodamaged PSII undergoes repair in a multi-step process in which the PSII core moves from the grana to the stroma thylakoids. The damaged D1 subunit is replaced and the PSII monomers are migrating back to the grana thylakoids for dimerization and supercomplex assembly.`
}