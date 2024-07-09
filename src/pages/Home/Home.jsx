import Products from '../../components/Products/Products';
import PropTypes from 'prop-types';
import Category from '../../components/Category/Category';
import Sidebar from '../../Sidebar/Sidebar';
import './Home.css';

function Home({ incrementCartCount }) {
  return (
    <>
      <h1 className="heading"> MEN&#39;S SNEAKERS</h1>
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <Products incrementCartCount={incrementCartCount} />
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
Home.propTypes = {
  incrementCartCount: PropTypes.func.isRequired,
};
