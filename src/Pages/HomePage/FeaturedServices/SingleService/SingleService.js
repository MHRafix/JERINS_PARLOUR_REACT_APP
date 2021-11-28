import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleService = (props) => {
    
    // USe useHistory for changing the route
    const history = useHistory();

    // Let's destructuring the single service data from the object
    const { _id, name, price, serviceIcon, description } = props.data;

    // Hanlde booking service
    const handleBooking = serviceId => {
        // Redirect to the booking service page with serviceId        
        history.push(`/bookingService/${serviceId}`);
    }

    return (
        <Col>
        <Card id="serviceCard">
           <Card.Img className="serviceIcon" variant="top" src={ serviceIcon } />
           <Card.Body>
           <Card.Title>{ name }</Card.Title>
           <span className="price">${ price }</span>
           <Card.Text className="servicedesc">{ description.slice(0, 120) }</Card.Text>
           <span className="booking" onClick={ () => handleBooking(_id) } >Book Now</span>
           </Card.Body>
       </Card>
       </Col>
    );
};

export default SingleService;