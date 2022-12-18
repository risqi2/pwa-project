import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Stack } from "@mui/system";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Spin from "react-reveal/Spin";
import { Fade } from "react-reveal";

import { create, all } from "mathjs";
import {
  Alert,
  AlertTitle,
  Avatar,
  ListItemIcon,
  ListItemText,
  MenuList,
  Typography,
} from "@mui/material";

import { deepOrange, green, blue, blueGrey } from "@mui/material/colors";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ScaleIcon from "@mui/icons-material/Scale";
import StraightenIcon from "@mui/icons-material/Straighten";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import RubberBand from "react-reveal/RubberBand";
import { Roll } from "react-reveal";
const boxColor = "linear-gradient(to right, #f7971e, #ffd200)";

const config = {};
const math = create(all, config);

const converters_type = [
  {
    id: 1,
    value: "temp",
    name: "Temperature converter",
    icon: <DeviceThermostatIcon />,
  },
  {
    id: 2,
    value: "length",
    name: "Length converter",
    icon: <StraightenIcon />,
  },
  {
    id: 3,
    value: "weight",
    name: "Weight converter",
    icon: <ScaleIcon />,
  },
  {
    id: 4,
    value: "volume",
    name: "Volume converter",
    icon: <ViewInArIcon />,
  },
  {
    id: 5,
    value: "time",
    name: "Time converter",
    icon: <AccessTimeIcon />,
  },
];

const temp_unit_list = [
  {
    value: "degC",
    label: "celcius",
  },
  {
    value: "degF",
    label: "fahrenheit",
  },
  {
    value: "K",
    label: "kelvin",
  },
];

const length_unit_list = [
  {
    value: "m",
    label: "meter",
  },
  {
    value: "in",
    label: "inch",
  },
  {
    value: "ft",
    label: "foot",
  },
  {
    value: "yd",
    label: "yard",
  },
  {
    value: "mi",
    label: "mile",
  },
  {
    value: "rd",
    label: "rod",
  },
];

const weight_unit_list = [
  {
    value: "g",
    label: "gram",
  },
  {
    value: "kg",
    label: "kilogram",
  },
  {
    value: "ton",
    label: "ton",
  },
  {
    value: "oz",
    label: "ounce",
  },
  {
    value: "lbs",
    label: "poundmass",
  },
];

const volume_unit_list = [
  {
    value: "m3",
    label: "m3",
  },
  {
    value: "L",
    label: "litre",
  },
  {
    value: "cc",
    label: "cc",
  },
  {
    value: "teaspoon",
    label: "teaspoon",
  },
  {
    value: "tablespoon",
    label: "tablespoon",
  },
];

const time_unit_list = [
  {
    value: "s",
    label: "second",
  },
  {
    value: "min",
    label: "minute",
  },
  {
    value: "hr",
    label: "hour",
  },
  {
    value: "days",
    label: "day",
  },
  {
    value: "weeks",
    label: "week",
  },
  {
    value: "months",
    label: "month",
  },
  {
    value: "years",
    label: "year",
  },
  {
    value: "decades",
    label: "decade",
  },
  {
    value: "centuries",
    label: "century",
  },
  {
    value: "millennia",
    label: "millennium",
  },
];

