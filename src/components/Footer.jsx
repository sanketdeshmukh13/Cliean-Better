import { Link } from "react-router-dom";
import phoneIcon from "../assets/img/phone.png";
import emailIcon from "../assets/img/gmail.png";
import locationIcon from "../assets/img/map.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-col">
          <h3>Cliean Better</h3>
          <p>
            Premium floor cleaning solutions for every home & business. We bring
            freshness, hygiene, and care to your floors.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            <img src={phoneIcon} alt="Phone" className="footer-icon" />
            9356553143 / 9322690943
          </p>
          <p>
            <img src={emailIcon} alt="Email" className="footer-icon" />
            cleanbetter2721@gmail.com
          </p>
          <p>
            <img src={locationIcon} alt="Location" className="footer-icon" />
            Waluj MIDC, Sambhajinagar
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Sanket Deshmukh ❤️ All Rights Reserved.</p>
        <p>
          GSTIN: <strong>27ESBPR9124P1ZY</strong>
        </p>
      </div>

      {/* Inline CSS */}
      <style>{`
        .footer {
          background: linear-gradient(135deg, #2c6b97, #1a4a72);
          color: white;
          padding-top: 2rem;
          margin-top: 3rem;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .footer-col h3, .footer-col h4 {
          margin-bottom: 1rem;
          font-weight: bold;
          color: #ffdd57;
        }

        .footer-col p, .footer-col li {
          font-size: 0.95rem;
          margin: 0.5rem 0;
          opacity: 0.9;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-col li {
          margin: 0.5rem 0;
        }

        .footer-col a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-col a:hover {
          color: #ffdd57;
        }

        .footer-icon {
          width: 18px;
          margin-right: 8px;
          vertical-align: middle;
        }

        /* Bottom Bar */
        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          text-align: center;
          padding: 1rem;
          font-size: 0.9rem;
        }

        .footer-bottom p {
          margin: 0.3rem 0;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-col {
            margin-bottom: 1.5rem;
          }

          .footer-icon {
            display: inline-block;
            margin-bottom: -4px;
          }
        }
      `}</style>
    </footer>
  );
}
