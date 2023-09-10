import { useState } from 'react';

// Use this as a counter
// that is incremented to provide
// a key props for new item to be added
// to the list
let nextId = 0;

export default function App() {

  // This string variable is used to track the value
  // entered by the user into the single text field
  const [heroName, setHeroName] = useState('');

  // This array variable is used to track all
  // the hero objects created so far
  const [heroes, setHeroes] = useState([]);

  function handleButtonClick() {

    // Create a new object consisting
    // of a unique id and the current value in the 
    // name text field
    let newHero = { id: nextId++, name: heroName };
    // Create a copy of the existing heroes array 
    // using the spread operator
    // Then add the new object
    // to the end of this copy and set it as 
    // the new state
    setHeroes([...heroes, newHero]);
  
  }

  function LatestHeroList() {
    
    // Create an array of <li></li> items from the array of hero objects
    let listItems = heroes.map(hero => <li key={hero.id}>{hero.name}</li>);
    return <ul>{listItems}</ul>;
  }

  return (
    <>
      <h3>Cool superheros:</h3>
      <input onChange={e => setHeroName(e.target.value)} />
      <button onClick={handleButtonClick}>Add</button>

      <LatestHeroList/>
    </>
  );
}
