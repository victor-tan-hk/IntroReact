export default function App() {
  return (

   // This JSX below will not work
   // because it is not wrapped in a single top level
   // parent tag

      // <h1>Hello world from my second React app !</h1>
      // <h2>Benefits of React</h2>
      // <ol>
      //   <li>It's easy to use</li>
      //   <li>Everyone uses it</li>
      //   <li>Meta created it !</li>
      // </ol>


    // This JSX below renders properly
    // as it is  wrapped in a single top level
    // parent tag

    <div>
      <h1>Hello world from my second React app !</h1>
      <h2>Benefits of React</h2>
      <ol>
        <li>It's easy to use</li>
        <li>Everyone uses it</li>
        <li>Meta created it !</li>
      </ol>
    </div>

    // As an alternative to a top level <div>
    // we can also use a fragment <> and </>

    // <>
    //   <h1>Hello world from my second React app !</h1>
    //   <h2>Benefits of React</h2>
    //   <ol>
    //     <li>It's easy to use</li>
    //     <li>Everyone uses it</li>
    //     <li>Meta created it !</li>
    //   </ol>
    // </>




  );
}