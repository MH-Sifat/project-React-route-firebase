import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ product }) => {
    const { _id, img, name, ratting, price } = product;
    return (
        <div className='m-8'>
            <div className="card w-full  bg-base-100 shadow-xl">
                <figure ><img src={product.img} /></figure>
                <div className="card-body h-60">
                    <h2 className="card-title">
                        {product.name}!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: {product.price}</p>
                    <p><small>ratting: {product.ratings}</small></p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}> <button className='btn btn-primary'>Buy Now</button> </Link>
                        <button className='btn btn-outline'>Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;