import { Col, Container, Row } from 'react-bootstrap';
import feature from './feature.module.css';
import { FaBook, FaGraduationCap, FaRocket, FaUserGraduate } from 'react-icons/fa6';

export default function featurecard(){
    return (
        <>
         <section className={feature.feature}>
            <Container>
              <Row>
                <Col lg={3}>
                   <div className={feature.featurecard}>
                      <FaUserGraduate className={feature.icon}/>
                       <h4 className={feature.title}>Expert Instructors</h4>
                       <p className={feature.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                   </div>
                </Col>
                <Col lg={3}>
                   <div className={feature.featurecard}>
                      <FaGraduationCap className={feature.icon}/>
                       <h4 className={feature.title}>Certificate</h4>
                       <p className={feature.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                   </div>
                </Col>
                <Col lg={3}>
                   <div className={feature.featurecard}>
                      <FaRocket className={feature.icon}/>
                       <h4 className={feature.title}>Learn from anywhere</h4>
                       <p className={feature.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                   </div>
                </Col>
                <Col lg={3}>
                   <div className={feature.featurecard}>
                      <FaBook className={feature.icon}/>
                       <h4 className={feature.title}>4,000 Online courses</h4>
                       <p className={feature.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                   </div>
                </Col>
              </Row>
            </Container>
         </section>
        </>
    )
}