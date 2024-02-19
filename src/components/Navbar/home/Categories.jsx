import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/categorySlice';

export const Categories = ({setCategory}) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    console.log(categories, "categoires")


    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
            <div className='border-b pb-1  text-xl font-bold'>Categories</div>
            {categories?.map((category, index) => (
                <div onClick={()=> setCategory(category)} className='text-lg mt-1 cursor-pointer hover:bg-gray-200' key={index}>{category}</div>
            ))
            }
        </div>
    )
}
