import './images.scss';
import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
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
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <IconLink
            link={live}
            title={'Live'}
            // icon={'fa fa-safari'}
            left={'20px'}
          />
        </Box>
        <Box
          p={1}
          border={'2px solid black'}
          borderRadius={'25px'}
          style={{ display: !source ? 'none' : 'block' }}
        >
          <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
