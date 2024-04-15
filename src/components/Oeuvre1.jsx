import React from 'react';
import './Oeuvres.css' 
import { useNavigate } from 'react-router-dom'
const Oeuvre1 = () => {
  const navigator=useNavigate()
  return (
    <>
      <div className='container'>
        <div>
          <a onClick={()=>{
            navigator('/')
          }}>Précédent</a>
        </div>
        <div>
          <h1>Moebius 1</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/August_Ferdinand_M%C3%B6bius.png/800px-August_Ferdinand_M%C3%B6bius.png" alt="" />
          <p>Description...</p>
          <p>....</p>
        </div>
        <div>
          <a onClick={()=>{
            navigator('../oeuvre2')
          }}>Suivant</a>
          </div>
      </div>
      
    </>
    
  )
}

export default Oeuvre1
