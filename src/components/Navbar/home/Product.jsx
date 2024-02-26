
import React from 'react'
import { useNavigate } from 'react-router-dom'
import{ useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addCart = (e) => {
        e.stopPropagation(); 
        dispatch(addToCart({
            id: product?.id,
            title: product?.title,
            image: product?.image,
            quantity: 1, 
            price: product?.price
        }));
    };
    
    

    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className='w-[280px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer shadow-lg '>
            <div className=' price text-2xl font-bold absolute rounded-md top-0 right-0 p-2 m-1'>{product?.price} <span className='text-sm'>$</span></div>
            <img className='w-[160px] h-[200px] object-fill m-auto' src={product?.image} alt="" />
            <div className='text-center px-3 mt-3 text-lg font-bold '>{product?.title}</div>
            <div className="flex justify-center "> 
                <button onClick={(e) => addCart(e)} className='add my-2 border border-stone-700 w-[150px] h-10 flex items-center justify-center rounded-md shadow-lg '>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product