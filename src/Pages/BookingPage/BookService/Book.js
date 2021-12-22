import React, { useState } from 'react';
import { Alert, Card, CardImg, Col, Container, Row, Spinner  } from 'react-bootstrap';
import { useParams } from 'react-router';
import usePost from '../../../CustomHooks/usePost';
import useAuth from '../../../CustomHooks/useAuth';
import useDataFetching from '../../../CustomHooks/useDataFetching';

const Book = () => {
    
    // Take some state for storing data
    const [ cmname, setCmname ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ age, setAge ] = useState('');
    const [ comingTime, setComingTime ] = useState('');

    // Import useAuth from customHooks
    const { user } = useAuth();
    // Take the service uniqueId using useParams
    const { serviceId } = useParams();
    

    // Find out the selected package here 
    const [ loading, datas ] = useDataFetching("services");
    
    let selectedService;

    if(datas){
      const thisService = datas.find(data => data._id === serviceId);
      if(thisService){
        selectedService = thisService;
      }
    }

    // Post the booking service data using reuseable function 
    const [ isSend, open, setOpen, handlePost ] = usePost();

    const handleClose = () => {
      setOpen(false);
    }
    
    // Booking data
    const bookingData = {
      serviceName: selectedService?.name, 
      servicePrice: selectedService?.price,
      customerName: cmname,
      customerEmail: user.email,
      customerPhoneNumber: phoneNumber,
      customerAge: age,
      appointMentTime: comingTime,
      status: "Pendding"


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
                        <form onSubmit={() => handlePost(bookingData, "bookings")}>
                            {/* User or customer info save to the db */}
                            <input type="text" name="customerName"  onChange={(e) => setCmname(e.target.value)} id="inputFiled" placeholder="Enter your full name" required />
                            <input tpye="number" name="customerPhoneNumber"  onChange={(e) => setPhoneNumber(e.target.value)} id="inputFiled" placeholder="Enter your phone number" required />
                            <input type="number" name="customerAge"  onChange={(e) => setAge(e.target.value)} min="15" max="50" id="inputFiled" placeholder="Enter your  age" required />
                            <input type="date" name="comingTime"  onChange={(e) => setComingTime(e.target.value)} id="inputFiled" placeholder="Enter your coming time" required /> 
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



