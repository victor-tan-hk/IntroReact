
import './App.css';

//This event handler is a MouseEvent handler
// You can extract the relevant MouseEvent parameters
// from the event object e
//https://react.dev/reference/react-dom/components/common#mouseevent-handler-parameters
function handleClick(e) {
  console.log('You clicked in the box');
  console.log("This was on x-coordinate : " + e.clientX + 
  " y-coordinate : " + e.clientY);
}

// This is a standard event handler
// Its extracts the target property which is one of the 
// standard Event properties
// https://react.dev/reference/react-dom/components/common#react-event-object-properties

function handleTextInput(e) {
  console.log("You typed into the text field");
  console.log("The content of the text field is now " + e.target.value);
}

export default function App() {

  return (
    <>
      {/* clicking inside the <div> triggers the 
      handleClick event handler */ }
      <div className="card"  onClick={handleClick}>
        <p>Click inside here !</p>
      </div>


      <label for="textbox">Type something here : </label>
      {/* typing inside the textbox triggers the handleTextInput 
      event handler */ }
      <input type="text" id="textbox" onChange={handleTextInput}>
      </input>
    
    
    </>
  );
}
