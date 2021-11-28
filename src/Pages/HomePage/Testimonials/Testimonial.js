import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleTetimonial from './SingleTetimonial/SingleTetimonial';

const Testimonial = () => {
    // const [ loading, setLaoding] = useState(true);
    return (
        <section>
        <div className="sectionWrapper">
             <Container>
             <div className="sectionTitle">
                 <h2 className="sectionName">Our <span className="highLightPart">Testimonials</span></h2>
             </div> 
             {/* { !loading &&}  */}
             <Row xs={1} md={3} className="g-4">
              <SingleTetimonial />
              <SingleTetimonial />
              <SingleTetimonial />
             </Row>
             {/* { loading === true && <div className="loader text-center m-auto">
                 <Spinner animation="border" variant="danger" />
             </div>
             } */}
            </Container>
         </div>
     </section>
    );
};

export default Testimonial;