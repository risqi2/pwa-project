import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function AppContainer(props) {

  const navigate = useNavigate()

  return (
    <Container maxWidth="sm" sx={{bgcolor: '#f7fff7', minHeight: '100vh' ,paddingBottom:'20px'}}>
      <AppBar position="sticky" sx={{boxShadow:'0',bgcolor:'transparent',color:'GrayText'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              navigate(-1)
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
        </Toolbar>
      </AppBar>

      {props.children}
    </Container>
  );
}