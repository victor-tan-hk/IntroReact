import { useState } from 'react';

// Array of simple numbers to sort
let initialNums = [50, 20, 10, 30, 80, 60];

// Array of heroes to sort on age property
let initialHeros = [
  { id: 0, name: 'Hulk', age: 50 },
  { id: 1, name: 'Superman', age: 20},
  { id: 2, name: 'Spiderman', age: 70},
  { id: 3, name: 'Ironman', age : 10},
];


export default function App() {

  // This array variable is used to track all
  // the hero objects 
  const [heroes, setHeroes] = useState(initialHeros);

  // This array variable is used to track 
  // a list of basic numbers
  const [simpleNums,setSimpleNums] = useState(initialNums);


  function HeroList() {
    
    let listItems = heroes.map(hero => <li key={hero.id}>{hero.name} is {hero.age} years old</li>);
    return <ul>{listItems}</ul>;
  }

  function NumberList() {

    // Create an array of <li></li> items from the array of numbers
    // For this simple case, we skip giving a key for all the <li> items
    let listItems = simpleNums.map(num => <li>{num}</li>);
    return <ul>{listItems}</ul>;

  }

  function sortNumbersAscending() {

    // Create a copy of the existing numbers array
    let tempNums = [...simpleNums];
    //Sort it with a comparison function that defines the 
    // sorting order
    tempNums.sort((a,b) => a - b);
    setSimpleNums(tempNums);
  }

  function sortNumbersDescending() {

    // Create a copy of the existing numbers array
    let tempNums = [...simpleNums];
    //Sort it with a comparison function that defines the 
    // sorting order. This will be the exact opposite of
    // sorting in ascending order
    tempNums.sort((a,b) => b - a);
    setSimpleNums(tempNums);
  }


  function sortHeroesAscending() {

    // Create a copy of the existing heroes array
    let tempHeroes = [...heroes];
    //Sort it with a comparison function that defines the 
    // sorting order based on the age property of the 
    // hero objects
    tempHeroes.sort((a,b) => a.age - b.age);
    setHeroes(tempHeroes);
  }

  function sortHeroesDescending() {

    // Create a copy of the existing heroes array
    let tempHeroes = [...heroes];
    //Sort it with a comparison function that defines the 
    // sorting order. This will be the exact opposite of
    // sorting in ascending order
    tempHeroes.sort((a,b) => b.age - a.age);
    setHeroes(tempHeroes);
  }


  return (
    <>
      <h3>Number List</h3>
      <NumberList/>
      <button onClick={sortNumbersAscending}>Sort numbers in ascending order</button>
      <br/>
      <button onClick={sortNumbersDescending}>Sort numbers in descending order</button>

      <h3>SuperHero List</h3>
      <HeroList/>
      <button onClick={sortHeroesAscending}>Sort heroes in ascending order</button>
      <br/>
      <button onClick={sortHeroesDescending}>Sort heroes in descending order</button>

    </>
  );
}
