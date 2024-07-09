import './Checkout.css';
// import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';
// import CartImage from '../../assets/cart-image.png';
import Summary from '../../components/Summary/Summary';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Image from '../../assets/item-1.png';
const CheckoutPage = () => {
  return (
    <>
      <h1 className="heading"> CHECKOUT</h1>
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
              <p className="edit-container">
                <button className="edit-button">Edit</button>
              </p>
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

              <div className="delivery-options">
                <div className="pick-up-option">
                  <h4 className="delivery-option-text">Delivery Options</h4>
                  <button>Pick up</button>
                  <p>Free</p>
                </div>

                <button>delivery</button>
              </div>
            </div>
          </div>

          <div className="payment-methods">
            <h3>Payment Methods</h3>

            <div className="payment-method-condition">
              <button className="payment-method-button">Edit</button>
              <p className="payment-condition">
                This shop doesn&#39;t accept payments currently.
              </p>
            </div>
          </div>
        </div>

        <div className="summary-container">
          <div className="summary">
            <h3 className="summary-heading">Summary</h3>
            <div className="price-summary">
              <Summary />

              <button className="checkout-button">Continue to payment</button>
            </div>
          </div>

          <p className="checkout-terms">
            <input type="checkbox" />
            <span>
              By completing your purchase, you agree to the Terms and
              Conditions.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
// import './Checkout.css';
// import Summary from '../../components/Summary/Summary';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import Image from '../../assets/item-1.png';

// const CheckoutPage = () => {
//   return (
//     <>
//       <h1 className="heading"> CHECKOUT</h1>
//       <div className="checkout-container">
//         <div className="checkout-content">
//           <div className="delivery-address">
//             <h3>Delivery Address</h3>
//             <form className="checkout-form">
//               <button className="edit-button">Edit</button>
//               <div className="address-appartment-container">
//                 <div className="address-container">
//                   <label className="address">Address</label>
//                   <input type="text" />
//                 </div>
//                 <div className="appartment-container">
//                   <label className="appartment">Apartment/Suite</label>
//                   <input type="text" />
//                 </div>
//               </div>
//               <div className="city-state-container">
//                 <div>
//                   <label className="address">City</label>
//                   <input type="text" />
//                 </div>
//                 <div>
//                   <label className="address">State</label>
//                   <div className="state-container">
//                     <input type="text" />
//                     <MdOutlineKeyboardArrowDown className="dropdown" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="code">Postal Code</label>
//                   <input type="text" />
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="delivery-details">
//             <h3>Delivery Details</h3>
//             <div className="item-container">
//               <p className="edit-container">
//                 <button className="edit-button">Edit</button>
//               </p>
//               <div className="item-details">
//                 <div>
//                   <img src={Image} alt="Item" />
//                 </div>
//                 <div className="item-name-property">
//                   <div className="item-name">
//                     <p>Nike Jordan Mid</p>
//                     <p className="sneakers">Men&#39;s Sneakers </p>
//                   </div>
//                   <p className="item0">0</p>
//                   <div className="item-property">
//                     <p>Sizes</p>
//                     <p>Color(s)</p>
//                   </div>
//                   <div className="item-value">
//                     <p>M-44</p>
//                     <p>Red, White, Black</p>
//                   </div>
//                   <div className="item-quantity">
//                     <p className="quantity">Quantity</p>
//                     <p className="quantity-details"> 1</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="delivery-options">
//                 <div className="pick-up-option">
//                   <h4 className="delivery-option-text">Delivery Options</h4>
//                   <button>Pick up</button>
//                   <p>Free</p>
//                 </div>
//                 <button>Delivery</button>
//               </div>
//             </div>
//           </div>
//           <div className="payment-methods">
//             <h3>Payment Methods</h3>
//             <div className="payment-method-condition">
//               <button className="payment-method-button">Edit</button>
//               <p className="payment-condition">
//                 This shop doesn&#39;t accept payments currently.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <Summary />
//           <p className="checkout-terms">
//             <input type="checkbox" />
//             <span>
//               By completing your purchase, you agree to the Terms and
//               Conditions.
//             </span>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;
