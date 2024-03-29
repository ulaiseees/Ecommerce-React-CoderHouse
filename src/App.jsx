import { Layout } from './components/layout/Layout';
import ItemListContainer from '../src/components/pages/itemListContainer/ItemListContainer';
// import Counter from './components/common/counter/Counter';
import './App.css'


function App() {
  return (
    <div>
    <Layout>

      <ItemListContainer saludo={"¡Bienvenidos a Pedras Boreales!"}/>

    </Layout>
    </div>
  );
    

}

export default App
