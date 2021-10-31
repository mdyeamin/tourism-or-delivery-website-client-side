import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {
    const [myorder, setMyorder] = useState([])
    const { user } = useAuth()
    const email = user?.email;


    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you Sure? want to delete this item?')
        if (confirmation) {
            fetch(`https://pacific-shore-80224.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then()
        }
    }



    useEffect(() => {
        fetch(`https://pacific-shore-80224.herokuapp.com/myorder?email=${email}`)
            .then(res => res.json())
            .then(data => setMyorder(data))
    })



    return (
        <div>
            <div className="container">
                <h1>My Order List: {myorder.length}</h1>
                <div className="row">
                    {
                        myorder.map(order => <div key={order._id} className="col-md-4 g-2 mt-4">
                            <img src={order.img} alt="" />
                            <h4>{order.title}</h4>
                            <button className="btn btn-danger" onClick={() => handleDelete(order._id)} >Delete</button>
                        </div>)

                    }

                </div>

            </div>

        </div>
    );
};

export default MyOrders;