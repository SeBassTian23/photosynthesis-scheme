// Initiate
const photosynthesis = new Photosynthesis("#svg");

document.querySelector('#references').innerHTML = photosynthesis.referencesHTML();

// Figure settings
document.querySelector('#settings').innerHTML = photosynthesis.settingsHTML();

// Figure presets
document.querySelector('#presets').innerHTML = photosynthesis.presetsHTML();

// Initial Figure legend
document.querySelector('#figure-legend').innerHTML = photosynthesis.legend();

// Capture form changes
document.querySelector('#settings form').addEventListener("change", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target.form) || {}

  document.querySelectorAll('#settings form input[type=checkbox]').forEach(el => {
    if (!el.checked)
      formData.append(el.name, false)
  });

  let settings = {}
  for (const [key, value] of formData.entries()) {
    const keys = key.split('.');

    // Create category key, if it doesn't exist
    if (settings[keys[0]] === undefined)
      settings[keys[0]] = {}

    // Add key and value to category
    if (value === "false" || value === "true" || value === "null")
      settings[keys[0]][keys[1]] = JSON.parse(value);
    else if (!isNaN(value) && value.trim() !== '')
      settings[keys[0]][keys[1]] = Number(value);
    else
      settings[keys[0]][keys[1]] = value;
  }

  photosynthesis.settings = settings;
  photosynthesis.update();
  document.querySelector('#figure-legend').innerHTML = photosynthesis.legend();
});

document.querySelector('#download-svg').addEventListener('click', (event) => {
  event.preventDefault();

  let svg = photosynthesis.build();

  let blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  let URL = window.URL || window.webkitURL || window;

  const download_evt = new MouseEvent('click');
  const a = document.createElement('a');
  a.download = 'photosynthesis.svg';
  a.href = URL.createObjectURL(blob);
  a.dispatchEvent(download_evt);
});

document.querySelector('#download-png').addEventListener('click', (event) => {
  event.preventDefault();
  const canvas = document.createElement("canvas");
  const svg = document.querySelector('#svg svg');
  const base64doc = btoa(unescape(encodeURIComponent(photosynthesis.build())));
  const w = parseInt(svg.getAttribute('width')) * 2;
  const h = parseInt(svg.getAttribute('height')) * 2;
  const img_to_download = document.createElement('img');
  img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
  img_to_download.onload = function () {
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    const context = canvas.getContext("2d");
    context.drawImage(img_to_download, 0, 0, w, h);
    const dataURL = canvas.toDataURL('image/png');
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "photosynthesis.png");
      e.preventDefault();
    } else {
      const a = document.createElement('a');
      const my_evt = new MouseEvent('click');
      a.download = 'photosynthesis.png';
      a.href = dataURL;
      a.dispatchEvent(my_evt);
    }
  }
});

document.querySelector('#download-json').addEventListener('click', (event) => {
  event.preventDefault();

  let settings = JSON.stringify(photosynthesis.settingsSave, null, 2);

  let blob = new Blob([settings], { type: 'text/json;charset=utf-8' });
  let URL = window.URL || window.webkitURL || window;

  const download_evt = new MouseEvent('click');
  const a = document.createElement('a');
  a.download = 'photosynthesis.json';
  a.href = URL.createObjectURL(blob);
  a.dispatchEvent(download_evt);
});

document.querySelector('#backup-click').addEventListener('click', () => document.querySelector('#import-json').click())

document.querySelector('#import-json').addEventListener('change', (event) => {

  if (event.target.files[0]) {

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function () {
      let importedSettings = JSON.parse(reader.result);
      document.querySelector('#settings form').reset();
      document.querySelector('#presets-selector').value = '-1';
      photosynthesis.reset();
      photosynthesis.settings = importedSettings;
      photosynthesis.update();
      updateForm();
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  }
});

document.querySelector('#presets-selector').addEventListener('change', (event) => {
  photosynthesis.reset();
  photosynthesis.applyPreset(event.target.value);
  photosynthesis.update();
  updateForm();
});

document.querySelector('#reset-form').addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#settings form').reset();
  document.querySelector('#presets-selector').value = '-1';
  photosynthesis.reset();
  document.querySelectorAll('#settings .accordion-header input[name$=".show"]').forEach(el => {
    let cat = el.name.split('.')[0];
    el.checked = photosynthesis.settings[cat].show
    el.dispatchEvent(new Event('change', { bubbles: true }))
  })
  photosynthesis.update();
});

document.querySelector('#toggleBtn').addEventListener('click', (event) => {
  let el = document.querySelector('#settings-container');

  if (!el.classList.contains('collapsed')) {
    el.classList.remove('col-5', 'col-md-3')
    for (const child of el.children) {
      if (child.tagName == 'DIV' || child.tagName == 'HR') {
        if (!child.classList.contains('d-flex'))
          child.classList.add('d-none');
      }
    }
    document.querySelector('#resetBtn').classList.add('d-none')
    event.target.innerHTML = '☰'; //'→'
    el.classList.add('collapsed');
    event.target.classList.add('menu-btn-collapsed')
  }
  else {
    el.classList.remove('collapsed');
    el.classList.add('col-5', 'col-md-3')
    for (const child of el.children) {
      child.classList.remove('d-none');
    }
    document.querySelector('#resetBtn').classList.remove('d-none');
    event.target.innerHTML = '←';
    event.target.classList.remove('menu-btn-collapsed')
  }
})

function updateForm() {
  for (let category in photosynthesis.settings) {
    let elements = photosynthesis.settings[category]
    for (let e in elements) {
      let el = document.querySelector(`input[name="${category}.${e}"]`);
      if (el) {
        if (typeof elements[e] === 'boolean'){
          el.checked = elements[e]
        }
        else
          el.value = elements[e]
      }
    }
  }
}