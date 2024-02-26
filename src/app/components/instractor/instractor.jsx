import { Container, Row, Col } from 'react-bootstrap';
import style from './instractor.module.css';
import Image from 'next/image';
import { teacherData } from '../../DummyData/DummyData';


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
                        {
                            teacherData.map((teacher) => {
                                return (
                                    <>
                                        <Col lg={3}>
                                            <div className={style.teacher}>
                                                <div className={style.cardTop}>
                                                    <Image className={`img-fluid ${style.image}`} src={teacher.img} alt='teacher' />
                                                </div>
                                                <div className={style.cardBody}>
                                                    <h4 className={style.name}>{teacher.name}</h4>
                                                    <h5 className={style.position}>{teacher.desination}</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}