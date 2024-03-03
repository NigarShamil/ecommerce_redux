import React from 'react'


const Sorting = ({ setSort }) => {
  return (
    <div className=' bg-gray-100 my-5 p-3 flex flex-items justify-end '>
      <select onChange={e => setSort(e.target.value)} className='sort bg-white p-2 px-4 cursor-pointer' name="" id="">
        <option disabled value="">Choose</option>
        <option value="inc">lower </option>
        <option value="dec">higher </option>
      </select>
    </div>
  )
}

export default Sorting