import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Generic from './pages/Generic';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Generic title="Packages" />} />
        <Route path="/destinations" element={<Generic title="Destinations" />} />
        <Route path="/gallery" element={<Generic title="Gallery" />} />
        <Route path="/about" element={<Generic title="About Us" />} />
        <Route path="/contact" element={<Generic title="Contact" />} />
      </Routes>
      <Footer />
    </div>
  );
}
