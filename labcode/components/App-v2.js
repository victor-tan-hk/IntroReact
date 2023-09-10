// Default stylesheet for App.js
import './App.css';

// The main function component (root component) can have any name besides App
// as long as it is associated with the export default
function MainPage() {
  
  // JSX between the () below are all standard HTML tags
  // These are actually built-in components of JSX
  return (
    <div>
      <h1>Hello world from my second React app !</h1>
      <h2>Benefits of React</h2>
      <ol>
        <li>It's easy to use</li>
        <li>Everyone uses it</li>
        <li>Meta created it !</li>
      </ol>

    </div>
  );
}

// The definition of the function component
// and its declaration in export default can be separate
export default MainPage;