import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from '../../components/login/Login';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/page/Page';

export default function ProtectedRoutes() {
  const { admin } = useSelector((store) => store.app);
  return !admin ? null : (<><Sidebar /><Main /></>);
}
