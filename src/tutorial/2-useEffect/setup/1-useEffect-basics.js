import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const[value,setValue]=useState(0);
  useEffect(()=>{
     if (value>0)
     {document.title= `message (${value})`;}
    console.log('useeffect in use');
    
  },[value]);
  useEffect(()=>{
    console.log('Hello World');
  },[])
  console.log('render in use');
  return <>
  <div>
    <h2>{value}</h2>
    <button className='btn' onClick={()=>setValue(value+1)}>
      Increase
    </button>
  </div>
  </>;
};

export default UseEffectBasics;
