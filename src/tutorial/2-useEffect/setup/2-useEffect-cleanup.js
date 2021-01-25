import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const[size,setSize]=useState(window.innerWidth);
  const checkSize=()=>{
    setSize(window.innerWidth);
  };
  useEffect(()=>{
    console.log('Useeffect in use');
    window.addEventListener('resize',checkSize);
    return ()=>{
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };

   },[]);
  
  return <>
  <h2>Window</h2>
  <p>{size}</p>
  </>;
};

export default UseEffectCleanup;
