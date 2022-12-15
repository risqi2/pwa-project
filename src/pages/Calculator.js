import { Container, Stack, Box, Button, Typography } from "@mui/material";
import React from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';

import {create,all} from 'mathjs'
const config = {}
const math = create(all,config)

const buttons = [
    [
        {
            font: null,
            icon: <BackspaceIcon/>,
            unicode:null,
            style:{borderRadius:'10px',bgcolor:'#ff9800'},
            type:'operator',
            action:'erase',
        },
        {
            font: "7",
            icon: null,
            unicode:null,
            type:'number',
            action:7,
        },
        {
            font: "4",
            icon: null,
            unicode:null,
            type:'number',
            action:4,
        },
        {
            font: "1",
            icon: null,
            unicode:null,
            type:'number',
            action:1,
        },
        {
            font: "0",
            icon: null,
            unicode:null,
            type:'number',
            action:0,
        },
    ],
    [
        {
            font: "(",
            icon: null,
            unicode:null,
            type:'operator',
            action:"(",
        },
        {
            font: "8",
            icon: null,
            unicode:null,
            type:'number',
            action:8,
        },
        {
            font: "5",
            icon: null,
            unicode:null,
            type:'number',
            action:5,
        },
        {
            font: "2",
            icon: null,
            unicode:null,
            type:'number',
            action:2,
        },
        {
            font: ".",
            icon: null,
            unicode:null,
            type:'number',
            action:'.',
        },
    ],
    [
        {
            font: ")",
            icon: null,
            unicode:null,
            type:'operator',
            action:")",
        },
        {
            font: "9",
            icon: null,
            unicode:null,
            type:'number',
            action:9,
        },
        {
            font: "6",
            icon: null,
            unicode:null,
            type:'number',
            action:6,
        },
        {
            font: "3",
            icon: null,
            unicode:null,
            type:'number',
            action:3,
        },
        {
            font: "%",
            icon: null,
            unicode:null,
            type:'operator',
            action:"%",
        },
    ],
    [
        {
            font: "AC",
            icon: null,
            unicode:null,
            type:'operator',
            action:'back',
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
    const [cache,setCache] = React.useState([])
    const [string,setString] = React.useState('')
    const [result,setResult] = React.useState('')
    const [display,setDisplay] = React.useState('')
    const [error,setError] = React.useState('')

    const coba = math.evaluate("oaiwjdoaw9+")

    const addNumber = (number) => {
        
        setString(string.concat(number))
        setDisplay(string)
    }

    const addOperator = (operator) => {
        setString(string.concat(" ",operator," "))
        setDisplay(string)
    }


    const addCache = () => {
        let newValue = {
            string: string,
            result: result
        }
        setCache(prevArray => [...prevArray,newValue])
    }


    const clickResult = () => {
        try{
            if(string.length==0){
                setError('wrong syntax')
                return;
            }
            let result = math.evaluate(string)
            setResult(result)
            addCache()
            setString(result)
            setDisplay(result)
            setError('')  
        }catch(err){
            setError("wrong syntax")
        }
    }

    const AC = () => {
        let last_string = string.charAt(string.length - 1)
        if(last_string==" "){
            let part = string.slice(0,string.length-3)
            setString(part)
            setDisplay(string)
        }
        else{
            let part = string.slice(0,string.length-1)
            setString(part)
            setDisplay(string)
        }

    }

    const makeNull = () => {
        setString('')
        setDisplay(string)
    }

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
                        <Typography>
                            {string}
                            {error}
                        </Typography>
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