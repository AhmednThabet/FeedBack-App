import React from 'react';
import { useState } from 'react';
function RatingSelect({ select }) {
  const [selected, setSelect] = useState(10);

  const handleChange = (e) => {
    // + sign that indecates the value behind is an number
    // to convert the number as a string'1' to a number 1
    setSelect(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
