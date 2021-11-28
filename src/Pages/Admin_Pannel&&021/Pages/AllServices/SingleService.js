import React from 'react';

const SingleService = (props) => {
 
    // Let's destructuring the service data from the object
    const { _id, name, price } = props.data;
    return (
        <div className="contetnColumn">
            <div className="columData"><span className="columnName">{ name }</span></div>
            <div className="columData"><span className="columnName">$ { price }</span></div>
            <div className="columData"><span className="columnNameAction"><span onClick={ () => props.handleDelete(_id, "services") } className="fas fa-trash actionIconDel"></span> || <span className="fas fa-edit actionIconEdt"></span></span></div>
      </div>
    );
};

export default SingleService;