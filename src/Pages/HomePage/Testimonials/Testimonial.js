import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useDataFetching from '../../../CustomHooks/useDataFetching';
import SingleTetimonial from './SingleTetimonial/SingleTetimonial';
import Carousel from 'react-elastic-carousel';

const Testimonial = () => {
    // Get all feedback from the mongodb database
    const { loading, datas }  = useDataFetching("userfeedBack");

            // Carousel breakpoints
            const breakpoints = [
                {width: 1, itemsToShow: 1},
                {width: 550, itemsToShow: 2},
                {width: 768, itemsToShow: 3}
            ];

    return (
        <section>
        <div className="sectionWrapper">
             <Container>
             <div className="sectionTitle">
                 <h2 className="sectionName">Our <span className="highLightPart">Testimonials</span></h2>
             </div> 
             { loading && <div className="loader text-center m-auto">
                <Spinner animation="border" variant="danger" />
            </div> }
             <Row xs={1} md={3} className="g-4">
             <Carousel breakPoints={breakpoints}>
             {
              datas.map(data => <SingleTetimonial key={data._id} feedback={data} />)
              }
        </Carousel>

             </Row>
            </Container>
         </div>
     </section>
    );
};

export default Testimonial;