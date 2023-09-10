
// We can use object destructuring on the single props object parameter
// received by the function component
// This provides a shortcut to more easily access the properties within

function Avatar({size,person,imageId}) {
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

    </div>
  );
}