export default function Converter() {
  const [converterType, setConverterType] = React.useState("temp");

  const changeConverterType = (name) => {
    setConverterType(name);
  };

  const [unitList, setUnitList] = React.useState([]);

  const [error, setError] = React.useState("");
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [temp, setTemp] = React.useState("");
  const [temp2, setTemp2] = React.useState("");
  const [switchClicked, setSwitchClicked] = React.useState(0);
  const [start, setStart] = React.useState(false);

  const convertTemp2 = () => {
    console.log("convertTemp2's running");
    try {
      let number1 = value.toString();
      let string = number1.concat(" ", temp);
      let a = math.unit(string);
      let result = a.toNumber(temp2);
      console.log(string);
      console.log(result);
      setValue2(result);
      setError("");
    } catch (err) {
      setError("something went wrong ! ");
    }
  };

  const handleChange = (event) => {
    console.log("Im running");
    setValue(event.target.value);
    setStart(true);
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

  const changeStarterUnit = (a, b) => {
    console.log("changestarterrunning");
    setTemp(a.toString());
    setTemp2(b.toString());
  };

  React.useEffect(() => {
    switch (converterType) {
      case "temp":
        console.log("Temp is picked");
        setUnitList(temp_unit_list);
        changeStarterUnit(temp_unit_list[0].value, temp_unit_list[1].value);
        break;
      case "length":
        console.log("Length is picked");
        setUnitList(length_unit_list);
        changeStarterUnit(length_unit_list[0].value, length_unit_list[1].value);
        break;
      case "weight":
        console.log("weight is picked");
        setUnitList(weight_unit_list);
        changeStarterUnit(weight_unit_list[0].value, weight_unit_list[1].value);
        break;
      case "volume":
        console.log("volume is picked");
        setUnitList(volume_unit_list);
        changeStarterUnit(volume_unit_list[0].value, volume_unit_list[1].value);
        break;
      case "time":
        console.log("time is picked");
        setUnitList(time_unit_list);
        changeStarterUnit(time_unit_list[0].value, time_unit_list[1].value);
        break;
      default:
        break;
    }
  }, [converterType]);

  React.useEffect(() => {
    if (start == true) {
      convertTemp2();
    }
  }, [value, temp, temp2]);

  const switchButton = () => {
    setSwitchClicked(switchClicked + 1);
    const temporaryValue1 = value;
    const temporaryValue2 = value2;
    const temporaryTemp1 = temp;
    const temporaryTemp2 = temp2;
    setValue(temporaryValue2);
    setValue2(temporaryValue1);
    setTemp(temporaryTemp2);
    setTemp2(temporaryTemp1);
  };

  return (
    <React.Fragment>
      <Roll left duration={3000}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: "20px" }}
        >
          <Paper sx={{ py: "10px", width: "100%", background: boxColor }}>
            <RubberBand spy={converterType}>
              <MenuList>
                {converters_type.map((obj) => (
                  <>
                    <MenuItem
                      sx={
                        obj.value == converterType.toString()
                          ? { bgcolor: "#edf2f4" }
                          : {}
                      }
                      key={obj.id}
                      onClick={() => {
                        changeConverterType(obj.value);
                      }}
                    >
                      <ListItemIcon>
                        <Avatar
                          sx={
                            obj.value == converterType.toString()
                              ? { bgcolor: green[500] }
                              : { bgcolor: blue[500] }
                          }
                          variant="rounded"
                        >
                          {obj.icon}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText sx={{ ml: "10px" }}>
                        {obj.name}
                      </ListItemText>
                      {obj.value == converterType.toString() ? (
                        <CheckCircleIcon color="success" />
                      ) : (
                        <CheckCircleIcon color="disabled" />
                      )}
                    </MenuItem>
                  </>
                ))}
              </MenuList>
            </RubberBand>
          </Paper>
        </Stack>
      </Roll>
      <Roll right duration={3000}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Fade left duration={2000} spy={converterType}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
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
              {unitList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Fade>

        <Spin spy={switchClicked}>
          <IconButton
            color="primary"
            sx={{ width: "50px", height: "50px" }}
            onClick={switchButton}
          >
            <ChangeCircleIcon sx={{ width: "50px", height: "50px" }} />
          </IconButton>
        </Spin>

        <Fade right duration={2000} spy={converterType}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <Typography sx={{ ml: 1, flex: 1 }}>{value2}</Typography>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <TextField
              id="outlined-select-currency"
              select
              sx={{ ml: 1, flex: 1 }}
              variant="standard"
              value={temp2}
              onChange={tempChange2}
            >
              {unitList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Fade>

        {error && (
          <Alert severity="error">
            <AlertTitle>Something went wrong</AlertTitle>
            Check the value, make sure it's a number ! —{" "}
            <strong>Try again</strong>
          </Alert>
        )}
      </Stack>
      </Roll>
    </React.Fragment>
  );
}
