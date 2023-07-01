import React from 'react'
import "../index.css";
import digital from '../images/DH.png'
import facebook from "../images/ico-facebook.png";
import whatsapp from "../images/ico-whatsapp.png";
import instagram from "../images/ico-instagram.png";
import tiktok from "../images/ico-tiktok.png";

const Footer = () => {

  return (
    <footer >
        <p>Powered by</p>
        <div>
        <img className="logo" src={digital} alt="DH-logo" />
      </div>
      <div>
        <a href="www.facebook.com">
          {" "}
          <img className="redes" src={facebook} alt="" />
        </a>
        <a href="www.instagram.com">
          {" "}
          <img className="redes" src={instagram} alt="" />
        </a>
        <a href="www.whatsapp.com">
          {" "}
          <img className="redes" src={whatsapp} alt="" />
        </a>
        <a href="www.tiktok.com">
          {" "}
          <img className="redes" src={tiktok} alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
