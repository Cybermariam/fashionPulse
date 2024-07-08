import './Checkout.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from '../../assets/item-1.png';
const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="delivery-address">
          <h3>Delivery Address</h3>

          <form className="checkout-form">
            <button className="edit-button">Edit</button>
            <div className="address-appartment-container">
              <div className="address-container">
                <label className="address">Address</label>
                <input type="text" />
              </div>
              <div className="appartment-container">
                <label className="appartment">Apartment/Suite</label>
                <input type="text" />
              </div>
            </div>

            <div className="city-state-container">
              <div>
                <label className="address">City</label>
                <input type="text" />
              </div>

              <div>
                <label className="address">State</label>
                <div className="state-container">
                  <input type="text" />
                  <MdOutlineKeyboardArrowDown className="dropdown" />
                </div>
              </div>
              <div>
                <label className="code">Postal Code</label>
                <input type="text" />
              </div>
            </div>
          </form>
        </div>

        <div className="delivery-details">
          <h3>Delivery Details</h3>

          <div className="item-container">
            <button className="edit-button">Edit</button>
            <div className="item-details">
              <div>
                <img src={Image} alt="Item" />
              </div>
              <div className="item-name-property">
                <div className="item-name">
                  <p>Nike Jordan Mid</p>
                  <p className="sneakers">Men&#39;s Sneakers </p>
                </div>
                <p className="item0">0</p>
                <div className="item-property">
                  <p>Sizes</p>
                  <p>Color(s)</p>
                </div>
                <div className="item-value">
                  <p>M-44</p>
                  <p>Red, White, Black</p>
                </div>
                <div className="item-quantity">
                  <p className="quantity">Quantity</p>
                  <p className="quantity-details"> 1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="delivery-options">
            <label>
              <input type="radio" name="delivery" value="pickup" /> Pickup
            </label>
            <label>
              <input type="radio" name="delivery" value="delivery" /> Delivery
            </label>
          </div>
        </div>

        <div className="payment-methods">
          <h2>Payment Methods</h2>

          <p>This shop doesn&#39;t accept payments currently.</p>
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <ul>
          <li>Selected: $0.00</li>
          <li>Delivery Fee: $0.00</li>
          <li>Estimated Tax: $0.00</li>
          <li>Total: $0.00</li>
        </ul>
        <p>You save $10.00 on your next purchase when you shop with us.</p>
        <button>Continue to payment</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
