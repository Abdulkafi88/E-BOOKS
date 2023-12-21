import React from "react";
import { useState } from "react";
import Logo from "../img/logo.png";
import Drop from './Drop'
import Search from './Search'
import Books from "./Books";
import {Link} from 'react-router-dom'

const Nav = ({handleSearch,}) => {
    const [open,setOpen] = useState(false)
    const [cart , setCart ] = useState(0)
    const handleDrop = (e)=>{
        setOpen(!open)
    }
    const closeDrop = (e)=>{
      setOpen(false)
    }
  const addToCart=()=>{
    setCart(pev => pev+1)
  }
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <a className="flex items-center" href="#">
            <img className="mr-3 h-10" src={Logo} alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Link to={""}>CodeBook</Link>
            </span>
          </a>
          <div className="flex items-center relative" >
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected" ></span>
            <span
              onClick={handleSearch}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <a className="text-gray-700 dark:text-white mr-5" href="#" >
              <span class="text-2xl bi bi-cart-fill relative"  >
                <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full " > 
                0
                </span>
               
              </span>
            </a>
          
            <span
              onClick={handleDrop}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {/* {open && <Drop closeDrop={closeDrop} />} */}
            {open && <Drop  closeDrop={closeDrop} />}
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Nav;
