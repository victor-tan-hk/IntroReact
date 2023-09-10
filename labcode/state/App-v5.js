import { useState } from 'react';
import './App.css';

// The child component now receives the relevant
// state variables as well as event handler
// from the parent component
function CoolStuff({onPushButton, index,hero,isMarried}) {

  let heroMaritalStatus;
  if (isMarried) 
    heroMaritalStatus = "Hero is married";
  else
    heroMaritalStatus = "Hero is not married";

  return (
    <div className="card">

      {/* the event handler for the onClick event of the 
         built-in button in the child is the one
         passed down from the parent (onPushButton)
         Therefore clicking on the button in any child component
         will call the single event handler in the parent
         which will change the parent state variables which 
         are then subsequently passed down to all the child 
         components, causing synchronized change
         */ }
      <button onClick={onPushButton}>
        Increment index
      </button>
      <br/>

      <p>Value of index is {index}</p>      
      <p>The current hero at this index is {hero}</p>
      <p>{heroMaritalStatus}</p>
    </div>
  );



}

export default function App() {

  // State variables that was originally unique to the
  // child components are now lifted into the common parent 
  const heroes = ["superman", "wonder woman","ironman","spiderman"]

  let [index, setIndex] = useState(0); // number
  let [hero, setHero] = useState(heroes[0]); // string
  let [isMarried, setIsMarried] = useState(false); // boolean

  // Event handler that changes these state variables
  // are also defined in the parent component
  function handleClick() {
    let newIndexValue = index + 1;

    if (newIndexValue === heroes.length)
      newIndexValue = 0;

    setIndex(newIndexValue);
    setHero(heroes[newIndexValue]);

    setIsMarried(!isMarried);
  }

  // Pass all the required state variables
  // as well as event handlers that change them
  // as props to the child components
  return (
    <div>

      <CoolStuff onPushButton={handleClick} index={index} hero={hero} isMarried={isMarried}/>

      <CoolStuff onPushButton={handleClick} index={index} hero={hero} isMarried={isMarried}/>

    </div>
  );

}
