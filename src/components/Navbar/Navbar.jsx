import React, { useState } from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'
import { MiniCart } from '../cart/MiniCart';



const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft />
      <NavbarRight setCartOpen={setCartOpen} />
      <MiniCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </div>
  )
}

export default Navbar