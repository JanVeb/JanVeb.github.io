import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

import Dandelion from "./components/animations/DandelionAni"
import Firefly from "./components/animations/FireflyAni"


// setTimeout(() => { document.getElementsByClassName('container')[0].style.display = 'none' }, 10);

function PopUpMenu() {
   let menu = document.getElementsByClassName('menu')[0];
   if (menu.style.display === 'none') {
   document.getElementsByClassName('menu')[0].style.display = 'block'
} else {
   menu.style.display = 'none'
}
}

function App() {
   return (
      <div>
         {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link> */}
        {/* <button class="fa fa-bars" className="menuButton" style={{position: 'absolute', top: '20px', left: '20px', zIndex: 3, fontSize: '80px'}} onClick={PopUpMenu}></button> */}
        <button id="button"
        variant="outlined"
        class="fa fa-list" 
        onClick={PopUpMenu} style={{position: 'fixed', top: '20px', left: '20px', zIndex: 3, fontSize: '50px'}}>&nbsp;</button>
       <Dandelion />
         <Firefly />
         {/* <Menu /> */}
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
