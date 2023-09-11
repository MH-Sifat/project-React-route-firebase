import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut();
  }

  const [orders, setOrders] = useState([]);
  // console.log(orders.length);

  useEffect(() => {
    fetch(`https://project1-amber.vercel.app/orders?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [user?.email])

  return (
    <div className="navbar bg-base-100 sticky-top">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">BeOne</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/order'>Orders</Link></li>

          {user?.email ? <li><a onClick={handleLogOut}>Logout</a></li> :
            <li><Link to='/login'>LogIn</Link></li>}
          {
            user?.uid ? <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link to='/orders'> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
                <span className="badge badge-sm indicator-item">{orders.length}</span>
              </div>
            </label> : undefined
          }

        </ul>
      </div>
    </div>
  );
};

export default Header;