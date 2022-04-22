import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Products from './pages/Products'
import Header from './components/Header'
import Home from './pages/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
