import { Container,AppBar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import CalculateIcon from '@mui/icons-material/Calculate';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const appRoutes = [
    {
        name: "basic calculator",
        route: "/calculator",
        icon: <CalculateIcon />,
    },
    {
        name: "Converter",
        route: "/converter",
        icon: <AutorenewIcon />,
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
                <Typography variant="h4" sx={{ my: '20px' }}>
                    Welcome to simpleCalc
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, }}>
                    {
                        appRoutes.map((item) => (
                            <ListItemButton sx={{ borderRadius: '10px', bgcolor: 'background.paper', my: '20px', }} component={Link} to={item.route}>
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