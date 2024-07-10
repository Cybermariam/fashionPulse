import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';
import CartImage from '../../assets/cart-image.png';
import './Summary.css';
export default function Summary() {
  return (
    <>
      <div className="summary-info">
        <p>
          Subtotal <HiMiniQuestionMarkCircle />
        </p>
        <p>0</p>
      </div>

      <div className="summary-info">
        <p>Delivery Fee</p>
        <p>₦0</p>
      </div>
      <div className="summary-info">
        <p className="estimated-total">
          Estimated Tax
          <HiMiniQuestionMarkCircle />
        </p>
        <p>₦0.00</p>
      </div>

      <div className="estimated-info">
        <p>Estimated Total</p>
        <p>0</p>
      </div>
      <div className="checkout-review">
        <img src={CartImage} alt="" />
        <p>
          You save ₦16,000.00 on your next order.Check out for more on sale and
          collections for better prices!
        </p>
      </div>
    </>
  );
}
