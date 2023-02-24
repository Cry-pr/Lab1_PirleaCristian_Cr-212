import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App: React.FC=observer(()=>{
return (
  <section>
    <div className='box'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className='content'>
        <img src={logo} alt="Logo" className='App-logo' />
        <h2>My personal Data</h2>
        <p>
          <b >First Name: Pirlea <br />
          Last Name: Cristian <br />
          Grouo: Cr-212</b>
        </p>
      </div>

    </div>
  </section>
);}
)

export default App;
