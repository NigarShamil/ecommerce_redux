
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { AiOutlineClose} from 'react-icons/ai';
import { removeFromCart } from '../../redux/cartSlice';

const MiniCartComp = ({ cart}) => {
    const dispatch = useDispatch()

    return (
        
        <div className='cardList' key={cart.id}>
            <div className='cartContent'>
                <div className='img'>
                    <img src={cart.image} alt='' />
                    <button onClick={() => dispatch(removeFromCart(cart?.id))} className='remove flex justify-center items-center'>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='details'>
                    <p className='text-balance'>{cart?.title}</p>
                    <label htmlFor=''>Unit Price ${cart?.price}</label>
                    

                    <div className='priceCart'>
                        <div className='qty flexCenter'>
                            <div className='items-center text-white'>{cart?.quantity}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniCartComp; 


