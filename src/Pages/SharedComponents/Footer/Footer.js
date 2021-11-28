import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Location from '../../../Images/location.png';
import Facebook from '../../../Images/Vector-1.png';
import LinkeIn from '../../../Images/Vector-2.png';
import Youtube from '../../../Images/Vector-3.png';

const Footer = () => {
    return (
        <section className="footerSection">
            <footer className="footerArea">
                <Container>
                <Row xs={1} md={4} className="g-4">

                        <Col>
                        <div className="footerCard">
                            <img className="footerIcon" src={ Location } alt="locationIcon" />
                            <span className="location">H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka, Bangladesh</span>
                        </div>
                        </Col>

                        <Col>
                        <div className="footerCard2">
                            <h2 className="footerHeaidng">Company</h2>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/home">Home</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/services">Services</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/about">About Us</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/faq">FAQ</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/contact">Contact Us</NavLink>
                        </div>
                        </Col>
                        
                        <Col>
                        <div className="footerCard2">
                            <h2 className="footerHeaidng">Quick Links</h2>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/">Home</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/">Rental</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/">Sales</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/">Our Blog</NavLink>
                            <NavLink style={{marginLeft: "3px"}} className="navMenu mt-2 d-block text-white" to="/">Our Products</NavLink>
                        </div>
                        </Col>

                        <Col>
                        <div className="footerCard2">
                            <h2 className="footerHeaidng">About Us</h2>
                            <span className="text-white fs-6" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </span> <br />
                            <img style={{margin: "10px 5px"}} className="footerIcon" src={ Location } alt="locationIcon" />
                            <img style={{margin: "10px 5px"}} className="footerIcon" src={ Facebook } alt="locationIcon" />
                            <img style={{margin: "10px 5px"}} className="footerIcon" src={ LinkeIn } alt="locationIcon" />
                            <img style={{margin: "10px 5px"}} className="footerIcon" src={ Youtube } alt="locationIcon" />
                        </div>
                        </Col>
                        
                    </Row>
                </Container>
            </footer>
        </section>
    );
};

export default Footer;