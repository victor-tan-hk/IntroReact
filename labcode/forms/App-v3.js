import { useState } from "react";

export default function App() {

  // State variable is an object whose properties track the content
  // of the various form elements in the top level <form> element. 
  // The keys of these objects are the values of the name attributes 
  // in each of these form elements
  let initialFormData = {name: "", email: "", message: ""};
  const [formData, setFormData] = useState(initialFormData);

  // This single event handler handles all the updates to all the 
  // form elements nested within the top level <form> element.
  function handleChange(event) {
    // The event.target.name property gives us the name attribute
    // of the form element, which helps us identify which property
    // within the state object variable to update

    let updatedFormData = { ...formData, [event.target.name]: event.target.value };
    setFormData(updatedFormData);
  };

  function handleSubmit(event) {
    
    // We use preventDefault to prevent the default form submission behavior
    // of the browser (which is to refresh the content of all the form fields)
    // and instead allow React app to manage the state of
    // the form fields directly. Comment out the statement below to see 
    // what happens  when you click the submit button.
    
    event.preventDefault();

    alert(`Form contains the following content: 
    Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
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

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      <br/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      <br/>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
      <br/>

      <button type="submit">Submit</button>
    </form>
  );
}