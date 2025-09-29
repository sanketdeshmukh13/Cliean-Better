import phoneIcon from "../assets/img/phone.png";
import emailIcon from "../assets/img/gmail.png";
import locationIcon from "../assets/img/map.png";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you – reach out anytime!</p>
      </section>

      {/* Contact Info */}
      <section className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-card fade-up">
            <img src={phoneIcon} alt="Phone" />
            <h4>Phone</h4>
            <p>
              9356553143 <br />
              9322690943
            </p>
          </div>
          <div className="contact-card fade-up-delay">
            <img src={emailIcon} alt="Email" />
            <h4>Email</h4>
            <p>cleanbetter2721@gmail.com</p>
          </div>
          <div className="contact-card fade-up-delay2">
            <img src={locationIcon} alt="Location" />
            <h4>Location</h4>
            <p>Waluj MIDC, Sambhajinagar</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30030.248520720248!2d75.18873251083986!3d19.8068779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9bd64d269c69%3A0x31f6105b03952644!2sWaluj%20MIDC%20Chhatrapati%20Sambhaji%20Nagar!5e0!3m2!1sen!2sin!4v1757928649204!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .contact-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .contact-hero {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #2c6b97, #1a4a72);
          color: white;
          animation: fadeIn 1.2s ease;
        }
        .contact-hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .contact-hero p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        /* Title */
        .section-title {
          text-align: center;
          margin: 2rem 0;
          font-size: 2rem;
          color: #2c6b97;
        }

        /* Contact Grid */
        .container {
          padding: 3rem 2rem;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .contact-card {
          background: white;
          padding: 2rem;
          text-align: center;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .contact-card img {
          width: 55px;
          margin-bottom: 1rem;
        }
        .contact-card h4 {
          margin-bottom: 0.5rem;
          color: #2c6b97;
        }

        /* Contact Form */
        .contact-form-section {
          background: #f8f9fa;
          padding: 3rem 2rem;
          text-align: center;
        }
        .contact-form-section h2 {
          margin-bottom: 2rem;
          color: #2c6b97;
        }
        .contact-form {
          max-width: 600px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 0.8rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: border 0.3s, box-shadow 0.3s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border: 1px solid #2c6b97;
          outline: none;
          box-shadow: 0 0 8px rgba(44, 107, 151, 0.3);
        }
        .contact-form button {
          background: #50c878;
          color: white;
          padding: 0.8rem 1.2rem;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .contact-form button:hover {
          background: #3aa563;
          transform: scale(1.05);
        }

        /* Map Section */
        .map-section {
          padding: 3rem 2rem;
          text-align: center;
        }
        .map-section h2 {
          margin-bottom: 1.5rem;
          color: #2c6b97;
        }
        .map-container {
          max-width: 900px;
          margin: auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
        }
        .map-container iframe {
          width: 100%;
          height: 400px;
          border: 0;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { opacity: 0; animation: fadeUp 1s ease forwards; }
        .fade-up-delay { opacity: 0; animation: fadeUp 1s ease 0.4s forwards; }
        .fade-up-delay2 { opacity: 0; animation: fadeUp 1s ease 0.8s forwards; }
      `}</style>
    </div>
  );
}
