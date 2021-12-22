import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleService = ({data}) => {
    // AOS animation
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1300,
            easing: 'ease',
        });
    });
    return (
        <div className="contetnColumn" data-aos="fade-up">
            <div className="columData"><span className="columnName">{data?.serviceName}</span></div>
            <div className="columData"><span className="columnName">$ { data?.servicePrice }</span></div>
            <div className="columData"><span className="columnName">{ data?.appointMentTime }</span></div>
            <div className="columData"><span className="columnName status">{ data?.status }</span></div>
            <div className="columData"><span className="columnName payment">{ data?.status }</span></div>
            <div className="columData"><span className="columnNameAction"><span className="fas fa-trash actionIconDel"></span> || <span className="fas fa-edit actionIconEdt"></span></span></div>
        </div>
    );
};

export default SingleService;