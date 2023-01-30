import { Midi } from '@tonejs/midi';
import React from 'react';

const MidiParser = async () => {
  // const midi = new Midi();
  const midi = await Midi.fromUrl('assets/midiFiles/allaTurca.mid');
  console.log(
    '🚀 ~ file: MidiParser.js ~ line 5 ~ MidiParser ~ midi',
    midi.tracks[0].notes
  );
  // const midi = new Midi(midiData)

  return <div></div>;
};
export default MidiParser;
