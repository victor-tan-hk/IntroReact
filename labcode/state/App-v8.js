import { useState } from 'react';

export default function Counter() {

  // State variable is number
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={

        // Inside the event handler 
        // using state updater function in the form of
        // an arrow function passed to the state setter function
        // will cause the return result to be passed to the 
        // next state updater function consecutively
        // resulting in update of the state in the event handler itself
        () => {
          setNumber(n => n + 1); // at start, new value of n is now 1
          setNumber(n => n + 1); // at start, new value of n is now 2
          setNumber(n => n + 1); // at start, new value of n is now 3
        }
        // Try mixing the setNumber statements using fixed expressions
        // and state updater functions to observe the results
        // for e.g.
        //
        //  setNumber(number + 3); 
        //  setNumber(n => n + 1); 
        //
        //   
        //  setNumber(n => n + 1);         
        //  setNumber(number + 3); // note here that number used is its current value
        //  rather than the one returned by the state updater function
        // and verify that the results are as you expect them to be
        
        
      }>Click me !</button>
    </>
  )
}