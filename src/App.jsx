import './App.css'
import ItemListContainer from '../src/components/pages/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from './components/pages/cart/CartContainer';
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer';
import { Layout } from './components/layout/Layout';
import {Checkout} from './components/pages/checkout/Checkout';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider >
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:name' element={<ItemListContainer />}/>
          <Route path='/itemDetail/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>Error 404!</h1>}/>
        </Route>
      </Routes>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App