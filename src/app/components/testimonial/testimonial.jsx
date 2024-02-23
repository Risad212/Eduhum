'use client'
import {Container} from 'react-bootstrap';
import style from './testimonial.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function testimonial() {
  return (
    <>
      <section className={style.review}>
        <Container>
          <h2>Testimonial</h2>
        </Container>
      </section>
    </>
  )
}