import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../img/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-area">
            <Row className="footer">
                <Col md={4} className="footer-head">
                    <h4> <img src={logo} style={{ width: '8em' }} alt="" /> </h4>
                    <small className="default-color mb-5">My kinda people, my kinda place. There's something special about this place.</small>
                    <Row className="mt-5">
                        <Col className="default-color">
                            <h6>Travel</h6>
                            <small >33 Farlane Street</small><br />
                            <small >Keilor East</small><br />
                            <small >VIC 3033, Australia</small>
                        </Col>
                        <Col md={2}>

                        </Col>
                        <Col className="default-color">
                            <small></small><br />
                            <small>+123 655 655</small><br />
                            <small>+123 655 755</small><br />
                            <small>travelo@mail.com</small><br />
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <h4 className="text-white">LATEST POSTS</h4>
                    <div className="default-color">
                        <div>
                            <p>Together we can do so much</p>
                            <span>April 8, 2016</span>
                        </div>
                        <div>
                            <p>The Three Musketeers Surgical Team</p>
                            <span>April 8, 2016</span>
                        </div>
                        <div>
                            <p>Accredited surgical facility</p>
                            <span>April 8, 2016</span>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="default-color">
                    <h4 className="text-white f-head">Subscribe</h4>
                    <p>subscribe to get the latest <br /> news from us</p>
                    <div className="input-group input-group-sm mb-3">

                        <input type="text" className="form-control" placeholder="entar your email..." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        <button type="button" className="btn " style={{ backgroundColor: "#669CBC" }}><i className="fas fa-arrow-right"></i></button>
                    </div>
                </Col>

            </Row >
            <hr />
            <p className="text-center default-color">&#169; <img src={logo} style={{ width: '6em' }} alt="" /> 2021</p>
        </div>
    );
};

export default Footer;