import React from 'react';
import Announcement from '../announcement/Announcement';
import Navbar from '../navbar/Navbar';
import "./header.scss";
const announcement = "50% Discount";

export default function Header() {
  return (
    <header>
      {announcement && <Announcement announcement={announcement} />}
      <Navbar />
    </header>
  )
}
