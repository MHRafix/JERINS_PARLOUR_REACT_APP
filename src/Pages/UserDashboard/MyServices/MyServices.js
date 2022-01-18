import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import useDataFetching from '../../../CustomHooks/useDataFetching';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../../SharedComponents/Header/Header';
import SingleService from './SingleService';
import useAuth from '../../../CustomHooks/useAuth';
import useDelete from '../../../CustomHooks/useDelete';

const MyServices = () => {
    // Import useAuth from custom hooks
    const { user } = useAuth();

    // Import useDataFetching Sate form custom hooks
    const dataURL = `bookedServices/${user.email}`;
    const { loading, datas } = useDataFetching(dataURL);

    // Handle delete booking here
    const { successModal, handleDelete, setSuccessModal } = useDelete(dataURL);


  // Close alert function here
  const handleClose = () => {
        setSuccessModal(false);
  }
    return (
        <section className="pageWrapper">
            <div className="pageBody">
                <Header />
                <section>
                    <Container>
                <div className="userDashBoardContentWrapper">
                    <div className="contetnWrapper">
                    <span className="heading">MY Booked Services</span> <br />
                    <div className="bottomBorder"></div>
                    </div>

            {successModal && <Alert variant="danger" onClick={handleClose}>
               Booked Service Successfully Deleted!
             </Alert>}
               <div className="contentBody">
                 <div className="contentData">
                   <div className="contentHeader">
                     <div className="columnWrap"><span className="columnName">Service</span></div>
                     <div className="columnWrap"><span className="columnName">Price</span></div>
                     <div className="columnWrap"><span className="columnName">Time</span></div>
                     <div className="columnWrap"><span className="columnName">Payment</span></div>
                     <div className="columnWrap"><span className="columnName">Status</span></div>
                     <div className="columnWrap"><span className="columnName">Action</span></div>
                   </div>

                   {loading && <div className="loader text-center m-auto">
                     <br /> <Spinner animation="border" variant="danger" />
                  </div>}
     
                                { !datas.length && !loading ? <h3 className='text-center text-danger mt-5'>No Booked Services Here...!😄</h3> : datas.map( service => <SingleService key={ service._id } data={ service } handleDelete={handleDelete} />) }

                             </div>
                           </div>
                        </div>
                      </Container>
                    </section>
                <Footer />
            </div>
        </section>
    );
};

export default MyServices;