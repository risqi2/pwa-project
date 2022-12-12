import { Container, Stack, Box, Button } from "@mui/material";
import React from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';

const buttons = [
    [
        {
            font: null,
            icon: <BackspaceIcon/>,
            unicode:null,
            style:{borderRadius:'10px',bgcolor:'#ff9800'},
        },
        {
            font: "7",
            icon: null,
            unicode:null,
        },
        {
            font: "4",
            icon: null,
            unicode:null,
        },
        {
            font: "1",
            icon: null,
            unicode:null,
        },
        {
            font: "0",
            icon: null,
            unicode:null,
        },
    ],
    [
        {
            font: "(",
            icon: null,
            unicode:null,
        },
        {
            font: "8",
            icon: null,
            unicode:null,
        },
        {
            font: "5",
            icon: null,
            unicode:null,
        },
        {
            font: "2",
            icon: null,
            unicode:null,
        },
        {
            font: ".",
            icon: null,
            unicode:null,
        },
    ],
    [
        {
            font: ")",
            icon: null,
            unicode:null,
        },
        {
            font: "9",
            icon: null,
            unicode:null,
        },
        {
            font: "6",
            icon: null,
            unicode:null,
        },
        {
            font: "3",
            icon: null,
            unicode:null,
        },
        {
            font: "%",
            icon: null,
            unicode:null,
        },
    ],
    [
        {
            font: "AC",
            icon: null,
            unicode:null,
        },
        {
            font: null,
            icon: null,
            unicode: '\u00F7',
        },
        {
            font: null,
            icon: null,
            unicode: '\u2217',
        },
        {
            font: "-",
            icon: null,
            unicode:null,
        },
        {
            font: "+",
            icon: null,
            unicode:null,
        },
    ],
    [
        {
            font: null,
            icon: null,
            unicode: '\u220F',
        },
        {
            font: null,
            icon: null,
            unicode: '\u221A',
        },
        {
            font: "x2",
            icon: null,
            unicode:null,
        },
        {
            font: "=",
            icon: null,
            unicode:null,
            style:{height:'90px',borderRadius:'10px',bgcolor:'#ff9800'},
        },
    ],
]


export default function Calculator() {


    return (
        <React.Fragment>
            <Container maxWidth="sm" sx={{ height: '100vh' }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Box sx={{ width: '100%', minHeight: '200px', bgcolor: 'green' }}>
                        test
                    </Box>
                    <Box sx={{ width: '100%', minHeight: '50px', bgcolor: 'purple' }}>
                        test
                    </Box>



                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        {
                            buttons.map((a) => (
                                <React.Fragment>
                                    <Stack
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        {
                                            a.map((b) => (
                                                <React.Fragment>
                                                    <Button color="primary" variant="outlined" sx={b.style}>
                                                        {b.font != null && b.font}{b.icon != null && b.icon}{b.unicode != null && b.unicode}
                                                    </Button>
                                                </React.Fragment>
                                            ))
                                        }
                                    </Stack>
                                </React.Fragment>
                            ))
                        }
                    </Stack>


                </Stack>
            </Container>
        </React.Fragment>
    )
}