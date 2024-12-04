import React from 'react';
import "./users.scss";

const users = [
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
]


export default function Users() {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
