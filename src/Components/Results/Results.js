import * as React from 'react';
import Paper from '@mui/material/Paper';
import './results.scss';
import { useSelector } from 'react-redux';
import { selectValue } from '../../Store/variables';

export default function SimplePaper() {
  const values = useSelector(selectValue);
  return (
    <div className="mc-results-outer">
      <Paper elevation={2}>
        <div className="mc-results-inner mb-3">
          <h2 className="pb-3">Summary</h2>
          <p>The Base Value is {values.base_val}</p>
          <p>The Multiplier 1 is {values.mul_1}</p>
          <p>The Multiplier 2 is {values.mul_2}</p>
        </div>
      </Paper>
    </div>
  );
}
