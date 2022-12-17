import {
  Container,
  Stack,
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

import { create, all } from "mathjs";
const config = {};
const math = create(all, config);

const buttons = [
  [
    {
      font: null,
      icon: <BackspaceIcon />,
      unicode: null,
      type: "erase",
    },
    {
      font: "7",
      icon: null,
      unicode: null,
      type: "number",
      action: 7,
    },
    {
      font: "4",
      icon: null,
      unicode: null,
      type: "number",
      action: 4,
    },
    {
      font: "1",
      icon: null,
      unicode: null,
      type: "number",
      action: 1,
    },
    {
      font: "0",
      icon: null,
      unicode: null,
      type: "number",
      action: 0,
    },
  ],
  [
    {
      font: "(",
      icon: null,
      unicode: null,
      type: "operator",
      action: "(",
    },
    {
      font: "8",
      icon: null,
      unicode: null,
      type: "number",
      action: 8,
    },
    {
      font: "5",
      icon: null,
      unicode: null,
      type: "number",
      action: 5,
    },
    {
      font: "2",
      icon: null,
      unicode: null,
      type: "number",
      action: 2,
    },
    {
      font: ".",
      icon: null,
      unicode: null,
      type: "number",
      action: ".",
    },
  ],
  [
    {
      font: ")",
      icon: null,
      unicode: null,
      type: "operator",
      action: ")",
    },
    {
      font: "9",
      icon: null,
      unicode: null,
      type: "number",
      action: 9,
    },
    {
      font: "6",
      icon: null,
      unicode: null,
      type: "number",
      action: 6,
    },
    {
      font: "3",
      icon: null,
      unicode: null,
      type: "number",
      action: 3,
    },
    {
      font: "%",
      icon: null,
      unicode: null,
      type: "operator",
      action: "%",
    },
  ],
  [
    {
      font: "AC",
      icon: null,
      unicode: null,
      type: "back",
    },
    {
      font: null,
      icon: null,
      unicode: "\u00F7",
      type: "operator",
      action: "/",
    },
    {
      font: null,
      icon: null,
      unicode: "\u2217",
      type: "operator",
      action: "*",
    },
    {
      font: "-",
      icon: null,
      unicode: null,
      type: "operator",
      action: "-",
    },
    {
      font: "+",
      icon: null,
      unicode: null,
      type: "operator",
      action: "+",
    },
  ],
  [
    {
      font: null,
      icon: null,
      unicode: "\u220F",
      type: "operator",
      action: "pi",
    },
    {
      font: null,
      icon: null,
      unicode: "\u221A",
      type: "operator",
      action: "sqrt",
    },
    {
      font: "x2",
      icon: null,
      unicode: null,
      type: "operator",
      action: "^2",
    },
    {
      font: "=",
      icon: null,
      unicode: null,
      type: "result",
    },
  ],
];

export default function Calculator() {
  const [cache, setCache] = React.useState([]);
  const [string, setString] = React.useState("");
//   const [result, setResult] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [error, setError] = React.useState("");

  // const coba = math.evaluate("oaiwjdoaw9+")

  const addNumber = (number) => {
    setString(string.concat(number));
    setDisplay(string);
    setError('')
  };

  const addOperator = (operator) => {
    setString(string.concat(" ", operator, " "));
    setDisplay(string);
    setError('')
  };

  const addCache = (last_result) => {
    let newValue = {
      string: string,
      result: last_result,
    };
    setCache((prevArray) => [...prevArray, newValue]);
  };

  const clickResult = () => {
    try {
      let result = math.evaluate(string);
    //   setResult(result);
      addCache(result);
      setString(result.toString());
      setDisplay(string);
      setError("");
    } catch (err) {
      setError("wrong syntax");
    }
  };

  const AC = () => {
    let last_string = string.charAt(string.length - 1);
    if (last_string == " ") {
      let part = string.slice(0, string.length - 3);
      setString(part);
      setDisplay(string);
    } else {
      let part = string.slice(0, string.length - 1);
      setString(part);
      setDisplay(string);
    }
    setError('')
  };

  const makeNull = () => {
    setString("");
    setDisplay(string);
    setError('')
  };

  const buttonClick = (type,action) => {
    switch(type){
        case "number":
            addNumber(action);
            break;
        case "operator":
            addOperator(action);
            break;
        case "erase":
            makeNull();
            break;
        case "back":
            AC();
            break;
        case "result":
            clickResult();
        default:
            break;
    }
  }

  return (
    <React.Fragment>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
            <List
            sx={{
                width:'100%',
                bgcolor: "#ffd60a",
                position: 'relative',
                overflow: 'auto',
                height: 300,
                borderRadius:'20px',
                p:'10px',
            }}>
              {cache.map((a) => (
                <React.Fragment>
                    <Divider/>
                  <ListItem>
                    <ListItemText primary={`${a.string} = ${a.result}`} />
                  </ListItem>
                  
                </React.Fragment>
              ))}
            </List>

          <Box sx={{ width:'100%',minHeight: "50px", bgcolor: "#ffd60a", borderRadius:'20px',p:'10px'}}>
            <Typography>
                {string}
            </Typography>
            <Typography>
                {error}
            </Typography>
          </Box>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
          >
            {buttons.map((a) => (
              <React.Fragment>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  {a.map((b) => (
                    <React.Fragment>
                      <Button variant="contained" size="large" sx={{bgcolor:'#a2d2ff'}}
                        onClick={() => buttonClick(b.type,b.action)}
                      >
                        {b.font != null && b.font}
                        {b.icon != null && b.icon}
                        {b.unicode != null && b.unicode}
                      </Button>
                    </React.Fragment>
                  ))}
                </Stack>
              </React.Fragment>
            ))}
          </Stack>
        </Stack>

    </React.Fragment>
  );
}
