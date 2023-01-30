import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import './Navbar.module.scss';
import Toggler from './home/Toggler';
// import {Link, useLocation} from "react-router-dom";
import { Box } from '@mui/material';
import { info } from '../info/Info';

const links = [
  {
    name: 'Home',
    to: '/',
    active: 'home',
  },
  {
    name: 'About Me',
    to: '/about',
    active: 'about',
  },
  // {
  //     name: info.initials,
  //     type: 'initials',
  //     to: '/',
  //     active: 'home'
  // },
  {
    name: 'Portfolio',
    to: '/portfolio',
    active: 'portfolio',
  },
];

export default function Settings({
  darkMode,
  handleClick,
  animationOnOff,
  setanimationOnOff,
}) {
  // const location = useLocation()
  // const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

  function AnimationOnOff() {
    // let settings = JSON.parse(localStorage.getItem('settings'));
    let settings = !JSON.parse(localStorage.getItem('settings'))
      ? {}
      : JSON.parse(localStorage.getItem('settings'));
    if (animationOnOff === 'on') {
      document.getElementsByClassName('dandelionAni')[0].style.display = 'none';
      document.getElementsByClassName('container')[0].style.display = 'none';
      setanimationOnOff('off');
      settings['animationOnOff'] = 'off';
    } else {
      if (darkMode === false) {
        document.getElementsByClassName('dandelionAni')[0].style.display =
          'block';
        setanimationOnOff('on');
        settings['animationOnOff'] = 'on';
      } else {
        if (darkMode === true) {
          document.getElementsByClassName('container')[0].style.display =
            'block';
          setanimationOnOff('on');
          settings['animationOnOff'] = 'on';
        }
      }
    }
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  function StopPlay() {
    window.StopPlay();
  }

  return (
    <div
      class="menu"
      style={{
        height: 'fit-content',
        width: 'fit-content',
        display: 'none',
        position: 'fixed',
        zIndex: '2',
        color: 'white',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(30, 30, 30, 0.9)',
        userSelect: 'none',
        fontSize: '4vh',
      }}
    >
      <div
        class="menu"
        style={{
          marginTop: '10px',
          padding: '50px',
        }}
      >
        <Toggler
          style={{ userSelect: 'none' }}
          darkMode={darkMode}
          handleClick={handleClick}
        />

        <p
          id="disTextSel"
          onClick={AnimationOnOff}
          style={{ userSelect: 'none', paddingTop: '10px', fontSize: '5vh' }}
        >
          <span>animation: </span>
          <span>{animationOnOff}</span>{' '}
        </p>
        {/* <button onClick={StopPlay}>Stop</button> */}
      </div>
    </div>
  );
}
