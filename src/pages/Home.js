import { Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ScaleIcon from '@mui/icons-material/Scale';
import StraightenIcon from '@mui/icons-material/Straighten';



const appRoutes = [
    {
        name: "basic calculator",
        route: "/calculator",
        icon: <CalculateIcon />,
    },
    {
        name: "temperature converter",
        route: "/degree",
        icon: <DeviceThermostatIcon />,
    },
    {
        name: "currency converter",
        route: "/money",
        icon: <CurrencyExchangeIcon />,
    },
    {
        name: "wieght converter",
        route: '/weight',
        icon:<ScaleIcon/>,
    },
    {
        name: "length converter",
        route: '/length',
        icon:<StraightenIcon/>,
    },
    {
        name: "simple notes",
        route: "/simplenotes",
        icon: <EventNoteIcon />,
    },
    {
        name: "about",
        route: "/about",
        icon: <EmojiPeopleIcon />,
    },
]

export default function Home() {
    return (
        <React.Fragment>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="h4" sx={{my:'20px'}}>
                        Welcome to simpleCalc
                    </Typography>
                    <List sx={{ width: '100%', maxWidth: 360, }}>
                        {
                            appRoutes.map((item) => (
                                <ListItemButton sx={{ borderRadius:'10px',bgcolor: 'background.paper', my: '20px', }} component={Link} to={item.route}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Stack>

        </React.Fragment>
    )
}