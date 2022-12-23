
import React, { useState, useEffect } from 'react';
import '../styles.css';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

useEffect(() => {
  const intervalId = setInterval(() => {
    setTime((prev) => prev + 1);
  }, 1000);
  return () => {
    clearInterval(intervalId);
  };
}, []);

const handleChange = ({target}) => {
  setName(target.value);
}
  return (
    <>
      <h1>Timer Ticking while we save the name</h1>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
      <p>*******************************************************</p>
    </>
  );
}

