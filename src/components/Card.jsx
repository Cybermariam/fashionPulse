import { IoIosStar } from 'react-icons/io';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa6';

export default function Card({
  incrementCartCount,
  title,
  img,
  price,
  reviews,
}) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-price">
          <div className="price">{price}</div>
          <FaPlus className="add-to-cart" onClick={incrementCartCount} />
        </section>

        <section className="card-reviews">
          {Array.from({ length: 5 }).map((_, index) => (
            <IoIosStar key={index} className="ratings-star" />
          ))}
          <span className="total-reviews">{reviews}</span>
        </section>
      </div>
    </section>
  );
}

Card.propTypes = {
  incrementCartCount: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};
