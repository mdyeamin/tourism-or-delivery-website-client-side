import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './TravelService.css'
const TravelService = (props) => {
    const { _id, title, img, country, price, dec } = props.travel
    return (
        <div>


            <Card className="card-style" style={{ width: '22em' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {dec}
                    </Card.Text>
                    <Card.Title><i class="fas fa-map-marker-alt"></i> {country}</Card.Title>
                    <Card.Title><i class="fas fa-dollar-sign"></i> {price}</Card.Title>
                </Card.Body>
                <Card.Body>
                </Card.Body>

                <Button variant="primary"> <i class="fas fa-suitcase-rolling"></i>
                    <NavLink to={`/booking/${_id}`}
                        style={{ textDecoration: 'none', color: 'white' }}>  FIND OUT MORE</NavLink>
                </Button>

            </Card>


        </div >
    );
};

export default TravelService;