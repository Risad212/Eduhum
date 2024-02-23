import { Col, Container, Row } from 'react-bootstrap';
import style from './banner.module.css';
import Link from 'next/link';

export default function banner() {
    return (
        <>
            <section className={style.banner}>
                <Container>
                    <Row>
                      <Col>
                        <div className={style.content}>
                          <h1 className={style.title}>ONE STEP AHEAD THIS SEASON</h1>
                          <h5 className={style.subtitle}>BEST ONLINE EDUCATION SERVICE IN THE WORLD</h5>
                          <Link href="#" className={style.button}>Learn More</Link>
                        </div>
                      </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}