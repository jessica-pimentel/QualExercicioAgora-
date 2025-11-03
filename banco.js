// --- Dados dos Treinos ---
const treinos = {
  A: [
    { nome: "Warm up / Adução escapular no banco 30º (halter)", rep: 2, info: "18-20", img: "img/A/warm_up.png" },
    { nome: "Remada invertida fechada supinada (smith)", rep: 3, info: "12-15", img: "img/A/remada_invertida_fechada.png" },
    { nome: "Puxador vertical supinado (pegada fechada)", rep: 4, info: "12-15", img: "img/A/puxador_vertical_supinado.png" },
    { nome: "Crucifixo inclinado banco 30° (halter)", rep: 3, info: "12-15", img: "img/A/crucifixo_inclinado.png" },
    { nome: "Desenvolvimento parcial no plano escapular articulado (Barra grande)", rep: 3, info: "12-15", img: "img/A/desenvolvimento_parcial_barra_grande.png" },
    { nome: "Pulley (barra reta)", rep: 4, info: "12-15", img: "img/A/pulley.png" },
    { nome: "Rosca direta livre (halter)", rep: 4, info: "12-15", img: "img/A/rosca_direto.png" }
  ],  
  B: [
    { nome: "Cadeira abdutora 90º", rep: 3, info: "12-15(pico contração 2s)", img: "img/B/cadeira_abdutora_90.png" },
    { nome: "Cadeira extensora", rep: 3, info: "12-15", img: "img/B/cadeira_extensora.png" },
    { nome: "Agachamento barra nas costas (barra axilar)", rep: 3, info: "12-15", img: "img/B/agachamento_barra_costas.png" },
    { nome: "Flexora sentada", rep: 3, info: "12-15", img: "img/B/flexora_sentada.png" },
    { nome: "Single leg deadlift (halter lado oposto)" , rep: 3, info: "12-15", img: "img/B/single_deadlift.png" }
  ],
  C: [
    { nome: "Warm up / Adução escapular no banco 30º (halter)", rep: 2, info: "18-20", img: "img/A/warm_up.png" },
    { nome: "Remada aberta pronada (ombros a 45º abdução)", rep: 3, info: "12-15", img: "img/C/remada_aberta_pronada.png" },
    { nome: "Meia barra fixa fechada supinada (graviton)", rep: 3, info: "12-15", img: "img/C/graviton.png" },
    { nome: "Supino reto (barra)", rep: 3, info: "12-15", img: "img/C/supino_reto_barra.png" },
    { nome: "Elevação lateral lata cheia no plano escapular (halter)", rep: 4, info: "12-15", img: "img/C/elevacao_lateral_lata_cheia.png" },
    { nome: "Testa banco (barra W)", rep: 4, info: "12-15", img: "img/C/testa_banco.png" },
    { nome: "Rosca neutra alternada (halter)", rep: 4, info: "12-15", img: "img/C/rosca_neutra.png" }
  ],
  D: [
    { nome: "Abdução quadril 0º banco reclinado (band)", rep: 3, info: "18-20", img: "img/D/abducao_quadril_banco.png" },
    { nome: "Elevação pélvica solo com step (barra)", info: "3 x 20(pico contração 2s em cima)", img: "img/D/elevacao_pelvica_solo.png" },
    { nome: "Cadeira extensora", rep: 3, info: "12-15", img: "img/B/cadeira_extensora.png" },
    { nome: "Leg Press 45° (linear)", rep: 3, info: "12-15", img: "img/D/leg_press.png" },
    { nome: "Step down frontal unilateral (step)", rep: 3, info: "10-12", img: "img/D/step_down.png" },
    { nome: "Panturrilha vertical máquina" , rep: 3, info: "15-20", img: "img/D/panturrilha_em_pe.png" }
  ],
  Alongamento: [
    { nome: "Peitoral bilateral no espaldar (90º)", rep: 2, info: "30s", img: "img/alongamento/alongamento_peitoral_espaldar.jpg" },
    { nome: "Prece no banco com bastão", rep: 2, info: "30s", img: "img/alongamento/prece_banco_bastao.png" },
    { nome: "Suspensão parcial", rep: 2, info: "30s", img: "img/alongamento/suspensao_parcial.png" },
    { nome: "Gastrocnêmio bilateral (Padrão ouro)", rep: 1, info: "30s", img: "img/alongamento/gastrocnemio_bilateral.png" },
    { nome: "Isquiotibiais unilateral no solo", rep: 2, info: "30+30s", img: "img/alongamento/isquiotibiais_unilateral_solo.png" },
    { nome: "Adutores sentado pernas afastadas (Padrão adaptativo)", rep: 1, info: "30s", img: "img/alongamento/adutores_pernas_afastadas.png" },
    { nome: "Paravertebrais borboletão", rep: 1, info: "30s", img: "img/alongamento/borboletao.png" },
    { nome: "Glúteo 4 no solo", rep: 1, info: "30+30s", img: "img/alongamento/gluteo_4_solo.png" },
    { nome: "Brace_maneuver", rep: 3, info: "20s", img: "img/alongamento/brace_maneuver.png" },
    { nome: "Dead Bug", rep: 2, info: "20s", img: "img/alongamento/dead_bug.png" }
  ]
};
