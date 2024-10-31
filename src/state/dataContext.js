import { createContext } from 'react';

/**
 * It's a promise/interface
 * a description if the data structure
 * but not implementation
 */
const DataContext = createContext({
  cart: [],
  user: {}, 

  addToCart: () => {},
  removeFronCart: () => {},
  clearCart: () => {}
});

export default DataContext;



