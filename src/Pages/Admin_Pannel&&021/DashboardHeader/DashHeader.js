import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../logo.png';
import Button from '@restart/ui/esm/Button';
import { NavLink } from 'react-router-dom';

const DashHeader = () => {
    return (
        <section className="siteHeader">
        <header>
            <div className="headerSection">
                <div className="wrap">
            <Navbar expand="lg">
                    <NavLink to="/"><img width="127" height="40" src={Logo} alt="siteLogo" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="NavBars">
                        <NavLink className="navMenu" to="/">Visit Site</NavLink>
                       
                    </Nav>

                    <NavLink className="navMenu" to="/login">
                        <Button className="specialBtn">Logout</Button>
                    </NavLink>
               
                    </Navbar.Collapse>
                  </Navbar>
                </div>
            </div>
        </header>
    </section>
    );
};

export default DashHeader;