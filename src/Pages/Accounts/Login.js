import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../CustomHooks/useAuth';
import LOGO from '../../logo.png';
import GOOGLELOGO from '../../google.png';

const Login = () => {

    const { user, handleGoogleSignin } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';
    
    // Handle google signin
    const googleSignin = () => {
        handleGoogleSignin()
        .then(res => {
              history.push(redirectUrl);
        })

    }

    // Prevent the fake users
        if(user.email){
            history.push(redirectUrl);
        }


    return (
        <section>
            <div className="loginPage">
                <div className="container">
                    <div className="loginSection">
                              <div className="loginForm">
                                  <img className="loginLogo" src={LOGO} alt="siteLogo" />
                                  <h3 className="title">Login With</h3>
                                  <div onClick={ googleSignin } className="apiOption"><img className="googleSLogo" src={GOOGLELOGO} alt="googleLogo" />
                                  <span className="apiName">Continue With Google</span></div> <br />
                                  <span className="anotherWay">You have no account ? <Link to="/signup">Create account</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Login;