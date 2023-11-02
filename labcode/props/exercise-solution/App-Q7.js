
function ChildLink({destination="https://www.bbc.com/",openStyle,textContent="BBC"}) {

  return (
    <a href={destination} target={openStyle}>Go to {textContent}</a>
  );
}

export default function App() {
  
  return (
    <div>

      <ChildLink destination="https://www.google.com/" openStyle = "_blank" textContent = "Google">
      </ChildLink>

      <br/>

      <ChildLink openStyle = "_blank"/>

    </div>
  );
}

