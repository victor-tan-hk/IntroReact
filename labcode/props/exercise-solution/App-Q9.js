// Default stylesheet for App.js
import './App.css';

function ChildLink({myAge}) {

  if (myAge >= 0 && myAge <= 10) 
    return (
      <a href="https://www.malaymail.com/" >Malay Mail</a>
    );
  else if (myAge >= 11 && myAge <= 20) 
    return (
      <a href="https://www.nst.com.my/" >NST</a>
    );
  else 
    return (
      <a href="https://www.utusan.com.my/" >Utusan</a>
    );
}

export default function App() {

  return (
    <>
      <ChildLink myAge={5}/>
      <br/>

      <ChildLink myAge={15}/>
      <br/>

      <ChildLink myAge={25}/>
    </>

  );
}