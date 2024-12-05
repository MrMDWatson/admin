import React from 'react';
import TableHead from './tablehead/TableHead';
import TableBody from './tablebody/TableBody';
import "./table.scss";

const data = [
  {
    id: 1,
    name: "Matthew",
    email: "email@email.com",
  },
  {
    id: 2,
    name: "Jake",
    email: "email2@email.com",
  },
  {
    id: 3,
    name: "Bob",
    email: "bob@email.com",
  },
];

const headers = [
  {
    id: "id",
    title: "Id"
  },
  {
    id: "name",
    title: "Name"
  },
  {
    id: "email",
    title: "Email"
  }
];

export default function Table() {
  return (
    <table className='table'>
      <TableHead
        headers={headers}
      />
      <TableBody
        headers={headers}
        data={data}
      />
    </table>
  );
}
