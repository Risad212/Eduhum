'use client'
import { Col, Container, Row } from 'react-bootstrap';
import style from './count.module.css';
import { FaUser } from 'react-icons/fa6';
import CountUp from 'react-countup';

export default function count() {
    return (
        <section className={style.countup}>
            <Container>
                <div className={style.countTop}>
                    <h2 className={style.countTitle}>We Are Proud</h2>
                    <p className={style.countSubtitle}>You dont have to struggle alone you have got our assistance and help.</p>
                </div>
                <Row>
                    <Col lg={3}>
                        <div className={style.countSingle}>
                            <span className={style.icon}><FaUser /></span>
                            <h4 className={style.countNum}>
                                <CountUp start={0} end={345421} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </h4>
                            <h5 className={style.countText}>Students Enrolled</h5>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={style.countSingle}>
                            <span className={style.icon}><FaUser /></span>
                            <h4 className={style.countNum}>
                                <CountUp start={0} end={2286} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </h4>

                            <h5 className={style.countText}>Total Courses</h5>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={style.countSingle}>
                            <span className={style.icon}><FaUser /></span>
                            <h4 className={style.countNum}>
                                <CountUp start={0} end={22158} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </h4>
                            <h5 className={style.countText}>Online Learners</h5>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={style.countSingle}>
                            <span className={style.icon}><FaUser /></span>
                            <h4 className={style.countNum}>
                                <CountUp start={0} end={186} delay={0}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                        </div>
                                    )}
                                </CountUp>
                            </h4>
                            <h5 className={style.countText}>Foreign Followers</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}