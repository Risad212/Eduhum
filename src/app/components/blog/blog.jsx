import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';


export default function Blog() {
    return (
        <section className="blog">
            <Container>
                <Row>
                    <div className="col-lg-6 col-md-12">
                        <div className="blog-left">
                            <span className="subtitle wow fadeInDown" data-wow-delay=".4s" data-wow-duration=".9s" style="visibility: visible; animation-duration: 0.9s; animation-delay: 0.4s; animation-name: fadeInDown;">our blog</span>
                            <h2 className="title wow fadeInDown" data-wow-delay=".2s" data-wow-duration=".9s" style="visibility: visible; animation-duration: 0.9s; animation-delay: 0.2s; animation-name: fadeInDown;">Read Our Latest Travel
                                Blog Here</h2>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                                massa. Cum sociis natoque penatibus et.</p>
                            <div className="img-wrapper">
                                <a href="blog-details.html">
                                    <Image className="lazy img-fluid" src="images/blog/thailand.jpg" alt="" />
                                </a>
                                <div className="text-box">
                                    <h3>8 Best Things To Do in Krabi, Thailand</h3>
                                    <a href="blog-details.html" className="button">Read More <i aria-hidden="true" className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="blog-right">

                            <Row className="single-box">
                                <div className="col-md-6 col-sm-12">
                                    <div className="box">
                                        <div className="img-wrapper">
                                            <a href="blog-details.html">
                                                <Image className="lazy img-fluid" src="images/blog/forest.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h3>Asia’s Thrilling Adventures: Hiking, Trekking, and More</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo...</p>
                                    <a href="blog-details.html" className="button">Read More <i aria-hidden="true" className="fas fa-arrow-right"></i></a>
                                </div>
                            </Row>
                          
                            <Row className="single-box">
                                <div className="col-md-6 col-sm-12">
                                    <div className="box">
                                        <div className="img-wrapper">
                                            <a href="blog-details.html">
                                                <Image className="lazy img-fluid" src="images/blog/couple.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h3>Travel Couples Who Can Give You Serious Relationship Goals</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo...</p>
                                    <a href="blog-details.html" className="button">Read More <i aria-hidden="true" className="fas fa-arrow-right"></i></a>
                                </div>
                            </Row>
                       
                            <Row className="single-box">
                                <div className="col-md-6 col-sm-12">
                                    <div className="box">
                                        <div className="img-wrapper">
                                            <a href="blog-details.html">
                                                <Image className="lazy img-fluid" src="images/blog/soul.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h3>Asia for the Soul: Discover Spiritual Retreats and Practices</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo...</p>
                                    <a href="blog-details.html" className="button">Read More <i aria-hidden="true" className="fas fa-arrow-right"></i></a>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

