import React, { useEffect } from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice';


const NavbarRight = ({setCartOpen}) => {
    const dispatch = useDispatch()
    const { itemCount } = useSelector(state => state.carts)

    const toggleCart = () => {
        setCartOpen(prevState => !prevState); 
    };
   
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div className='flex items-center gap-8 '>
            <div className='flex items-center border p-2 rounded-full bg-gray-200'>
                <input className='bg-gray-200 outline-none' type="text" placeholder='Search products...' />
                <BiSearch size={20} />
            </div>
            <AiOutlineHeart size={25} />
            <div onClick={() => toggleCart()} className='relative'>
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                <SlBasket size={25} className='cursor-pointer' />
            </div>
        </div>
    )
}

export default NavbarRight