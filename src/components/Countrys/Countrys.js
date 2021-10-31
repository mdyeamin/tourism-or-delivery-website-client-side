import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Country from '../Country/Country';
import './Countrys.css'
const Countrys = () => {
    const [countrys, setCountrys] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(result => result.json())
            .then(countryDsta => setCountrys(countryDsta.slice(0, 40)))
    }, [])
    return (
        <>
            <div>
                <h1 className="my-5">Our Travel Destinations</h1>
                <div className="countrys container">
                    {
                        countrys.map(country => <Country
                            key={country.altSpellings}
                            country={country}
                        ></Country>)
                    }
                </div>
            </div>

            <div>
                <h2 className="my-5">Book with Travel Curious, an exceptional experience guaranteed</h2>

                <Row className="container guaranteed">
                    <Col md={3}>
                        <img src="https://travelcurious.com/assets/images/reassurance/free-cancellation.png" alt="" />
                        <h6>Free cancellation</h6>
                        <p>Do not fret, we have you covered with our 48 hrs cancellation policy.</p>
                    </Col>
                    <Col md={3}>
                        <img src="https://travelcurious.com/assets/images/reassurance/avoid-crowds.png" alt="" />
                        <h6>Avoid the crowds</h6>
                        <p>Travel like a VIP, avoid crowds, and unnecessary queues.</p>
                    </Col>
                    <Col md={3}>
                        <img src="https://travelcurious.com/assets/images/reassurance/authentic.png" alt="" />
                        <h6>Authentic Experiences</h6>
                        <p>Bespoke local tours handcrafted for you by our global travel specialists</p>
                    </Col>
                    <Col md={3}>
                        <img src="https://travelcurious.com/assets/images/reassurance/professional-guides.png" alt="" />
                        <h6>Professional Guides</h6>
                        <p>All guides are handpicked, trained and licensed to ensure you are immersed in the local culture</p>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Countrys;