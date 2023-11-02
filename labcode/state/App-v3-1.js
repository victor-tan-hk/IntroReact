import { useState } from "react";
import "./App.css";

import cabbage from "./images/cabbage.jpg";
import cereal from "./images/cereal.jpg";
import muffins from "./images/muffins.jpg";

export default function App() {

  // Create 2 state variables that will be used 
  // to control the dynamic changes that we wish to create

  let [favFood, setFavFood] = useState(cabbage);
  let [favBorder, setFavBorder] = useState('box-style1');

  // Event handler will change the state variable favFood
  // to a different value, which in turn changes the 
  // image that is displayed 
  function handleFoodRadioSelection(e) {

    console.log(e.target.value);
    let selectedFoodItem = e.target.value;

    if (selectedFoodItem === "cabbage")
      setFavFood(cabbage);
    else if (selectedFoodItem === "cereal")
      setFavFood(cereal);
    else 
      setFavFood(muffins);
  }

  // Event handler will change the state variable favBorder
  // to a different value, which in turn changes the 
  // border style for the box 
  function handleBorderRadioSelection(e) {

    console.log(e.target.value);
    let selectedBorder = e.target.value;

    setFavBorder(selectedBorder);
  }  
 
  return (

    <>
      <h2>Changing DOM dynamically</h2>

      <h4>Select your favourite food item</h4>

      {/* Wrapping all the radio buttons in a div
        allows us to check for the selection of any one of them
        and trigger the event handler passed to the onChange props
        of the div */}
        <div onChange={handleFoodRadioSelection}>
          <input type="radio" id="cabbage" name="fav_food" value="cabbage"/>
          <label htmlFor="cabbage">Cabbage</label><br/>
          <input type="radio" id="cereal" name="fav_food" value="cereal"/>
          <label htmlFor="cereal">Cereal</label><br/>
          <input type="radio" id="muffins" name="fav_food" value="muffins"/>
          <label htmlFor="muffins">Muffins</label>
        </div>      

        {/* The value for the src attribute will be based on the favFood 
        state variable, whose value in turn is dynamically changed 
        via the event handler corresponding to the radio button 
        selection group on top  */}
        <div>
          <img src={favFood} alt="cabbage" height="100" width="100"/>
        </div>

        <br></br>

        <h4>Select your favourite border style</h4>

        <div onChange={handleBorderRadioSelection}>
          <input type="radio" id="box-style1" name="fav_border" value="box-style1"/>
          <label htmlFor="box-style1">Border Style 1</label><br/>
          <input type="radio" id="box-style2" name="fav_border" value="box-style2"/>
          <label htmlFor="box-style2">Border Style 2</label><br/>
          <input type="radio" id="box-style3" name="fav_border" value="box-style3"/>
          <label htmlFor="box-style3">Border Style 3</label>
        </div>      

        {/* The value for the className props will be based on the favBorder 
        state variable, whose value in turn is dynamically changed 
        via the event handler corresponding to the radio button 
        selection group on top  */}
        <div className={favBorder}>
          I like creating React apps
        </div>

    </>
  );
}
