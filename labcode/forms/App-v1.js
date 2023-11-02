import {useState} from 'react';
 
export default function  App()  {

  // State string variable to track value inside text field
	const  [inputAnimalName, setInputAnimalName] =  useState('');

  // State string variable to track selected option from drop down list
  const [selectedCar, setSelectedCar] = useState("volvo");

  // State string variable to track selected radio button value 
  const [favLanguage, setFavLanguage] = useState("HTML");

  // State boolean variables to track status of check boxes 
  //  either ticked (true) or not ticked (false) 
  const [isBlueChecked, setIsBlueChecked] = useState(false);
  const [isRedChecked, setIsRedChecked] = useState(false);
  const [isGreenChecked, setIsGreenChecked] = useState(false);


	function handleAnimalNameChange(e) {
    // Using e.target.value to access the updated content
    // in the text field and updating the state
		setInputAnimalName(e.target.value);
	};

  function handleDropdownChange(e) {
    // Using e.target.value to access the current selected
    // option from the drop down list and updating the state
    setSelectedCar(e.target.value);
  }

  function handleRadioSelection(e) {
    // Using e.target.value to access the latest selected
    // radio button and updating the state
    setFavLanguage(e.target.value);
  }

  function handleRedChange() {
    setIsRedChecked(!isRedChecked);
  }

  function handleBlueChange() {
    setIsBlueChecked(!isBlueChecked);
  }

  function handleGreenChange() {
    setIsGreenChecked(!isGreenChecked);
  }


  return  (
    <form>
      <h2>Demo Form Elements</h2>
      <label htmlFor="animalname">Animal name :	</label>

      {/* Use the value attribute to set the content of the text field 
      The onChange props is passed the event handler  */}

      <input  type="text" id="animalname" value={inputAnimalName} onChange={handleAnimalNameChange} />

      <p>Animal name entered: {inputAnimalName}</p>
      <hr/>

      <label htmlFor="cars">Choose a car:</label>
      <select id="cars" value={selectedCar} onChange={handleDropdownChange}>
        <option value="volvo">Volvo</option>
        <option value="honda">Honda</option>
        <option value="mercedes">Mercedes</option>
        <option value="perodua">Perodua</option>
      </select>

      <p>Car selected : {selectedCar}</p>
      <hr/>      

      <p>Select your favourite language</p>

      {/* Wrapping all the radio buttons in a div
      allows us to check for the selection of any one of them
      and trigger the event handler passed to the onChange props
      of the div */}
      <div onChange={handleRadioSelection}>
        <input type="radio" id="html" name="fav_language" value="HTML"/>
        <label htmlFor="html">HTML</label><br/>
        <input type="radio" id="css" name="fav_language" value="CSS"/>
        <label htmlFor="css">CSS</label><br/>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
        <label htmlFor="javascript">JavaScript</label>
      </div>
      <p>Your favorite language : {favLanguage}</p>
      <hr/>      


      <p>Select your favourite colors</p>

      <input type="checkbox" id="red" onChange={handleRedChange}/>
      <label htmlFor="red"> Red color </label><br/>
      <input type="checkbox" id="green" onChange={handleGreenChange}/>
      <label htmlFor="green"> Green color </label><br/>
      <input type="checkbox" id="blue" onChange={handleBlueChange}/>
      <label htmlFor="blue"> Blue color </label><br></br>

      {/* All the JSX curly brace statements use the && operator as 
      a shortcut to conditionally display the paragraph, depending on 
      the boolean value of the 3 state variables: isRedChecked, 
      isBlueChecked and isGreenChecked */}

      {isRedChecked && <p>Red is one of your favorite colors !</p>}  
      {isBlueChecked && <p>Blue is one of your favorite colors !</p>}  
      {isGreenChecked && <p>Green is one of your favorite colors !</p>}  

    </form>
  )
};