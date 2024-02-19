import React, { useState } from 'react'
import { SliderComp } from '../components/Navbar/home/SliderComp'
import Sorting from '../components/Navbar/home/Sorting'
import { Categories } from '../components/Navbar/home/Categories'
import { Products } from '../components/Navbar/home/Products'

const Home = () => {
  const [sort , setSort] =useState('');
  const [category, setCategory]= useState('')


  
  return (
    <div>
        <SliderComp/>
        <Sorting setSort={setSort}/>
        <div className='flex'>
          <Categories setCategory={setCategory}/>
          <Products category={category} sort={sort}/>
        </div>
    </div>
  )
}

export default Home