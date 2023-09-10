// Default stylesheet for App.js
import './App.css';

function GoalItem(props) {

  // We can extract the children property from the top-level 
  // props object and use it appropriately in our component 
  // function

  return (
    <li className={props.importance}>{props.children} </li>
  );
}

export default function GoalsToAchieve() {
  return (

    // Anything nested between JSX tags (Watch TV, Exercise, etc)
    // will be passed automatically va the children property 
    // in the props object to the function component

      <ul>
        <GoalItem importance="low">Watch TV</GoalItem>
        <GoalItem importance="medium">Exercise</GoalItem>
        <GoalItem importance="high">Learn React ! Right now !! </GoalItem>
      </ul>


  );
}