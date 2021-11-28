import React from 'react';
import { Container } from 'react-bootstrap';

const Slider = () => {
      let sliderDesc = "A beauty salon or beauty parlor is an dealing establishment with cosmetic treatments for men and women. There's a difference between a beauty salon and a beauty parlor which is that a beauty salon is a well developed space in a private location, usually having more features than a beauty parlor could have. Usually a beauty parlor concentrates on a specific treatment or beauty features such as styling either for men, women or for both.";  
    return (
       <section className="sectionWrapperBg">
           <div className="homeSlider">
             <Container>
               <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="sliderDetail mb-5">
                          <h1 className="sliderName">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 130) }...</p>
                          <button className="specialBtn">Book Appointment</button>
                         </div>
                      </div>
                      <div className="col-lg-5 sliderImg">
                         <img width="100" height="350" src="https://i.ibb.co/8rWx8XQ/bbanner.png" className="d-block w-100 rounded-circle" alt="sliderImage" />
                      </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-5 sliderImg">
                         <img width="100" height="350" src="https://i.ibb.co/xHj7dMM/hlw-1.png" className="d-block w-100 rounded-circle" alt="sliderImage" />
                      </div>
                      <div className="col-lg-6">
                        <div className="sliderDetail mt-5">
                          <h1 className="sliderName">Women Nail <br /> Polish And Fashial</h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 130) }...</p>
                          <button className="specialBtn">Book Appointment</button>
                         </div>
                      </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="sliderDetail mb-5">
                          <h1 className="sliderName">Women Hair <br /> Cut, Style & Shine </h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 130) }...</p>
                          <button className="specialBtn">Book Appointment</button>
                         </div>
                      </div>
                      <div className="col-lg-5 sliderImg">
                         <img width="100" height="350" src="https://i.ibb.co/x6DX71B/hair.png" className="d-block w-100 rounded-circle" alt="sliderImage" />
                      </div>
                      </div>
                    </div>
               
                    <div className="carousel-item">
                      <div className="row justify-content-between align-items-center">
                      <div className="col-lg-6">
                        <div className="sliderDetail mb-5">
                          <h1 className="sliderName">Best Beauty & <br /> Spa Service Center </h1>
                          <p className="sliderDetail">{ sliderDesc.slice(0, 130) }...</p>
                          <button className="specialBtn">Book Appointment</button>
                         </div>
                      </div>
                      <div className="col-lg-5 sliderImg">
                         <img width="100" height="350" src="https://i.ibb.co/51Sz3gP/layer-1-1.png" className="d-block w-100 rounded-circle" alt="sliderImage" />
                      </div>
                      </div>
                    </div>
               
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
            </Container>
           </div>
       </section>
    );
};

export default Slider;