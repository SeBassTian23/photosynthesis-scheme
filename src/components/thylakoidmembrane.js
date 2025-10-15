/**
 * Thylakoid Membrane
 */

import { SVG } from "@svgdotjs/svg.js";
import svgContent from '!!raw-loader!../svgs/thylakoidmembrane.svg';

const thylakoidmembrane = ({ color = '#DBDBDB', border = true } = {}) => {

  let draw = SVG();
  draw.svg(svgContent);

  let path = draw.findOne('#thylakoidmembrane path');
  path.fill(color)

  if(!border){
    let borders = draw.find('#thylakoidmembrane path');
    borders.forEach(shape => {
      if(shape.attr('stroke-width') > 0)
        shape.remove()
    });
  }

  return draw.findOne('svg').svg(false);

}

export default thylakoidmembrane;

export const settings = () => {
  return {
    "id": "thylakoidmembrane",
    "headerTitle": "Thylakoid Membrane",
    "show": true,
    "options": [
      { "type": "check", "name": "border", "value": true, "label": "Border" },
      { "type": "color", "name": "color", "value": "#DBDBDB", "label": "Background" },
    ]
  }
}

export const legend = () => {
  return `The thylakoid membrane is a system of interconnected membranes organized in grana stacks and stroma lamellae and harboring the complexes of the photosynthetic machinery.`
}