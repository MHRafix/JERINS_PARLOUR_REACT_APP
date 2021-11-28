import React from 'react';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';
import Book from './BookService/Book';

const Booking = () => {

    return (
        <section className="pageWrapper">
          <div className="pageBody">
             <Header />
               <Book />
             <Footer />
          </div>
        </section>
    );
};

export default Booking;