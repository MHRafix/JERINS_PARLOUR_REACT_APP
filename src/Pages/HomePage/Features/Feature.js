import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {
    // AOS animation
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1300,
            easing: 'ease',
        });
    });

    return (
        <section className="sectionWrapperBg">
            <div className="sectionWrapper">
              <Container>
                <Row xs={1} md={2} className="gx-2">
                    <Col>
                    <Card className="cardImage">
                        <Card.Img variant="top" src="https://i.ibb.co/1MQb5bB/feature-Banner.png" />
                    </Card>
                    </Col>
                    <Col>
                    <Card className="featureCard">
                        <Card.Body className="featuresBody">
                            <Card.Title><h3 className="heading">Let us handle your <br /> screen <span className="highLightPart">Professionally</span>.</h3></Card.Title>
                            <Card.Text className="servicedesc">
                            A beauty salon or beauty parlor is an dealing establishment with cosmetic treatments for men and women. There's a difference between...
                           </Card.Text>
                           <div className="clientAndServices">
                               <div className="client">
                                   <h2 className="sectionName"><span className="highLightPart">500+</span></h2>
                                   <Card.Text className="servicedesc">Happy Customers</Card.Text>
                               </div>
                               <div className="service">
                                   <h2 className="sectionName"><span className="highLightPart">16+</span></h2>
                                   <Card.Text className="servicedesc">Total Services</Card.Text>
                               </div>
                           </div>
                        </Card.Body>
                    </Card>
                    </Col>
                  </Row>
              </Container>
            </div>
        </section>
    );
};

export default Feature;