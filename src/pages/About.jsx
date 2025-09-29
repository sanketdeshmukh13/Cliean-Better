// import heroImg from "../assets/img/image.png"; // add your PNG in /src/assets
// import roseImg from "../assets/img/demo1.jpg"; // add PNG
// import mograImg from "../assets/img/demo2.jpg"; // add PNG
// import sparkleImg from "../assets/img/demo3.jpg";

import companyIcon from "../assets/img/abouts.jpg"; // Add PNG for company
import locationIcon from "../assets/img/Location.jpg"; // Add PNG for location
import visionIcon from "../assets/img/visions.jpg"; // Add PNG for vision
import familyIcon from "../assets/img/trusted.jpg"; // Add PNG for why choose us
import sparkleIcon from "../assets/img/quality.jpg"; // Add PNG
import ecoIcon from "../assets/img/natural.jpg"; // Add PNG

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Cliean Better – Making Every Floor Shine with Freshness & Care</p>
      </section>

      {/* Info Cards */}
      <section className="container">
        <div className="info-grid">
          <div className="info-card">
            <img src={companyIcon} alt="Company" />
            <h3>Our Company</h3>
            <p>
              <strong>Cliean Better</strong> is committed to delivering high
              quality, perfumed cleaning products that are safe and effective
              for every home.
            </p>
          </div>
          <div className="info-card">
            <img src={locationIcon} alt="Location" />
            <h3>Our Location</h3>
            <p>
              Based in <strong>Waluj MIDC, Sambhajinagar</strong>, we proudly
              serve households across India with trusted cleaning solutions.
            </p>
          </div>
          <div className="info-card">
            <img src={visionIcon} alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              To provide <strong>hygienic, fresh, and affordable</strong>{" "}
              cleaning products that every family can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Cliean Better, our mission is simple: To combine affordability with
          effectiveness, making hygiene accessible for all. We believe a clean
          home means a healthier and happier family.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Cliean Better?</h2>
        <div className="choose-grid">
          <div className="choose-card">
            <img src={sparkleIcon} alt="Quality" />
            <h4>Quality Assured</h4>
            <p>
              Our cleaners tackle tough stains while leaving behind a fresh
              fragrance.
            </p>
          </div>
          <div className="choose-card">
            <img src={ecoIcon} alt="Eco Friendly" />
            <h4>Eco-Friendly</h4>
            <p>
              We use natural extracts for a safe and sustainable cleaning
              experience.
            </p>
          </div>
          <div className="choose-card">
            <img src={familyIcon} alt="Trusted" />
            <h4>Trusted by Families</h4>
            <p>
              Preferred choice across households, trusted for safety and
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .about-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .about-hero {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #2c6b97, #1a4a72);
          color: white;
          animation: fadeIn 1.2s ease;
        }
        .about-hero h1 {
          font-size: 2.8rem;
          margin-bottom: 1rem;
        }
        .about-hero p {
          font-size: 1.2rem;
        }

        /* Info Cards */
        .container {
          padding: 3rem 2rem;
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
          animation: fadeUp 1s ease;
        }
        .info-card:hover {
          transform: translateY(-10px);
        }
        .info-card img {
          width: 60px;
          margin-bottom: 1rem;
        }

        /* Mission */
        .mission {
          text-align: center;
          padding: 3rem 2rem;
          background: #f8f9fa;
        }
        .mission h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #2c6b97;
        }
        .mission p {
          max-width: 700px;
          margin: auto;
          font-size: 1.1rem;
        }

        /* Why Choose Us */
        .why-choose {
          padding: 3rem 2rem;
        }
        .why-choose h2 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 2rem;
          color: #2c6b97;
        }
        .choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .choose-card {
          background: white;
          padding: 2rem;
          text-align: center;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .choose-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .choose-card img {
          width: 55px;
          margin-bottom: 1rem;
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
      `}</style>
    </div>
  );
}
