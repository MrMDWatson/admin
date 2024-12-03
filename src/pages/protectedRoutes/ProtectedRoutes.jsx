import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from '../login/Login';
import Header from '../../components/header/Header';

export default function ProtectedRoutes() {
  const { admin } = useSelector((store) => store.app);
  return admin 
    ? (
      <>
        <Header />  
        <Outlet />
      </>
    )
    : (<Login />)
}
