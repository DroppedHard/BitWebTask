import { useState } from 'react'
import './App.css'
import NobelStorage from './data/NobelStorage';
import { Link, Outlet } from 'react-router-dom';

function App() {
  // const 
  const nobelStorage:NobelStorage = new NobelStorage();
  

  return (
    <>
    <header>
      <h1>Witamy w spisie nagród Nobla </h1>
      <nav>
        <Link to={"/test"}>test</Link>
      </nav>
    </header>
    <Outlet />
    {/* <button onClick={() => console.log(dataHandler.data)}>get data</button> */}
    </>
  )
}

export default App
