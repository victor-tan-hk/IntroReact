import { useState } from 'react';
import './App.css';

// The child component receives the relevant
// state variables as well as event handler
// from the parent component
function Panel({title, children, isActive, onShow}) {

  // The contentToShow will depend on whether the particular
  // panel is considered active or not
  let contentToShow;
  if (isActive) {
    contentToShow = (
      <p>{children}</p>
    );
  }
  else 
    contentToShow =  (
      <button onClick={onShow}>
        Show
      </button>
    );

  return (
    <section className="card">
      <h3>{title}</h3>
      {contentToShow}
    </section>
  );
}


export default function App() {

  // Single boolean state variable to decide
  // which of two child components are considered
  // active
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <h1>Superman</h1>
      <Panel
        title="About"
        isActive={isActive}
        onShow={() => setIsActive(!isActive)}
      >
        Superman was born on the planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm
      </Panel>


      {/* the second child component is always
         set to a different isActive status from  
         the first child component to ensure 
         that only one panel is ever active 
         at one time 
       */}

      <Panel
        title="Super Powers"
        isActive={!isActive}
        onShow={() => setIsActive(!isActive)}
      >
        <ol>
          <li>Flight</li>
          <li>X-ray vision</li>
          <li>Faster than a speeding train</li>
        </ol>
      </Panel>
    </>
  );
}
