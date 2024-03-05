import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose } from "react-icons/ai"
import MiniCartComp from './MiniCartComp'
import { getCartTotal } from '../../redux/cartSlice'

export const MiniCart = ({cartOpen, setCartOpen}) => {
  // const [cartOpen, setCartOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { carts, totalAmount, itemCount } = useSelector(state => state.carts)


  console.log(carts, totalAmount, itemCount, 'carts');

  const closeCart = () => {
    setCartOpen(false)
  }

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className='cart'>
      <div className={cartOpen ? "cartItem" : "cardhide"}>
        <div className='title flex'>
          {/* <h2>Shopping Cart</h2> */}
          <button onClick={closeCart}>
            <AiOutlineClose className='icon' />
          </button>
        </div>
        {
          carts?.length > 0 ? (
            <div>
              {
                carts.map((cart, index) => (
                  <MiniCartComp key={index} cart={cart} />
                ))
              }
              <div className='priceTitle flex items-center justify-end text-xl'>Total Price: <span className='font-bold text-2xl ml-2'>{totalAmount} $</span></div>
            </div>
          ) : (
            <div>
              Cart is empty...
            </div>
          )
        }
        <div className=" flex justify-center mt-4 absolute ">
          <div className=' view border p-2 bg-stone-200 w-[360px] text-center  cursor-pointer  rounded' onClick={() => navigate('cart')}>View</div>
        </div>
      </div>


    </div>
  );
}

