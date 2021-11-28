import React from 'react';
import { Alert, Card, CardImg, Col, Row, Spinner } from 'react-bootstrap';
import Pannel021 from '../../Pannel021';
import { useForm } from "react-hook-form";
import usePost from '../../../../CustomHooks/usePost';

const AddService = () => {

    // Use react hook form for book service
    const { register, handleSubmit, reset } = useForm();
    // Post the booking service data using reuseable function 
    const [ isSend, open, setOpen, onSubmit ] = usePost("services", reset);


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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* User or customer info save to the db */}
                        <input type="text" id="inputFiled" {...register("name", { required: true })} placeholder="Enter service name" />
                        <input type="text" id="inputFiled" {...register("serviceIcon", { required: true })} placeholder="Enter service Icon url" /> 
                        <input type="text" id="inputFiled" {...register("price", { required: true })} placeholder="Enter service price" /> <br />
                        <textarea type="text" id="inputFiled" {...register("description", { required: true })} placeholder="Enter service description" /> <br />


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