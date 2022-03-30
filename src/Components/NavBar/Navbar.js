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
import './Navbar.css';
// import logo from './logo.svg';

export  default function Navb() {
    return (
        <>
            <Navbar id="seethrough" sticky="top" collapseOnSelect bg="light" variant="light" expand="lg">
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
                                <Button id="bot" sx={{bgcolor: "blue"}} variant="contained" size="medium">
                                    Home
                                </Button>
                            </Link>
                        </Nav>
                        <Nav className="me-auto">
                        <Link to={'/projects'} style={{ textDecoration: 'none' }}>
                            <Button id="bot" sx={{bgcolor: "blue"}} variant="contained" size="medium">
                                Projects
                            </Button>
                        </Link>
                        </Nav>
                        <IconButton
                            href="https://www.linkedin.com/in/craig-canepa1999/"
                            target="_blank"
                            rel="noreferrer noopener"
                            size="large"
                            sx={{ ml: 2 }}
                            aria-haspopup="true"
                            color="primary"
                        >
                            <Avatar sx={{ width: 52, height: 52, bgcolor: "blue"}}><LinkedInIcon/></Avatar>
                        </IconButton>
                        <IconButton
                            href="https://github.com/Craigcanepa10"
                            target="_blank"
                            rel="noreferrer noopener"
                            size="large"
                            sx={{ ml: 2 }}
                            aria-haspopup="true"
                            color="primary"
                        >
                            <Avatar sx={{ width: 52, height: 52, bgcolor: "blue"}}><GitHubIcon/></Avatar>
                        </IconButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}