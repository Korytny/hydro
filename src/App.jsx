import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Product from './pages/Product';
import Science from './pages/Science';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <div className="min-h-screen bg-deep-ocean">
      <Header />
      <ScrollToTop />
      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/science" element={<Science />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
