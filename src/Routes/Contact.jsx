import React from 'react'
import Form from "../Components/Form";
import { useDentistStates } from '../Context';

const Contact = () => {

  const {dentistState}= useDentistStates()

  const theme = dentistState.theme === "dark" ? "dark" : "light";

  return (
    <main className={theme}>
      <div>
        <h2 style={{ textAlign: "center" }}>Necesita mas informacion?</h2>
        <p style={{ textAlign: "center" }}>
          Envie sus preguntas y le contestaremos
        </p>
        <Form />
      </div>
    </main>
  );
};

export default Contact;