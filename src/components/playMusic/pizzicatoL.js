import Pizzicato from 'pizzicato';
import { Midi } from '@tonejs/midi';
// import React, { useState, useEffect, ReactComponent, useRef } from 'react';
// import * as Pizzicato from 'pizzicato/distr/Pizzicato.js';

// export default function PizzicatoLPlay() {

const soundP = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_030.mp3' },
});

const m21 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_021.mp3' },
});
const m22 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_022.mp3' },
});
const m23 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_023.mp3' },
});
const m24 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_024.mp3' },
});
const m25 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_025.mp3' },
});
const m26 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_026.mp3' },
});
const m27 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_027.mp3' },
});
const m28 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_028.mp3' },
});
const m29 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_029.mp3' },
});
const m30 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_030.mp3' },
});
const m31 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_031.mp3' },
});
const m32 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_032.mp3' },
});
const m33 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_033.mp3' },
});
const m34 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_034.mp3' },
});
const m35 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_035.mp3' },
});
const m36 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_036.mp3' },
});
const m37 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_037.mp3' },
});
const m38 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_038.mp3' },
});
const m39 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_039.mp3' },
});
const m40 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_040.mp3' },
});
const m41 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_041.mp3' },
});
const m42 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_042.mp3' },
});
const m43 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_043.mp3' },
});
const m44 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_044.mp3' },
});
const m45 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_045.mp3' },
});
const m46 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_046.mp3' },
});
const m47 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_047.mp3' },
});
const m48 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_048.mp3' },
});
const m49 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_049.mp3' },
});
const m50 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_050.mp3' },
});
const m51 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_051.mp3' },
});
const m52 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_052.mp3' },
});
const m53 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_053.mp3' },
});
const m54 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_054.mp3' },
});
const m55 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_055.mp3' },
});
const m56 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_056.mp3' },
});
const m57 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_057.mp3' },
});
const m58 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_058.mp3' },
});
const m59 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_059.mp3' },
});
const m60 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_060.mp3' },
});
const m61 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_061.mp3' },
});
const m62 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_062.mp3' },
});
const m63 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_063.mp3' },
});
const m64 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_064.mp3' },
});
const m65 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_065.mp3' },
});
const m66 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_066.mp3' },
});
const m67 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_067.mp3' },
});
const m68 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_068.mp3' },
});
const m69 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_069.mp3' },
});
const m70 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_070.mp3' },
});
const m71 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_071.mp3' },
});
const m72 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_072.mp3' },
});
const m73 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_073.mp3' },
});
const m74 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_074.mp3' },
});
const m75 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_075.mp3' },
});
const m76 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_076.mp3' },
});
const m77 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_077.mp3' },
});
const m78 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_078.mp3' },
});
const m79 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_079.mp3' },
});
const m80 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_080.mp3' },
});
const m81 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_081.mp3' },
});
const m82 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_082.mp3' },
});
const m83 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_083.mp3' },
});
const m84 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_084.mp3' },
});
const m85 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_085.mp3' },
});
const m86 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_086.mp3' },
});
const m87 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_087.mp3' },
});
const m88 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_088.mp3' },
});
const m89 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_089.mp3' },
});
const m90 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_090.mp3' },
});
const m91 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_091.mp3' },
});
const m92 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_092.mp3' },
});
const m93 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_093.mp3' },
});
const m94 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_094.mp3' },
});
const m95 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_095.mp3' },
});
const m96 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_096.mp3' },
});
const m97 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_097.mp3' },
});
const m98 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_098.mp3' },
});
const m99 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_099.mp3' },
});
const m100 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_100.mp3' },
});
const m101 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_101.mp3' },
});
const m102 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_102.mp3' },
});
const m103 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_103.mp3' },
});
const m104 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_104.mp3' },
});
const m105 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_105.mp3' },
});
const m106 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_106.mp3' },
});
const m107 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_107.mp3' },
});
const m108 = new Pizzicato.Sound({
  source: 'file',
  options: { path: 'assets/Yamahac3/mcg_mf_108.mp3' },
});

