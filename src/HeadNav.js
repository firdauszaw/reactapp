import React from 'react';
import {AppBar, Toolbar, IconButton, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MyButton from './StyledComponents';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow : 1,
  },
  menuButton: {
    marginRight: theme.spacing(150),
  },
  MButton: {
    marginRight: theme.spacing(10),
  },
  flright: {
    marginLeft: 45,
  },
}));

export default function HeadNav(){

  
  const classes = useStyles();
  
  return (
    <>
      <div className = {classes.root}>
        <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <MyButton className = {classes.MButton}/>
            <Avatar alt="Deux" src="kindpng_2583401.png" className={classes.flright}/>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}