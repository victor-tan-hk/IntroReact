import { useState } from 'react';

export default function Counter() {

  // State variable is number
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={
        // Inside an event handler 
        // the state variable number remains the same
        // until the entire event handler has completed execution
        () => {
          setNumber(number + 1); // for first click, this is setNumber(0 + 1); 
          setNumber(number + 1); // for first click, this is setNumber(0 + 1);
          setNumber(number + 1); // for first click, this is setNumber(0 + 1);
        }
        // When the event handler completes execution, 
        // React processes all the state setter functions consecutively
        // one after the other
        // Since number remains the same throughout the handler
        // the new value of number will be given by the last setter
        // function call.
        // Once the state variable has been updated with the latest
        // value, React will render the component (Counter) again

        // Try changing the 3 setNumber statements in the event handler
        // and verify that it is actually the final statement that actually
        // sets the updated value of number for the next re-render
      }>Click me !</button>
    </>
  )
}
