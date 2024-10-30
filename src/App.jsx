import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css'
import {data} from './data/module-data.js';
import RootLayout from './layouts/RootLayout.jsx';
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Lab1Page from './pages/Lab1Page.jsx';
import Lab2Page from './pages/Lab2Page.jsx';
import PeoplePage from "./pages/PeoplePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  const [count, setCount] = useState(0)

  const menuItems = [
    {
      id: 1, 
      label: "Home", 
      url: "/", 
      urlPattern: "/", 
      element: <HomePage/>
    },
    {
      id: 2, 
      label: "Laboratorium 1", 
      url: "/lab1", 
      urlPattern: "/lab1", 
      element: <Lab1Page/>
    },
    {
      id: 3, 
      label: "Laboratorium 2", 
      url: "/lab2/1", 
      urlPattern: "/lab2/:id", 
      element: <Lab2Page/>
    },
    {
      id: 4, 
      label: "People Page", 
      url: "/people/:id", 
      urlPattern: "/people/:id", 
      element: <PeoplePage/>
    },
    {
      id: 5, 
      url: "*", 
      urlPattern: "*", 
      element: <NotFoundPage/>
    }
  ]

  return (
    <RootLayout items={menuItems}>
      <Routes>
        {menuItems.map((item) => (
          <Route key={item.id} path={item.urlPattern} element={item.element} />
        ))}
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
