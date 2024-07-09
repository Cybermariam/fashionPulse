import './Products.css';
import Card from '../Card/';
import data from '../../db/data';
import PropTypes from 'prop-types';
export default function Products({ incrementCartCount }) {
  return (
    <>
      <section className="card-container">
        {data.map((product, index) => (
          <Card
            key={index}
            img={product.img}
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            star={product.star}
            incrementCartCount={incrementCartCount}
          />
        ))}
      </section>
    </>
  );
}
Products.propTypes = {
  incrementCartCount: PropTypes.func.isRequired,
};
