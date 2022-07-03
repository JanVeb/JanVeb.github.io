import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {info} from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
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
        active: 'portfolio'
    }
]



export default function Navbar({darkMode, handleClick, animationOnOff, setanimationOnOff}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));


    function AnimationOnOff() {
        if (animationOnOff === 'on') {
        document.getElementsByClassName('dandelionAni')[0].style.display = 'none'
        document.getElementsByClassName('container')[0].style.display = 'none'
        setanimationOnOff('off')
        } else {
            if (darkMode === false) {
            document.getElementsByClassName('dandelionAni')[0].style.display = 'block'
            setanimationOnOff('on')
        } else {
            if (darkMode === true) {
        document.getElementsByClassName('container')[0].style.display = 'block'
        setanimationOnOff('on')
        }
    }
     }
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
          }}
          >
            
        <Box component={'nav'} margin={'20px'} marginTop={'100px'} userSelect={'none'}>
            <Box component={'ul'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '2rem', md: '8rem'}}
                 textTransform={'lowercase'} fontSize={'3vh'}>
                {links.map(link => (
                    <Link to={link.to} onClick={() => setActive(link.active)}>
                        <Box component={'li'} className={(link.active === active && !link.type) && Style.active} sx={{borderImageSource: info.gradient }} paddingTop={'10px'} userSelect={'none'}>
                            {!link.type && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Box>
                    </Link>
                ))}
                <hr style={{width: '100%', textAlign: 'left', marginLeft: 0,  padding: '10px'}}></hr>
                <div style={{ userSelect: 'none', paddingTop: '10px'}}>
                <Toggler style={{ userSelect: 'none'}} darkMode={darkMode} handleClick={handleClick}/>
                </div>
                <p id="disTextSel" onClick={() => setActive(AnimationOnOff())} style={{ userSelect: 'none', paddingTop: '10px'}}><span>animation: </span><span>{animationOnOff}</span>  </p>
            </Box>
        </Box>
        </div>
    )
}