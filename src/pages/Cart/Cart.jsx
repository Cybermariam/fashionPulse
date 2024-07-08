import './cart.css';

const Cart = () => {
  return (
    <>
      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-items">
            <h2>Cart item(s) (0)</h2>
            <div className="empty-cart">
              <p>You dont have any items in your cart</p>
              <div className="empty-cart-icon">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 26a2 2 0 100 4 2 2 0 000-4zM36 26a2 2 0 100 4 2 2 0 000-4zM2 2h4l4 16h24l4-16H10"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <p>
              Subtotal: <span>0</span>
            </p>
            <p>
              Delivery Fee: <span>0</span>
            </p>
            <p>
              Estimated Tax: <span>₦0</span>
            </p>
            <h4>
              Estimated Total: <span>₦0</span>
            </h4>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
        <div className="explore-items">
          <h3>Explore other items</h3>
          <div className="item-cards">
            <div className="item-card"> {/* Add your item cards here */} </div>
            <div className="item-card"> {/* Add your item cards here */} </div>
            <div className="item-card"> {/* Add your item cards here */} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
