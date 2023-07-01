import React from "react";
import { useState } from "react";
import "../index.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 6 || !validateEmail(email)) {
      setErrorMessage(
        "Por favor, ingrese un nombre válido (min 6 caracteres) y un correo electrónico válido."
      );
      return;
    }

    setSuccessMessage(`Gracias ${name}, te contactaremos por ${email}`);
    setName("");
    setEmail("");

    setErrorMessage("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Form;