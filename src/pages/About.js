import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { Roll } from "react-reveal";

import cat1 from "../images/cat1.jpeg"
import cat2 from "../images/cat2.jpeg"
import cat3 from "../images/cat3.jpeg"
import cat4 from "../images/cat4.jpeg"
import cat5 from "../images/cat5.jpeg"
import cat6 from "../images/cat6.jpeg"

const data = [
  {
    name: "Risqi Ikhsani",
    nim: "195410259",
    picture: cat6,
  },
  {
    name: "Mawardi Janitra Hadi",
    nim: "215410095",
    picture: cat2,
  },
  {
    name: "Akira Wahyu Saputra",
    nim: "215410111",
    picture: cat3,
  },
  {
    name: "Steven Natanael Oey",
    nim: "215410127",
    picture: cat4,
  },
  {
    name: "Zaki Nedhiansyah",
    nim: "215410141",
    picture: cat5,
  },
];

export default function About() {
  return (
    <>
    <Roll left duration={1500}>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ bgcolor: "background.paper", p: "20px", borderRadius: "10px" }}
      >
        <Typography>
          this app is called as a simple calculation app, intended for college's
          project purposes. this app was created and is being maintained by :
        </Typography>
        <List>
          {data.map((a) => (
            <>
              <ListItem alignItems="flex-start" key={a.name}>
                <ListItemAvatar>
                  <Avatar alt={a.name} src={a.picture} sx={{ width: 80, height: 80 }}/>
                </ListItemAvatar>
                <ListItemText
                    sx={{ml:'20px',mt:'20px'}}
                  primary={a.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        nim = {a.nim}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>

        <Typography>technologies used in this app :</Typography>
        <Avatar
            alt="Reactjs"
            src={process.env.PUBLIC_URL + "/logo192.png"}
            sx={{ width: 56, height: 56 }}
          />
        <Typography>
          React JS
        </Typography>
      </Stack>
      
    </Roll>
    </>
  );
}
