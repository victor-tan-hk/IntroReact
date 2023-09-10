import { useState } from 'react';
import './App.css';

function CoolStuff() {
  
  // Contains all the same state variables
  // from previous example
  const heroes = ["superman", "wonder woman","ironman","spiderman"]

  let [index, setIndex] = useState(0); // number
  let [hero, setHero] = useState(heroes[0]); // string
  let [isMarried, setIsMarried] = useState(false); // boolean

  function handleClick() {
    let newIndexValue = index + 1;

    if (newIndexValue === heroes.length)
      newIndexValue = 0;

    setIndex(newIndexValue);
    setHero(heroes[newIndexValue]);

    setIsMarried(!isMarried);
  }

  let heroMaritalStatus;
  if (isMarried) 
    heroMaritalStatus = "Hero is married";
  else
    heroMaritalStatus = "Hero is not married";

  return (
    <div className="card">
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

export default function App() {

  // The state variables in these two child component
  // instance are isolated from each other. 
  // Changing state variables in one component instance
  // does not affect the other. 
  return (
    <div>
      <CoolStuff />
      <CoolStuff />
    </div>
  );

}
