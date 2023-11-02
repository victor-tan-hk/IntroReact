// Default stylesheet for App.js
import './App.css';

function ChildImage({animal}) {

  if (animal === "cat") 
    return (
      <img src="https://source.unsplash.com/mJaD10XeD7w" alt="cat" width="200" />
    );
  else if (animal === "dog") 
    return (
      <img src="https://source.unsplash.com/2l0CWTpcChI" alt="dog" width="200" />
    );
  else if (animal === "mouse")
    return (
      <img src="https://source.unsplash.com/6u64uoqRBZE" alt="mouse" width="200" />
    );
  else 
    return null;
}

export default function App() {

  return (
    <>
      <ChildImage animal="cat"/>
      <br/>

      <ChildImage animal="dog"/>
      <br/>

      <ChildImage animal="mouse"/>
      <br/>

      <ChildImage animal="somethingwierd"/>
      <h1>The End</h1>
    </>

  );
}