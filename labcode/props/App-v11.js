
// This component is a pure component
// It always returns the same JSX
// given the same inputs (num)
function Exercise({num}) {

  console.log("Calling Exercise component");

  return <p> We should all exercise {num} times a day</p>;

}

let cake = 0;

// This component is NOT a pure component
// It modifies a variable outside itself
// which is then returned in its JSX
function BakeCake() {

  console.log("Calling BakeCake component");

  cake += 1;
  return <p> Baking cake # {cake}</p>
}



export default function App() {
  return (

    <div>

      <h2>Using Exercise component</h2>
      <Exercise num={3}/>
      <Exercise num={5}/>
      <Exercise num={7}/>

      <h2>Using BakeCake component</h2>
      <BakeCake/>
      <BakeCake/>
      <BakeCake/>
     
    </div>
  );
}
