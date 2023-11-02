
// default export
export default function ChildTable() {

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
  
  
export function ChildList() {

  return (
      <ol>
      <li>It's easy to use</li>
      <li>Everyone uses it</li>
      <li>Meta created it !</li>
      </ol>
  );
}

export function ChildLink() {

  return (
      <a href="https://www.tutorialrepublic.com/">Tutorial Republic</a>
  );
}

  