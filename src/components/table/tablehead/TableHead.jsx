import React from 'react';

export default function TableHead({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((head, headIndex) => (<th key={headIndex}>{head.title}</th>))}
      </tr>
    </thead>
  );
}
