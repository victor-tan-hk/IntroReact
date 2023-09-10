export default function Button() {

  // The event handler function
  // is no longer defined here, but provided
  // as an arrow function in the JSX of the 
  // built-in Button component


  return (

  // Instead of specifying the event handler function
  // separately as we did earlier, we can   
  // specify it in arrow function format directly
  // as props in the JSX for the built-in Button component  to onClick of the in-built component button
  // This short form has exactly the same effect
  // as the previous version
    <button onClick={
      () => {
        alert('You clicked me!');
      }
    }>
      Click me !
    </button>
  );
}
