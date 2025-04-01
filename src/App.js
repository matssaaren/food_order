import Header from './components/Header';
import Meals from './components/Meals';
import {CartContext} from './store/CartContext';

import { useState } from 'react';


const App = () => {

  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
     <Header />
     <Meals />
    </CartContext.Provider>
  );
}

export default App;
