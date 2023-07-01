import React from "react";
import { useDentistStates } from "../Context";
import { Link } from 'react-router-dom'
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({ imgSrc, name, username, id, hideDelete, isDisabled}) => {

  const {dentistDispatch, dentistState } = useDentistStates()

  /////////////////ADD FAV  
 
  const addFav = () => {
    const isFavAdded = dentistState.favs.find(dentist => dentist.id === id);
    if (!isFavAdded) {
      dentistDispatch({ type: 'ADD_FAVS', payload: dentistState.dentistList.find(dentist => dentist.id === id) });
      localStorage.setItem('favs', JSON.stringify(dentistState.favs)); // Actualizar el local storage
    }
  };
  

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(isDisabled);
  }, [isDisabled]);

  const handleClick = () => {
    console.log('Button clicked');
    setButtonDisabled(true);
  };

  const handleClickAndAddFav = () => {
    handleClick();
    addFav();
  };

///////DELETE FAV
  const deleteFav = () =>{
    const arrWithoutDeleted= dentistState.favs.filter(dentist=> dentist.id !== id)
    dentistDispatch({type: 'DELETE_FAV', payload: arrWithoutDeleted})
  } 

  return (
    <div className="card">
        <img className="card" src={imgSrc} alt="doctor"/>
        <h3>{name}</h3>
        <h5>{username}</h5>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={handleClickAndAddFav} disabled={isButtonDisabled} className="favButton" ><i className="fas fa-star"></i></button>
        
        {!hideDelete &&
        <button id= 'deleteBtn' onClick={deleteFav()} className="favButton" ><i className="fas fa-trash"></i></button>}
        <Link to={`/dentist/${id}`}>View Details</Link> {/* This is the link to the details page */}
    
    </div>
  );
};

export default Card;
