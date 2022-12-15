import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';

export default function AppContainer(props) {
  return (
    <Container maxWidth="sm" sx={{p:'20px', bgcolor:'#f7fff7',minHeight:'100vh'}}>
      {props.children}
    </Container>
  );
}