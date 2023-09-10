import { useState } from 'react';

export default function App() {
  
  // Array of strings 
  // Values will be stored in hero state variable
  const heroes = ["superman", "wonder woman","ironman","spiderman"]

  // Create 3 state variables of different types
  let [index, setIndex] = useState(0); // number
  let [hero, setHero] = useState(heroes[0]); // string
  let [isMarried, setIsMarried] = useState(false); // boolean

  // In the event handler, include code logic
  // that uses the setter functions for all
  // these 3 state variables to update their values
  function handleClick() {
    let newIndexValue = index + 1;

    // Reset the index to 0 when it reaches
    // the end of the array it is indexing
    if (newIndexValue === heroes.length)
      newIndexValue = 0;

    setIndex(newIndexValue);
    setHero(heroes[newIndexValue]);

    // Flips the boolean value
    setIsMarried(!isMarried);
  }

  let heroMaritalStatus;
  if (isMarried) 
    heroMaritalStatus = "Hero is married";
  else
    heroMaritalStatus = "Hero is not married";

  return (
    <div>
      <button onClick={handleClick}>
        Increment index
      </button>
      <br/>

      {/* the updated values of state variables 
         displayed below */ }
      <p>Value of index is {index}</p>      
      <p>The current hero at this index is {hero}</p>
      <p>{heroMaritalStatus}</p>
    </div>
  );
}
