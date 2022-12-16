import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Stack } from '@mui/system';


const currencies = [
  {
    value: 'USD',
    label: '$ USD',
  },
  {
    value: 'EUR',
    label: '€ EUR',
  },
  {
    value: 'BTC',
    label: '฿ BTC',
  },
  {
    value: 'JPY',
    label: '¥ JPY',
  },
];





export default function Money() {
  return (
    <React.Fragment>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter value"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <TextField
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            sx={{ ml: 1, flex: 1 }}
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Paper>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter value"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <TextField
            id="outlined-select-currency"
            select
            defaultValue="EUR"
            sx={{ ml: 1, flex: 1 }}
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Paper>
      </Stack>
    </React.Fragment>

  );
}