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
            navigator('/oeuvre1')
          }}>Précédent</a>
        </div>
        <div>
          <h1>Roentgen 2</h1>
          <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQXQyIMP5podUU6k4nFf3xvFfAypGbk0TU0y-xpXTSUu8-dj94cScwdt0i077IZCc6SBRPpstbNLeJPAqI://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/August_Ferdinand_M%C3%B6bius.png/800px-August_Ferdinand_M%C3%B6bius.png" alt="" />
          <p>Description...</p>
          <p>....</p>
        </div>
        <div>
          <a onClick={()=>{
            navigator('../oeuvre3')
          }}>Suivant</a>
          </div>
      </div>
      
    </>
    
  )
}

export default Oeuvre1