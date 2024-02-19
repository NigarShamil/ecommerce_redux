import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-3 p-5 flex flex-items justify-end'>
        <select onChange={e => setSort(e.target.value)} className='bg-white p-3 px-5' name="" id="">
            <option disabled value="">Choose</option>
            <option value="inc">INC</option>
            <option value="dec">DEC</option>
        </select>
    </div>
  )
}

export default Sorting