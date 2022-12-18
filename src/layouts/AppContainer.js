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

const backgroundColorTheme = 'linear-gradient(to right, #fc5c7d, #6a82fb)';
const backgroundColorTheme2 = 'linear-gradient(to right, #00f260, #0575e6)';
const backgroundColorTheme3 = 'linear-gradient(to right, #b2fefa, #0ed2f7)';

export default function AppContainer(props) {

  const navigate = useNavigate()

  return (
    <Container maxWidth="sm" sx={{background:backgroundColorTheme3, minHeight: '100vh'}}>
      <AppBar position="sticky" sx={{boxShadow:'0',bgcolor:'transparent',color:'GrayText'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SimpleCalc
          </Typography>
        </Toolbar>
      </AppBar>

      {props.children}
    </Container>
  );
}