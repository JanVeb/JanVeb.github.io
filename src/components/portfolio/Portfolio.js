import React from 'react';
import PortfolioBlock from './PortfolioBlock';
import { Box, Grid } from '@mui/material';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    <Box>
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
        marginTop={'75px'}
      >
        {info.portfolio.map((project) => (
          <Grid item xs={8} md={8}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
