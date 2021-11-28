import React from 'react';
import Pannel021 from '../../Pannel021';
import SingleService from './SingleService';
import useDataFetching from '../../../../CustomHooks/useDataFetching';
import useDelete from '../../../../CustomHooks/useDelete';
import { Alert, Spinner } from 'react-bootstrap';

const AllServices = () => {


    // Import all service state from useDataFetching hook
    const [ loading, datas ] = useDataFetching("services");

    // Handle delete booking here
    const { successModal, handleDelete, setSuccessModal } = useDelete();

    // Handle Close success modal autometically after 3 seconds
    const handleClose = () => {
      setSuccessModal(false);
    }


      return (
        <div>
            <Pannel021 />
                <div className="dashBoardContentWrapper">
                <div className="contetnWrapper">
                  <span className="heading">Manage All Services</span> <br />
                  <div className="bottomBorder"></div>
                  </div>    
                  
            {successModal && <Alert variant="danger" onClick={handleClose} dismissible>
               Service Successfully Deleted!
             </Alert>}
                   <div className="contentBody">
               
                     <div className="contentData">
                       <div className="contentHeader">
                         <div className="columnWrap"><span className="columnName">Service</span></div>
                         <div className="columnWrap"><span className="columnName">Service Price</span></div>
                         <div className="columnWrap"><span className="columnName">Action</span></div>
                       </div>    
                      
                      {loading && <div className="loader text-center m-auto">
                  <Spinner animation="border" variant="danger" />
              </div>}
         
                        { datas.map( data => <SingleService key={data._id} data={data} handleDelete={ handleDelete }/>) }

                     </div>
                   </div>
                </div>
        </div>
    );
};

export default AllServices;