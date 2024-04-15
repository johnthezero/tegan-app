import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigator = useNavigate()
  return (
    <div>
        <h1>Tegan PICK</h1>
        <br />
        <button onClick={()=>{
            navigator('oeuvre1')
        }}>Voir les oeuvres !</button>
    </div>
  )
}

export default Home
