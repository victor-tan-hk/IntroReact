import { useState } from "react";

export default function App() {

  // State variable is an object whose properties track the content
  // of the various form elements in the top level <form> element. 
  // The keys of these objects are the values of the name attributes 
  // in each of these form elements
  let initialFormData = {fname: "", lname: "", age: "15", email: "", job: "", years: "2"};
  const [formData, setFormData] = useState(initialFormData);

  // State variables for custom error messages corresponding
  // to incorrect content in the job and years form fields
  const [jobErrorMessage, setJobErrorMessage] = useState('');
  const [yearsErrorMessage, setYearsErrorMessage] = useState('');

  // State variable for custome error message corresponding 
  // to incorrect content in the overall field
  const [overallFormErrorMessage, setOverallFormErrorMessage] = useState('');


  // This single event handler handles all the updates to all the 
  // form elements nested within the top level <form> element.
  function handleChange(event) {
    // The event.target.name property gives us the name attribute
    // of the form element, which helps us identify which property
    // within the state object variable to update

    // Form validation
    // Check that the content for the job and years form fields are within
    // the specified range, and set the state variable for the error message
    // to a custom value when they are not.
    if (event.target.name === "job") {
      if (event.target.value.length < 3 || event.target.value.length > 10)
        setJobErrorMessage("Job field must be between 3 to 10 characters");
      else
        setJobErrorMessage("");
    } else if (event.target.name === "years") {
      console.log(typeof event.target.value);
      if (Number(event.target.value) < 2 || Number(event.target.value) > 5)
        setYearsErrorMessage("Experience duration must be between 2 to 5 years");
      else
        setYearsErrorMessage("");
    }

    let updatedFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(updatedFormData);
  };

  // We can also perform form validation
  // at the point when the form submit button is clicked
  // Here, we consider the entire form invalid if any one of the
  // form elements within it contain invalid content

  function handleSubmit(event) {
  
    event.preventDefault();

    // Initially assume that the form as a whole is valid
    // meaning that all form fields within it have valid content
    let isFormValid = true;

    // We can repeat the same checks we did earlier in the event handler
    if (formData.job.length < 3 || formData.job.length> 10)
      isFormValid = false;
    if (Number(formData.years) < 2 || Number(formData.years) > 5)
      isFormValid = false;

    if (isFormValid) {
      setOverallFormErrorMessage('');
      alert(`Form contains the following valid content:
      First Name: ${formData.fname} 
      Last Name : ${formData.lname} 
      Age : ${formData.age} 
      Email: ${formData.email}
      Job: ${formData.job}
      Years of Experience: ${formData.years}
      `);
    }
    else 
      setOverallFormErrorMessage('There is at least one form field that is invalid');

  };

  return (

    // We pass a single event handler to the onSubmit props
    // of the top level <form> element which will then handle
    // updates to all the nested child form elements.
    // This is more efficient than passing separate event handlers
    // to the onChange props of the individual child form elements
    // that we have done previously

    <form onSubmit={handleSubmit}>
      
      {/* The name attribute value for all these form elements must match
      the keys of the state object formData for the code logic in 
      the event handler to work correctly */}

      {/* This uses the  HTML5 required attribute for validation  */}
      <label htmlFor="fname">First Name : </label>
      <input type="text" id="fname" name="fname" value={formData.fnamename} onChange={handleChange} required/>
      <br/>

      {/* This uses the HTML5 maxLength attribute for validation */}
      <label htmlFor="lname">Last Name : </label>
      <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} maxLength={5}/>
      <br/>

      {/* This uses the HTML5 min and max attribute for validation */}
      <label htmlFor="lname">Age : </label>
      <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} min={10} max={20}/>
      <br/>

      {/* This uses the HTML5 email type attribute for validation  */}
      <label htmlFor="email">Email : </label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      <br/>

      {/* The validation logic of this field is implemented inside the event 
      handler itself, and a custom error message is conditionally displayed below  */}
      <label htmlFor="job">Job : </label>
      <input type="text" id="job" name="job" value={formData.job} onChange={handleChange}/>
      <br/>
      {jobErrorMessage && <p style={{ color: 'red' }}>{jobErrorMessage}</p>}

      {/* The validation logic of this field is implemented inside the event 
      handler itself, and a custom error message is conditionally displayed below  */}
      <label htmlFor="years">Years of experience : </label>
      <input type="number" id="years" name="years" value={formData.years} onChange={handleChange}/>
      <br/>
      {yearsErrorMessage && <p style={{ color: 'red' }}>{yearsErrorMessage}</p>}

      <button type="submit">Submit</button>
      {overallFormErrorMessage && <p style={{ color: 'red' }}>{overallFormErrorMessage}</p>}


    </form>
  );
}