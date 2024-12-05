import React from 'react';
import TableRow from './tablerow/TableRow';

export default function TableBody({ headers, data }) {
  return (
    <tbody>
      {data.map((d, dIndex) => (<TableRow key={dIndex} headers={headers} data={d} />))}
    </tbody>
  );
}
