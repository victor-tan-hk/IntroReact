
// Default stylesheet for App.js
import './App.css';

export default function App() {
  return (

    // We have to use className instead of 
    // class attribute in the HTML inside JSX
    // because class is a classified keyword
    // and HTML attributes in JSX become JavaScript
    // object keys
    <div>
      <h1 className="top">Welcome to React</h1>
      <h2>Benefits of React</h2>
      <ol className="bottom">
        <li>It's easy to use</li>
        <li>Everyone uses it</li>
        <li>Meta created it !</li>
      </ol>
    </div>


  );
}