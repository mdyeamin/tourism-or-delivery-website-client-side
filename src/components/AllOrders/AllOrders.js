import React, { useEffect, useState } from 'react';
import './AllOrders.css'
const AllOrders = () => {
    const [allorder, setAllorder] = useState([])


    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you Sure? want to delete this item?')
        if (confirmation) {
            fetch(`https://pacific-shore-80224.herokuapp.com/allorders/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then()
        }

    }


    useEffect(() => {
        fetch('https://pacific-shore-80224.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => setAllorder(data))
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        allorder.map(order => <div key={order._id} className="col-md-4 g-2 mt-4">
                            <img src={order.img} alt="" />
                            <h4>{order.productName}</h4>
                            <h6>Status:{order.status}</h6>
                            <button className="btn btn-danger me-4" onClick={() => handleDelete(order._id)} >Delete</button>
                            <button className="btn update-btn text-white" onClick={() => handleDelete(order._id)} >Status update</button>
                        </div>)

                    }

                </div>

            </div>

        </div>
    );
};

export default AllOrders;