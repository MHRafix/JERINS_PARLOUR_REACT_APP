import React, { useEffect } from 'react';
import Header from'../SharedComponents/Header/Header';
import Footer from'../SharedComponents/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Group from'../../Images/Group.jpg';

const AboutUs = () => {

    // AOS animation
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1300,
            easing: 'ease',
        });
    });

    return (
        <section className="pageWrapper">
            <div className="pageBody">
                <Header />
                 <section>
                     <div className="aboutUsBanner">
                         <div className="container">
                           <div className="welcomeIntro">
                               <h1 className="welcomeTitle" data-aos="fade-right">Welcome To <span className="highlighText"><i className='far fa-heart'></i> Our Parlor</span></h1>
                               <p className="themeText" data-aos="fade-left">Thank you for visiting our online parlor services site. Hope you will be glad with our service quality and behaviour.</p>
                               <Link to="/services" className="regularBtn" data-aos="fade">Explore Services</Link>
                               <Link to="/" className="regularBtn" data-aos="fade">Featured Services</Link>

                           </div>
                         </div>
                     </div>
                 </section>

                 <section>
                     <div className="aboutOurServices">
                        <div className="container">
                            <Row xs={1} md={2} className="gy-3">
                                <Col>
                                  <div className="image" style={{width: "100%"}}>
                                      <img style={{width: "100%", height: "100%"}} src={Group} alt="demoSer" data-aos="fade" />
                                  </div>
                                </Col>
                                <Col>
                                <div className="serviceIntro">
                                <h1 className="servicesAbout" data-aos="fade-down">About Our <span className="highlighText"> Service</span></h1>
                                <p className="peragraph" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptates unde explicabo velit quo aspernatur deleniti vero commodi tempore rerum odio nam exercitationem ratione magni cupiditate temporibus repellendus voluptatum, possimus nisi? Nesciunt assumenda, impedit adipisci asperiores nemo dolores cumque eaque et, modi culpa ex nisi, placeat similique laudantium ab obcaecati.</p>
                                </div>
                                </Col>
                            </Row>
                        </div>
                     </div>
                 </section>
                <Footer />
            </div>
        </section>
    );
};

export default AboutUs;