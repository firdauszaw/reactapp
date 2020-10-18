import React from 'react';
import {SvgIcon, Button} from '@material-ui/core';
import {Navbar, Nav} from 'react-bootstrap';
import MyButton from './StyledComponents';

function HomeIcon(props){
  return(
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function HeadNav(){
  return (
    <>
    <Navbar bg="dark"  expand="lg">
      <HomeIcon color="primary" fontSize="large"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button href="/home">Home</Button>
          <Button href="./infos.html">Infos</Button>
          <MyButton/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};