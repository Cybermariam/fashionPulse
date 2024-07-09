import { useState } from 'react';
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
  const incrementCartCount = () => {
    setCartItemCount(prevCount => prevCount + 1);
  };

  return (
    <>
      <Navigation cartItemCount={cartItemCount} />
      <Banner />

      <Routes>
        <Route
          path="/"
          element={<Home incrementCartCount={incrementCartCount} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App; // Ensure App is exported as default
