import React, { useState } from 'react';
import { Alert, Card, CardImg, Col, Row, Spinner } from 'react-bootstrap';
import Pannel021 from '../../Pannel021';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddAdmins = () => {

    // Use react hook form for book service
    const { register, handleSubmit, reset } = useForm();
  

    const  [ text, setText ] = useState(" ");

     // Take a state for showing loading gif
     const [ isSend, setIsSend ] = useState(false);

     // Take a state for showing the alert  while booking data insert true
     const [open, setOpen] = useState(false);
 
     const onSubmit = data => {
         setIsSend(true);
       if(data.password === data.cnfPassword){
         axios.post("https://still-sierra-49002.herokuapp.com/admins", data)
         .then(res => {
           if(res.data.insertedId){
             
               setText("Admin Successfully Created!");
               reset();
               setOpen(true);
             setIsSend(false);
            }
         })
        }
   };

    // Put the banner url into a varible for better perfomance 
    const bannerImg = "https://mcands.com.au/wp-content/uploads/2019/07/bigstock-Beautiful-woman-in-hair-salon-83907503-837x558.jpg";
   
    const handleClose = () => {
      setOpen(false);
    }
    return (
        <div>
            <Pannel021 />
                <div className="dashBoardContentWrapper">
                <div className="contetnWrapper">
                  <span className="heading">Create Admins</span> <br />
                  <div className="bottomBorder"></div>
                  </div>
                  
                   <div className="contentBody bg-white">
                   <Row xs={1} md={2} className="g-4 align-items-center">

              { isSend ? <div className="loader text-center m-auto">
                                <Spinner animation="border" variant="danger" />
                            </div>:<Col>
                  <Card className="bppkingForm">
                    {open &&  <Alert variant="danger" onClick={handleClose} dismissible>{ text }</Alert>}
                      <h3 className="heading text-center fw-700">Give <span className="highLightPart">Admin Info</span></h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* User or customer info save to the db */}
                        <input type="text" id="inputFiled" {...register("name", { required: true })} placeholder="Enter admin user name" />
                        <input type="email" id="inputFiled" {...register("email", { required: true })} placeholder="Enter admin email" /> 
                        <input type="password" id="inputFiled" {...register("password", { required: true })} placeholder="Enter password" /> <br />
                        <input type="password" id="inputFiled" {...register("cnfPassword", { required: true })} placeholder="Re-enter password" /> <br />


                        {/* Submit Button   */}
                        <input id="inputFiled" className="specialBtn text-white" type="submit" value="Create Admin" />
                    </form>
                  </Card>
                </Col>}
                                 
                <Col>
                   <Card style={{ border:"none" }}>
                     <CardImg height="420" className="appointBanner" src={ bannerImg } /> 
                   </Card>
                 </Col>

             </Row>
                   </div>
                </div>
        </div>
    );
};

export default AddAdmins;