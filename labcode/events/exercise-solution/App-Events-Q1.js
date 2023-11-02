export default function App() {

  function handleClick() {
    alert('You wanted to navigate to Google!');
  }
  
  return (
    <>
      <a href="https://www.google.com/" onClick={handleClick}>Google Search</a>
    </>
  );
}
