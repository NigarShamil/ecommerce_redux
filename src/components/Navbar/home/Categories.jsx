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
        <div className=' category w-2/6 bg-stone-500 p-4  '>
            <div className='border-b pb-1  text-2xl font-bold'>Categories</div>
            {categories?.map((category, index) => (
                <div onClick={()=> setCategory(category)} className=' category text-xl  mt-2 cursor-pointer hover:bg-stone-400  rounded-md p-2 ' key={index}>{category}</div>
            ))
            }
        </div>
    )
}
