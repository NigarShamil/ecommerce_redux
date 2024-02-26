
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';


export const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)

    const decrement = () => {
        if (quantity > 0)
            setQuantity(quantity - 1)
    }

    const increment = () => {
        if (quantity < productDetail?.rating?.count)
            setQuantity(quantity + 1)
    }

    const addCart = () => {
        dispatch(addToCart({ id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, quantity: quantity, price: productDetail?.price }))
    }

    return (
        <div className='flex gap-10 my-10'>
            <img className='w-[400px] h-[400px] object-cover' src={productDetail?.image} alt="" />
            <div className=''>
                <div className='text-3xl font-bold'>{productDetail?.title}</div>
                <div className='my-2'>{productDetail?.description}</div>
                <div className='my-2 text-xl text-red-500'>Raiting :{productDetail?.rating?.rate}</div>
                <div className='my-2 text-xl text-red-500'>Count :{productDetail?.rating?.count}</div>
                <div className='my-2 text-4xl font-bold'>{productDetail?.price} <span className='text-lg'>$</span></div>
                <div className='flex items-center gap-5 my-5 '>
                    <div onClick={decrement} className='text-4xl cursor-pointer border px-2'>-</div>
                    <input className='w-5 text-center text-3xl font-bold' type="text" value={quantity} />
                    <div onClick={increment} className='text-4xl cursor-pointer border px-2'>+</div>
                </div>
                <div onClick={addCart} className=' my-4 border w-[200px] h-16 flex items-center justify-center text-2xl rounded-md bg-gray-200 cursor-pointer  '>Add to Cart</div>
            </div>
        </div>
    )
}
