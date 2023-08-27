import React from 'react';

const Order = ({ product }) => {
    const{img,name,ratting,price} = product;
    return (
        <div className='m-8'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.img}/></figure>
                <div className="card-body ">
                    <h2 className="card-title">
                        {product.name}!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Price: {product.price}</p>
                    <p><small>ratting: {product.ratings}</small></p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Order;