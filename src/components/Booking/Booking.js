import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col, Card } from 'react-bootstrap'
import './Booking.css'
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
const Booking = () => {
    const { user } = useAuth()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { bookingId } = useParams()
    const [books, setBooks] = useState()
    useEffect(() => {
        fetch('https://fierce-beach-92464.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    const book = books?.find(book => book?._id === bookingId)
    console.log('booking data is', book);

    const onSubmit = data => {
        data.status = 'pending';
        data.poductId = bookingId;
        data.productName = book?.title;
        data.img = book?.img
        console.log(JSON.stringify(data))
        fetch("https://fierce-beach-92464.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order placed successfully');
                    reset()
                }
            })


        console.log(data)

    };
    return (
        <div>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={5}>
                    <div className="book-final">
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={book?.img} />
                            <Card.Body>
                                <Card.Title>{book?.title}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Title><i class="fas fa-map-marker-alt"></i> {book?.country}</Card.Title>
                                <Card.Title><i class="fas fa-dollar-sign"></i> {book?.price}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={5}>
                    <div id="booking" className="section">
                        <div className="section-center">
                            <div className="container">
                                <div className="row">
                                    <div className="booking-form">
                                        <div className="form-header">
                                            <h2 className="text-white">Make your reservation</h2>
                                        </div>
                                        <form className="booking" onSubmit={handleSubmit(onSubmit)}>

                                            <input type="text" defaultValue={user?.displayName} {...register("name")} />
                                            <br />
                                            <input type="email" defaultValue={user?.email} {...register("email")} />
                                            <br />
                                            <input type="text" {...register("address")} placeholder="Address " />
                                            <br />
                                            <input type="date" {...register("date")} />




                                            {errors.exampleRequired && <span>This field is required</span>}
                                            <br />
                                            <input className="btn btn-light" type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={1}>
                </Col>
            </Row>

        </div>
    );
};

export default Booking;