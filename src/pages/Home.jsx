import { Link } from "react-router-dom"; // ✅ Import Link
import heroImg from "../assets/img/productrose.jpg"; // Hero PNG
import roseImg from "../assets/img/productrose.jpg"; // Product PNG
import mograImg from "../assets/img/productmogra.jpg"; // Product PNG
import sparkleImg from "../assets/img/safe.jpg"; // Decoration / Icon
import freshness from "../assets/img/fresh.jpg"; // Decoration / Icon
import pricing from "../assets/img/money.jpg"; // Decoration / Icon

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="fade-in">CLIEAN BETTER</h1>
          <p className="fade-in-delay">
            Premium Floor Cleaning Solutions for Every Home
          </p>
          {/* ✅ Redirects to Products page */}
          <Link to="/products" className="btn-primary fade-in-delay2">
            Explore Products
          </Link>
        </div>
        <div className="hero-img slide-in">
          <img src={heroImg} alt="Floor Cleaner" />
        </div>
      </section>

      {/* Products Section */}
      <section className="section container">
        <h2 className="section-title">Our Bestsellers</h2>
        <div className="row">
          <div className="product-card">
            <img src={roseImg} alt="Rose Cleaner" />
            <h3>Rose Perfumed Cleaner</h3>
            <p>Infused with rose extracts for effective stain removal.</p>
          </div>
          <div className="product-card">
            <img src={mograImg} alt="Mogra Cleaner" />
            <h3>Mogra Perfumed Cleaner</h3>
            <p>Refreshing fragrance, safe for all floor types.</p>
          </div>
        </div>
      </section>

      {/* About Cleaner Section */}
      <section className="about-cleaner">
        <h2 className="section-title">About Our Floor Cleaner</h2>
        <p>
          Cliean Better is designed with a unique formula that combines{" "}
          <strong>deep cleaning action</strong> and{" "}
          <strong>long-lasting fragrance</strong>. Made with safe and
          eco-friendly ingredients, our cleaners are tough on stains but gentle
          on your floors.
        </p>
        <p>
          Suitable for{" "}
          <strong>tiles, marble, granite, and wooden floors</strong>, Cliean
          Better ensures hygiene, shine, and freshness every single time. Unlike
          harsh chemicals, it protects your flooring while keeping your home
          germ-free and fragrant.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose Cliean Better?</h2>
        <div className="row">
          <div className="feature-card fade-up">
            <img src={sparkleImg} alt="Safe Floors" />
            <h4>Safe for All Floors</h4>
            <p>No damage, 100% safe for surfaces.</p>
          </div>
          <div className="feature-card fade-up-delay">
            <img src={freshness} alt="Freshness" />
            <h4>Long-Lasting Freshness</h4>
            <p>Enjoy fragrance that stays for hours.</p>
          </div>
          <div className="feature-card fade-up-delay2">
            <img src={pricing} alt="Affordable" />
            <h4>Affordable Pricing</h4>
            <p>Premium quality at a budget-friendly price.</p>
          </div>
        </div>
      </section>

      {/* How It Helps You Section */}
      <section className="benefits">
        <h2 className="section-title">How It Helps You</h2>
        <div className="row">
          <div className="benefit-card">
            <h4>✨ Shiny Surfaces</h4>
            <p>Removes stains and restores natural shine.</p>
          </div>
          <div className="benefit-card">
            <h4>🦠 Germ Protection</h4>
            <p>Kills 99.9% of germs and bacteria.</p>
          </div>
          <div className="benefit-card">
            <h4>🌿 Eco-Friendly</h4>
            <p>Safe formula that cares for your family & environment.</p>
          </div>
          <div className="benefit-card">
            <h4>🌸 Refreshing Fragrance</h4>
            <p>Keeps your home smelling fresh all day.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Make Your Floors Shine Today!</h2>
        <p>
          Switch to Cliean Better for hygienic, fresh, and sparkling floors.
        </p>
        <Link to="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </section>

      {/* Inline CSS */}
      <style>{`
        .btn-primary, .btn-secondary {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          font-weight: bold;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background: #50c878;
          color: white;
        }
        .btn-primary:hover {
          background: #3aa563;
          transform: scale(1.05);
        }
        .btn-secondary {
          background: #ffdd57;
          color: #333;
        }
        .btn-secondary:hover {
          background: #ffc107;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
