
export default function App() {

  // This is a standard JavaScript variable
  let index = 0;

  // The event handler simply increments
  // index by 1
  function handleClick() {
    index = index + 1;
  }

  return (
    <div>
      <button onClick={handleClick}>
        Increment index
      </button>
      <br/>
      {/* the value of index displayed below
         does not change */ }
      <p>Value of index is {index}</p>      

    </div>
  );
}
