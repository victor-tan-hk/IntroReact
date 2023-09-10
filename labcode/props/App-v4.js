
// Demonstrating object destructuring with default parameter values

function Avatar({size='50',person,imageId='1bX5QH6'}) {
  let urlToUse =  'https://i.imgur.com/' +
  imageId + 's.jpg';

  // The child component uses the props it receives from the parent component
  // and processes it in some way, before using the result to pass as props
  // to the built-in component img that it returns

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
  return (
    // size, person, imageId are all
    // considered to be props which we are 
    // passing to the custom component Avatar
    <div>

      <Avatar
        size='200'
        person='Katsuko Saruhashi'
        imageId='YfeOqp2' 
      />

      <Avatar
        size='100'
        person='Aklilu Lemma' 
        imageId='OKS67lh'
      />

      {/* We only pass one prop to the child component below
          Therefore, the default values for the other props
          will be used in the function component definition */ }
      
      <Avatar
        person='Unknown person' 
      />

    </div>
  );
}