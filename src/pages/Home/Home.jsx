import Sidebar from '../../Sidebar/Sidebar';
import Products from '../../components/Products/Products';

import Category from '../../components/Category/Category';

function Home() {
  return (
    <>
      <div className="banner">
        Get 20% Off Your First Order Today. Order now!
      </div>
      <h1 className="heading"> MEN&#39;S SNEAKERS</h1>
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <Products />
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
