/**
 * Thylakoid Membrane
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="thylakoidmembrane" transform="translate(0, 0)">
    <path d="M-0,296.004 L1400,296.004 L1400,376.004 L-0,376.004 L-0,296.004 z" fill="#DBDBDB"/>
    <path d="M0.5,296.504 L1400.5,296.504" fill-opacity="0" stroke="#000000" stroke-width="1"/>
    <path d="M0.5,376.504 L1400.5,376.504" fill-opacity="0" stroke="#000000" stroke-width="1"/>
  </g>
</svg>`;


const thylakoidmembrane = ({ color = '#DBDBDB', border = true } = {}) => {

  let draw = SVG();
  draw.svg(el);

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
  return ``
}