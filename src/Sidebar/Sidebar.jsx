import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Men&#39;s Fashion</h3>
      <ul className="sidebar-menu">
        <li className="sidebar-category">Shoes / Sneakers</li>
        <li>
          Shoes
          <ul className="submenu">
            <li>Sneakers</li>
            <li>Trainers</li>
            <li>Work shoes</li>
            <li>Walking shoes</li>
            <li>Black shoes</li>
          </ul>
        </li>
        <li>
          Athletics
          <ul className="submenu">
            <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Tennis</li>
            <li>Training & Gym</li>
          </ul>
        </li>
        <li>
          Lifestyle
          <ul className="submenu">
            <li>Loafers</li>
            <li>Sandals</li>
            <li>Casual shoes</li>
          </ul>
        </li>
      </ul>
      <div className="pick-up-now">
        <h3>Pick Up Now</h3>
      </div>
    </div>
  );
};

export default Sidebar;
