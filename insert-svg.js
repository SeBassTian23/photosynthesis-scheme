const jetpack = require('fs-jetpack');
const { basename } = require('path')

const svgs = jetpack.list('./src/svgs/');
for (let file in svgs) {
  let filename = basename(svgs[file], '.svg');

  let svgfilepath = jetpack.path('./src', 'svgs', filename + '.svg')
  let jsfilepath = jetpack.path('./src', 'components', filename + '.js')

  if (jetpack.exists(jsfilepath)) {
    let jscontent = jetpack.read(jsfilepath);
    let svgcontent = jetpack.read(svgfilepath);

    if (jscontent.match(/const el = `(.*)`/gms)) {
      let replacedSVG = `$1\`${svgcontent.trim()}\`$3`
      jscontent = jscontent.replace(/(.*const el = )`(.*)`(.*)/gms, replacedSVG)
      jetpack.write(jsfilepath, jscontent);
    }
  }
  else {
    let jscontent = `/**
* ${filename}
*/   
    
const el = \`\`;

const ${filename} = ({id=true, color='#000000'} = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  // if(!id){
    //   let shape = draw.findOne('#id');
    //   shape.opacity(0);
  // }

  // if(color){
    // let Shapes = draw.find('#id path');
    // Shapes.forEach( shape => shape.fill(color) );
  // }

  return draw.findOne('svg').svg(false);
}

export default ${filename};

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#${filename}');

  return {
    "id": "${filename}",
    "headerTitle": "${filename}",
    "show": true,
    "options": [
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return ``
}
`

    jetpack.write(jsfilepath, jscontent);
  }
}