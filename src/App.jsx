import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {data} from './data/module-data.js';
import RootLayout from './layouts/RootLayout.jsx';
import {Route, Routes} from 'react-router-dom';
import Lab1Page from './pages/Lab1Page.jsx';
import PeoplePage from "./pages/PeoplePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <RootLayout>
      <Routes>
        <Route path='/lab1' element={<Lab1Page/>}/>
        <Route path='/lab2' element={<h1>Laboratorium 2 </h1>}/>
        <Route path='/people/:id' element={<PeoplePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </RootLayout>
    // <div>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React  Simple React project</h1>
    //   <div className="card">
    //     <button className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     {/* {data[0]} */}
    //     <strong>First person:</strong> {data[0].name}, born: {data[0].birth}, eyes color: {data[0].eyes}
    //     <br></br>
    //     <strong>Last person:</strong>  {data[99].name}, born: {data[99].birth}, eyes color: {data[99].eyes}
    //   </p>
    //   <ol>
    //     {data.map(person => (
    //       <li key={person.id}>
    //         {person.name} - born {person.birth} - eyes: {person.eyes}
    //       </li>
    //     ))}
    //   </ol>
    // </div>
  )
}

export default App
