
// Comment out any of the 4 versions of the function component
// Item in order to see how they work


// Version #1: Using standard if-else to return JSX directly

function Item({ name, isPacked }) {

  // We use the isPacked boolean property from the props
  // object in a basic if-else statement
  // to decide what JSX to return
  // when this child component is referenced in the 
  // JSX of the root component App
  if (isPacked) 
    return (
      <li>{name} - all ready !</li>
    );
  else
    return (
      <li>{name} - not ready !</li>
    );
}

// Version #2: Conditionally assigning JSX to a variable

// function Item({ name, isPacked }) {

//   // This is exactly the same as Version #1
//   // Except we store the content we want to 
//   // return in a variable and return that 
//   // variable, instead of directly returning 
//   // the JSX

//   let itemContent = name; 

//   if (isPacked) 
//     itemContent += " - all ready !";
//   else
//     itemContent += " - not ready !";
  
//   return (
//     <li>{itemContent}</li>
//   );

// }


// Version #3: Using ternary operator

// function Item({ name, isPacked }) {

//   // This is exactly the same as Version #1
//   // except we use the ternary operator
//   // to decide between which JSX to return

//   return (
//     <li>
//       {isPacked ? name + '  - all ready ! ' : name + '  - not ready !'}
//     </li>
//   );
// }

// Version #4: If there is nothing to return use null

// function Item({ name, isPacked }) {

//   // You may have a situation where you don't 
//   // wish to return any JSX if a specific condition holds.
//   // In that case, simply return null

//   if (isPacked) 
//     return (
//       <li>{name}</li>
//     );
//   else
//     return null;
// }



export default function App() {
  return (
    // Try changing the values of the 
    // isPacked props for the 3 child
    // Item components and verify the
    // result for yourself
    <div>
      <h1>What to pack for my trip</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Laptop" 
        />
        <Item 
          isPacked={false} 
          name="Drinks" 
        />
        <Item 
          isPacked={true} 
          name="Sandwiches" 
        />
      </ul>
    </div>
  );
}
