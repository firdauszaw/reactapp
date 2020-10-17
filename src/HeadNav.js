import React from 'react';
import {AppBar, Toolbar, IconButton, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MyButton from './StyledComponents';


export default function HeadNav(){
  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Toolbar>
        <Grid
          justify="space-between" // Add it here :)
          container 
          spacing={24}
        >
        <Grid item>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <MyButton color="inherit">Login</MyButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);

}