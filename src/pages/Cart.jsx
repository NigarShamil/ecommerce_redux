import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'


const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

  console.log(carts, totalAmount, itemCount, 'carts');

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>
      <div className=''>
        <div className='text-4xl font-bold py-2'>Shopping Cart</div>
        {
          carts?.length > 0 ? (
            <div>
              {
                carts.map((cart, index) => (
                  <CartComp key={index} cart={cart} />
                ))
              }
              <div className='flex items-center justify-end text-xl'>Total Price: <span className='font-bold text-2xl ml-2'>{totalAmount} $</span></div>
            </div>
          ) : (
            <div>
              Cart is empty...
            </div>
          )
        }
        <div className='checkout border w-[500px] h-[480px] p-5 bg-gray-100 flex flex-col justify-center'>
          <div className='p-3 mb-2 border-b text-2xl font-bold my-4'>Summary</div>
          <div className='p-4 text-2xl'>Items {itemCount} </div>
          <div className='flex flex-col p-4'>
            <label className='text-xl'>Shipping</label>
            <select name="shipping" id="shipping" className='h-10 border p-2'>
              <option value="delivery">Standard-Delivery- $5.00</option>
              <option value="delivery">Two</option>
              <option value="delivery">Three</option>
              <option value="delivery">Four</option>
            </select>
          </div>
          <div className='flex flex-col w-[200px] p-4'>
            <label className='text-xl'>Give Code</label>
            <input type="text" placeholder='Enter your code' className='h-10 border p-2 ' />
          </div>
          <div className='text-2xl p-4 font-bold'>Total Price {totalAmount} $</div>
          <div className='p-4'>
            <div className='border bg-black p-2 w-[200px] shadow-lg text-white rounded text-center '> Register</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart