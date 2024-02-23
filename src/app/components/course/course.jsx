import Image from 'next/image';
import style from './course.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa6';
/*----- import course images ------*/
import course1 from '../../media/course1.jpg';
import course2 from '../../media/course2.jpg';
import course3 from '../../media/course3.jpg';
import teacher1 from '../../media/teacher1.jpg';
import teacher2 from '../../media/teacher2.jpg';
import teacher3 from '../../media/teacher3.jpg';


export default function course() {
    return (
        <>
            <section className={style.course}>
                <Container>
                    <div className={style.courseTop}>
                        <h2 className={style.title}>Find The Right Online Course For You</h2>
                        <p className={style.subtitle}>You dont have to struggle alone you have got our assistance and help.</p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className={style.singleCourse}>
                                <div className={style.courseImageWrapper}>
                                    <Image className="img-fluid" src={course1} alt="" />
                                </div>
                                <div className={style.courseBody}>
                                    <h4 className={style.courseTitle}><Link href="#">Become a product Manager learn the skills & job.</Link></h4>
                                    <div className={style.courseInfo}>
                                        <div className={style.instractor}>
                                            <Image className={style.instImage} src={teacher1} alt="" />
                                            <h5 className={style.instName}>Jim Séchen</h5>
                                        </div>
                                        <div className={style.lesson}>
                                            <span className={style.icon}><FaBookOpen /></span>
                                            <span className={style.number}>46 Lesson</span>
                                        </div>
                                    </div>
                                    <div className={style.priceButtom}>
                                        <div className={style.priceInfo}>
                                            <h5 className={style.sellPrice}>$30.00</h5>
                                            <h5 className={style.regularPrice}>$35.00</h5>
                                        </div>
                                        <Link href="#" className={style.buyButton}>Know Details <FaArrowRight /></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={style.singleCourse}>
                                <div className={style.courseImageWrapper}>
                                    <Image className="img-fluid" src={course2} alt="" />
                                </div>
                                <div className={style.courseBody}>
                                    <h4 className={style.courseTitle}><Link href="#">Fundamentals of music theory Learn new</Link></h4>
                                    <div className={style.courseInfo}>
                                        <div className={style.instractor}>
                                            <Image className={style.instImage} src={teacher2} alt="" />
                                            <h5 className={style.instName}>Barry Tone</h5>
                                        </div>
                                        <div className={style.lesson}>
                                            <span className={style.icon}><FaBookOpen /></span>
                                            <span className={style.number}>72 Lesson</span>
                                        </div>
                                    </div>
                                    <div className={style.priceButtom}>
                                        <div className={style.priceInfo}>
                                            <h5 className={style.sellPrice}>$25.00</h5>
                                            <h5 className={style.regularPrice}>$23.00</h5>
                                        </div>
                                        <Link href="#" className={style.buyButton}>Know Details <FaArrowRight /></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className={style.singleCourse}>
                                <div className={style.courseImageWrapper}>
                                    <Image className="img-fluid" src={course3} alt="" />
                                </div>
                                <div className={style.courseBody}>
                                    <h4 className={style.courseTitle}><Link href="#">Strategy law and organization Foundation</Link></h4>
                                    <div className={style.courseInfo}>
                                        <div className={style.instractor}>
                                            <Image className={style.instImage} src={teacher3} alt="" />
                                            <h5 className={style.instName}>Barry Tone</h5>
                                        </div>
                                        <div className={style.lesson}>
                                            <span className={style.icon}><FaBookOpen /></span>
                                            <span className={style.number}>30 Lesson</span>
                                        </div>
                                    </div>
                                    <div className={style.priceButtom}>
                                        <div className={style.priceInfo}>
                                            <h5 className={style.sellPrice}>$50.00</h5>
                                            <h5 className={style.regularPrice}>$55.00</h5>
                                        </div>
                                        <Link href="#" className={style.buyButton}>Know Details <FaArrowRight /></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}