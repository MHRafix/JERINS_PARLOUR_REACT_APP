import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useDataFetching from '../../CustomHooks/useDataFetching';
import SingleService from '../HomePage/FeaturedServices/SingleService/SingleService';
import Footer from '../SharedComponents/Footer/Footer';
import Header from '../SharedComponents/Header/Header';

const Services = () => {


    // Import useDataFetching Sate form custom hooks
    const { loading, datas } = useDataFetching("services");

    return (
        <section className="pageWrapper">
        <div className="pageBody">
            <Header />
            <section>
                       <div className="sectionWrapper">
                          <Container>
                            <div className="sectionTitle">
                                <h2 className="sectionName mt-5">All <span className="highLightPart">Services</span></h2>
                            </div> 
                            { loading && <div className="loader text-center m-auto">
                                <Spinner animation="border" variant="danger" />
                            </div>}
                             <Row xs={1} md={3} className="g-4">
                                {
                                    datas.map(data => <SingleService key={data._id} data={data} />)
                                }
                            </Row>
                           </Container>
                        </div>
                    </section>
                    {/* Footer Import Here */}
                    <Footer />
        </div>
    </section>
    );
};

export default Services;