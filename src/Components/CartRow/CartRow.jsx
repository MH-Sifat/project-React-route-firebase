import React from 'react';

const CartRow = ({ order, handleDeleteOrder, handleStatusUpdate }) => {
    const { _id, product, customer, price, status } = order
    return (
        <tr>
            <th>{customer}</th>
            <td>{product}</td>
            <td>{price}</td>
            <td>
                <button onClick={() => handleDeleteOrder(_id)} className="btn btn-sm btn-outline btn-error mr-2">Delete</button>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-sm btn-outline btn-info">{status ? status : "pending"}</button>
            </td>
        </tr>
    );
};

export default CartRow;