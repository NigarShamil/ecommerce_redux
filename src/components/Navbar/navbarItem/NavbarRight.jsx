import React, { useEffect, useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice';
import { MiniCart } from '../../cart/MiniCart';


const NavbarRight = () => {
    const dispatch = useDispatch()
    const [cartOpen, setCartOpen] = useState(false);
    const { itemCount } = useSelector(state => state.carts)

    const toggleCart = () => {
        setCartOpen(prevState => !prevState);
    };

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div className='navbar_right flex items-center gap-8 '>
            <div className=' search flex items-center border p-2 rounded-full bg-gray-200'>
                <input className=' search-input bg-gray-200 outline-none' type="text" placeholder='Search products...' />
                <BiSearch className='icons' size={20} />
            </div>
            <AiOutlineHeart className='like-icon cursor-pointer' size={25} />
            <div onClick={() => toggleCart()} className='relative cartIcon'>
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                <SlBasket size={25} className=' icons cursor-pointer' />
            </div>
            <MiniCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        </div>
    )
}

export default NavbarRight