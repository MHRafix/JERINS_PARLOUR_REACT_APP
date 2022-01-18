import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleTetimonial = ({feedback}) => {
      console.log(feedback);
        // Let's destructuring the single service data from the object
        const { userName, userPhoto, ratting, review } = feedback;

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
            <Card.Body>
                <img className="userPicture" src={userPhoto} alt="userImage" />
            <Card.Title>{ userName }</Card.Title>
            <span className="rattings">
            <Rating readonly
                initialRating={ratting}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
            />
             </span>
            <Card.Text className="servicedesc">{ review.slice(0, 50) }....</Card.Text>
            </Card.Body>
        </Card>
       </Col>
      
    );
};

export default SingleTetimonial;