import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleBooking = ({data, handleDelete}) => {
    // Let's destructuring the customer data from the object
    const { _id, serviceName, customerName, customerPhoneNumber, paymentStatus } = data;

    // AOS animation
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1300,
            easing: 'ease',
        });
    });



    return (

        <div data-aos="fade-up">
        <div className="contetnColumn" >
            <div className="columData"><span className="columnName">{ customerName }</span></div>
            <div className="columData"><span className="columnName">{ customerPhoneNumber }</span></div>
            <div className="columData"><span className="columnName">{ serviceName }</span></div>
            <div className="columData"><span className="columnName">{ paymentStatus === true ? <span className="columnName status">PAID</span> : <span className="columnName status">UNPAID</span> }</span></div>
            <div className="columData"><span className="columnNameAction"><span onClick={ () => handleDelete(_id) } className="fas fa-trash actionIconDel"></span></span></div>
        </div>
        <hr style={{color:"crimson"}}/>
       </div>
    );
};

export default SingleBooking;