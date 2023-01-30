import React from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';
import { HashRouter } from 'react-router-dom';

import Dandelion from './components/animations/DandelionAni';
import Firefly from './components/animations/FireflyAni';
import HowlerPlay from './components/playMusic/howlerPlay';

import * as soundP from './components/playMusic/pizzicatoL';

// import ReactMidiPlayerDemo from './components/midiReact/MidiReactPlayer';
// import MidiParser from './components/midiParser/MidiParser';
// import Settings from "./components/SettingsMenu"

// setTimeout(() => { document.getElementsByClassName('container')[0].style.display = 'none' }, 10);

// function PopUpMenu() {
//    let menu = document.getElementsByClassName('menu')[0];
//    if (menu.style.display === 'none') {
//    document.getElementsByClassName('menu')[0].style.display = 'block'
// } else {
//    menu.style.display = 'none'
// }
// }

function App() {
  return (
    <div>
      {/* <button id="button"
        variant="outlined"
        class="fa fa-cog" 
        onClick={PopUpMenu} style={{position: 'fixed', top: '5px', left: '5px', zIndex: 3, fontSize: '50px', color: 'grey', background: 'none'}}></button> */}
      {/* <MidiParser /> */}
      {/* <ReactMidiPlayerDemo /> */}
      <Dandelion />
      {/* <soundP /> */}
      <Firefly />
      {/* <HowlerPlay /> */}
      <HashRouter>
        <BaseLayout />
      </HashRouter>
    </div>
  );
}

export default App;
