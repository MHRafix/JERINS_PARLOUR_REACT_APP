import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Modal } from 'react-bootstrap';
import Payment from '../Payment/Payment';

const SingleService = ({data, handleDelete}) => {
    // Take some state
    const [ block, setBlock ] = useState(false);

    // AOS animation
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1300,
            easing: 'ease',
        });
    });

    // Payment status varification
    let varify;
    if(data?.paymentStatus === false){
        varify = "pay";
    }
    return (
        <div className="contetnColumn" data-aos="fade-up">
            <div className="columData"><span className="columnName">{data?.serviceName}</span></div>
            <div className="columData"><span className="columnName">$ { data?.servicePrice }</span></div>
            <div className="columData"><span className="columnName">{ data?.appointMentTime }</span></div>
            {varify === "pay" ? <div className="columData"><button onClick={ () => setBlock(true)} className="payBtn">Pay Now</button></div> : <div className="columData"><span className="columnName status">PAID</span></div>}
            <div className="columData"><span className="columnName payment">{ data?.status }</span></div>
            <div className="columData"><span className="columnNameAction"><span onClick={ () => handleDelete(data._id) } className="fas fa-trash actionIconDel"></span></span></div>
            <Modal show={block}>
                        <Modal.Header onClick={() => setBlock(false)} closeButton>
                        <Modal.Title>Please Get Paid</Modal.Title>
                        </Modal.Header>
                       <Payment amount={data?.servicePrice} />
                   </Modal>
        </div>
    );
};

export default SingleService;