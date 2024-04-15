import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Oeuvre1 from './components/Oeuvre1'
import Oeuvre2 from './components/Oeuvre2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/oeuvre1' element={<Oeuvre1/>}></Route>
          <Route path='/oeuvre2' element={<Oeuvre2/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
