import './footer.css';
import Logo from '../../../public/logo.png';

export default function footer() {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links-di">
            <img src={Logo} alt="FashionPulse logo" className="footer-logo" />
            <p className="footer-address">
              2089 Allen Avenue, Ikeja, Lagos <br /> +234 000 888 999 88
            </p>
            <a href="Info@Fashionpulse.com" className="footer-address">
              Info@Fashionpulse.com
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Resources</h4>
            <a href="/men">
              <p>Shop Men</p>
            </a>
            <a href="/women">
              <p>Shop Women</p>
            </a>
            <a href="/best-seller">
              <p>Best Sellers</p>
            </a>
            <a href="/gift-cards">
              <p>Gift Cards</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>New & Featured</h4>
            <a href="/new-arrival">
              <p>New Arrival</p>
            </a>
            <a href="/sale">
              <p>Shop sale upto 48% off</p>
            </a>
            <a href="/best-seller">
              <p>Best Sellers</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Help</h4>
            <a href="/contact-us">
              <p>Contact Us</p>
            </a>
            <a href="/faq">
              <p>FAQs</p>
            </a>
            <a href="/best-seller">
              <p>Shipping And Returns</p>
            </a>
            <a href="/order-tracking ">
              <p>Order Tracking</p>
            </a>
          </div>

          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about-us">
              <p>About Us</p>
            </a>
            <a href="/career">
              <p>Careers</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
          </div>
        </div>
        <br /> <br />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>© {new Date().getFullYear} Fashionpulse All Rights Reserved</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms Of Use</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy Policy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
