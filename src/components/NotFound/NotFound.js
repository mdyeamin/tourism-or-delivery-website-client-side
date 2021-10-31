import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import not from '../../img/NotFound.png'
const NotFound = () => {
    return (
        <>
            <Row>
                <Col></Col>
                <Col>
                    <img className="text-center" style={{ width: "100%" }} src={not} alt="" />
                    <div className="text-center">
                        <NavLink to="/home">   <button className="btn btn-outline-dark ">Go back</button></NavLink>
                        <p className="text-danger">opps page not found</p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
};

export default NotFound;