import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CartContainer } from './components/CartContainer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/CartSlice';



function App() {
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
      
    </main>
  );
}

export default App;
