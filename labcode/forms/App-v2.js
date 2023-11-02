import { useState } from "react";
import "./App.css";


// This array contains objects that are info associated with 
// each of the checkboxes, which are basically order items 
const toppings = [
  {
    name: "Capsicum",
    price: 1.2
  },
  {
    name: "Paneer",
    price: 2.0
  },
  {
    name: "Red Paprika",
    price: 2.5
  },
  {
    name: "Onions",
    price: 3.0
  },
  {
    name: "Extra Cheese",
    price: 3.5
  },
  {
    name: "Baby Corns",
    price: 3.0
  },
  {
    name: "Mushroom",
    price: 2.0
  }
];


export default function App() {

  // We  use an array containing boolean values with the initial size
  // of the toppings array to represent the state of the checkboxes 
  // (checked = true, unchecked = false). The initial state of this 
  // array is false, meaning all checkboxes are initially unchecked
  // To create an initial array of n elements that all contain the same value:  
  // https://bobbyhadz.com/blog/javascript-create-array-n-elements-same-value
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  // This state variable tracks the total price of all
  // selected items (i.e. where checkboxes are ticked)
  const [total, setTotal] = useState(0);

  // This is the event handler that is called whenever any particular
  // checkbox is checked. The position parameter is the index position
  // of that checkbox in the original checkedState Array.
  function handleOnChange(position) {

    // Create a copy of the existing checkedState array
    let updatedCheckedState = [...checkedState];

    // Flip the boolean value of the element corresponding to the
    // position parameter, as this corresponds to the checkbox
    // that has been checked / unchecked.
    updatedCheckedState[position] = !updatedCheckedState[position];

    // Update with the latest state
    setCheckedState(updatedCheckedState);

    // To compute the total price of all items selected, the logic is as follows:
    // The 2 arrays: toppings and checkedState are the same length
    // A boolean true for a specific element in checkedState indicates
    // that the checkbox for the equivalent order item in toppings
    // has been selected. So we can add the price property
    // of the element in toppings array in the same position 
    // to obtain the overall total price 
    let totalPrice = 0;
    for (let i = 0; i < toppings.length; i++) {
      if (updatedCheckedState[i])
        totalPrice += toppings[i].price;
    }

    // Update the state variable for the total price
    setTotal(totalPrice);
  };  

  return (
    <div className="App">
      <h3>Select Pizza Toppings</h3>
      <ul className="toppings-list">
        
        {/* The array map method iterates through the toppings array
        to return <li> elements that contain the relevant values
        to form the checkboxes and their associated labels */}

        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    // We use the checked attribute of the checkbox element
                    // together with the boolean value of the various elements 
                    // in the checkedState array to determine whether
                    // a checkbox is checked/ticked or not
                    checked={checkedState[index]}
                    // The onChange props has an arrow function 
                    // because we need to pass the index position of selected checkbox
                    // to the event handler 
                    onChange={() => handleOnChange(index)}                    
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{`$${price.toFixed(2)}`}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{`$${total.toFixed(2)}`}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
