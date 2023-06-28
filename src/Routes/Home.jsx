import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistState} = useDentistStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

      {dentistState.dentistList.map(dentist => 
          <Card 
             
            name={dentist.name} 
            
          />
        )}
      </div>
    </main>
  )
}

export default Home