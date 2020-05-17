import React from "react";
import playstoreLogo from "../../assets/google.png";

import "./Navigation.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div>
          <p>Online shopping</p>
          <pre>Men</pre>
          <pre>Women</pre>
          <pre>Kids</pre>
          <pre>Essentials</pre>
          <pre>Gift cards</pre>
        </div>
        <div>
          <p>Useful links</p>
          <pre>Contact us</pre>
          <pre>FAQ</pre>
          <pre>T&C</pre>
        </div>
        <div>
          <p>Experience app on mobile</p>
          <img src={playstoreLogo} alt="playstore" />
        </div>
        <p className="disclaimer">
          Disclaimer: All the images and product descriptions used in this
          website are sole property of Myntra. This website is not an actual
          e-commerce platform but a simple application to recreate an online
          shopping experience using technologies like React.js and Redux.
        </p>
      </footer>
    </>
  );
};

export { Footer };
