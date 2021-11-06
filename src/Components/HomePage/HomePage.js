import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MortgageCalculator from '../MortgageCalculator/MortgageCalculator';
import DoughnutChart from '../Charts/DoughnutChart';
import Results from '../Results/Results';
import './homepage.scss';

export default function HomePage() {
  return (
    <div className="container" id="home-container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MortgageCalculator />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Results />
            <DoughnutChart />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
