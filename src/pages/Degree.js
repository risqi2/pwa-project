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
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Spin from 'react-reveal/Spin';
import { Fade } from 'react-reveal';

import { create, all } from "mathjs";
import { Alert, AlertTitle, Typography } from '@mui/material';
const config = {};
const math = create(all, config);


const conv = [
  {
    value: 'K',
    label: 'kelvin',
  },
  {
    value: 'degC',
    label: 'celcius',
  },
  {
    value: 'degF',
    label: 'fahrenheit',
  },
];


export default function Degree() {
  const [error, setError] = React.useState("")
  const [value, setValue] = React.useState();
  const [value2, setValue2] = React.useState();
  const [temp, setTemp] = React.useState('degC');
  const [temp2, setTemp2] = React.useState('degF');
  const [switchClicked, setSwitchClicked] = React.useState(0)
  const [start, setStart] = React.useState(false)

  const convertTemp2 = () => {
    console.log("convertTemp2's running")
    try {
      let number1 = value.toString()
      let string = number1.concat(" ", temp)
      let a = math.unit(string)
      let result = a.toNumber(temp2)
      console.log(string)
      console.log(result)
      setValue2(result)
      setError("")
    } catch (err) {
      setError("something went wrong ! ")
    }
  }



  const handleChange = (event) => {
    console.log("Im running")
    setValue(event.target.value);
    setStart(true)
  };
  // const handleChange2 = (event) => {
  //   setValue2(event.target.value);
  // };
  const tempChange = (event) => {
    setTemp(event.target.value);
  };
  const tempChange2 = (event) => {
    setTemp2(event.target.value);
  };


  React.useEffect(() => {
    if (start == true) {
      convertTemp2();
    }
  }, [value, temp, temp2])

  const switchButton = () => {
    setSwitchClicked(switchClicked + 1)
    const temporaryValue1 = value
    const temporaryValue2 = value2
    const temporaryTemp1 = temp
    const temporaryTemp2 = temp2
    setValue(temporaryValue2)
    setValue2(temporaryValue1)
    setTemp(temporaryTemp2)
    setTemp2(temporaryTemp1)
  }

  return (
    <React.Fragment>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Fade left>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter value"
              value={value}
              onChange={handleChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <TextField
              id="outlined-select-currency"
              select
              sx={{ ml: 1, flex: 1 }}
              variant="standard"
              value={temp}
              onChange={tempChange}
            >
              {conv.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Fade>

        <Spin spy={switchClicked}>
          <IconButton color="primary" sx={{ width: '50px', height: '50px' }} onClick={switchButton}>
            <ChangeCircleIcon sx={{ width: '50px', height: '50px' }} />
          </IconButton>
        </Spin>

        <Fade right>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >

            <Typography sx={{ ml: 1, flex: 1 }}>
              {value2}
            </Typography>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <TextField
              id="outlined-select-currency"
              select
              sx={{ ml: 1, flex: 1 }}
              variant="standard"
              value={temp2}
              onChange={tempChange2}
            >

              {conv.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Fade>

        {error && (
          <Alert severity='error'>
            <AlertTitle>
              Something went wrong
            </AlertTitle>
            Check the value, make sure it's a number ! — <strong>Try again</strong>
          </Alert>
        )}

      </Stack>
    </React.Fragment>

  );
}
