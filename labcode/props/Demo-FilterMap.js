

let heroes = ["Hulk","Captain Marvel","Thor","Black Panther"];

// Notice that the syntax for the creation of the <li> item 
// here is different from the way we use it in JSX in React
let listItems = heroes.map(hero => `<li>${hero}</li>`);

console.log("List of original heroes");
console.log(listItems);

let heroDetails = [
    { name: 'Thor', age : 200, sex : 'M' },
    { name: 'Wonder Woman', age : 300,  sex : 'F'},
    { name: 'Superman', age : 35, sex : 'M'},
    { name: 'Black Widow', age : 25, sex : 'F'}
];
  
  
let femaleHeroes = heroDetails.filter(hero => hero.sex === 'F');
console.log("Female heroes");
console.log(femaleHeroes);    
listItems = femaleHeroes.map(hero => `<li>${hero.name}</li>`);
console.log("List of female hero names");
console.log(listItems);  