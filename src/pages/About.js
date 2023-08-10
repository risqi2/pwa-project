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



const data = [
  {
    name: "Risqi Ikhsani",
    nim: "195410259",
    picture: "/cat6.png",
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
                  <Avatar alt={a.name} src={process.env.PUBLIC_URL + a.picture} sx={{ width: 80, height: 80 }}/>
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
