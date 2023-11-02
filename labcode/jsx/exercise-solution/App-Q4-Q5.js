
export default function App() {

  let destination = "https://www.google.com/";
  let openStyle = "_blank";
  let textContent = "Google";

  let styleObject = {
      textAlign: 'justify',
      textDecoration: 'underline',
      textTransform: 'uppercase'
  };
  
  return (
    <div>

      <a href={destination} target={openStyle}>Go to {textContent}</a>

      <p style={styleObject}>This is great</p>

    </div>
  );
}

