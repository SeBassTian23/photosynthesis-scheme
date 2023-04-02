import * as atpsynthase from '../components/atp-synthase'
import * as cytochromeB6f from '../components/cytochrome-b6f'
import * as cytochromeC6 from '../components/cytochrome-c6'
import * as electronFlux from '../components/electron-flux'
import * as ferredoxin from '../components/ferredoxin'
import * as fnr from '../components/fnr'
import * as ionChannels from '../components/ion-channels'
import * as ionFlux from '../components/ion-flux'
import * as lumen from '../components/lumen'
import * as photosystemI from '../components/photosystem-i'
import * as photosystemIIrepair from '../components/photosystem-ii-repair'
import * as photosystemII from '../components/photosystem-ii'
import * as plastocyanin from '../components/plastocyanin'
import * as plastoquinone from '../components/plastoquinone'
import * as protonFlux from '../components/proton-flux'
import * as ptox from '../components/ptox'
import * as quenching from '../components/quenching'
import * as stroma from '../components/stroma'
import * as thylakoidmembrane from '../components/thylakoidmembrane'
import * as vdx from '../components/vdx'

const settings = [
  atpsynthase.settings(),
  thylakoidmembrane.settings(),
  cytochromeB6f.settings(),
  cytochromeC6.settings(),
  electronFlux.settings(),
  ferredoxin.settings(),
  fnr.settings(),
  ionChannels.settings(),
  ionFlux.settings(),
  lumen.settings(),
  photosystemI.settings(),
  photosystemIIrepair.settings(),
  photosystemII.settings(),
  plastocyanin.settings(),
  plastoquinone.settings(),
  protonFlux.settings(),
  ptox.settings(),
  quenching.settings(),
  stroma.settings(),
  thylakoidmembrane.settings(),
  vdx.settings(),
]

export default settings;

export const layers = [
  "stroma",
  "lumen",
  "thylakoidmembrane",
  "electron-flux",
  "proton-flux",
  "quenching",
  "photosystem-ii",
  "photosystem-ii-repair",
  "plastoquinone",
  "cytochrome-b6f",
  "cytochrome-c6",
  "plastocyanin",
  "photosystem-i",
  "atpsynthase",
  "vdx",
  "ferredoxin",
  "fnr",
  "ptox",
  "ion-channels",
  "ion-flux"
];

export const menu = {
  "Protein Complexes": [
    "photosystem-ii",
    "photosystem-i",
    "cytochrome-b6f",
    "atpsynthase",
    "ion-channels",
  ],
  "Electron Carriers": [
    "plastoquinone",
    "ferredoxin",
    "cytochrome-c6",
    "plastocyanin",
    "fnr",
    "ptox"
  ],
  "Fluxes": [
    "electron-flux",
    "proton-flux",
    "ion-flux",
  ],
  "Regulation": [
    "photosystem-ii-repair",
    "vdx",
    "quenching"
  ],
  "Thylakoid": [
    "thylakoidmembrane",
    "stroma",
    "lumen",
  ],
};