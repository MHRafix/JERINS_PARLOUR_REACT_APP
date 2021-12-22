import React from 'react';
import useDataFetching from '../../../../CustomHooks/useDataFetching';

const SingleBooking = (props) => {

    const [ loading, services ] = useDataFetching("services");


    // Let's destructuring the customer data from the object
    const { _id, bookingId, name, email, phoneNumber } = props.data;
    
     let serviceName;
      
      // Conditionaly finding the each and every single booked services
      if(services.length) {
        const singleBookedService = services.find(bookedService => bookedService._id === bookingId);
        serviceName = singleBookedService;
      }


    return (

        <div className="contetnColumn">
            <div className="columData"><span className="columnName">{ name }</span></div>
            <div className="columData"><span className="columnName">{ email }</span></div>
            <div className="columData"><span className="columnName">{ phoneNumber }</span></div>
            <div className="columData"><span className="columnName">{ serviceName?.name }</span></div>
            <div className="columData"><span className="columnNameAction"><span onClick={ () => props.handleDelete(_id, "bookedServices") } className="fas fa-trash actionIconDel"></span> || <span className="fas fa-edit actionIconEdt"></span></span></div>
        </div>
    );
};

export default SingleBooking;