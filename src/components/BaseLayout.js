import React, { useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import { Route, Routes } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

import AnimationOff from './animations/AnimationOff';
import Settings from './SettingsMenu';

export default function BaseLayout() {
  let settings = !JSON.parse(localStorage.getItem('settings'))
    ? {}
    : JSON.parse(localStorage.getItem('settings'));

  const [darkMode, setDarkMode] = useState(
    !settings['darkMode'] ? false : settings['darkMode']
  );
  const [animationOnOff, setanimationOnOff] = useState(
    !settings['animationOnOff'] ? 'on' : settings['animationOnOff']
  );
  window.animationOnOff = animationOnOff;

  function handleClick() {
    setDarkMode(!darkMode);
    settings['darkMode'] = !darkMode;
    localStorage.setItem('settings', JSON.stringify(settings));
    console.log(
      '🚀 ~ file: BaseLayout.js ~ line 28 ~ handleClick ~ darkMode',
      darkMode
    );

    // darkMode === false ? FireflyAni() : DandelionAni();
    if (darkMode === false && animationOnOff === 'on') {
      FireflyAni();
    } else {
      if (darkMode === true && animationOnOff === 'on') {
        DandelionAni();
      }
    }
    // DandelionFirefly()
    console.log(
      '🚀 ~ file: BaseLayout.js ~ line 31 ~ BaseLayout ~ Style',
      document.getElementsByClassName('dark')[0].color
    );
  }

  function DandelionAni() {
    document.getElementsByClassName('container')[0].style.display = 'none';
    document.getElementsByClassName('dandelionAni')[0].style.display = 'block';
  }

  function FireflyAni() {
    document.getElementsByClassName('dandelionAni')[0].style.display = 'none';
    document.getElementsByClassName('container')[0].style.display = 'block';
  }

  function PopUpMenu() {
    let menu = document.getElementsByClassName('menu')[0];
    if (menu.style.display === 'none') {
      document.getElementsByClassName('menu')[0].style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

  return (
    <div>
      <button
        id="settingsButton"
        variant="outlined"
        class="fa fa-cog"
        onClick={PopUpMenu}
        style={{
          position: 'fixed',
          top: '5px',
          left: '5px',
          zIndex: 3,
          fontSize: '4vh',
          padding: '5px',
          color: darkMode === true ? 'white' : 'grey',
          background: 'none',
        }}
      ></button>
      <Box className={darkMode ? Style.dark : Style.light}>
        <AnimationOff darkMode={darkMode} />
        <Settings
          darkMode={darkMode}
          handleClick={handleClick}
          animationOnOff={animationOnOff}
          setanimationOnOff={setanimationOnOff}
        />
        <Grid
          container
          display={'flex'}
          flexDirection={'column'}
          minHeight={'100vh'}
          justifyContent={'space-between'}
        >
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item flexGrow={1}>
            <Routes>
              <Route exact path={'/'} element={<Home />} />
              <Route exact path={'/about'} element={<About />} />
              <Route exact path={'/portfolio'} element={<Portfolio />} />
            </Routes>
          </Grid>
          <Grid item>
            <Box
              component={'footer'}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              py={'1.5rem'}
              sx={{ opacity: 0.4 }}
              width={'100%'}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
