import ItemListContainer from '../src/components/pages/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from './components/pages/cart/CartContainer';
import ItemDetailContainer from './components/pages/itemDetail/ItemDetailContainer';
// import Counter from './components/common/counter/Counter';
import './App.css'
import { Layout } from './components/layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route element={<Layout />}>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:name' element={<ItemListContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>
          <Route path='/itemDetail/:id' element={<ItemDetailContainer />}/>

          <Route path='*' element={<h1>Error 404!</h1>}/>
        </Route>




      </Routes>
      </BrowserRouter>
  );
    

}

export default App
