
function ChildLink({destination, actualName}) {

    return (
      <a href={destination}>{actualName}</a>
    );

}


function ListOfLinks() {

  let linkInfo = [
    { destination: "https://www.malaymail.com/",   actualName : 'Malay Mail'   },
    { destination: "https://www.nst.com.my/",   actualName : 'NST'   },
    { destination: "https://www.utusan.com.my/",   actualName : 'Utusan'   }
  ];

  let listChildLinks = [];

  for (let i = 0; i < linkInfo.length; i++) {
    listChildLinks.push (
      <li key={i}>
        <ChildLink destination={linkInfo[i].destination} actualName={linkInfo[i].actualName}/>
      </li>
    )
  }
 
  return <ul>{listChildLinks}</ul>;

}

export default function App() {

  return (
    <>
      <h2>List of links</h2>
      <ListOfLinks/>
    </>

  );
}