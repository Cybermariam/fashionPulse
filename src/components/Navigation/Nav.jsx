import './Nav.css';
import Logo from '../../../public/logo.png';
import { CiSearch } from 'react-icons/ci';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShopping } from 'react-icons/ai';

export default function Nav() {
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
            <a href="#">
              <AiOutlineShopping className="nav-icons" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
