import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import useDataFetching from '../../../../CustomHooks/useDataFetching';
import useDelete from '../../../../CustomHooks/useDelete';
import Pannel021 from '../../Pannel021';
import SingleBooking from './SingleBooking';

const AllBookings = () => {

  // For booking data
  const [ loading, datas ] = useDataFetching("bookedServices");

  
    // Handle delete booking here
    const { successModal, handleDelete, setSuccessModal } = useDelete();
    
    // Handle Close success modal autometically after 3 seconds
    const handleClose = () => {
      setSuccessModal(false);
    }

    return (
      
        <section>
        <Pannel021 />
            <div className="dashBoardContentWrapper">
            <div className="contetnWrapper">
              <span className="heading">Manage All Services</span> <br />
              <div className="bottomBorder"></div>
              </div>

            {successModal && <Alert variant="danger" onClick={handleClose} dismissible>
               Booking Successfully Deleted!
             </Alert>}
               <div className="contentBody">
                 <div className="contentData">
                   <div className="contentHeader">
                     <div className="columnWrap"><span className="columnName">Name</span></div>
                     <div className="columnWrap"><span className="columnName">Email</span></div>
                     <div className="columnWrap"><span className="columnName">Service</span></div>
                     <div className="columnWrap"><span className="columnName">Phone</span></div>
                     <div className="columnWrap"><span className="columnName">Action</span></div>
                   </div>

                   {loading && <div className="loader text-center m-auto">
              <Spinner animation="border" variant="danger" />
          </div>}
     
                    { datas.map( data => <SingleBooking key={ data._id } data={ data } handleDelete={ handleDelete } />) }

                 </div>
               </div>
            </div>
    </section>
    );
};

export default AllBookings;