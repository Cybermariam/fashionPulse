import Summary from '../../components/Summary/Summary';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import ShopingImage from '../../assets/shopping-bag.png';
import Cart1 from '../../assets/cart1.png';
import Cart2 from '../../assets/cart2.png';
import Cart3 from '../../assets/cart4.png';

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    navigate('/checkout');
  };
  return (
    <>
      <h1 className="heading"> CART</h1>
      <div className="cart-page">
        <h2>
          Cart item(s) <span>0</span>{' '}
        </h2>
        <div className="cart-container">
          <div className="cart-items">
            <div className="empty-cart">
              <p>You don&#39;t have any items in your cart</p>
              <div className="empty-cart-icon">
                <img src={ShopingImage} alt="" />
              </div>
            </div>
          </div>

          <div className="summary-container">
            <div className="summary">
              <h3 className="summary-heading">0item(s) in your cart</h3>
              <div className="price-summary">
                <Summary />

                <button
                  className="checkout-button"
                  onClick={handleCheckoutClick}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-items">
          <h3>Explore other items</h3>
          <div className="item-cards">
            <div className="item-card">
              <img className="item-image" src={Cart1} />
            </div>
            <div className="item-card">
              <img className="item-image" src={Cart2} />
            </div>
            <div className="item-card">
              <img className="item-image" src={Cart3} />{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
