import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { data } from 'autoprefixer';

const Checkout = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const { img, name, category, seller, ratings, stock, price, _id } = product;
    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const customerName = `${form.first.value} ${form.last.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const address = form.address.value;
        const details = form.details.value;

        const order = {
            productId: _id,
            product: name,
            customer: customerName,
            price,
            email,
            phone,
            address,
            massage: details,
            status: "Pending"
        }

        fetch('https://project1-amber.vercel.app/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('your order is successfully done.');
                    form.reset();
                }
            })

    }


    return (
        <div className="hero min-h-screen mb-80 ">
            <div className="hero-content flex-col lg:flex-row justify-evenly">
                <img src={img} className="w-1/3 rounded-lg shadow-2xl" />
                <div className='pl-12 w-1/3'>
                    <h3 className="text-3xl font-bold">{name}</h3>
                    <p className="pt-6">category: {category}</p>
                    <p className="pt-2">seller: {seller}</p>
                    <p className="pt-2">ratings: {ratings}</p>
                    <p className="pt-2">stock: {stock}</p>
                    <p className="text-2xl py-5 font-bold">price: {price}</p>

                </div>
                <form onSubmit={handleOrder} className='pl-12 rounded bg-stone-100 py-12 rounded-xl boreder w-1/3'>
                    <input type="text" name='first' placeholder="First name" className="input input-bordered mb-2 w-72" />
                    <br />
                    <input type="text" name='last' placeholder="Last name" className="input input-bordered mb-2 w-72" />
                    <br />
                    <input type="number" name='phone' placeholder="Phone number" className="input input-bordered mb-2 w-72" />
                    <br />
                    <input type="email" readOnly defaultValue={user?.email} name='email' placeholder="E-mail" className="input input-bordered mb-2 w-72" />
                    <br />
                    <input type="text" name='address' placeholder="address" className="input input-bordered mb-2 w-72" />
                    <br />
                    <textarea placeholder="Produce Details" name='details' className="textarea textarea-bordered textarea-lg w-72" ></textarea>
                    <br />
                    <input type='submit' value='Order Now' className="btn btn-primary mt-5" />
                </form>
            </div>
        </div>
    );
};

export default Checkout