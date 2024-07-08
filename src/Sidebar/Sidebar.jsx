// import './Sidebar.css';
// import Category from './Category/Category';
// import Athletics from './Athletics/Athletics';
// import Lifestyle from './Lifestyle/Lifestyle';

// export default function Sidebar() {
//   return (
//     <>
//       <section className="sidebar">
//         <Category />
//         <Athletics />
//         <Lifestyle />
//       </section>
//     </>
//   );
// }

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Men&#39;s Fashion</h2>
      <ul className="sidebar-menu">
        <li>Shoes / Sneakers</li>
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
        {/* Additional content for Pick Up Now */}
      </div>
    </div>
  );
};

export default Sidebar;
