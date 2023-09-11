import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import CartRow from '../CartRow/CartRow';

const Cart = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    // console.log(orders);

    useEffect(() => {
        fetch(`http://localhost:2000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDeleteOrder = id => {
        // console.log(id);
        const process = window.confirm('Do you want to delete?')
        if (process) {
            fetch(`http://localhost:2000/orders/${id}`, {
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

    // const handleStatusUpdate = (id) => {
    //     console.log('Click', id);
    //     fetch(`http://localhost:2000/orders/${id}`,{})
    // }

    return (
        <div className='my-5 py-5 container'>
            <h1>Orders {user.email}</h1>
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