import React from 'react';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../../Images/profile.png';

const OffCanvasMeni = () => {
    return (
        <div className="offcanvasMenuAreaMini">
                    <div className="themeProfile">
                        <div className="img">
                         <img width="50" height="50" src={ ProfileIcon } alt="profilePic" />
                        </div>
                        <div className="nameandBtn">
                            <h4 className="adminName">Jack Jone</h4>
                            <button className="profileBtn">Profile</button>
                        </div>
                   </div> 
            <div className="offCanvasMenus">
                <Link id="dashBoardNavMenu" to='/Admin_Pannel&&021/Pannel&&021/allBookings'><span className="menuIcon fas fa-shopping-basket"></span> &nbsp;All Bookings</Link> <br />
                <div className="dividerDiv"></div>
                <Link id="dashBoardNavMenu" to='/Admin_Pannel&&021/Pannel&&021/addService'><span className="menuIcon fas fa-plus"></span> &nbsp;Add Service</Link>  <br />
                <div className="dividerDiv"></div>
                <Link id="dashBoardNavMenu" to='/Admin_Pannel&&021/Pannel&&021/addAdmin'><span className="menuIcon fas fa-user-plus"></span> &nbsp;Add Admin</Link><br />
                <div className="dividerDiv"></div>
                <Link id="dashBoardNavMenu" to='/Admin_Pannel&&021/Pannel&&021/allServices'><span className="menuIcon fas fa-tasks"></span> &nbsp;All Services</Link> 
           
            </div>
        </div>
    );
};

export default OffCanvasMeni;