import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assests/logo.png"

const Header = () => {
  const [showMenu, setshowMenu] = useState(false)
  const handleshowMenu = () => {
    setshowMenu(preve => !preve)
  }
  return (
    <header className='fixed z-50 w-full h-16 px-2 bg-white shadow-md md:px-4'>
      {/* desktop */}
      <div className='flex items-center justify-between h-full'>
        <Link to={""}>
          <div className='h-12'>
            <img src={logo} className='h-full' alt="can't fetch logo icon" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 text-base md:gap-7 md:text-xl">
            <Link to={""}>Home</Link>
            <Link to={"about"}>About</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"contact"}>Contact us</Link>
          </nav>
          <div className="relative text-2xl cursor-pointer text-slate-700">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="absolute w-4 h-4 p-0 m-0 text-xs text-center text-white bg-red-500 rounded-full -top-1 -right-1">0</div>
          </div>
          <div className="text-xl text-slate-700" onClick={handleshowMenu}>
            <div className="p-0 m-0 text-center border-2 border-solid rounded-full cursor-pointer border-slate-700 h-9 w-9">
              <i className="fa-solid fa-user" ></i>
            </div>
            {
              showMenu && <div className="absolute flex flex-col px-3 py-3 bg-white shadow right-3 drop-shadow-md">
                <Link to={"newproduct"} className="cursor-pointer whitespace-nowrap">New Product</Link>
                <Link to={"signup"} className="cursor-pointer whitespace-nowrap">Sign Up</Link>
                <Link to={"login"} className="cursor-pointer whitespace-nowrap">Login</Link>
              </div>
            }

          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  )
}

export default Header
