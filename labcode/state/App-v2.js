// Importing the useState hook
import { useState } from 'react';

export default function App() {

  // Using array destructuring to obtain two items
  // from the useState hook
  // The first is the state variable: index
  // The second is the state setter function: setIndex
  // The single argument to useState is the initial value
  // of the state variable

  let [index, setIndex] = useState(0);

  // The event handler uses the state setter function
  // to update the value of the state variable
  // You CANNOT update the state variable directly
  // for e.g. index = index + 1 
  // Calling the state setter function triggers a rerender
  // of the component, resulting in an updated display 
  // which includes the updated value of the state variable 

  function handleClick() {
    setIndex(index + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Increment index
      </button>
      <br/>
      {/* the value of index displayed below
         will now change with each button click */ }
      <p>Value of index is {index}</p>      

    </div>
  );
}
