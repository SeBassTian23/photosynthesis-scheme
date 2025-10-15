/**
 * Cytochrome b₆f
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/cytochrome-b6f.svg';

const cytochromeB6f = ({ coreColor = "#B2C7DA", rieskeColor = "#B2C7DA", rieske = true, cofactors = false, label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  if (coreColor) {
    let coreShapes = draw.find('#cytochrome-b6f #core path');
    coreShapes.forEach(shape => shape.fill(coreColor));
  }

  if (rieskeColor) {
    let rieskeShapes = draw.find('#cytochrome-b6f #rieske path');
    rieskeShapes.forEach(shape => shape.fill(rieskeColor));
  }

  if (!cofactors) {
    let shape = draw.findOne('#cytochrome-b6f #cofactors');
    shape.opacity(0);
  }

  if (!rieske) {
    let shape = draw.findOne('#cytochrome-b6f #rieske');
    shape.opacity(0);
  }

  if (!label) {
    let labelText = draw.findOne('#cytochrome-b6f #label')
    labelText.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#cytochrome-b6f');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default cytochromeB6f;

export const settings = () => {

  let draw = SVG();
  draw.svg(svgContent);

  let move = draw.findOne('#cytochrome-b6f')

  return {
    "id": "cytochrome-b6f",
    "headerTitle": "Cytochrome&nbsp;<em>b₆f</em>",
    "show": true,
    "options": [
      { "type": "check", "name": "cofactors", "value": false, "label": "Cofactors" },
      { "type": "check", "name": "rieske", "value": true, "label": "Rieske Complex" },
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "color", "name": "coreColor", "value": "#B2C7DA", "label": "Core Color" },
      { "type": "color", "name": "rieskeColor", "value": "#B2C7DA", "label": "Rieske Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `The cytochrome <em>b₆f</em> complex oxidizes PQH₂ to PQ while pumping protons from the stroma into the lumen in the so-called Q-cycle. The electrons from PQH₂ are then transferred via the cytochrome <em>f</em> subunit to the luminal electron donor for photosystem I (PSI).`
}