import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../app/appSplice';

export default function Navbar() {
  const dispatch = useDispatch();
  const { admin } = useSelector((store) => store.app)
  return (
    <div>
      <ul>
        <li><Link to="/hub">Home</Link></li>
        <li><Link to="/hub/users">Users</Link></li>
        <li><Link to="/hub/new-user">New User</Link></li>
        <li>Settings</li>
      </ul>
    </div>
  )
}
