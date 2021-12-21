import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDataFetching from '../../../CustomHooks/useDataFetching';
import SingleService from './SingleService/SingleService';

const FeaturedServices = () => {

    const [ loading, datas ] = useDataFetching("featuredServices");

    return (
                    <section>
                       <div className="sectionWrapper">
                         <Container>
                            <div className="sectionTitle">
                                <h2 className="sectionName">Featured <span className="highLightPart">Services</span></h2>
                            </div> 
                            { loading && <div className="loader text-center m-auto">
                                <Spinner animation="border" variant="danger" />
                            </div> }
                            <Row xs={1} md={3} className="g-4">
                                {
                                    datas.map(data => <SingleService key={data._id} data={data} />)
                                }
                            </Row>
                            <div className="expBtn text-center mt-5">
                                <Link to="/services">
                                    <Button className="specialBtn">Explore More</Button>
                                </Link>
                           </div>
                           </Container>
                        </div>
                    </section>

    );
};

export default FeaturedServices;