// named imports
import {ChildLink} from './MyChildren.js';
import {ChildList} from './MyChildren.js';

// default import
import ChildTable from './MyChildren.js';


export default function App() {
  
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

