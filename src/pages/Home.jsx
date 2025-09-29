import { Link } from "react-router-dom";
import heroImg from "../assets/img/productrose.jpg"; // Hero PNG
import roseImg from "../assets/img/productrose.jpg"; // Product PNG
import mograImg from "../assets/img/productmogra.jpg"; // Product PNG
import sparkleImg from "../assets/img/safe.jpg"; // Icon
import freshness from "../assets/img/fresh.jpg"; // Icon
import pricing from "../assets/img/money.jpg"; // Icon
import hero from "../assets/img/products22.jpg"; // Hero image

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
          <Link to="/products" className="btn-primary fade-in-delay2">
            Explore Products
          </Link>
        </div>
        <div className="hero-img slide-in">
          <img src={hero} alt="Floor Cleaner" />
        </div>
      </section>

      {/* Products Section */}
      <section className="section container">
        <h2 className="section-title">Our Bestsellers</h2>
        <div className="row products-grid">
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
        <div className="row features-grid">
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
        <div className="row benefits-grid">
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
        /* Global Section */
        .section {
          padding: 3rem 2rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 2rem;
          color: #2c6b97;
          font-size: 2rem;
        }

        /* Hero Section */
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #3175b4, #e3eef7);
        }
        .hero-content {
          flex: 1;
          min-width: 280px;
          margin-bottom: 2rem;
        }
        .hero-content h1 {
          font-size: 3rem;
          color: #be3379ff;
          margin-bottom: 1rem;
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: #ffffffff;
        }
        .hero-img {
          flex: 1;
          text-align: center;
        }
        .hero-img img {
          width: 320px;
          max-width: 100%;
          border-radius: 12px;
          animation: float 4s ease-in-out infinite;
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .product-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          text-align: center;
        }
        .product-card img {
          width: 120px;
          margin-bottom: 1rem;
        }

        /* About Cleaner */
        .about-cleaner {
          max-width: 900px;
          margin: auto;
          text-align: center;
          padding: 2rem;
          line-height: 1.6;
        }

        /* Features Grid */
        .features {
          background: #f8f9fa;
          padding: 3rem 2rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          text-align: center;
        }
        .feature-card img {
          width: 60px;
          margin-bottom: 1rem;
        }

        /* Benefits Grid */
        .benefits {
          background: #eef7ff;
          padding: 3rem 2rem;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .benefit-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          text-align: center;
        }

        /* CTA */
        .cta {
          background: linear-gradient(135deg, #2c6b97, #92a1adff);
          color: white;
          text-align: center;
          padding: 3rem 2rem;
        }
        .cta h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .cta p {
          max-width: 700px;
          margin: auto;
          margin-bottom: 1.5rem;
        }

        /* Buttons */
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

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding: 2rem 1rem;
          }
          .hero-content h1 {
            font-size: 2.2rem;
          }
          .hero-img img {
            width: 240px;
          }
        }
      `}</style>
    </div>
  );
}
