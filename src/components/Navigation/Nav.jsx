import './Nav.css';
import Logo from '../../../public/logo.png';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShopping } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Nav({ cartItemCount }) {
  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate('/cart');
  };
  return (
    <nav>
      <div className="nav-container">
        <img src={Logo} alt="Fashionpulse logo" className="logo" />
        <ul className="navbar-menu">
          <li>Men</li>
          <li>Women</li>
          <li>Collection</li>
          <li>Sale</li>
        </ul>
        <div className="navbar-right">
          <div className="searchbar">
            <CiSearch className="search-icon" />
            <input type="text" className="search-input" placeholder="Search" />
          </div>
          <div className="profile-container">
            <a href="#">
              <FiHeart className="nav-icons" />
            </a>
            <a
              href="#"
              onClick={handleCartClick}
              className="cart-icon-container"
            >
              <AiOutlineShopping className="nav-icons" />
              {cartItemCount !== undefined && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
Nav.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};
