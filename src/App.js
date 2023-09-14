import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CartContainer } from './components/CartContainer';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';



function App() {
  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const {isOpen} = useSelector((state)=> state.modal)
  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <main>
      {isOpen&&<Modal />}
      
      <Navbar />
      <CartContainer />
      
    </main>
  );
}

export default App;
