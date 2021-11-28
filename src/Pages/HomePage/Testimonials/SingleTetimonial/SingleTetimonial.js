import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleTetimonial = () => {

        // Let's destructuring the single service data from the object
        // const { _id, name, price, serviceTcon, description } = props.service;
    
    return (
        <Col>
            <Card id="serviceCard">
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