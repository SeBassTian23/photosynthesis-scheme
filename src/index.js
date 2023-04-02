import set from 'lodash/set'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import settings, { menu, layers } from './constants/settings'
import references from './constants/references'
import presets from './constants/presets'
import thylakoidmembrane, { legend as thylakoidmembraneLegend } from './components/thylakoidmembrane'
import lumen, { legend as lumenLegend } from './components/lumen'
import stroma, { legend as stromaLegend } from './components/stroma'
import photosystemII, { legend as photosystemIILegend } from './components/photosystem-ii'
import photosystemIIrepair, { legend as photosystemIIrepairLegend } from './components/photosystem-ii-repair'
import cytochromeB6f, { legend as cytochromeB6fLegend } from './components/cytochrome-b6f'
import plastocyanin, { legend as plastocyaninLegend } from './components/plastocyanin'
import photosystemI, { legend as photosystemILegend } from './components/photosystem-i'
import atpsynthase, { legend as atpsynthaseLegend } from './components/atp-synthase'
import vdx, { legend as vdxLegend } from './components/vdx'
import cytochromeC6, { legend as cytochromeC6Legend } from './components/cytochrome-c6'
import plastoquinone, { legend as plastoquinoneLegend } from './components/plastoquinone'
import ferredoxin, { legend as ferredoxinLegend } from './components/ferredoxin'
import fnr, { legend as fnrLegend } from './components/fnr'
import electronFlux, { legend as electronFluxLegend } from './components/electron-flux'
import protonFlux, { legend as protonFluxLegend } from './components/proton-flux'
import ptox, { legend as ptoxLegend } from './components/ptox'
import ionChannels, { legend as ionChannelsLegend } from './components/ion-channels'
import ionFlux, { legend as ionFluxLegend } from './components/ion-flux'
import quenching, { legend as quenchingLegend } from './components/quenching'

