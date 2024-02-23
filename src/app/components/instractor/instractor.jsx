import { Container, Row,Col } from 'react-bootstrap';
import style from './instractor.module.css';
import Image from 'next/image';
/*------- teacher images --------*/
import teacher1 from '../../media/teacher.webp';

export default function Instractor() {
    return (
        <>
            <section className={style.wrapper}>
                <Container>
                    <div className={style.sectiontop}>
                        <h2 className={style.title}>Our Expert Trainers</h2>
                        <p className={style.subtitle}>Replenish man have thing gathering lights yielding shall you</p>
                    </div>
                    <Row>
                        <Col lg={3}>
                            <div className={style.teacher}>
                                <div className={style.cardTop}>
                                    <Image className={`img-fluid ${style.image}`} src={teacher1} alt='teacher' />
                                </div>
                                <div className={style.cardBody}>
                                    <h4 className={style.name}>Mated Nithan</h4>
                                    <h5 className={style.position}>Sr. web designer</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={style.teacher}>
                                <div className={style.cardTop}>
                                    <Image className={`img-fluid ${style.image}`} src={teacher1} alt='teacher' />
                                </div>
                                <div className={style.cardBody}>
                                    <h4 className={style.name}>Mated Nithan</h4>
                                    <h5 className={style.position}>Sr. web designer</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={style.teacher}>
                                <div className={style.cardTop}>
                                    <Image className={`img-fluid ${style.image}`} src={teacher1} alt='teacher' />
                                </div>
                                <div className={style.cardBody}>
                                    <h4 className={style.name}>Mated Nithan</h4>
                                    <h5 className={style.position}>Sr. web designer</h5>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className={style.teacher}>
                                <div className={style.cardTop}>
                                    <Image className={`img-fluid ${style.image}`} src={teacher1} alt='teacher' />
                                </div>
                                <div className={style.cardBody}>
                                    <h4 className={style.name}>Mated Nithan</h4>
                                    <h5 className={style.position}>Sr. web designer</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}