import './images.scss';
import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, inDev, source, title, netlify, youtube, info } = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        component={'img'}
        src={image}
        alt={'mockup'}
        maxHeight={'80vh'}
        maxWidth={'95%'}
        // minHeight={'300px'}
        // minHeight={'300px'}
        py={'0.5rem'}
      />
      <Box
        component={'img2'}
        src={image}
        alt={'mockup'}
        // maxHeight={'80vh'}
        maxWidth={'80%'}

        // minHeight={'300px'}
        // minHeight={'300px'}
      />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'0.5rem'}
        py={'0.5rem'}
      >
        <div style={{ display: 'flex' }}>
          <Box
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            display={!live ? 'none' : 'block'}
          >
            <IconLink
              link={live}
              title={'Live'}
              icon={'fab fa-google-play'}
              // icon={'fa fa-safari'}
              left={'20px'}
            />
          </Box>
          <Box
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            display={!inDev ? 'none' : 'block'}
          >
            <IconLink
              link={inDev}
              title={'in Development'}
              icon={'fas fa-globe'}
              // icon={'fa fa-safari'}
              left={'20px'}
            />
          </Box>

          <Box
            display={!netlify ? 'none' : 'block'}
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            classNames={'netlifyIcon'}
            marginLeft={'5px'}
          >
            <IconLink
              link={netlify}
              title={'Netlify'}
              // icon={'fab fa-netlify'}
              // classNames={'netlifyIcon'}
              left={'20px'}
            />
          </Box>
          <Box
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            marginLeft={'5px'}
            style={{ display: !source ? 'none' : 'block' }}
          >
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
          </Box>
          <Box
            display={!youtube ? 'none' : 'block'}
            p={1}
            border={'2px solid black'}
            borderRadius={'25px'}
            marginLeft={'5px'}
          >
            <IconLink
              link={youtube}
              title={'YouTube'}
              icon={'fab fa-youtube'}
            />
          </Box>
        </div>
        <div style={{ display: 'flex' }}>
          {/* <IconLink icon={'fab fa-circle-info'}> </IconLink> */}
          <h1
            style={{ fontSize: '1rem', fontColor: 'white' }}
            // icon={'fab fa-circle-info'}
          >
            {info}
          </h1>
        </div>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
