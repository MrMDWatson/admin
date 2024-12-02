import React from 'react';
import Announcement from '../announcement/Announcement';
import Navbar from '../navbar/Navbar';
const announcement = "50% Discount";

export default function Header() {
  return (
    <div>
      {announcement && <Announcement announcement={announcement} />}
      <Navbar />
    </div>
  )
}
