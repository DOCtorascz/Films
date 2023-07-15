import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'popular',
    label: 'Пополурности',
  },
  {
    value: 'popularReverse',
    label: 'Топ',
  },
];

export default function CollapsList({ checks, valueCheks }) {
  // console.log(valueCheks.SORTON)
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { marginBottom: '30px', width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            onChange={checks}
            id="outlined-select-currency"
            select
            label="Сортировать по:"
            value={valueCheks.SORTON === 'popular' ? valueCheks.SORTON : 'popularReverse'}
          >
            {currencies.map((option) => (
              <MenuItem onClick={(event) => checks(event)} key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </>
  )
}