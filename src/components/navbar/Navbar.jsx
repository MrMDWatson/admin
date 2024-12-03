import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../app/appSplice';

export default function Navbar() {
  const dispatch = useDispatch();
  const { admin } = useSelector((store) => store.app)
  return (
    <nav className='navbar'>
      <div className='logo'><Link>P</Link></div>
      <ul className='nav-list'>
        <li className='nav-list-item'><Link to="/hub">Home</Link></li>
        <li className='nav-list-item'><Link to="/hub/users">Users</Link></li>
        <li className='nav-list-item'><Link to="/hub/new-user">New User</Link></li>
        <li className='nav-list-item'><Link to="/hub/settings">Settings</Link></li>
      </ul>
    </nav>
  )
}