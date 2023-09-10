

function SecondListHeroes() {

  let heroes = ["Hulk","Captain Marvel","Thor","Black Panther"];

  let listItems = [];
  // Here we can use the index position of the item in the array
  // as its key in the <li> tag AS LONG AS the array contents
  // do not change in the future
  for (let i = 0; i < heroes.length; i++) {
    listItems.push (<li key={i}>{heroes[i]}</li>)
  }
 
  return <ul>{listItems}</ul>;
}


// This time we assume that each of the objects in the array
// have one propery that has a unique value for each object
// that we can safely use as the key when we make a list item 
// from it
let heroDetails = [
  { id: 1, name: 'Thor', age : 200, sex : 'M' },
  { id: 2, name: 'Wonder Woman', age : 300,  sex : 'F'},
  { id: 3, name: 'Superman', age : 35, sex : 'M'},
  { id: 4, name: 'Black Widow', age : 25, sex : 'F'}
];

function HeroesThatAreFemale() {

  // Use the filter method to get a smaller array of objects 
  // that meet the required criteria 
  let femaleHeroes = heroDetails.filter(hero => hero.sex === 'F');
  
  // Create an array of <li></li> items from this filtered array
  // It is perfectly safe to use the id property of each object
  // because this property is unique and will not change
  // even if the index position of the item in the array changes
  let listItems = femaleHeroes.map(hero => <li key={hero.id}>{hero.name}</li>);

  return <ul>{listItems}</ul>;
}


export default function App() {
  return (

    <div>

      <h2>Second list of Heroes</h2>
      <SecondListHeroes/>

      <h2>Female Heroes</h2>
      <HeroesThatAreFemale/>
     
    </div>
  );
}
