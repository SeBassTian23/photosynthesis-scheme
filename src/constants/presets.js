const presets = {
  'Complexes': [
    {
      title: 'Photosystem II',
      settings: {
        "photosystem-ii": {
          "show": true,
          "antenna": true,
          "light": true,
          "center": true,
          "cofactors": true,
          "reaction": true,
          "label": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 516,
          "fluorescence": false
        },
        "photosystem-i": {
          "light": true,
          "antenna": true,
          "label": true,
          "coreColor": "#0cb04b",
          "lightColor": "#ffec7f",
          "antennaColor": "#008000",
          "lightSize": 1,
          "position": 730,
          "show": false,
          "center": false,
          "cofactors": false
        },
        "cytochrome-b6f": {
          "rieske": true,
          "label": true,
          "coreColor": "#b2c7da",
          "rieskeColor": "#b2c7da",
          "position": 581,
          "show": false,
          "cofactors": false
        },
        "atpsynthase": {
          "reaction": true,
          "label": true,
          "cRingColor": "#e4d3bd",
          "alphaSubunitColor": "#d6c2ad",
          "betaSubunitColor": "#c7b29e",
          "gammaSubunitColor": "#f6e8d7",
          "iSubunitColor": "#c7b29e",
          "iiSubunitColor": "#e4d3bd",
          "position": 999,
          "show": false,
          "subunits": false
        },
        "ion-channels": {
          "kChannel": true,
          "caChannel": true,
          "label": true,
          "position": 1182,
          "show": false,
          "pmf": false
        },
        "plastoquinone": {
          "show": true,
          "label": true,
          "color": "#ffe698",
          "position": 766
        },
        "ferredoxin": {
          "label": true,
          "color": "#a08c79",
          "position": 838,
          "show": false
        },
        "cytochrome-c6": {
          "label": true,
          "color": "#ff2b2b",
          "position": 735,
          "show": false,
          "cofactor": false
        },
        "plastocyanin": {
          "label": true,
          "color": "#5b9bd5",
          "position": 748,
          "show": false,
          "cofactor": false
        },
        "fnr": {
          "reaction": true,
          "label": true,
          "color": "#eecc00",
          "position": 790,
          "show": false
        },
        "ptox": {
          "reaction": true,
          "color": "#c2aaff",
          "position": 476,
          "show": false
        },
        "thylakoidmembrane": {
          "show": true,
          "color": "#dbdbdb"
        },
        "stroma": {
          "show": true,
          "label": "stroma",
          "showLabel": true
        },
        "lumen": {
          "show": true,
          "label": "lumen",
          "showLabel": true,
          "color": "#ffe5e5"
        },
        "electron-flux": {
          "show": true,
          "ps_ii_to_pq": true,
          "position": 694,
          "flow_q_cycle": false,
          "b6f_to_pc": false,
          "pc_to_ps_i": false,
          "ps_i_to_fd": false,
          "fd_to_fnr": false,
          "fd_to_cyt_b6f": false
        },
        "proton-flux": {
          "show": true,
          "h2o_lumen": true,
          "stroma_ps_ii": true,
          "position": 693,
          "ps_ii_atp_synthase": false,
          "atp_synthase": false,
          "stroma_b6f": false,
          "b6f_lumen": false
        },
        "ion-flux": {
          "kChannel": true,
          "caChannel": true,
          "position": 1189,
          "show": false
        },
        "photosystem-ii-repair": {
          "antenna": true,
          "light": true,
          "d1": true,
          "cycle": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 110,
          "show": false
        },
        "vdx": {
          "ze": true,
          "vde": true,
          "psbs": true,
          "pathway": true,
          "position": 38,
          "show": false
        },
        "regulation": {
          "qe": true,
          "qi": true,
          "pmf": true,
          "position": 74,
          "show": false
        }
      }
    },
    {
      title: 'Cytochrome b₆f',
      settings: {
        "photosystem-ii": {
          "antenna": true,
          "light": true,
          "reaction": true,
          "label": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 237,
          "show": false,
          "fluorescence": false,
          "center": false,
          "cofactors": false
        },
        "photosystem-i": {
          "light": true,
          "antenna": true,
          "label": true,
          "coreColor": "#0cb04b",
          "lightColor": "#ffec7f",
          "antennaColor": "#008000",
          "lightSize": 1,
          "position": 730,
          "show": false,
          "center": false,
          "cofactors": false
        },
        "cytochrome-b6f": {
          "show": true,
          "cofactors": true,
          "rieske": true,
          "label": true,
          "coreColor": "#b2c7da",
          "rieskeColor": "#b2c7da",
          "position": 623
        },
        "atpsynthase": {
          "reaction": true,
          "label": true,
          "cRingColor": "#e4d3bd",
          "alphaSubunitColor": "#d6c2ad",
          "betaSubunitColor": "#c7b29e",
          "gammaSubunitColor": "#f6e8d7",
          "iSubunitColor": "#c7b29e",
          "iiSubunitColor": "#e4d3bd",
          "position": 999,
          "show": false,
          "subunits": false
        },
        "ion-channels": {
          "kChannel": true,
          "caChannel": true,
          "label": true,
          "position": 1182,
          "show": false,
          "pmf": false
        },
        "plastoquinone": {
          "show": true,
          "label": true,
          "color": "#ffe698",
          "position": 518
        },
        "ferredoxin": {
          "label": true,
          "color": "#a08c79",
          "position": 838,
          "show": false
        },
        "cytochrome-c6": {
          "label": true,
          "color": "#ff2b2b",
          "position": 735,
          "show": false,
          "cofactor": false
        },
        "plastocyanin": {
          "show": true,
          "label": true,
          "color": "#5b9bd5",
          "position": 796,
          "cofactor": false
        },
        "fnr": {
          "reaction": true,
          "label": true,
          "color": "#eecc00",
          "position": 790,
          "show": false
        },
        "ptox": {
          "reaction": true,
          "color": "#c2aaff",
          "position": 476,
          "show": false
        },
        "thylakoidmembrane": {
          "show": true,
          "color": "#dbdbdb"
        },
        "stroma": {
          "show": true,
          "label": "stroma",
          "showLabel": true
        },
        "lumen": {
          "show": true,
          "label": "lumen",
          "showLabel": true,
          "color": "#ffe5e5"
        },
        "electron-flux": {
          "show": true,
          "flow_q_cycle": true,
          "b6f_to_pc": true,
          "position": 455,
          "ps_ii_to_pq": false,
          "pc_to_ps_i": false,
          "ps_i_to_fd": false,
          "fd_to_fnr": false,
          "fd_to_cyt_b6f": false
        },
        "proton-flux": {
          "show": true,
          "stroma_b6f": true,
          "b6f_lumen": true,
          "position": 442,
          "h2o_lumen": false,
          "ps_ii_atp_synthase": false,
          "atp_synthase": false,
          "stroma_ps_ii": false
        },
        "ion-flux": {
          "kChannel": true,
          "caChannel": true,
          "position": 1189,
          "show": false
        },
        "photosystem-ii-repair": {
          "antenna": true,
          "light": true,
          "d1": true,
          "cycle": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 110,
          "show": false
        },
        "vdx": {
          "ze": true,
          "vde": true,
          "psbs": true,
          "pathway": true,
          "position": 38,
          "show": false
        },
        "regulation": {
          "qe": true,
          "qi": true,
          "pmf": true,
          "position": 74,
          "show": false
        }
      }
    },
    {
      title: 'Photosystem I',
      settings: {
        "photosystem-ii": {
          "antenna": true,
          "light": true,
          "reaction": true,
          "label": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 237,
          "show": false,
          "fluorescence": false,
          "center": false,
          "cofactors": false
        },
        "photosystem-i": {
          "show": true,
          "center": true,
          "cofactors": true,
          "light": true,
          "antenna": true,
          "label": true,
          "coreColor": "#0cb04b",
          "lightColor": "#ffec7f",
          "antennaColor": "#008000",
          "lightSize": 1,
          "position": 618
        },
        "cytochrome-b6f": {
          "rieske": true,
          "label": true,
          "coreColor": "#b2c7da",
          "rieskeColor": "#b2c7da",
          "position": 581,
          "show": false,
          "cofactors": false
        },
        "atpsynthase": {
          "reaction": true,
          "label": true,
          "cRingColor": "#e4d3bd",
          "alphaSubunitColor": "#d6c2ad",
          "betaSubunitColor": "#c7b29e",
          "gammaSubunitColor": "#f6e8d7",
          "iSubunitColor": "#c7b29e",
          "iiSubunitColor": "#e4d3bd",
          "position": 999,
          "show": false,
          "subunits": false
        },
        "ion-channels": {
          "kChannel": true,
          "caChannel": true,
          "label": true,
          "position": 1182,
          "show": false,
          "pmf": false
        },
        "plastoquinone": {
          "label": true,
          "color": "#ffe698",
          "position": 484,
          "show": false
        },
        "ferredoxin": {
          "show": true,
          "label": true,
          "color": "#a08c79",
          "position": 722
        },
        "cytochrome-c6": {
          "label": true,
          "color": "#ff2b2b",
          "position": 735,
          "show": false,
          "cofactor": false
        },
        "plastocyanin": {
          "show": true,
          "label": true,
          "color": "#5b9bd5",
          "position": 628,
          "cofactor": false
        },
        "fnr": {
          "show": true,
          "reaction": true,
          "label": true,
          "color": "#eecc00",
          "position": 674
        },
        "ptox": {
          "reaction": true,
          "color": "#c2aaff",
          "position": 476,
          "show": false
        },
        "thylakoidmembrane": {
          "show": true,
          "color": "#dbdbdb"
        },
        "stroma": {
          "show": true,
          "label": "stroma",
          "showLabel": true
        },
        "lumen": {
          "show": true,
          "label": "lumen",
          "showLabel": true,
          "color": "#ffe5e5"
        },
        "electron-flux": {
          "show": true,
          "pc_to_ps_i": true,
          "ps_i_to_fd": true,
          "fd_to_fnr": true,
          "position": 300,
          "ps_ii_to_pq": false,
          "flow_q_cycle": false,
          "b6f_to_pc": false,
          "fd_to_cyt_b6f": false
        },
        "proton-flux": {
          "h2o_lumen": true,
          "ps_ii_atp_synthase": true,
          "atp_synthase": true,
          "stroma_ps_ii": true,
          "stroma_b6f": true,
          "b6f_lumen": true,
          "position": 407,
          "show": false
        },
        "ion-flux": {
          "kChannel": true,
          "caChannel": true,
          "position": 1189,
          "show": false
        },
        "photosystem-ii-repair": {
          "antenna": true,
          "light": true,
          "d1": true,
          "cycle": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 110,
          "show": false
        },
        "vdx": {
          "ze": true,
          "vde": true,
          "psbs": true,
          "pathway": true,
          "position": 38,
          "show": false
        },
        "regulation": {
          "qe": true,
          "qi": true,
          "pmf": true,
          "position": 74,
          "show": false
        }
      }
    },
    {
      title: 'ATP Synthase',
      settings: {
        "photosystem-ii": {
          "antenna": true,
          "light": true,
          "reaction": true,
          "label": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 237,
          "show": false,
          "fluorescence": false,
          "center": false,
          "cofactors": false
        },
        "photosystem-i": {
          "light": true,
          "antenna": true,
          "label": true,
          "coreColor": "#0cb04b",
          "lightColor": "#ffec7f",
          "antennaColor": "#008000",
          "lightSize": 1,
          "position": 730,
          "show": false,
          "center": false,
          "cofactors": false
        },
        "cytochrome-b6f": {
          "rieske": true,
          "label": true,
          "coreColor": "#b2c7da",
          "rieskeColor": "#b2c7da",
          "position": 581,
          "show": false,
          "cofactors": false
        },
        "atpsynthase": {
          "show": true,
          "subunits": true,
          "reaction": true,
          "label": true,
          "cRingColor": "#e4d3bd",
          "alphaSubunitColor": "#d6c2ad",
          "betaSubunitColor": "#c7b29e",
          "gammaSubunitColor": "#f6e8d7",
          "iSubunitColor": "#c7b29e",
          "iiSubunitColor": "#e4d3bd",
          "position": 623
        },
        "ion-channels": {
          "show": true,
          "pmf": true,
          "position": 679,
          "kChannel": false,
          "caChannel": false,
          "label": false
        },
        "plastoquinone": {
          "label": true,
          "color": "#ffe698",
          "position": 484,
          "show": false
        },
        "ferredoxin": {
          "label": true,
          "color": "#a08c79",
          "position": 838,
          "show": false
        },
        "cytochrome-c6": {
          "label": true,
          "color": "#ff2b2b",
          "position": 735,
          "show": false,
          "cofactor": false
        },
        "plastocyanin": {
          "label": true,
          "color": "#5b9bd5",
          "position": 748,
          "show": false,
          "cofactor": false
        },
        "fnr": {
          "reaction": true,
          "label": true,
          "color": "#eecc00",
          "position": 790,
          "show": false
        },
        "ptox": {
          "reaction": true,
          "color": "#c2aaff",
          "position": 476,
          "show": false
        },
        "thylakoidmembrane": {
          "show": true,
          "color": "#dbdbdb"
        },
        "stroma": {
          "show": true,
          "label": "stroma",
          "showLabel": true
        },
        "lumen": {
          "show": true,
          "label": "lumen",
          "showLabel": true,
          "color": "#ffe5e5"
        },
        "electron-flux": {
          "ps_ii_to_pq": true,
          "flow_q_cycle": true,
          "b6f_to_pc": true,
          "pc_to_ps_i": true,
          "ps_i_to_fd": true,
          "fd_to_fnr": true,
          "fd_to_cyt_b6f": true,
          "position": 414,
          "show": false
        },
        "proton-flux": {
          "show": true,
          "atp_synthase": true,
          "position": 31,
          "h2o_lumen": false,
          "ps_ii_atp_synthase": false,
          "stroma_ps_ii": false,
          "stroma_b6f": false,
          "b6f_lumen": false
        },
        "ion-flux": {
          "kChannel": true,
          "caChannel": true,
          "position": 1189,
          "show": false
        },
        "photosystem-ii-repair": {
          "antenna": true,
          "light": true,
          "d1": true,
          "cycle": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 110,
          "show": false
        },
        "vdx": {
          "ze": true,
          "vde": true,
          "psbs": true,
          "pathway": true,
          "position": 38,
          "show": false
        },
        "regulation": {
          "qe": true,
          "qi": true,
          "pmf": true,
          "position": 74,
          "show": false
        }
      }
    },
  ],
  'Miscellaneous': [
    {
      title: "Show me Everything!",
      settings: {
        "photosystem-ii": {
          "show": true,
          "antenna": true,
          "light": true,
          "center": true,
          "cofactors": true,
          "reaction": true,
          "label": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 237,
          "fluorescence": false
        },
        "photosystem-i": {
          "show": true,
          "center": true,
          "cofactors": true,
          "light": true,
          "antenna": true,
          "label": true,
          "coreColor": "#0cb04b",
          "lightColor": "#ffec7f",
          "antennaColor": "#008000",
          "lightSize": 1,
          "position": 730
        },
        "cytochrome-b6f": {
          "show": true,
          "cofactors": true,
          "rieske": true,
          "label": true,
          "coreColor": "#b2c7da",
          "rieskeColor": "#b2c7da",
          "position": 581
        },
        "atpsynthase": {
          "show": true,
          "subunits": true,
          "reaction": true,
          "label": true,
          "cRingColor": "#e4d3bd",
          "alphaSubunitColor": "#d6c2ad",
          "betaSubunitColor": "#c7b29e",
          "gammaSubunitColor": "#f6e8d7",
          "iSubunitColor": "#c7b29e",
          "iiSubunitColor": "#e4d3bd",
          "position": 999
        },
        "ion-channels": {
          "show": true,
          "kChannel": true,
          "caChannel": true,
          "label": true,
          "pmf": true,
          "position": 1182
        },
        "plastoquinone": {
          "show": true,
          "label": true,
          "color": "#ffe698",
          "position": 484
        },
        "ferredoxin": {
          "show": true,
          "label": true,
          "color": "#a08c79",
          "position": 838
        },
        "cytochrome-c6": {
          "label": true,
          "color": "#ff2b2b",
          "position": 735,
          "show": false,
          "cofactor": false
        },
        "plastocyanin": {
          "show": true,
          "label": true,
          "cofactor": true,
          "color": "#5b9bd5",
          "position": 748
        },
        "fnr": {
          "show": true,
          "reaction": true,
          "label": true,
          "color": "#eecc00",
          "position": 790
        },
        "ptox": {
          "show": true,
          "reaction": true,
          "color": "#c2aaff",
          "position": 476
        },
        "electron-flux": {
          "show": true,
          "ps_ii_to_pq": true,
          "flow_q_cycle": true,
          "b6f_to_pc": true,
          "pc_to_ps_i": true,
          "ps_i_to_fd": true,
          "fd_to_fnr": true,
          "fd_to_cyt_b6f": true,
          "position": 414
        },
        "proton-flux": {
          "show": true,
          "h2o_lumen": true,
          "ps_ii_atp_synthase": true,
          "atp_synthase": true,
          "stroma_ps_ii": true,
          "stroma_b6f": true,
          "b6f_lumen": true,
          "position": 407
        },
        "ion-flux": {
          "show": true,
          "kChannel": true,
          "caChannel": true,
          "position": 1189
        },
        "photosystem-ii-repair": {
          "show": true,
          "antenna": true,
          "light": true,
          "d1": true,
          "cycle": true,
          "coreColor": "#b4d66f",
          "lightColor": "#ffec7f",
          "antennaColor": "#8bc300",
          "lightSize": 1,
          "position": 110
        },
        "vdx": {
          "show": true,
          "ze": true,
          "vde": true,
          "psbs": true,
          "pathway": true,
          "position": 38
        },
        "quenching": {
          "show": true,
          "qe": true,
          "qi": true,
          "pmf": true,
          "position": 74
        },
        "thylakoidmembrane": {
          "show": true,
          "border": true,
          "color": "#dbdbdb"
        },
        "stroma": {
          "show": true,
          "label": "stroma",
          "showLabel": true,
          "color": "#0070c4"
        },
        "lumen": {
          "show": true,
          "label": "lumen",
          "showLabel": true,
          "color": "#ffe5e5"
        }
      }
    }
  ]
}

export default presets;