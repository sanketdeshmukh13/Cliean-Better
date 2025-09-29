import roseImg from "../assets/img/image.png"; // Rose Cleaner
import mograImg from "../assets/img/productmogra.jpg"; // Mogra Cleaner
import sparkleIcon from "../assets/img/safe.jpg"; // Small icon
import Natural from "../assets/img/natural.jpg"; // Small icon
import Freshness from "../assets/img/fresh.jpg"; // Small icon
import pricing from "../assets/img/money.jpg"; // Small icon
import starIcon from "../assets/img/cust1.jpg"; // Review star icon
import proc2 from "../assets/img/cust2.jpg"; // Review star icon
import proc3 from "../assets/img/cust3.png"; // Review star icon

export default function Products() {
  return (
    <div className="products-page">
      {/* Title */}
      <section className="products-hero">
        <h1>Our Products</h1>
        <p>
          Discover freshness with our premium range of perfumed floor cleaners
        </p>
      </section>

      {/* Product Grid */}
      <section className="container">
        <div className="products-grid">
          {/* Rose Cleaner */}
          <div className="product-card fade-up">
            <img src={roseImg} alt="Rose Cleaner" />
            <h3>Rose Perfumed Cleaner</h3>
            <p>
              Infused with natural rose extracts, ensures spotless floors with a
              floral touch.
            </p>
            <button className="btn-product">Buy Now</button>
          </div>

          {/* Mogra Cleaner */}
          <div className="product-card fade-up-delay">
            <img src={mograImg} alt="Mogra Cleaner" />
            <h3>Mogra Perfumed Cleaner</h3>
            <p>
              Refreshing mogra fragrance, safe for all floor types and leaves
              lasting freshness.
            </p>
            <button className="btn-product">Buy Now</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Product Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={sparkleIcon} alt="Safe" />
            <h4>Safe for All Floors</h4>
            <p>No damage, 100% safe for all surfaces.</p>
          </div>
          <div className="feature-card">
            <img src={Natural} alt="Natural" />
            <h4>Natural Extracts</h4>
            <p>Harnessing nature’s power for better cleaning.</p>
          </div>
          <div className="feature-card">
            <img src={Freshness} alt="Freshness" />
            <h4>Long-Lasting Freshness</h4>
            <p>Fragrance that lasts long after cleaning.</p>
          </div>
          <div className="feature-card">
            <img src={pricing} alt="Affordable" />
            <h4>Affordable Prices</h4>
            <p>Premium quality at budget-friendly rates.</p>
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section className="how-to-use">
        <h2>How to Use</h2>
        <ul>
          <li>
            <strong>Step 1:</strong> Shake well before use.
          </li>
          <li>
            <strong>Step 2:</strong> Mix 50ml cleaner with 1L water.
          </li>
          <li>
            <strong>Step 3:</strong> Mop the floor as usual.
          </li>
          <li>
            <strong>Step 4:</strong> Apply directly for tough stains.
          </li>
          <li>
            <strong>Step 5:</strong> No rinsing required.
          </li>
        </ul>
      </section>

      {/* Customer Reviews */}
      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <img src={starIcon} alt="Stars" />
            <p>
              "Best cleaner I’ve ever used! Smells amazing and cleans deeply."
            </p>
            <h5>- Priya Sharma</h5>
          </div>
          <div className="review-card">
            <img src={proc2} alt="Stars" />
            <p>"Affordable and effective. My home feels fresh every day."</p>
            <h5>- Amit Verma</h5>
          </div>
          <div className="review-card">
            <img src={proc3} alt="Stars" />
            <p>"Rose cleaner is my favorite, leaves a lovely fragrance."</p>
            <h5>- Neha Patil</h5>
          </div>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .products-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero Section */
        .products-hero {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #2c6b97, #1a4a72);
          color: white;
          animation: fadeIn 1.2s ease;
        }
        .products-hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .products-hero p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        /* Grid */
        .container {
          padding: 3rem 2rem;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* Product Cards */
        .product-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .product-card img {
          width: 120px;
          margin-bottom: 1rem;
          animation: float 3s ease-in-out infinite;
        }
        .product-card h3 {
          color: #2c6b97;
          margin-bottom: 0.5rem;
        }
        .product-card p {
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        /* Button */
        .btn-product {
          background: #50c878;
          color: white;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-product:hover {
          background: #3aa563;
          transform: scale(1.05);
        }

        /* Features */
        .features {
          background: #f8f9fa;
          padding: 3rem 2rem;
          text-align: center;
        }
        .features h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #2c6b97;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .feature-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .feature-card:hover {
          transform: scale(1.05);
        }
        .feature-card img {
          width: 40px;
          margin-bottom: 1rem;
        }

        /* How To Use */
        .how-to-use {
          padding: 3rem 2rem;
          text-align: center;
        }
        .how-to-use h2 {
          color: #2c6b97;
          margin-bottom: 1.5rem;
        }
        .how-to-use ul {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: auto;
          text-align: left;
        }
        .how-to-use li {
          margin: 0.8rem 0;
          font-size: 1rem;
        }

        /* Reviews */
        .reviews {
          background: #eef3f7;
          padding: 3rem 2rem;
          text-align: center;
        }
        .reviews h2 {
          margin-bottom: 2rem;
          color: #2c6b97;
        }
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .review-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .review-card img {
          width: 70px;
          margin-bottom: 1rem;
        }
        .review-card p {
          font-style: italic;
          margin-bottom: 0.8rem;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
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
