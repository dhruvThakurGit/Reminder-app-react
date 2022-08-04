import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>

      {useLocation().pathname === "/about" ? (
        <Link to="/">Go back</Link>
      ) : (
        <Link to="/about">About</Link>
      )}
    </footer>
  );
};

export default Footer;
