import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/')} className='text-6xl cursor-pointer '>ShopFast</div>
  )
}

export default NavbarLeft