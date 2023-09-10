
// The Avatar component receives a single props object parameter
// This props object has as its properties 
// all the props (size,person,imageId) passed to it in the parent component
// We can access these properties using the usual object dot notation
// e.g. props.imageId, props.size, props.person

function Avatar(props) {
  console.log(props);
  let urlToUse =  'https://i.imgur.com/' +
  props.imageId + 's.jpg';

  // The child component uses the props it receives from the parent component
  // and processes it in some way, before using the result to pass as props
  // to the built-in component img that it returns

  return (
    <img
      src={urlToUse}
      alt={props.person}
      width={props.size}
      height={props.size}
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