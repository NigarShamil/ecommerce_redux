import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { CiCircleRemove } from "react-icons/ci";

const CartComp = ({ cart }) => {
    const dispatch = useDispatch()
    return (
        <div className='my-6 flex items-center justify-between border-t p-2'>
            <img className='w-[150px] h-[150px] object-fill' src={cart?.image} alt="" />
            <div className='w-[400px] '>
                <div className='text-lg'>{cart?.title}</div>
                <div>{cart?.descroption}</div>
            </div>
            
            <div className='font-bold text-2xl'>{cart?.price} $</div>
            <div className='font-bold text-xl'> {cart?.quantity}</div>
            
            <div onClick={() => dispatch(removeFromCart(cart?.id))} className='text-red-500  cursor-pointer '><CiCircleRemove className='w-6 h-6' /></div>
        </div>
    )
}

export default CartComp