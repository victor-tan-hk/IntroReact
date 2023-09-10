import { useState } from 'react';

let initialHeros = [
  { id: 0, name: 'Hulk' },
  { id: 1, name: 'Superman'},
  { id: 2, name: 'Spiderman'},
  { id: 3, name: 'Ironman'},
];

export default function App() {

  // This array variable is used to track all
  // the hero objects created so far
  const [heroes, setHeroes] = useState(initialHeros);

  // String variable to keep track of an existing hero to locate
  const [existingName, setExistingName] = useState('');

  // String variable to keep track of the new name for the hero
  const [newName, setNewName] = useState('');


  function handleButtonClick() {

    // Create a copy of the existing heroes array
    let newHeroes = [...heroes];
    let found = false;
    for (let i = 0; i < newHeroes.length; i++) {
      if (newHeroes[i].name === existingName) {
        newHeroes[i].name = newName;
        found = true;
        break;
      }
    }

    console.log(newHeroes);

    if (found)
      setHeroes(newHeroes);
  }

  function LatestHeroList() {
    
    // Create an array of <li></li> items from the array of hero objects
    let listItems = heroes.map(hero => <li key={hero.id}>{hero.name}</li>);
    return <ul>{listItems}</ul>;
  }

  return (
    <>
      <h3>Cool superheros:</h3>
      <LatestHeroList/>
      <label htmlFor="fname">Name to find :</label>
      <input type="text" id="fname" onChange={e => setExistingName(e.target.value)}></input>
      <br/>
      <label htmlFor="rname">Name to replace with  :</label>
      <input type="text" id="rname" onChange={e => setNewName(e.target.value)}></input>
      <br/>
      <button onClick={handleButtonClick}>Rename hero</button>

    </>
  );
}
