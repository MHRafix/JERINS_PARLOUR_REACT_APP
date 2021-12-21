import React from 'react';
import { Alert, Card, CardImg, Col, Container, Row, Spinner  } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import usePost from '../../../CustomHooks/usePost';
import useAuth from '../../../CustomHooks/useAuth';

const Book = () => {

    // Import useAuth from customHooks
    const { user } = useAuth();
    // Take the service uniqueId using useParams
    const { serviceId } = useParams();

    // Use react hook form for book service
    const { register, handleSubmit, reset } = useForm();
    // Post the booking service data using reuseable function 
    const [ isSend, open, setOpen, onSubmit ] = usePost("bookings", reset);

    const handleClose = () => {
      setOpen(false);
    }
    // Put the banner url into a varible for better perfomance 
    const bannerImg = "https://i.ibb.co/LrVtdwd/1-Best-Salon-Apps-for-Salon-Booking-Online-banner.jpg";

    return (
        <section>
         <div className="sectionWrapper">
             <Container>
             <div className="sectionTitle">
                 <h2 className="sectionName mt-5">Book a <span className="highLightPart">Service</span></h2>
             </div>
             <Row xs={1} md={2} className="g-4 align-items-center">
                 
                    {isSend ? <div className="loader text-center m-auto">
                                <Spinner animation="border" variant="danger" />
                            </div> : <Col>
                      <Card className="bppkingForm">
                        { open && <Alert variant="danger" onClick={handleClose} dismissible>Service booked successfully!</Alert> }
                          <h3 className="heading text-center fw-700">Give <span className="highLightPart">Your Info</span></h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* User or customer info save to the db */}
                            <input type="text" id="inputFiled" {...register("name", { required: true })} placeholder="Enter your full name" value={user.displayName} />
                            <input type="email" id="inputFiled" {...register("email", { required: true })} placeholder="Enter your email" value={user.email} /> 
                            <input tpye="tel" id="inputFiled" {...register("phoneNumber", { required: true })} min="11" max="15" placeholder="Enter your phone number" />
                            <input type="number" id="inputFiled" {...register("age", { required: true })} min="16" max="50" placeholder="Enter your  age" />
                            <input type="text" id="inputFiled" {...register("comingTime", { required: true })} placeholder="Enter your coming time" /> 

                            {/* Save to the db choosen service info */}
                            <input type="hidden" id="inputFiled" {...register("bookingId", { required: true })} value={ serviceId } /> 

                            {/* Submit Button   */}
                            <input id="inputFiled" className="specialBtn text-white" type="submit" value="Confirm Booking" />
                        </form>
                      </Card>
                    </Col>}

                    <Col>
                      <Card style={{ border:"none" }}>
                      { bannerImg && <CardImg  className="appointBanner" src={ bannerImg } /> }
                      </Card>
                    </Col>

                </Row>             
            </Container>
         </div>
     </section>
    );
};

export default Book;



