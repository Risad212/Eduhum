'use client'
import { Col, Container, Row } from 'react-bootstrap';
import style from './footer.module.css';
import logo from '../../media/logo.png';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube} from "react-icons/fa6";
import Link from 'next/link';
import { FaLocationDot,FaPhone} from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function footer() {
   return (
      <>
         <footer className={style.footer}>
            <Container>
               <Row>
                  <Col lg={3} md={6} sm={12}>
                     <div className={style.footer_widget_1}>
                        <Link href="#">
                           <Image className="img-fluid" src={logo} alt="" />
                        </Link>
                        <p>Our Clinic has grown to provide a world class facility for the clinic advanced restorative.
                           We are among the most qualified implant providers in the AUS with over 30 years of quality training
                           and experience.</p>
                        <div className={style.social_list}>
                           <span className={style.social_item}>
                              <Link href="#">
                                 <FaFacebookF />
                              </Link>
                           </span>
                           <span className={style.social_item}>
                              <Link href="#">
                                 <FaTwitter />
                              </Link>
                           </span>
                           <span className={style.social_item}>
                              <Link href="#">
                                 <FaLinkedinIn />
                              </Link>
                           </span>
                           <span className={style.social_item}>
                              <Link href="#">
                                 <FaYoutube />
                              </Link>
                           </span>
                        </div>
                     </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                     <div className={style.footer_widget_2}>
                        <h4 className={style.widget_title}>Services</h4>
                        <ul className={style.deparment_list}>
                           <li className={style.deparment_item}><Link href="#">About</Link></li>
                           <li className={style.deparment_item}><Link href="#">courses</Link></li>
                           <li className={style.deparment_item}><Link href="#">blog</Link></li>
                           <li className={style.deparment_item}><Link href="#">Events</Link></li>
                           <li className={style.deparment_item}><Link href="#">Career</Link></li>
                        </ul>
                     </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                     <div className={style.footer_widget_2}>
                        <h4 className={style.widget_title}>UseFull Links</h4>
                        <ul className={style.deparment_list}>
                           <li className={style.deparment_item}><Link href="#">Browse Library</Link></li>
                           <li className={style.deparment_item}><Link href="#">tutorials</Link></li>
                           <li className={style.deparment_item}><Link href="#">Library</Link></li>
                           <li className={style.deparment_item}><Link href="#">Instructor</Link></li>
                           <li className={style.deparment_item}><Link href="#">Become a Teacher</Link></li>
                        </ul>
                     </div>
                  </Col>
                  <Col lg={3} md={6} sm={12}>
                     <div className={style.footer_widget_2}>
                        <h4 className={style.widget_title}>Contact</h4>
                        <ul>
                           <li className={style.contact_item}>
                              <Link href="#">
                                 <span className={style.contact_icon}>
                                   <FaLocationDot  />
                                 </span>
                                 <address className="address">
                                    2130 Fulton Street San Diego
                                    CA 94117-1080 USA
                                 </address>
                              </Link>
                           </li>
                           <li className={style.contact_item}>
                              <Link href="#">
                                 <span className={style.contact_icon}>
                                   <FaPhone   />
                                 </span>
                                 <span>
                                    Mon to Fri : 08:30 - 11:00
                                    +880 02145 6789
                                 </span>
                              </Link>
                           </li>
                           <li className={style.contact_item}>
                              <Link href="#">
                                 <span className={style.contact_icon}>
                                    <MdEmail />
                                 </span>
                                 <span>
                                    Do you have a Question?
                                    info@gmail.com
                                 </span>
                              </Link>
                           </li>
                           <li className={style.contact_item}>
                              <Link href="#">
                                 <span className={style.contact_icon}>
                                    <FaClock />
                                 </span>
                                 <span>
                                    Mon - Sat 8.00 - 11.00
                                    Friday CLOSED
                                 </span>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </Container>
         </footer>
      </>
   )
}