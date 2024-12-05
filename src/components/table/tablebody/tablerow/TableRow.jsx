import React from 'react';

export default function TableRow({ headers, data }) {
  const columns = [];
  for (const head in headers) {
    columns.push(<td>{data[headers[head].id]}</td>)
  }
  return (
    <tr>
      {columns}
    </tr>
  )
}
