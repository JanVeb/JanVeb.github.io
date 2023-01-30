import React, { useState, useEffect, ReactComponent, useRef } from 'react';
import { Howl, Howler, HowlerOptions } from 'howler';

import { Midi } from '@tonejs/midi';

// import forElise from './forElise';
// import notesArr from './notesArray';
// var m21 = new Howl({ src: ['assets/GigaPiano/21.mp3'] });
// var m22 = new Howl({ src: ['assets/GigaPiano/22.mp3'] });
// var m23 = new Howl({ src: ['assets/GigaPiano/23.mp3'] });
// var m24 = new Howl({ src: ['assets/GigaPiano/24.mp3'] });
// var m25 = new Howl({ src: ['assets/GigaPiano/25.mp3'] });
// var m26 = new Howl({ src: ['assets/GigaPiano/26.mp3'] });
// var m27 = new Howl({ src: ['assets/GigaPiano/27.mp3'] });
// var m28 = new Howl({ src: ['assets/GigaPiano/28.mp3'] });
// var m29 = new Howl({ src: ['assets/GigaPiano/29.mp3'] });
// var m30 = new Howl({ src: ['assets/GigaPiano/30.mp3'] });
// var m31 = new Howl({ src: ['assets/GigaPiano/31.mp3'] });
// var m32 = new Howl({ src: ['assets/GigaPiano/32.mp3'] });
// var m33 = new Howl({ src: ['assets/GigaPiano/33.mp3'] });
// var m34 = new Howl({ src: ['assets/GigaPiano/34.mp3'] });
// var m35 = new Howl({ src: ['assets/GigaPiano/35.mp3'] });
// var m36 = new Howl({ src: ['assets/GigaPiano/36.mp3'] });
// var m37 = new Howl({ src: ['assets/GigaPiano/37.mp3'] });
// var m38 = new Howl({ src: ['assets/GigaPiano/38.mp3'] });
// var m39 = new Howl({ src: ['assets/GigaPiano/39.mp3'] });
// var m40 = new Howl({ src: ['assets/GigaPiano/40.mp3'] });
// var m41 = new Howl({ src: ['assets/GigaPiano/41.mp3'] });
// var m42 = new Howl({ src: ['assets/GigaPiano/42.mp3'] });
// var m43 = new Howl({ src: ['assets/GigaPiano/43.mp3'] });
// var m44 = new Howl({ src: ['assets/GigaPiano/44.mp3'] });
// var m45 = new Howl({ src: ['assets/GigaPiano/45.mp3'] });
// var m46 = new Howl({ src: ['assets/GigaPiano/46.mp3'] });
// var m47 = new Howl({ src: ['assets/GigaPiano/47.mp3'] });
// var m48 = new Howl({ src: ['assets/GigaPiano/48.mp3'] });
// var m49 = new Howl({ src: ['assets/GigaPiano/49.mp3'] });
// var m50 = new Howl({ src: ['assets/GigaPiano/50.mp3'] });
// var m51 = new Howl({ src: ['assets/GigaPiano/51.mp3'] });
// var m52 = new Howl({ src: ['assets/GigaPiano/52.mp3'] });
// var m53 = new Howl({ src: ['assets/GigaPiano/53.mp3'] });
// var m54 = new Howl({ src: ['assets/GigaPiano/54.mp3'] });
// var m55 = new Howl({ src: ['assets/GigaPiano/55.mp3'] });
// var m56 = new Howl({ src: ['assets/GigaPiano/56.mp3'] });
// var m57 = new Howl({ src: ['assets/GigaPiano/57.mp3'] });
// var m58 = new Howl({ src: ['assets/GigaPiano/58.mp3'] });
// var m59 = new Howl({ src: ['assets/GigaPiano/59.mp3'] });
// var m60 = new Howl({ src: ['assets/GigaPiano/60.mp3'] });
// var m61 = new Howl({ src: ['assets/GigaPiano/61.mp3'] });
// var m62 = new Howl({ src: ['assets/GigaPiano/62.mp3'] });
// var m63 = new Howl({ src: ['assets/GigaPiano/63.mp3'] });
// var m64 = new Howl({ src: ['assets/GigaPiano/64.mp3'] });
// var m65 = new Howl({ src: ['assets/GigaPiano/65.mp3'] });
// var m66 = new Howl({ src: ['assets/GigaPiano/66.mp3'] });
// var m67 = new Howl({ src: ['assets/GigaPiano/67.mp3'] });
// var m68 = new Howl({ src: ['assets/GigaPiano/68.mp3'] });
// var m69 = new Howl({ src: ['assets/GigaPiano/69.mp3'] });
// var m70 = new Howl({ src: ['assets/GigaPiano/70.mp3'] });
// var m71 = new Howl({ src: ['assets/GigaPiano/71.mp3'] });
// var m72 = new Howl({ src: ['assets/GigaPiano/72.mp3'] });
// var m73 = new Howl({ src: ['assets/GigaPiano/73.mp3'] });
// var m74 = new Howl({ src: ['assets/GigaPiano/74.mp3'] });
// var m75 = new Howl({ src: ['assets/GigaPiano/75.mp3'] });
// var m76 = new Howl({ src: ['assets/GigaPiano/76.mp3'] });
// var m77 = new Howl({ src: ['assets/GigaPiano/77.mp3'] });
// var m78 = new Howl({ src: ['assets/GigaPiano/78.mp3'] });
// var m79 = new Howl({ src: ['assets/GigaPiano/79.mp3'] });
// var m80 = new Howl({ src: ['assets/GigaPiano/80.mp3'] });
// var m81 = new Howl({ src: ['assets/GigaPiano/81.mp3'] });
// var m82 = new Howl({ src: ['assets/GigaPiano/82.mp3'] });
// var m83 = new Howl({ src: ['assets/GigaPiano/83.mp3'] });
// var m84 = new Howl({ src: ['assets/GigaPiano/84.mp3'] });
// var m85 = new Howl({ src: ['assets/GigaPiano/85.mp3'] });
// var m86 = new Howl({ src: ['assets/GigaPiano/86.mp3'] });
// var m87 = new Howl({ src: ['assets/GigaPiano/87.mp3'] });
// var m88 = new Howl({ src: ['assets/GigaPiano/88.mp3'] });
// var m89 = new Howl({ src: ['assets/GigaPiano/89.mp3'] });
// var m90 = new Howl({ src: ['assets/GigaPiano/90.mp3'] });
// var m91 = new Howl({ src: ['assets/GigaPiano/91.mp3'] });
// var m92 = new Howl({ src: ['assets/GigaPiano/92.mp3'] });
// var m93 = new Howl({ src: ['assets/GigaPiano/93.mp3'] });
// var m94 = new Howl({ src: ['assets/GigaPiano/94.mp3'] });
// var m95 = new Howl({ src: ['assets/GigaPiano/95.mp3'] });
// var m96 = new Howl({ src: ['assets/GigaPiano/96.mp3'] });
// var m97 = new Howl({ src: ['assets/GigaPiano/97.mp3'] });
// var m98 = new Howl({ src: ['assets/GigaPiano/98.mp3'] });
// var m99 = new Howl({ src: ['assets/GigaPiano/99.mp3'] });
// var m100 = new Howl({ src: ['assets/GigaPiano/100.mp3'] });
// var m101 = new Howl({ src: ['assets/GigaPiano/101.mp3'] });
// var m102 = new Howl({ src: ['assets/GigaPiano/102.mp3'] });
// var m103 = new Howl({ src: ['assets/GigaPiano/103.mp3'] });
// var m104 = new Howl({ src: ['assets/GigaPiano/104.mp3'] });
// var m105 = new Howl({ src: ['assets/GigaPiano/105.mp3'] });
// var m106 = new Howl({ src: ['assets/GigaPiano/106.mp3'] });
// var m107 = new Howl({ src: ['assets/GigaPiano/107.mp3'] });
// var m108 = new Howl({ src: ['assets/GigaPiano/108.mp3'] });

