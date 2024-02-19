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
        </div>
      );
}

export default Cart