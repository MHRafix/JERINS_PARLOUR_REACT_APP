import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useDataFetching from '../../../CustomHooks/useDataFetching';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../../SharedComponents/Header/Header';
import SingleService from './SingleService';
import useAuth from '../../../CustomHooks/useAuth';

const MyServices = () => {

    // Import useAuth from custom hooks
    const { user } = useAuth();
    // Import useDataFetching Sate form custom hooks
    const [ loading, datas ] = useDataFetching("bookedServices");

    // Findout my bookd services
    let myServices;
    if(datas){
      const myService = datas.filter(data => data.customerEmail === user.email );
      if(myService){
        myServices = myService;
      }
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

            {/* {successModal && <Alert variant="danger" onClick={handleClose} dismissible>
               Booking Successfully Deleted!
             </Alert>} */}
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
              <Spinner animation="border" variant="danger" />
          </div>}
     
                                { myServices?.map( service => <SingleService key={ service._id } data={ service } />) }

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