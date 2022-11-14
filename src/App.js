import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Company from './pages/company';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}
