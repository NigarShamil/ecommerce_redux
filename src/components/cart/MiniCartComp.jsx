
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { removeFromCart } from '../../redux/cartSlice';

const MiniCartComp = ({ cart, productDetail }) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        if (quantity < productDetail?.rating?.count) {
            setQuantity(quantity + 1);
        }
    };

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
                            <button className='plus' onClick={increment}>
                                <AiOutlinePlus />
                            </button>
                            <button className='num'>{quantity}</button>
                            <button className='minus' onClick={decrement}>
                                <AiOutlineMinus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniCartComp; 


