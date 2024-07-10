// import { useState } from 'react';
// import './index.css';
// import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Nav';
// import Cart from './pages/Cart/Cart';
// import Footer from './components/footer/Footer';
// import Home from './pages/Home/Home';
// import CheckoutPage from './pages/Checkout/Checkout';
// import Banner from './components/Banner/Banner';

// function App() {
//   const [cartItemCount, setCartItemCount] = useState(0);
//   const incrementCartCount = () => {
//     setCartItemCount(prevCount => prevCount + 1);
//   };

//   return (
//     <>
//       <div className="container">
//         <Navigation cartItemCount={cartItemCount} />
//         <Banner />

//         <Routes>
//           <Route
//             path="/"
//             element={<Home incrementCartCount={incrementCartCount} />}
//           />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;
import { useState, useEffect } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Nav';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import CheckoutPage from './pages/Checkout/Checkout';
import Banner from './components/Banner/Banner';

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const incrementCartCount = () => {
    setCartItemCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container">
        {isMobile ? (
          <>
            <Banner />
            <Navigation cartItemCount={cartItemCount} />
          </>
        ) : (
          <>
            <Navigation cartItemCount={cartItemCount} />
            <Banner />
          </>
        )}

        <Routes>
          <Route
            path="/"
            element={<Home incrementCartCount={incrementCartCount} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
