import { Col, Container, Row } from 'react-bootstrap';
import style from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa6';
import about from '../../media/about.jpg';
import about2 from '../../media/about2.jpg';

export default function About() {
    return (
        <>
            <section className={style.about}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={style.aboutImg}>
                                <Image className="img-fluid" src={about} alt="About 1" />
                                <div className={style.imageWrapper}>
                                    <Image className="img-fluid" src={about2} alt="About 2" />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={style.aboutContent}>
                                <h3 className={style.aboutTitle}>Achieve Your Goals With Educal</h3>
                                <p className={style.para}>Lost Lost the plot bobby such a fibber bleeding bits and bobs don&apos;t get shirty with me bugger all mate chinwag super pukka william barney horse play buggered</p>
                                <ul className={style.skillList}>
                                    <li className={style.skillItem}><FaCheck className={style.checkIcon} /><span>Upskill your organization.</span></li>
                                    <li className={style.skillItem}><FaCheck className={style.checkIcon} /><span>Access more than 100K online courses</span></li>
                                    <li className={style.skillItem}><FaCheck className={style.checkIcon} /><span>Learn the latest skills</span></li>
                                </ul>
                                <Link href="#" className={style.button}>Apply Now</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