export default class Photosynthesis {
  constructor(width, height) {
    this.width = width || 1400;
    this.height = height || 600;
    this.menu = menu || {}
    this.layers = layers || []
    this.settings = cloneDeep(settings) || []
    this.settingsInitial = cloneDeep(settings)
    this.presets = presets;
    this.references = references;
  }
  build() {

    var draw = SVG().size(this.width, this.height);

    // Set viewbox
    draw.viewbox(`0 0 ${this.width} ${this.height}`)

    // Apply options
    for (let i in this.layers) {
      let key = this.settings.findIndex(itm => itm.id == this.layers[i]);
      if (this.settings[key] && this.settings[key].show) {
        var options = this.parseOptions(this.settings[key].options)

        switch (this.settings[key].id) {
          case 'stroma':
            draw.svg(stroma({ ...options }));
            break;
          case 'thylakoidmembrane':
            draw.svg(thylakoidmembrane({ ...options }));
            break;
          case 'lumen':
            draw.svg(lumen({ ...options }));
            break;
          case 'plastoquinone':
            draw.svg(plastoquinone({ ...options }));
            break;
          case 'plastocyanin':
            draw.svg(plastocyanin({ ...options }));
            break;
          case 'cytochrome-c6':
            draw.svg(cytochromeC6({ ...options }));
            break;
          case 'photosystem-i':
            draw.svg(photosystemI({ ...options }));
            break;
          case 'atpsynthase':
            draw.svg(atpsynthase({ ...options }));
            break;
          case 'photosystem-ii':
            draw.svg(photosystemII({ ...options }));
            break;
          case 'photosystem-ii-repair':
            draw.svg(photosystemIIrepair({ ...options }));
            break;
          case 'cytochrome-b6f':
            draw.svg(cytochromeB6f({ ...options }));
            break;
          case 'vdx':
            draw.svg(vdx({ ...options }));
            break;
          case 'ferredoxin':
            draw.svg(ferredoxin({ ...options }))
            break;
          case 'fnr':
            draw.svg(fnr({ ...options }))
            break;
          case 'electron-flux':
            draw.svg(electronFlux({ ...options }))
            break;
          case 'proton-flux':
            draw.svg(protonFlux({ ...options }))
            break;
          case 'ptox':
            draw.svg(ptox({ ...options }))
            break;
          case 'ion-channels':
            draw.svg(ionChannels({ ...options }))
            break;
          case 'ion-flux':
            draw.svg(ionFlux({ ...options }))
            break;
          case 'quenching':
            draw.svg(quenching({ ...options }))
            break;
        }
      }
    }

    // Final SVG
    return draw.svg();
  }
  parseOptions(obj) {
    if (obj === undefined)
      return {}
    let options = {}
    obj.forEach(itm => { options[itm.name] = itm.value; return options; })
    return options;
  }
  reset() {
    return this.settings = cloneDeep(this.settingsInitial);
  }
  update(obj) {
    let current = cloneDeep(this.settings);
    if (!Array.isArray(obj)) {
      for (let key in obj) {
        // Parse Value
        let value = obj[key];
        if (value == 'true')
          value = true
        if (value == 'false')
          value = false

        // Modify Key
        let modkey = key.split('.');
        let idx = current.findIndex(itm => itm.id == modkey[0]);

        modkey = modkey.slice(1);

        if (modkey[0] !== undefined && modkey[0].match(/^options\[/)) {
          modkey = modkey.slice(0, -1).join('.') + '.value';
        }
        else {
          modkey = modkey.join('.');
        }
        set(current[idx], modkey, value);
      }
    }
    this.settings = current;
  }
  settingsHTML() {

    let elCount = 0;
    let html = '<form id="settingsform">'

    for (let header in this.menu) {

      let uid = "ps-" + crypto.randomUUID();
      let accordionid = "ps-" + crypto.randomUUID();
      html += `<div style="cursor:pointer;" class="small fw-bold mt-3 mb-2 d-flex justify-content-between align-items-center" data-bs-toggle="collapse" data-bs-target="#${uid}" aria-controls="Toggle ${header}">
        ${header}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-expand me-1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
        </svg>
      </div>`
      html += `<div class="collapse ${!elCount ? "show" : ""}" id="${uid}" data-bs-parent="#settingsform">`
      // data-bs-parent="#selector"
      html += `<div class="accordion" id="${accordionid}">`

      for (let i in this.menu[header]) {

        let idx = this.settings.findIndex(itm => itm.id == this.menu[header][i]);

        if (idx == -1)
          continue;

        if (this.settings[idx].show === undefined && this.settings[idx].options === undefined)
          continue;

        html += `<div class="accordion-item">
          <h2 class="accordion-header" id="heading${idx}">
            <button class="accordion-button collapsed ps-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${idx}" aria-expanded="${elCount === 0 ? 'true' : 'false'}" aria-controls="collapse${idx}">
            ${this.settings[idx].headerTitle}
            </button>
            ${this.elementInputSwitch([this.settings[idx].id, 'show'].join('.'), this.settings[idx].show, ``)}
          </h2>
          <div id="collapse${idx}" class="accordion-collapse collapse" aria-labelledby="heading${idx}" data-bs-parent="#${accordionid}">
            <div class="accordion-body">`;

        if (this.settings[idx].options !== undefined && this.settings[idx].options.length > 0) {
          for (let i in this.settings[idx].options) {
            let option = this.settings[idx].options[i];
            let name = [this.settings[idx].id, `options[${i}]`, option.name].join('.');
            if (option.type == 'color')
              html += this.elementInputColor(name, option.value, option.label)
            if (option.type == 'text')
              html += this.elementInputText(name, option.value, option.label)
            if (option.type == 'check')
              html += this.elementInputCheck(name, option.value, option.label)
            if (option.type == 'range')
              html += this.elementInputRange(name, option.value, option.label, option.step, option.min, option.max)
          }
        }
        else {
          html += `<div class="form-text">No settings available</div>`
        }

        html += `</div>
          </div>
        </div>`
        elCount++;
      }
      html += `</div>`

      html += `</div>`
    }
    html += '</form>'

    return html;
  }
  getPreset(id) {
    let preset = get(this.presets, id, {});
    return preset.settings || {}
  }
  presetsHTML() {
    let html = `<select class="form-select" aria-label="Default select example" id="presets-selector">`;
    html += `<option value="-1" disabled selected>Select&hellip;</option>`;
    for (let group in this.presets) {
      html += `<optgroup label="${group}">`
      for (let i in this.presets[group])
        html += `<option value="${group}[${i}]">${this.presets[group][i].title}</option>`;
      html += `</optgroup>`
    }
    html += `</select>`;

    return html;
  }
  elementInputCheck(name = 'check', value = true, label = 'label') {
    let id = "ps-" + crypto.randomUUID();
    return `<div class="form-check mb-1">
      <input class="form-check-input" name="${name}" type="checkbox" value="${true}" id="${id}" ${value ? 'checked' : ''}>
      <label class="form-check-label" for="${id}">${label}</label>
    </div>`;
  }
  elementInputSwitch(name = 'switch', value = true, label = 'label') {
    let id = "ps-" + crypto.randomUUID();
    return `<div class="form-check form-switch fs-6" style="position:relative; margin:-2.1rem .5rem .6rem .5rem; z-index:10; width:2em;">
    <input class="form-check-input" type="checkbox" role="switch" name="${name}" value="${true}" id="${id}" ${value ? 'checked' : ''}>
    <label class="form-check-label" for="${id}">${label}</label>
  </div>`

  }
  elementInputText(name = 'text', value = 'Text', label = 'label') {
    let id = "ps-" + crypto.randomUUID();
    return `<div class="mb-1">
      <label for="${id}" class="form-label">${label}</label>
      <input type="text" class="form-control form-control" name="${name}" id="${id}" placeholder="${value}" value="${value}">
    </div>`;
  }
  elementInputColor(name = 'color', value = '#000000', label = 'label') {
    let id = "ps-" + crypto.randomUUID();
    return `<div class="d-flex">
      <input type="color" class="form-control form-control-color" name="${name}" id="${id}" value="${value}" title="Choose ${label} color">
      <label for="${id}" class="col-sm-9 col-form-label">${label}</label>
    </div>`;
  }
  elementInputRange(name = 'range', value = -1, label = 'label', step = 1, min = 0, max = 1) {
    let id = "ps-" + crypto.randomUUID();
    return `<div class="mt-1">
    <label for="${id}" class="form-label" style="margin-bottom:-1.5rem">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi" viewBox="0 0 16 16">
        <path d="M8 1.99911C7.72386 1.99911 7.5 2.22296 7.5 2.49911L7.5 8.29211L5.354 6.14511C5.15849 5.9496 4.84151 5.9496 4.646 6.14511C4.45049 6.34062 4.45049 6.6576 4.646 6.85311L7.646 9.85311C7.7398 9.94715 7.86717 10 8 10C8.13283 10 8.2602 9.94715 8.354 9.85311L11.354 6.85311C11.5495 6.6576 11.5495 6.34062 11.354 6.14511C11.1585 5.9496 10.8415 5.9496 10.646 6.14511L8.5 8.29211L8.5 2.49911C8.5 2.22296 8.27614 1.99911 8 1.99911ZM1 12.5C1 12.2239 1.22386 12 1.5 12L14.5 12C14.7761 12 15 12.2239 15 12.5C15 12.7761 14.7761 13 14.5 13L1.5 13C1.22386 13 1 12.7761 1 12.5Z" fill="#000000" fill-rule="nonzero" opacity="1" stroke="none"/>
      </svg>
      ${label}
    </label>
    <input type="range" class="form-range" name="${name}" id="${id}" value="${value}" min="${min}" max="${max}" step="${step}">      
    </div>`;
  }
  referencesHTML() {
    let html = '<ol class="list-style ps-3 small">';
    for (let i in this.references) {
      html += `<li>${this.references[i]}</li>`;
    }
    html += '</ol>';
    return html;
  }
  legend() {

    let textblocks = {}
    let textblocksArray = []

    for (let i in this.layers) {
      let key = this.settings.findIndex(itm => itm.id == this.layers[i]);
      if (this.settings[key] && this.settings[key].show) {

        switch (this.settings[key].id) {
          case 'stroma':
            textblocks[this.settings[key].id] = stromaLegend()
            textblocksArray.push(stromaLegend())
            break;
          case 'thylakoidmembrane':
            textblocks[this.settings[key].id] = thylakoidmembraneLegend()
            textblocksArray.push(thylakoidmembraneLegend())
            break;
          case 'lumen':
            textblocks[this.settings[key].id] = lumenLegend()
            textblocksArray.push(lumenLegend())
            break;
          case 'plastoquinone':
            textblocks[this.settings[key].id] = plastoquinoneLegend()
            textblocksArray.push(plastoquinoneLegend())
            break;
          case 'plastocyanin':
            textblocks[this.settings[key].id] = plastocyaninLegend()
            textblocksArray.push(plastocyaninLegend())
            break;
          case 'cytochrome-c6':
            textblocks[this.settings[key].id] = cytochromeC6Legend()
            textblocksArray.push(cytochromeC6Legend())
            break;
          case 'photosystem-i':
            textblocks[this.settings[key].id] = photosystemILegend()
            textblocksArray.push(photosystemILegend())
            break;
          case 'atpsynthase':
            textblocks[this.settings[key].id] = atpsynthaseLegend()
            textblocksArray.push(atpsynthaseLegend())
            break;
          case 'photosystem-ii':
            textblocks[this.settings[key].id] = photosystemIILegend()
            textblocksArray.push(photosystemIILegend())
            break;
          case 'photosystem-ii-repair':
            textblocks[this.settings[key].id] = photosystemIIrepairLegend()
            textblocksArray.push(photosystemIIrepairLegend())
            break;
          case 'cytochrome-b6f':
            textblocks[this.settings[key].id] = cytochromeB6fLegend()
            textblocksArray.push(cytochromeB6fLegend())
            break;
          case 'vdx':
            textblocks[this.settings[key].id] = vdxLegend()
            textblocksArray.push(vdxLegend())
            break;
          case 'ferredoxin':
            textblocks[this.settings[key].id] = ferredoxinLegend()
            textblocksArray.push(ferredoxinLegend())
            break;
          case 'fnr':
            textblocks[this.settings[key].id] = fnrLegend()
            textblocksArray.push(fnrLegend())
            break;
          case 'electron-flux':
            textblocks[this.settings[key].id] = electronFluxLegend()
            textblocksArray.push(electronFluxLegend())
            break;
          case 'proton-flux':
            textblocks[this.settings[key].id] = protonFluxLegend()
            textblocksArray.push(protonFluxLegend())
            break;
          case 'ptox':
            textblocks[this.settings[key].id] = ptoxLegend()
            textblocksArray.push(ptoxLegend())
            break;
          case 'ion-channels':
            textblocks[this.settings[key].id] = ionChannelsLegend()
            textblocksArray.push(ionChannelsLegend())
            break;
          case 'ion-flux':
            textblocks[this.settings[key].id] = ionFluxLegend()
            textblocksArray.push(ionFluxLegend())
            break;
          case 'quenching':
            textblocks[this.settings[key].id] = quenchingLegend()
            textblocksArray.push(quenchingLegend())
            break;
        }
      }
    }

    // Dark blue arrow indicate reactions creating products of Photosynthesis including O₂,
    // NADPH and ATP. 

    return `The photosynthetic machinery in higher plants and green algae (with exceptions).
    ${textblocksArray.join(' ')}`;
  }
}
