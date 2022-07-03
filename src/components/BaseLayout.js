import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

import AnimationOff from "./animations/AnimationOff"

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);
   const [animationOnOff, setanimationOnOff] = useState('on');

   function handleClick() {
      setDarkMode(!darkMode);
      // darkMode === false ? FireflyAni() : DandelionAni();
      if (darkMode === false && animationOnOff === 'on') {
         FireflyAni()
      } else {
         if (darkMode === true && animationOnOff === 'on') {
         DandelionAni()
      }
   }
      // DandelionFirefly()
      console.log("🚀 ~ file: BaseLayout.js ~ line 31 ~ BaseLayout ~ Style", document.getElementsByClassName('dark')[0].color)
   }

   function DandelionAni() {
      document.getElementsByClassName('container')[0].style.display = 'none'
      document.getElementsByClassName('dandelionAni')[0].style.display = 'block'
   }

   function FireflyAni() {
      document.getElementsByClassName('dandelionAni')[0].style.display = 'none'
      document.getElementsByClassName('container')[0].style.display = 'block'
   }

   return (
      
      <Box className={darkMode ? Style.dark : Style.light}>
         <AnimationOff darkMode={darkMode}/>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick} animationOnOff={animationOnOff} setanimationOnOff={setanimationOnOff}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.4}} width={'100%'}>
                  <p>template created with &hearts; by <a href={'https://paytonpierce.dev'}>Payton Pierce</a></p>
                  <p>&copy; 2022</p>
               </Box>
            </Grid>
         </Grid>
         
      </Box>
   )
}

