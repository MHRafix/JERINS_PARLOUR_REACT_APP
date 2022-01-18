import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleService = ({data, handleDelete}) => {
 
    // Let's destructuring the service data from the object
    const { _id, name, price } = data;

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
       <div className="contetnColumn">
            <div className="columData"><span className="columnName">{ name }</span></div>
            <div className="columData"><span className="columnName">$ { price }</span></div>
            <div className="columData"><span className="columnNameAction"><span onClick={ () => handleDelete(_id) } className="fas fa-trash actionIconDel"></span></span></div>
      </div>
        <hr style={{color:"crimson"}}/>
      </div>
    );
};

export default SingleService;