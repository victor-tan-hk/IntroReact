
function ChildLink(props) {

  return (
    <a href={props.destination} target={props.openStyle}>Go to {props.textContent}</a>
  );
}

export default function App() {
  
  return (
    <div>

      <ChildLink destination="https://www.google.com/" openStyle = "_blank" textContent = "Google">
      </ChildLink>

    </div>
  );
}