let midiToHowl = {
  21: m21,
  22: m22,
  23: m23,
  24: m24,
  25: m25,
  26: m26,
  27: m27,
  28: m28,
  29: m29,
  30: m30,
  31: m31,
  32: m32,
  33: m33,
  34: m34,
  35: m35,
  36: m36,
  37: m37,
  38: m38,
  39: m39,
  40: m40,
  41: m41,
  42: m42,
  43: m43,
  44: m44,
  45: m45,
  46: m46,
  47: m47,
  48: m48,
  49: m49,
  50: m50,
  51: m51,
  52: m52,
  53: m53,
  54: m54,
  55: m55,
  56: m56,
  57: m57,
  58: m58,
  59: m59,
  60: m60,
  61: m61,
  62: m62,
  63: m63,
  64: m64,
  65: m65,
  66: m66,
  67: m67,
  68: m68,
  69: m69,
  70: m70,
  71: m71,
  72: m72,
  73: m73,
  74: m74,
  75: m75,
  76: m76,
  77: m77,
  78: m78,
  79: m79,
  80: m80,
  81: m81,
  82: m82,
  83: m83,
  84: m84,
  85: m85,
  86: m86,
  87: m87,
  88: m88,
  89: m89,
  90: m90,
  91: m91,
  92: m92,
  93: m93,
  94: m94,
  95: m95,
  96: m96,
  97: m97,
  98: m98,
  99: m99,
  100: m100,
  101: m101,
  102: m102,
  103: m103,
  104: m104,
  105: m105,
  106: m106,
  107: m107,
  108: m108,
};

var reverb = new Pizzicato.Effects.Reverb({
  time: 1,
  decay: 0.8,
  reverse: true,
  mix: 0.5,
});

let noteIndex = 0;
let midi;
const ParseMidi = async () => {
  midi = await Midi.fromUrl('assets/midiFiles/allaTurca.mid');
  // console.log(
  //   '🚀 ~ file: howlerPlay.js ~ line 307 ~ OsmdNoteOn ~ midi.tracks[0].notes',
  //   midi.tracks[0].notes
  // );
};
ParseMidi();

function OsmdNoteOn() {
  // for (let i = 0; i < midi.tracks[0].notes; i++) {
  let noteName = midi.tracks[0].notes[noteIndex];

  noteName = midiToHowl[midi.tracks[0].notes[noteIndex]['midi']];

  //   noteName.volume(midi.tracks[0].notes[noteIndex]['velocity']); //midi.tracks[0].notes[noteIndex]['velocity']);
  noteName.stop();
  // noteName.addEffect(reverb);
  noteName.play();

  setTimeout(
    () => noteName.stop(),
    // 1000
    midi.tracks[0].notes[noteIndex]['durationTicks'] * 4
  );
  //   noteName.fade(
  //   midi.tracks[0].notes[noteIndex]['velocity'],
  //   0,
  //   midi.tracks[0].notes[noteIndex]['durationTicks'] * 6
  //   );
  setTimeout(
    () => OsmdNoteOn(),

    (midi.tracks[0].notes[noteIndex + 1]['time'] -
      midi.tracks[0].notes[noteIndex]['time']) *
      1000
  );
  if (noteIndex + 2 <= midi.tracks[0].notes.length) {
    noteIndex++;
  } else {
    noteIndex = 0;
    console.log(
      '🚀 ~ file: howlerPlay.js ~ line 222 ~ OsmdNoteOn ~ noteIndex',
      noteIndex
    );
  }
  // }
}
function OsmdNoteOn3() {
  noteIndex = 0;
  OsmdNoteOn();
}
// setTimeout(() => OsmdNoteOn(), 1000);
window.OsmdNoteOn3 = OsmdNoteOn3;

function testMe() {
  soundP.play();
  console.log('🚀 ~ file: pizzicatoL.js ~ line 33 ~ testMe ~ soundP', soundP);
  setTimeout(() => soundP.stop(), 1000);
  //   sound.play(1, 3);
}
window.testMe = testMe;

//   return <div></div>;
// }