var m21 = new Howl({ src: ['assets/Yamahac3/mcg_mf_021.mp3'] });
var m22 = new Howl({ src: ['assets/Yamahac3/mcg_mf_022.mp3'] });
var m23 = new Howl({ src: ['assets/Yamahac3/mcg_mf_023.mp3'] });
var m24 = new Howl({ src: ['assets/Yamahac3/mcg_mf_024.mp3'] });
var m25 = new Howl({ src: ['assets/Yamahac3/mcg_mf_025.mp3'] });
var m26 = new Howl({ src: ['assets/Yamahac3/mcg_mf_026.mp3'] });
var m27 = new Howl({ src: ['assets/Yamahac3/mcg_mf_027.mp3'] });
var m28 = new Howl({ src: ['assets/Yamahac3/mcg_mf_028.mp3'] });
var m29 = new Howl({ src: ['assets/Yamahac3/mcg_mf_029.mp3'] });
var m30 = new Howl({ src: ['assets/Yamahac3/mcg_mf_030.mp3'] });
var m31 = new Howl({ src: ['assets/Yamahac3/mcg_mf_031.mp3'] });
var m32 = new Howl({ src: ['assets/Yamahac3/mcg_mf_032.mp3'] });
var m33 = new Howl({ src: ['assets/Yamahac3/mcg_mf_033.mp3'] });
var m34 = new Howl({ src: ['assets/Yamahac3/mcg_mf_034.mp3'] });
var m35 = new Howl({ src: ['assets/Yamahac3/mcg_mf_035.mp3'] });
var m36 = new Howl({ src: ['assets/Yamahac3/mcg_mf_036.mp3'] });
var m37 = new Howl({ src: ['assets/Yamahac3/mcg_mf_037.mp3'] });
var m38 = new Howl({ src: ['assets/Yamahac3/mcg_mf_038.mp3'] });
var m39 = new Howl({ src: ['assets/Yamahac3/mcg_mf_039.mp3'] });
var m40 = new Howl({ src: ['assets/Yamahac3/mcg_mf_040.mp3'] });
var m41 = new Howl({ src: ['assets/Yamahac3/mcg_mf_041.mp3'] });
var m42 = new Howl({ src: ['assets/Yamahac3/mcg_mf_042.mp3'] });
var m43 = new Howl({ src: ['assets/Yamahac3/mcg_mf_043.mp3'] });
var m44 = new Howl({ src: ['assets/Yamahac3/mcg_mf_044.mp3'] });
var m45 = new Howl({ src: ['assets/Yamahac3/mcg_mf_045.mp3'] });
var m46 = new Howl({ src: ['assets/Yamahac3/mcg_mf_046.mp3'] });
var m47 = new Howl({ src: ['assets/Yamahac3/mcg_mf_047.mp3'] });
var m48 = new Howl({ src: ['assets/Yamahac3/mcg_mf_048.mp3'] });
var m49 = new Howl({ src: ['assets/Yamahac3/mcg_mf_049.mp3'] });
var m50 = new Howl({ src: ['assets/Yamahac3/mcg_mf_050.mp3'] });
var m51 = new Howl({ src: ['assets/Yamahac3/mcg_mf_051.mp3'] });
var m52 = new Howl({ src: ['assets/Yamahac3/mcg_mf_052.mp3'] });
var m53 = new Howl({ src: ['assets/Yamahac3/mcg_mf_053.mp3'] });
var m54 = new Howl({ src: ['assets/Yamahac3/mcg_mf_054.mp3'] });
var m55 = new Howl({ src: ['assets/Yamahac3/mcg_mf_055.mp3'] });
var m56 = new Howl({ src: ['assets/Yamahac3/mcg_mf_056.mp3'] });
var m57 = new Howl({ src: ['assets/Yamahac3/mcg_mf_057.mp3'] });
var m58 = new Howl({ src: ['assets/Yamahac3/mcg_mf_058.mp3'] });
var m59 = new Howl({ src: ['assets/Yamahac3/mcg_mf_059.mp3'] });
var m60 = new Howl({ src: ['assets/Yamahac3/mcg_mf_060.mp3'] });
var m61 = new Howl({ src: ['assets/Yamahac3/mcg_mf_061.mp3'] });
var m62 = new Howl({ src: ['assets/Yamahac3/mcg_mf_062.mp3'] });
var m63 = new Howl({ src: ['assets/Yamahac3/mcg_mf_063.mp3'] });
var m64 = new Howl({ src: ['assets/Yamahac3/mcg_mf_064.mp3'] });
var m65 = new Howl({ src: ['assets/Yamahac3/mcg_mf_065.mp3'] });
var m66 = new Howl({ src: ['assets/Yamahac3/mcg_mf_066.mp3'] });
var m67 = new Howl({ src: ['assets/Yamahac3/mcg_mf_067.mp3'] });
var m68 = new Howl({ src: ['assets/Yamahac3/mcg_mf_068.mp3'] });
var m69 = new Howl({ src: ['assets/Yamahac3/mcg_mf_069.mp3'] });
var m70 = new Howl({ src: ['assets/Yamahac3/mcg_mf_070.mp3'] });
var m71 = new Howl({ src: ['assets/Yamahac3/mcg_mf_071.mp3'] });
var m72 = new Howl({ src: ['assets/Yamahac3/mcg_mf_072.mp3'] });
var m73 = new Howl({ src: ['assets/Yamahac3/mcg_mf_073.mp3'] });
var m74 = new Howl({ src: ['assets/Yamahac3/mcg_mf_074.mp3'] });
var m75 = new Howl({ src: ['assets/Yamahac3/mcg_mf_075.mp3'] });
var m76 = new Howl({ src: ['assets/Yamahac3/mcg_mf_076.mp3'] });
var m77 = new Howl({ src: ['assets/Yamahac3/mcg_mf_077.mp3'] });
var m78 = new Howl({ src: ['assets/Yamahac3/mcg_mf_078.mp3'] });
var m79 = new Howl({ src: ['assets/Yamahac3/mcg_mf_079.mp3'] });
var m80 = new Howl({ src: ['assets/Yamahac3/mcg_mf_080.mp3'] });
var m81 = new Howl({ src: ['assets/Yamahac3/mcg_mf_081.mp3'] });
var m82 = new Howl({ src: ['assets/Yamahac3/mcg_mf_082.mp3'] });
var m83 = new Howl({ src: ['assets/Yamahac3/mcg_mf_083.mp3'] });
var m84 = new Howl({ src: ['assets/Yamahac3/mcg_mf_084.mp3'] });
var m85 = new Howl({ src: ['assets/Yamahac3/mcg_mf_085.mp3'] });
var m86 = new Howl({ src: ['assets/Yamahac3/mcg_mf_086.mp3'] });
var m87 = new Howl({ src: ['assets/Yamahac3/mcg_mf_087.mp3'] });
var m88 = new Howl({ src: ['assets/Yamahac3/mcg_mf_088.mp3'] });
var m89 = new Howl({ src: ['assets/Yamahac3/mcg_mf_089.mp3'] });
var m90 = new Howl({ src: ['assets/Yamahac3/mcg_mf_090.mp3'] });
var m91 = new Howl({ src: ['assets/Yamahac3/mcg_mf_091.mp3'] });
var m92 = new Howl({ src: ['assets/Yamahac3/mcg_mf_092.mp3'] });
var m93 = new Howl({ src: ['assets/Yamahac3/mcg_mf_093.mp3'] });
var m94 = new Howl({ src: ['assets/Yamahac3/mcg_mf_094.mp3'] });
var m95 = new Howl({ src: ['assets/Yamahac3/mcg_mf_095.mp3'] });
var m96 = new Howl({ src: ['assets/Yamahac3/mcg_mf_096.mp3'] });
var m97 = new Howl({ src: ['assets/Yamahac3/mcg_mf_097.mp3'] });
var m98 = new Howl({ src: ['assets/Yamahac3/mcg_mf_098.mp3'] });
var m99 = new Howl({ src: ['assets/Yamahac3/mcg_mf_099.mp3'] });
var m100 = new Howl({ src: ['assets/Yamahac3/mcg_mf_100.mp3'] });
var m101 = new Howl({ src: ['assets/Yamahac3/mcg_mf_101.mp3'] });
var m102 = new Howl({ src: ['assets/Yamahac3/mcg_mf_102.mp3'] });
var m103 = new Howl({ src: ['assets/Yamahac3/mcg_mf_103.mp3'] });
var m104 = new Howl({ src: ['assets/Yamahac3/mcg_mf_104.mp3'] });
var m105 = new Howl({ src: ['assets/Yamahac3/mcg_mf_105.mp3'] });
var m106 = new Howl({ src: ['assets/Yamahac3/mcg_mf_106.mp3'] });
var m107 = new Howl({ src: ['assets/Yamahac3/mcg_mf_107.mp3'] });
var m108 = new Howl({ src: ['assets/Yamahac3/mcg_mf_108.mp3'] });
var m109 = new Howl({ src: ['assets/Yamahac3/mcg_mf_109.mp3'] });
var m110 = new Howl({ src: ['assets/Yamahac3/mcg_mf_110.mp3'] });
var m111 = new Howl({ src: ['assets/Yamahac3/mcg_mf_111.mp3'] });
var m112 = new Howl({ src: ['assets/Yamahac3/mcg_mf_112.mp3'] });
var m113 = new Howl({ src: ['assets/Yamahac3/mcg_mf_113.mp3'] });
var m114 = new Howl({ src: ['assets/Yamahac3/mcg_mf_114.mp3'] });
var m115 = new Howl({ src: ['assets/Yamahac3/mcg_mf_115.mp3'] });
var m116 = new Howl({ src: ['assets/Yamahac3/mcg_mf_116.mp3'] });
var m117 = new Howl({ src: ['assets/Yamahac3/mcg_mf_117.mp3'] });
var m118 = new Howl({ src: ['assets/Yamahac3/mcg_mf_118.mp3'] });
var m119 = new Howl({ src: ['assets/Yamahac3/mcg_mf_119.mp3'] });
var m120 = new Howl({ src: ['assets/Yamahac3/mcg_mf_120.mp3'] });
var m121 = new Howl({ src: ['assets/Yamahac3/mcg_mf_121.mp3'] });
var m122 = new Howl({ src: ['assets/Yamahac3/mcg_mf_122.mp3'] });
var m123 = new Howl({ src: ['assets/Yamahac3/mcg_mf_123.mp3'] });
var m124 = new Howl({ src: ['assets/Yamahac3/mcg_mf_124.mp3'] });
var m125 = new Howl({ src: ['assets/Yamahac3/mcg_mf_125.mp3'] });
var m126 = new Howl({ src: ['assets/Yamahac3/mcg_mf_126.mp3'] });
var m127 = new Howl({ src: ['assets/Yamahac3/mcg_mf_127.mp3'] });

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
let noteIndex = 0;
let midi;
const ParseMidi = async () => {
  midi = await Midi.fromUrl('assets/midiFiles/allTurca2.mid');
  console.log(
    '🚀 ~ file: howlerPlay.js ~ line 307 ~ OsmdNoteOn ~ midi.tracks[0].notes',
    midi.tracks[0].notes
  );
  // console.log(
  //   '🚀 ~ file: howlerPlay.js ~ line 307 ~ OsmdNoteOn ~ midi.tracks[0].notes',
  //   midi.tracks[1].notes
  // );
  console.log(
    '🚀 ~ file: howlerPlay.js ~ line 302 ~ ParseMidi ~  midi.tracks',
    midi.tracks
  );
};
ParseMidi();
window.m60 = m60;
function OsmdNoteOn() {
  // for (let i = 0; i < midi.tracks[0].notes; i++) {
  let noteName = midi.tracks[0].notes[noteIndex];

  noteName = midiToHowl[midi.tracks[0].notes[noteIndex]['midi']];

  noteName.volume(midi.tracks[0].notes[noteIndex]['velocity']); //midi.tracks[0].notes[noteIndex]['velocity']);
  noteName.play();

  noteName.fade(
    midi.tracks[0].notes[noteIndex]['velocity'],
    0,
    midi.tracks[0].notes[noteIndex]['durationTicks'] * 16
  );
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
function OsmdNoteOn2() {
  noteIndex = 0;
  OsmdNoteOn();
}
// setTimeout(() => OsmdNoteOn(), 1000);
window.OsmdNoteOn2 = OsmdNoteOn2;

const HowlerPlay = async () => {
  //define the sounds

  return <div></div>;
};
export default HowlerPlay;
