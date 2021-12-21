import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import Login from './Login';

const Account = () => {
    return (
        <section className="pageWrapper">
            <div className="pageBody">
                <Header />
                <Login />
                <Footer />
                
            </div>
        </section>
    );
};

export default Account;