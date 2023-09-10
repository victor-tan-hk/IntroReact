export default function Button() {

  // The event handler function
  // Has a single statement that displays an alert
  // Called when the event (click) occurs on
  // the specified component (button)
  function handleClick() {
    alert('You clicked me!');
  }

  // We pass the event handler function we define
  // as props to onClick of the in-built component button
  // Notice that the HTML Button element does not have
  // a onClick attribute. 
  // https://www.w3schools.com/tags/tag_button.asp
  
  // This attribute / props is specific 
  // for React event handling functionality
  // https://react.dev/reference/react-dom/components/common#reference
  
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
