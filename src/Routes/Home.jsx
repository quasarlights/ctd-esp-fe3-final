import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistState} = useDentistStates()
  const doctorImg= "../images/doctor.jpg"
  const theme = dentistState.theme === "dark" ? "dark" : "light";
  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>

      {dentistState.dentistList.map(dentist => <Card   
            key={dentist.id} // Aquí es donde agregas la propiedad key          
            imgSrc= {doctorImg} 
            name={dentist.name} 
            username={dentist.username}
            id={dentist.id} 
            hideDelete = {true}
          />            
          
          
          )}
        
      </div>
    </main>
  )
}

export default Home