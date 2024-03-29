/**
 * Cytochrome c₆
 */

const el = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" width="1400" height="600" viewBox="0, 0, 1400, 600">
  <g id="cytochrome-c6" transform="translate(0, 0)">
    <g id="shape">
      <path d="M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z" fill="#FF2B2B"/>
      <path d="M765.396,461.225 C755.975,461.225 748.337,453.587 748.337,444.165 C748.337,434.744 755.975,427.106 765.396,427.106 C774.818,427.106 782.456,434.744 782.456,444.165 C782.456,453.587 774.818,461.225 765.396,461.225 z" fill-opacity="0" stroke="#000000" stroke-width="1"/>
    </g>
    <g id="cofactor">
      <path d="M762.184,438.133 L761.2,435.103 L763.777,433.23 L766.355,435.103 L765.37,438.133 z M776.445,438.133 L777.43,435.103 L774.852,433.23 L772.275,435.103 L773.259,438.133 z M765.37,444.052 L766.355,447.082 L763.777,448.955 L761.2,447.082 L762.184,444.052 z M776.445,444.052 L777.43,447.082 L774.852,448.955 L772.275,447.082 L773.259,444.052 z M772.275,435.036 L769.315,432.886 L766.355,435.036 M772.275,447.14 L769.315,449.29 L766.355,447.14 M762.166,444.052 L760.015,441.092 L762.166,438.133 M776.522,444.052 L778.672,441.092 L776.522,438.133" fill-opacity="0" stroke="#000000" stroke-width="0.75"/>
      <g>
        <path d="M766.457,442.199 L766.457,438.923 L768.666,438.923 L768.666,439.31 L766.89,439.31 L766.89,440.324 L768.427,440.324 L768.427,440.711 L766.89,440.711 L766.89,442.199 z" fill="#000000"/>
        <path d="M770.802,441.435 L771.218,441.486 Q771.119,441.85 770.853,442.051 Q770.588,442.252 770.174,442.252 Q769.654,442.252 769.349,441.932 Q769.044,441.611 769.044,441.032 Q769.044,440.434 769.352,440.103 Q769.66,439.772 770.152,439.772 Q770.628,439.772 770.929,440.096 Q771.231,440.42 771.231,441.008 Q771.231,441.044 771.229,441.115 L769.459,441.115 Q769.482,441.506 769.681,441.714 Q769.879,441.922 770.177,441.922 Q770.398,441.922 770.554,441.805 Q770.71,441.689 770.802,441.435 z M769.482,440.784 L770.807,440.784 Q770.78,440.485 770.655,440.335 Q770.462,440.103 770.156,440.103 Q769.879,440.103 769.691,440.288 Q769.502,440.474 769.482,440.784 z" fill="#000000"/>
      </g>
    </g>
    <text transform="matrix(1, 0, 0, 1, 763.499, 480.233)">
      <tspan x="-28.347" y="6.378" font-family="Arial,ArialMT" font-size="21" fill="#000000">Cyt c₆</tspan>
    </text>
  </g>
</svg>`;

const cytochromeC6 = ({ color = '#FF2B2B', cofactor = false, label = true, position = null } = {}) => {

  let draw = SVG();
  draw.svg(el);

  // Add modifications here
  let path = draw.findOne('#cytochrome-c6 #shape path');
  path.fill(color);

  if (!cofactor) {
    let shape = draw.findOne('#cytochrome-c6 #cofactor');
    shape.opacity(0);
  }

  if (!label) {
    let text = draw.findOne('#cytochrome-c6 text');
    text.opacity(0);
  }

  if (position) {
    let move = draw.findOne('#cytochrome-c6');
    move.transform({
      translateX: position - move.x()
    })
  }

  return draw.findOne('svg').svg(false);
}

export default cytochromeC6;

export const settings = () => {

  let draw = SVG();
  draw.svg(el);

  let move = draw.findOne('#cytochrome-c6');

  return {
    "id": "cytochrome-c6",
    "headerTitle": "Cytochrome c₆",
    "show": false,
    "options": [
      { "type": "check", "name": "label", "value": true, "label": "Label" },
      { "type": "check", "name": "cofactor", "value": false, "label": "Cofactor" },
      { "type": "color", "name": "color", "value": "#FF2B2B", "label": "Shape Color" },
      { "type": "range", "name": "position", "value": move.x(), "label": "Position", "step": "1", "min": "0", "max": 1400 - move.width() },
    ]
  }
}

export const legend = () => {
  return `Cytochrome c₆ (Cyt c₆) is a small, heme (Feᴵᴵ) binding, luminal protein, transferring electrons from cytochrome <em>f</em> to P₇₀₀.`
}
