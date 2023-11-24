import { useState } from 'react'
import './App.css'
import NobelStorage from './data/NobelStorage';

function App() {
  // const 
  const nobelStorage:NobelStorage = new NobelStorage();
  

  return (
    <>
      <h1>Witamy w spisie nagród Nobla </h1>
      {/* <button onClick={() => console.log(dataHandler.data)}>get data</button> */}
    </>
  )
}

export default App
