import "./App.css";

// Approach #2
import cabbage from "./images/cabbage.jpg";
import cereal from "./images/cereal.jpg";

export default function App() {
  return (
    <>
      <h2>Approach #1: Access via direct image URL in src</h2>
      <img src="https://source.unsplash.com/dogs-face-2l0CWTpcChI" alt="dog" height="100" width="100"/>
      
      <h2>Approach #2: Access via import from the images subfolder</h2>
      <img src={cabbage} alt="cabbage" height="100" width="100"/>
      <br/>
      <img src={cereal} alt="cereal" height="100" width="100"/>
      <br/>

      <h2>Approach #3: Access via import from the public folder</h2>
      <img src="./coffee.jpg" alt="cereal" height="100" width="100"/>
      
      <h2>Approach #4: Access via require keyword in src</h2>
      <img src={require('./images/muffins.jpg')} alt="cereal" height="100" width="100"/>


    </>
  );
}