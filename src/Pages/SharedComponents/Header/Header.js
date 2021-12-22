import React, { useState } from 'react';
import { Alert, Container, Modal, Nav, Navbar, Spinner } from 'react-bootstrap';
import Logo from '../../../logo.png';
import Button from '@restart/ui/esm/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../CustomHooks/useAuth';
import usePost from '../../../CustomHooks/usePost';

const Header = () => {
    // Import useAuth from customhooks
    const { user, handleSignOut } = useAuth();

    // Take some state for dynamic
    const [ toggle, setToggle ] = useState(false);
    const [ block, setBlock ] = useState(false);
    const [ ratting, setRatting ] = useState('');
    const [ review, setReview ] = useState('');

    // Make feedBackData for posting to the database
    const feedBackData = {
          userEmail: user.email,
          userName: user.displayName,
          userPhoto: user.photoURL,
          ratting,
          review
          
    };
    

    // Post the booking service data using reuseable function 
    const [ isSend, open, setOpen, handlePost ] = usePost();

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
                            <span onClick={ () => setBlock(true)} className="userNavLink"><i className="navIcon far fa-comment-dots"></i> &nbsp;Leave Review</span> <br />
                            <Link className="userNavLink" to="/feedBack"><i className="navIcon far fa-handshake"></i> &nbsp;Let's Meet</Link> <br />
                            <span onClick={() => {
                                setToggle(false);
                                handleSignOut();
                                }} className="logout"><i className="fas fa-sign-out-alt"></i> Log Out</span>
                        </div>
                    </div> : <></>}

                    <Modal show={block}>
                        <Modal.Header onClick={() => setBlock(false)} closeButton>
                        <Modal.Title>Leave a Review</Modal.Title>
                        </Modal.Header>
                        { open && <Alert variant="danger" onClick={() => setOpen(false)} dismissible>Feedback Leaved successfully!</Alert> }
                       {isSend ? <div className="loader text-center m-auto">
                                <Spinner animation="border" variant="danger" />
                            </div> : <form className="reviewDorm" onSubmit={() => handlePost(feedBackData, "userfeedBack")}>
                            <input style={{ border: "1px solid gray"}} onChange={(e) => setRatting(e.target.value) } id="inputFiled" type="text" name="userRatting" placeholder="Enter value of star ratting..." required /> <br />
                            <textarea style={{ border: "1px solid gray"}} onChange={(e) => setReview(e.target.value) } id="inputFiled" type="text" name="userReview" placeholder="Enter you experience with us..." required ></textarea> <br />
                            <input style={{ width: "100%"}} type="submit" className="specialBtn" value="Leave Now" />
                        </form>}
                   </Modal>
                </div>
            </header>
        </section>
    );
};

export default Header;