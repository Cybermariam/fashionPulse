import './Products.css';
import Card from '../Card/';
export default function Product() {
  return (
    <>
      <section className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
// import './Products.css';
// import Item from '../../assets/image-1.png';
// import { IoIosStar } from 'react-icons/io';
// import { FaPlus } from 'react-icons/fa6';

// export default function Products() {
//   return (
//     <section className="card-container">
//       {Array.from({ length: 6 }).map((_, index) => (
//         <section className="card" key={index}>
//           <img src={Item} alt="Shoe" className="card-img" />
//           <div className="card-details">
//             <h3 className="card-title">Shoe</h3>
//             <section className="card-price">
//               <div className="price">₦120,000</div>
//               <FaPlus className="add-to-cart" />
//             </section>
//             <section className="card-reviews">
//               {Array.from({ length: 5 }).map((_, starIndex) => (
//                 <IoIosStar key={starIndex} className="ratings-star" />
//               ))}
//               <span className="total-reviews">7</span>
//             </section>
//           </div>
//         </section>
//       ))}
//     </section>
//   );
// }
