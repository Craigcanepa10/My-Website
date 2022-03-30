import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from '@mui/material/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, NavLink } from "react-router-dom";

import logo from '../../Photos/Logo.png';
// import logo from './logo.svg';

export  default function Navb() {
    return (
        <>
            <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="70"
                                height="70"
                                alt="React Bootstrap logo"
                            />
                            Craig S. Canepa Jr.
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="px-5">
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <Button sx={{bgcolor: "blue"}} variant="contained" size="medium">
                                    Home
                                </Button>
                            </Link>
                        </Nav>
                        {/* <Nav className="px-3"> */}
                        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                            <Button sx={{bgcolor: "blue"}} variant="contained" size="medium">
                                Projects
                            </Button>
                        </Link>
                        {/* </Nav> */}
                        <Nav className="me-auto"></Nav>
                        <IconButton
                            href="https://www.linkedin.com/in/craig-canepa1999/"
                            // onClick={handleClick}
                            size="large"
                            sx={{ ml: 2 }}
                            // aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            color="primary"
                            // aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 52, height: 52, bgcolor: "blue"}}><LinkedInIcon/></Avatar>
                        </IconButton>
                        <IconButton
                            href="https://github.com/Craigcanepa10"
                            // onClick={handleClick}
                            size="large"
                            sx={{ ml: 2 }}
                            // aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            color="primary"
                            // aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 52, height: 52, bgcolor: "blue"}}><GitHubIcon/></Avatar>
                        </IconButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}