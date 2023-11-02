
export default function App() {
  

  // Must ensure that you have a top level div to wrap all the other
  // elements
  return (
    <div>
      <h1>This is the first heading</h1>
      <h2>This is the second heading</h2>
      <h3>This is the third heading</h3>

      <p>This is <br/>another paragraph  with line breaks.</p>

      <img src="https://source.unsplash.com/p6yH8VmGqxo" alt="My cool cat" width="200" />

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

      <a href="https://www.google.com/">Google Search</a>
      <br/>
      <a href="https://www.tutorialrepublic.com/">Tutorial Republic</a>
      <br/>

      <ol>
        <li>It's easy to use</li>
        <li>Everyone uses it</li>
        <li>Meta created it !</li>
      </ol>

    </div>
  );
}

