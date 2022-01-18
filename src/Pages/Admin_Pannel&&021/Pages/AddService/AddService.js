import React, { useState } from 'react';
import { Alert, Card, CardImg, Col, Row, Spinner } from 'react-bootstrap';
import Pannel021 from '../../Pannel021';
import usePost from '../../../../CustomHooks/usePost';

const AddService = () => {
    
    // Take some statem for storing data to the state
    const [ serviceName, setServiceName ] = useState('');
    const [ serviceIcon, setServiceIcon ] = useState('');
    const [ servicePrice, setServicePrice ] = useState('');
    const [ serviceDescription, setServiceDescription ] = useState('');
    
    // Create service data fro posting
    const serviceData = {
          "name": serviceName,
          "serviceIcon": serviceIcon,
          "price": servicePrice,
          "description": serviceDescription
    };

    // Post the booking service data using reuseable function 
    const { isSend, open, setOpen, handlePost } = usePost();

    // Put the banner url into a varible for better perfomance 
    const bannerImg = "https://images.theconversation.com/files/311513/original/file-20200123-162185-mw1cww.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
   
    const handleClose = () => {
      setOpen(false);
    }
    return (
        <div>
            <Pannel021 />
                <div className="dashBoardContentWrapper">
                <div className="contetnWrapper">
                  <span className="heading">Add a Service</span> <br />
                  <div className="bottomBorder"></div>
                  </div>
                  
                   <div className="contentBody bg-white">
                   <Row xs={1} md={2} className="g-4 align-items-center">


              { isSend ? <div className="loader text-center m-auto">
                                <Spinner animation="border" variant="danger" />
                            </div>:<Col>
                  <Card className="bppkingForm">
                    {open &&  <Alert variant="danger" onClick={handleClose} dismissible>
               Service Successfully Added!
             </Alert>}
                      <h3 className="heading text-center fw-700">Give <span className="highLightPart">Service Info</span></h3>
                    <form onSubmit={() => handlePost(serviceData, "services")}>
                        {/* User or customer info save to the db */}
                        <input type="text" id="inputFiled" onChange={e => setServiceName(e.target.value)} placeholder="Enter service name" required/>
                        <input type="text" id="inputFiled" onChange={e => setServiceIcon(e.target.value)} placeholder="Enter service Icon url" required/> 
                        <input type="text" id="inputFiled" onChange={e => setServicePrice(e.target.value)} placeholder="Enter service price" required/> <br />
                        <textarea type="text" id="inputFiled" onChange={e => setServiceDescription(e.target.value)} placeholder="Enter service description" required/> <br />
                        {/* Submit Button   */}
                        <input id="inputFiled" className="specialBtn text-white" type="submit" value="Add Service" />
                    </form>
                  </Card>
                </Col>}
                                 
                <Col>
                   <Card style={{ border:"none" }}>
                     <CardImg height="460" className="appointBanner" src={ bannerImg } /> 
                   </Card>
                 </Col>

             </Row>
                   </div>
                </div>
        </div>
    );
};

export default AddService;