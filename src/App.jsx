import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Nav';
import Cart from './pages/Cart/Cart';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import CheckoutPage from './pages/Checkout/Checkout';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App; // Ensure App is exported as default
