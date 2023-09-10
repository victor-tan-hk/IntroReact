
//Definition of child component
function Profile() {
  // JSX returned by child component
  // can contain other custom child components
  // or built-in components which correspond
  // to standard HTML
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}


// Child components can alternatively
// be defined using arrow function syntax
// Comment out the original definition and
// uncomment the definition below

// let Profile = () => {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );

// }

//The root component is the parent component
// associated with export default
export default function App() {

  // Child components are nested within parent component
  // by embedding them in JSX returned from the parent 
  // using standard HTML tag syntax
  
  // <h1> is a built-in component corresponding to standard HTML
  // <Profile> is a custom (user-defined) component
  // Name *MUST* start with capital letter to distinguish it  
  // from built-in components that appear in JSX
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
