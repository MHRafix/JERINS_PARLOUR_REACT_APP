import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../logo.png';
import Button from '@restart/ui/esm/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <section className="siteHeader">
            <header>
                <div className="headerSection">
                    <Container>
                <Navbar expand="lg">
                    
                        <NavLink to="/"><img width="127" height="40" src={Logo} alt="siteLogo" /></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="NavBars">
                            <NavLink className="navMenu" to="/home">Home</NavLink>
                            <NavLink className="navMenu" to="/services">Services</NavLink>
                            <NavLink className="navMenu" to="/about">About Us</NavLink>
                            <NavLink className="navMenu" to="/faq">FAQ</NavLink>
                            <NavLink className="navMenu" to="/contact">Contact Us</NavLink>
                           
                        </Nav>

                        <NavLink className="navMenu" to="/login">
                            <Button className="specialBtn">Login</Button>
                        </NavLink>
                   
                        </Navbar.Collapse>
                     </Navbar>
                    </Container>
                </div>
            </header>
        </section>
    );
};

export default Header;