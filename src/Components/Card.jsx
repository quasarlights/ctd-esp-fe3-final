import React from "react";


const Card = ({ imgSrc, name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  

  return (
    <div className="card">
        <img className="card" src={imgSrc} alt="doctor"/>
        <h3>{name}</h3>
        <h5>{username}</h5>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
