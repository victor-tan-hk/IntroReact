// Default stylesheet for App.js
import './App.css';

// The Card component simply wraps
// the child component between its tags
// in an outer level div in order to style it  
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}


function Avatar({ person, size, imageId }) {
  let urlToUse = 'https://i.imgur.com/' + imageId + 's.jpg'
  return (
    <img
      src={urlToUse}
      alt={person}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {

  // The Avatar child component is nested between the
  // top-level Card parent component tags. 
  // It is thus passed via the child property 
  // of the props object into the Card component function
  return (
    <Card>
      <Avatar
        size='200'
        person='Katsuko Saruhashi'
        imageId='YfeOqp2' 
      />
    </Card>
  );
}
