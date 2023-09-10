// We extract the message and children property from 
// the props object using destructuring
// We can access this message property wihin the 
// body of the event handler function

function AlertButton({ message, children }) {
  return (
    <button onClick={
      () => alert(message)
     }>
      {children}
    </button>
  );
}

export default function Toolbar() {
  // We pass a string to the message props
  // of the custom AlertButton component
  // This message can subsequently be accessed by
  // the event handler defined in the component
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}