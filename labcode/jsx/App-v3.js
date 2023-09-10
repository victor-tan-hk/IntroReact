
// Default stylesheet for App.js
import './App.css';

function addNumbers(x,y) {
  return x + y;
}

export default function App() {
  let avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  let width = 200;
  let height = 100;
  let name="Awesome Scientist";


  return (

    <div>
      {/* Double / single quotes specify a literal value */}  
      <h1 className="top">Cool person</h1>

      {/* Braces allow interpolation of variable values */}  
      <img
      src={avatar}
      width={width}
      height={height}
      alt="famous person"
      />

      {/* Braces to interpolate variables can be placed inside HTML content */}  
      <h2 className="bottom">{name} is shown above</h2>

      {/* Can place a complex expression within the braces
       This can include function calls */}  
      <h2 className="bottom">{ "Adding 3 + 8 gives us " + addNumbers(3,8)} </h2>

      {/* Can place an object within the braces
      Classic use case is for specifying inline styles
      Note: this is optional and we should mainly use CSS classes */}  

      <h2>Benefits of React</h2>
      <ul style={
        {
          backgroundColor: 'cyan',
          color: 'purple'
        }
      }>
        <li>It's easy to use</li>
        <li>Everyone uses it</li>
        <li>Meta created it !</li>
    </ul>

    </div>


  );
}