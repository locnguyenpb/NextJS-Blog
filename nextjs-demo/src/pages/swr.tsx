import { StudentDetail } from 'components/swr';
import React, { useState } from 'react';

export default function SWRPage() {
  const [detailList, setDetailList] = useState([1]);

  function handleClick() {
    setDetailList((prevList) => [...prevList, 1]);
  }

  return (
    <div>
      <h1>SWR Playground</h1>

      <button onClick={handleClick}>Add more</button>
      <ul>
        {detailList.map((x, i) => (
          <li key={i}>
            <StudentDetail studentId='lea2aa9l7x3a5v0'></StudentDetail>
          </li>
        ))}
      </ul>
    </div>
  );
}
