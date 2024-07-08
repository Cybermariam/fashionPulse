import Item from '../assets/image-1.png';
import { IoIosStar } from 'react-icons/io';

import { FaPlus } from 'react-icons/fa6';

export default function Card() {
  return (
    <section className="card">
      <img src={Item} alt="Shoe" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">Shoe</h3>

        <section className="card-price">
          <div className="price">₦120,000</div>
          <FaPlus className="add-to-cart" />
        </section>

        <section className="card-reviews">
          <IoIosStar className="ratings-star" />
          <IoIosStar className="ratings-star" />
          <IoIosStar className="ratings-star" />
          <IoIosStar className="ratings-star" />
          <IoIosStar className="ratings-star" />
          <span className="total-reviews">7</span>
        </section>
      </div>
    </section>
  );
}

// // import { FaPlus } from 'react-icons/fa6';
// // import { IoIosStar } from 'react-icons/io';

// import PropTypes from 'prop-types';
// import { FaStar } from 'react-icons/fa';
// import { FaPlus } from 'react-icons/fa6';

// const iconComponents = {
//   FaPlus: FaPlus,
//   FaStar: FaStar,
// };

// export default function Card({
//   img,
//   title,
//   price,
//   iconType,
//   starType,
//   reviews,
// }) {
//   const Icon = iconComponents[iconType];
//   const Star = iconComponents[starType];

//   return (
//     <section className="card">
//       <img src={img} alt={title} className="card-img" />
//       <div className="card-details">
//         <h3 className="card-title">{title}</h3>
//         <section className="card-price">
//           <div className="price">{price}</div>
//           {Icon && <Icon className="add-to-cart" />}
//         </section>
//         <section className="card-reviews">
//           {Array.from({ length: 5 }).map((_, index) => (
//             <span key={index}>{Star && <Star className="rating-star" />}</span>
//           ))}
//           <span className="total-reviews">{reviews}</span>
//         </section>
//       </div>
//     </section>
//   );
// }

// Card.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   iconType: PropTypes.string.isRequired,
//   starType: PropTypes.string.isRequired,
//   reviews: PropTypes.string.isRequired,
// };
