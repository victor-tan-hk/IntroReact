
// Directly return JSX with the list items
function FirstListHeroes() {

  return (
    <ul>
      <li>Superman</li>
      <li>Wonder Woman</li>
      <li>Ironman</li>
      <li>Spiderman</li>
    </ul>    
  );
}

// Often the list items are in a data structure like an array
// So we need a quick way to retrieve them and place them
// into a collection of JSX <li> tags
function SecondListHeroes() {

  let heroes = ["Hulk","Captain Marvel","Thor","Black Panther"];

  // We can take the contents of the string array and place them
  // between <li></li> tags with the array map function
  let listItems = heroes.map(hero => <li>{hero}</li>);
  
  return <ul>{listItems}</ul>;
}

// Sometimes we have a list of detailed items
// for e.g. an array of objects
// and we only want certain objects from the original
// array that fulfill certain criteria
// We can use the array filter function for this purpose

let heroDetails = [
  { name: 'Thor', age : 200, sex : 'M' },
  { name: 'Wonder Woman', age : 300,  sex : 'F'},
  { name: 'Superman', age : 35, sex : 'M'},
  { name: 'Black Widow', age : 25, sex : 'F'}
];

function HeroesThatAreFemale() {

  // Use the filter method to get a smaller array of objects 
  // that meet the required criteria 
  let femaleHeroes = heroDetails.filter(hero => hero.sex === 'F');
  
  // Create an array of <li></li> items from this filtered array
  let listItems = femaleHeroes.map(hero => <li>{hero.name}</li>);

  return <ul>{listItems}</ul>;
}


function HeroesThatAreOld() {

  // Use the filter method to get a smaller array of objects 
  // that meet the required criteria 
  let oldHeroes = heroDetails.filter(hero => hero.age > 100);
  
  // Create an array of <li></li> items from this filtered array
  let listItems = oldHeroes.map(hero => <li>{hero.name}</li>);

  return <ul>{listItems}</ul>;
}

export default function App() {
  return (

    <div>
      <h2>First list of Heroes</h2>
      <FirstListHeroes/>

      <h2>Second list of Heroes</h2>
      <SecondListHeroes/>

      <h2>Female Heroes</h2>
      <HeroesThatAreFemale/>

      <h2>Really old heroes</h2>
      <HeroesThatAreOld/>
     
    </div>
  );
}
