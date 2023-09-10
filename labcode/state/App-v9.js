import { useState } from 'react';

export default function App() {

  let initialEmployeeValue = {
    name : 'Superman',
    age : 35,
    isMarried  : false,
    salary: 789.2
  }

  // State variable is an object
  const [employee, setEmployee] = useState(initialEmployeeValue);

  let maritalStatus = "";
  if (employee.isMarried)
    maritalStatus = "Married";
  else
    maritalStatus = "Single";


  // 3 possible approaches for updating an object state variable

  // Approach #1: Create new object explicitly
  function handleAgeClick() {

    // Create a new object based on the properties  
    // of the current state object. This includes
    // either retaining or modifying the 
    // property values of the current state object. 
    // Pass the new object to the setter function. 

    // Here we only change one property: age
    // while the rest are exactly the same 
    // as the current state object

  setEmployee(
      {
        name: employee.name,
        age: employee.age + 1,
        isMarried: employee.isMarried,
        salary: employee.salary 
      }
    )

  }

  // Approach #2: Create a clone of the original state object
  function handleSalaryClick() {

    // Create a clone using the Object.assign method
    // Then change the value of the required properties
    // in the clone accordingly

    let employeeClone = Object.assign({}, employee);
    employeeClone.salary += 100;
    setEmployee(employeeClone);

  }

   // Approach #3: Use the operator spread syntax
  function handleMaritalStatusClick() {

    // Use the object spread syntax
    // to copy the relevant properties that are
    // unchanged from the original object
    // and only specify explicitly the property to be 
    // changed
    setEmployee(
      {
        ...employee,
        isMarried  : !employee.isMarried
      }
    );

  }
 


  return (
    <>
      <h1>Employee details</h1>
      <p>Name : {employee.name}</p>
      <p>Age : {employee.age}</p>
      <p>Marital Status : {maritalStatus}</p>
      <p>Salary : {employee.salary}</p>

      <button onClick={handleAgeClick}>Increase age</button>
      <br/>
      <button onClick={handleSalaryClick}>Increase salary</button>
      <br/>
      <button onClick={handleMaritalStatusClick}>Change marital status</button>

    </>
  )
}