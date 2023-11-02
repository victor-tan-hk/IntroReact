

function ChildTable() {

  return (
    <table>
      <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Age</th>
      </tr>
      <tr>
          <td>1</td>
          <td>Peter Parker</td>
          <td>16</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Clark Kent</td>
          <td>34</td>
      </tr>
    </table>
  );
}


function ChildList() {

  return (
    <ol>
      <li>It's easy to use</li>
      <li>Everyone uses it</li>
      <li>Meta created it !</li>
    </ol>
  );
}

function ChildLink() {

  return (
    <a href="https://www.tutorialrepublic.com/">Tutorial Republic</a>
  );
}


export default function App() {
  

  // Must ensure that you have a top level div to wrap all the other
  // elements
  return (
    <div>

      <ChildTable/>
      <ChildLink/>
      <ChildList/>
      <ChildTable/>
      <ChildList/>
      <ChildLink/>


    </div>
  );
}

