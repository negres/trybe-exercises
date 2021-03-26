import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [time, setTime] = useState(new Date());
  // console.log(setTime);

  function tick() {
    setTime(new Date());
    // console.log('função tick ');
  }

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return function cleanUp() {
      // console.log('função clean up');
      clearInterval(timer);
      // console.log('função clean up apos clear interval');
    };
  });

  return (
    <div>
      <h1>Hora atual: {time.toLocaleTimeString()}</h1>
      <button onClick={clearInterval(time)}>Stop</button>
    </div>
  );
}

export default Clock;
