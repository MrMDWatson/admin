import React from 'react';
import { useSelector } from "react-redux";
import Announcement from '../announcement/Announcement';
import Navbar from '../navbar/Navbar';
import Login from "../login/Login";
import "./header.scss";

const announcement = "50% Discount";

export default function Header() {
  const { admin } = useSelector((store) => store.app);
  return (
    <header>
      {announcement && <Announcement announcement={announcement} />}
      <Navbar />
    </header>
  )
}
