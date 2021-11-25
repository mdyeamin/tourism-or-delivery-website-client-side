import React, { useEffect, useState } from 'react';
import './AllOrders.css'


const AllOrders = () => {
    const [allorder, setAllorder] = useState([])
    const [modifyCount, setModifyCount] = useState(0)


    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you Sure? want to delete this item?')
        if (confirmation) {
            fetch(`https://fierce-beach-92464.herokuapp.com/allorders/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = allorder.filter(order => order._id !== id);
                    setAllorder(remaining);
                })
        }

    }



    const handleUpdatestatus = (id) => {
        const update = { status: 'approved' }
        const url = `https://fierce-beach-92464.herokuapp.com/update/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setModifyCount(modifyCount + 1);

                }
            })
    }



    useEffect(() => {
        fetch('https://fierce-beach-92464.herokuapp.com/allorder')
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
                            <button className="btn update-btn text-white" onClick={() => handleUpdatestatus(order._id)}>Status update</button>
                        </div>)

                    }

                </div>

            </div>

        </div>
    );
};

export default AllOrders;