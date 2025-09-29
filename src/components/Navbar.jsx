import { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css"; // Import the CSS file
import logo from "../assets/img/logo .png"; // ✅ Add your logo in src/assets/img

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* ✅ Logo / Brand */}
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="Cliean Better Logo" className="logo-img" />
        </Link>

        {/* Desktop Links */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className={`hamburger ${open ? "toggle" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
