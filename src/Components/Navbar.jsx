import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context'
import { useState } from 'react'
import "../index.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dentistState, dentistDispatch}= useDentistStates()

  const changeTheme = () => {
    dentistDispatch({ type: "TOGGLE_THEME" });
  };

  const [isOn, setIsOn] = useState(false);
  
  const handleClick = () => {
      setIsOn(!isOn);
  }

  const handleClickAndChangeTheme= ()=> {
    changeTheme()
    handleClick()
  }


  return (
    <nav>
      <Link to= "/">Home</Link>

      <Link to= "/contact">Contact</Link>

      <Link to= "/favs">Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='myButton' onClick={handleClickAndChangeTheme}>
      {isOn ? <i className="fas fa-toggle-on"></i> : <i className="fas fa-toggle-off"></i>}
      </button>
    </nav>
  )
}

export default Navbar