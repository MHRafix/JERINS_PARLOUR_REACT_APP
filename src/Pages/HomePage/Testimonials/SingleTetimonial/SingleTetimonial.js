import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleTetimonial = () => {

        // Let's destructuring the single service data from the object
        // const { _id, name, price, serviceTcon, description } = props.service;

            // AOS animation
            useEffect(() => {
                AOS.init({
                    offset: 100,
                    duration: 1300,
                    easing: 'ease',
                });
            });

    return (
        <Col>
            <Card id="serviceCard" data-aos="flip-up">
            {/* <Card.Img className="serviceIcon" variant="top" src={ serviceTcon } /> */}
            <Card.Body>
            <Card.Title> frggdgfhgfhf </Card.Title>
            <span className="price">$ price </span>
            <Card.Text className="servicedesc"> description.slice(0, 120) </Card.Text>
            </Card.Body>
        </Card>
       </Col>
    );
};

export default SingleTetimonial;