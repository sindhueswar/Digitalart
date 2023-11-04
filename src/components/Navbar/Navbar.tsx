import React, { useState } from "react";
import "./Navbar.css";
import { Squash as Hamburger } from "hamburger-react";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  
  return (
    <div>
      <header className="App-navbar">
        <h3 className="Heading">Digital.art</h3>
        <div className="navbar">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <ul className={`menu ${showNavbar && "active"}`}>
            <li>Home</li>
            <li>Lorem</li>
            <li>Lpsun</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
