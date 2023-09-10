
import './App.css';

// In this version of the child component NiceLink
// we are using all the props passed to NiceLink
// and then passing them on as attributes to the 
// <a> built-in component without any change

// Writing a function in this way can be long winded
// because there are so many attributes that can be 
// passed to <a>, which are obtained from the props
// of this component and specified explicit in the 
// <a> tag
function NiceLink({children, href, target, rel}) {
  return (
    <div className="card">
      <a href={href} target={target} rel={rel}>{children}</a>
    </div>    
  );
};

// Below is a shortcut of writing the component above
// using the spread operator so that all the properties
// of the props object (besides children) is automatically passed
// to the <a> tag without needing to explicitly specify them
// Uncomment it and comment out the previous version of the component

// function NiceLink(props) {
//   let { children, ...other } = props;
//   console.log(other);
//   return (
//     <div className="card">
//       <a {...other}>{children}</a>
//     </div>    
//   );
// };

export default function App() {
  return (

    // The various props we are passing to the NiceLink component
    // are actually the attributes for the <a> tag
    // https://www.w3schools.com/tags/tag_a.asp
    <div>

      <NiceLink>My first link</NiceLink>
      <NiceLink href="https://www.thestar.com.my">My second link</NiceLink>
      <NiceLink href="https://www.bbc.com" target="_blank">My third link</NiceLink>
      <NiceLink href="https://www.cnn.com" target="_top" rel="next">My fourth link</NiceLink>

    </div>
  );
}