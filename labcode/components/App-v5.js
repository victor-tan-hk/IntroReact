// named import
import {Profile} from './Gallery.js';

// default import
import Gallery from './Gallery.js';

export default function App() {
  return (
    <div>
    <h1>Boring scientists</h1>
      <Profile />
      <Profile />

     <Gallery/>  
    </div>
  );
}
