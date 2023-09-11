import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Order from '../Order/Order';

const Orders = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1 className='text-center text-4xl pt-5 font-bold '>New Collection</h1>
            <div className='grid grid-cols-3 justify-around items-center m-12 p-8'>
                {
                    products.map(product => <Order
                        key={product._id}
                        product={product}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default Orders;