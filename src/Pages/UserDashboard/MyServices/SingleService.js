import React from 'react';

const SingleService = ({data}) => {

    return (
        <div className="contetnColumn">
            <div className="columData"><span className="columnName">{data?.serviceName}</span></div>
            <div className="columData"><span className="columnName">$ { data?.servicePrice }</span></div>
            <div className="columData"><span className="columnName">{ data?.appointMentTime }</span></div>
            <div className="columData"><span className="columnName">{ data?.status }</span></div>
            <div className="columData"><span className="columnName">{ data?.status }</span></div>
            <div className="columData"><span className="columnNameAction"><span className="fas fa-trash actionIconDel"></span> || <span className="fas fa-edit actionIconEdt"></span></span></div>
        </div>
    );
};

export default SingleService;