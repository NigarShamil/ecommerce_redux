import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate('/')} className=' logo text-6xl cursor-pointer font-bold '>ShopFast</div>
  )
}

export default NavbarLeft