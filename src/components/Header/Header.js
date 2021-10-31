import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import banner from '../../img/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <div className="nav">
                <Navbar className="nav" collapseOnSelect expand="lg" bg="" variant="dark">
                    <Container>
                        <Navbar.Brand >
                            <NavLink to="/"><img style={{ width: '200px' }} src={banner} alt="" /></NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">


                            </Nav>
                            <Nav className="navBorder">
                                <NavLink to="/home">Home</NavLink>
                                {/* <NavLink to="/"> Dank memes</NavLink> */}
                                {user?.email &&

                                    <NavLink to="/addService">
                                        Add Service
                                    </NavLink>


                                }
                                {user?.email &&
                                    <NavLink to="/myOrders">
                                        My Orders
                                    </NavLink>
                                }
                                {user?.email &&
                                    <NavLink to="/AllOrders">
                                        All Orders
                                    </NavLink>
                                }
                            </Nav>


                            {!user?.email ? <NavLink eventKey={2} to="/signin">
                                <Button className="btn login-btn" size="sm">LOG IN</Button>
                            </NavLink>
                                :
                                <NavLink to="/">
                                    <Button onClick={logOut} className="btn login-btn" size="sm">LOG OUT</Button>
                                </NavLink>
                            }
                        </Navbar.Collapse>
                    </Container>
                    <div className="user-logo me-4">
                        <img src={user?.photoURL} alt="" />
                        <span className="text-white">{user?.displayName}</span>
                    </div>
                </Navbar>
            </div>
        </div >
    );
};

export default Header;