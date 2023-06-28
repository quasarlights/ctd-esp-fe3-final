import React from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistState} = useDentistStates()
  const doctorImg= "../images/doctor.jpg"
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

      {dentistState.dentistList.map(dentist => <Link to= {"/dentist/" + dentist.id} key={dentist.id}>
          <Card             
            imgSrc= {doctorImg} 
            name={dentist.name} 
            username={dentist.username}            
          />

        </Link>)}
      </div>
    </main>
  )
}

export default Home