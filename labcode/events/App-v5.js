// We extract the onPush and children property from 
// the props object using destructuring
// We the pass the onPush event handler  
// to the onClick props of the built-in component button
function AlertButton({ onPush, children }) {
  return (
    <button onClick={onPush}>
      {children}
    </button>
  );
}

export default function App() {
  // Here the parent component itself defines the 
  // event handler as arrow functions that are passed
  // to the custom child component CoolButton with its 
  // own specialized props onPush.
  // Note that onPush is *NOT PART* of the standard
  // props for event handlers in built-in components like
  // onClick

  return (
    <div>
      <AlertButton onPush={() => alert('Playing!')}>
        Play Movie
      </AlertButton>
      <AlertButton onPush={() => alert('Uploading!')}>
        Upload Image
      </AlertButton>
    </div>
  );
}
