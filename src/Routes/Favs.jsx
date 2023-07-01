import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context";

const Favs = () => {
  const { dentistState } = useDentistStates();
  const doctorImg = "../images/doctor.jpg";
  const theme = dentistState.theme === "dark" ? "dark" : "light";
  const [objetos, setObjetos] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favs");
    if (storedFavs) {
      setObjetos(JSON.parse(storedFavs));
    }
  }, []);

  return (
    <main className={theme}>
      <>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {objetos.map((fav) => (
            <Card
              key={fav.id}
              imgSrc={doctorImg}
              name={fav.name}
              username={fav.username}
              id={fav.id}
              hideDelete={false}
              isDisabled={true}
            />
          ))}
        </div>
      </>
    </main>
  );
};

export default Favs;
