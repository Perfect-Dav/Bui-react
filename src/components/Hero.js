import React from "react";

import styles from './Hero.module.css';
import HeroBackground from "../assets/hero.png";
import HeroMan from "../assets/man.png";
import HeroSmall from "../assets/back.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Hero() {
    return (
        <div>
            <section style={{backgroundImage: `url(${HeroBackground})`}} className={styles.heroSection}>
            <Container fluid>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <br/><br/><br/><br/>
                        <div className={styles.heroWrap}>
                            <h3 className={styles.heroHead}>
                                Let us <span className={styles.maintain}>maintain your car</span> <br/>
                                 on a regular basis.
                            </h3>
                            <p className={styles.heroP}>
                                Save your worries and time. Our customers do not need to worry about <br/>
                                changing the oil or filters on time. We simply remind them to bring the car <br/>
                                and we take care of all. And thnks to the ongoing subscription, they don't <br/>
                                need to pay anything on the spot. 
                            </p>
                            <Button href="#!" className={styles.subscribeBtn} variant="primary">Subscribe</Button>{' '}
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.wrapS}>
                            <img 
                                src={HeroMan}
                                alt="Man"
                                className={styles.man}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Hero for mobile devices */}

        <section style={{backgroundImage: `url(${HeroSmall})`}} className={styles.heroSectionSm}>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <br/><br/><br/><br/>
                        <div className={styles.heroWrapSm}>
                            <h3 className={styles.heroHeadSm}>
                                Let us <span className={styles.maintain}>maintain <br/> your car </span>
                                 on a <br/> regular basis.
                            </h3>
                            <p className={styles.heroPSm}>
                                Save your worries and time. Our customers do not need to worry about <br/>
                                changing the oil or filters on time. We simply remind them to bring the car <br/>
                                and we take care of all. And thnks to the ongoing subscription, they don't <br/>
                                need to pay anything on the spot. 
                            </p>
                            <Button href="#!" className={styles.subscribeBtn} variant="primary">Subscribe</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    );
}

export default Hero;