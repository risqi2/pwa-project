import { Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const appRoutes = [
    {
        name: "calculator",
        route: "/calculator",
        icon: <CalculateIcon />,
    },
    {
        name: "degree calc",
        route: "/degree",
        icon: <DeviceThermostatIcon />,
    },
    {
        name: "money calc",
        route: "/money",
        icon: <CurrencyExchangeIcon />,
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
            <Container maxWidth="sm" sx={{ bgcolor: 'yellow',height:'100vh' }}>
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

            </Container>
        </React.Fragment>
    )
}