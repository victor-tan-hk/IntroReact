
function ChildLink({destination, openStyle, children}) {

  return (
    <a href={destination} target={openStyle}>Go to {children}</a>
  );
}



export default function App() {
  
  return (
    <div>

      <ChildLink destination="https://www.google.com/" openStyle = "_blank">Awesome Place
      </ChildLink>

      <br/>


    </div>
  );
}

