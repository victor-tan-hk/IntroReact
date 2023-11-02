
function CoolLink({ onGoToLink, destination, children }) {
  return (
    <a target="_blank" href={destination} onClick={onGoToLink}>{children}</a>
  );
} 



export default function App() {
 
  return (
    <>
      <CoolLink destination="https://www.google.com" onGoToLink={() => alert('Going to Google!')}>Google is great</CoolLink>

      <br/>

      <CoolLink destination="https://www.bbc.com" onGoToLink={() => alert('Going to BBC!')}>BBC is interesting</CoolLink>

      <br/>

      <CoolLink destination="https://www.cnn.com" onGoToLink={() => alert('Going to CNN!')}>CNN is boring</CoolLink>

    </>
  );
}
