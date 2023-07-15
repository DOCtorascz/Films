import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function YearRelise({popular, handlePopular}) {
  return (
    <>
      <Box sx={{ marginBottom: '30px', width: '100%' }}>
        <h2>Год релиза:</h2>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          min={1950}
          max={2022}
          value={popular.RELISE}
          onChange={handlePopular}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    </>
  )
}