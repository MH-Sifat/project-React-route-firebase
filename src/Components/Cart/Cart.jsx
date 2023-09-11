import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import CartRow from '../CartRow/CartRow';

const Cart = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // console.log(orders);

    useEffect(() => {
        fetch(`https://project1-amber.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDeleteOrder = id => {
        // console.log(id);
        const process = window.confirm('Do you want to delete?')
        if (process) {
            fetch(`https://project1-amber.vercel.app/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order deleted Successfully')
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)
                    }
                    console.log(data);
                })
        }
    }

    const handleStatusUpdate = (id) => {
        // console.log('Click', id);
        fetch(`https://project1-amber.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "Aproved" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Product Aproved')
                    const remainingStatus = orders.filter(od => od._id !== id);
                    const approved = orders.find(ord => ord._id === id);
                    approved.status = "Aproved";
                    const newOrder = [approved, ...remainingStatus];
                    setOrders(newOrder)
                }
            })
    }

    return (
        <div className='my-5 py-5 container'>
            {/* <h1>Orders {user.email}</h1> */}
            <div className="m-12 overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <CartRow
                                key={order._id}
                                order={order}
                                handleDeleteOrder={handleDeleteOrder}
                                handleStatusUpdate={handleStatusUpdate}
                            ></CartRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;