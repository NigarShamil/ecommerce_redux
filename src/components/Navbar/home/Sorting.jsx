import React from 'react'
import { IoPricetags } from "react-icons/io5";

const Sorting = ({ setSort }) => {
  return (
    <div className='bg-gray-100 my-5 p-3 flex flex-items justify-end'>
      <select onChange={e => setSort(e.target.value)} className='bg-white p-2 px-4' name="" id="">
        <option disabled value="">Choose</option>
        <option value="inc">higher </option>
        <option value="dec">lower </option>
      </select>
    </div>
  )
}

export default Sorting