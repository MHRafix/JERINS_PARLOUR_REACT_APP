import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../logo.png';
import Button from '@restart/ui/esm/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';

const Header = () => {

    // Import useAuth from customhooks
    const { user, handleSignOut } = useAuth();

    // Take some state for dynamic
    const [ toggle, setToggle ] = useState(false);

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

                         {user.email ?  <img onClick={ () => setToggle(true)} className="userPhoto" src={user.photoURL} alt="userPhoto" /> :<NavLink className="navMenu" to="/login">
                            <Button className="specialBtn">Login</Button>
                        </NavLink>}
                   
                        </Navbar.Collapse>
                     </Navbar>
                    </Container>

                    {toggle ? <div className="userDashBoard">
                        <span className="cross" onClick={() => setToggle(false)} >&times;</span> <br />
                        <img className="profilePic" src={user.photoURL} alt="userPhoto" />
                        <h3 className="userName">{user.displayName}</h3>
                        <hr />

                         <div className="links">
                            <Link className="userNavLink" to="/MyBookedServices"><i className="navIcon fas fa-briefcase"></i> &nbsp;My Services</Link> <br />
                            <Link className="userNavLink" to="/feedBack"><i className="navIcon far fa-comment-dots"></i> &nbsp;Leave Review</Link> <br />
                            <Link className="userNavLink" to="/feedBack"><i className="navIcon far fa-handshake"></i> &nbsp;Let's Meet</Link> <br />
                            <span onClick={() => {
                                setToggle(false);
                                handleSignOut();
                                }} className="logout"><i className="fas fa-sign-out-alt"></i> Log Out</span>
                        </div>
                    </div> : <></>}
                </div>
            </header>
        </section>
    );
};

export default Header;