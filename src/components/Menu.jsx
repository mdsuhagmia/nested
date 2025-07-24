import React from 'react'
import Container from './Container'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className='bg-blue-500 py-2'>
      <Container>
        <div className='flex justify-between items-center'>
          <div><h1 className='text-white text-4xl font-bold font-mono'>Suhag</h1></div>
          <div>
            <ul className='flex gap-6 text-xl font-semibold font-sans'>
              <li>
                <NavLink to={"/"} className={({isActive})=>isActive ? "text-white border-b-2 border-amber-500 transition-all" : "text-white hover:text-yellow-200"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={({isActive})=>isActive ? "text-white border-b-2 border-amber-500 transition-all" : "text-white hover:text-yellow-200"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/service"} className={({isActive})=>isActive ? "text-white border-b-2 border-amber-500 transition-all" : "text-white hover:text-yellow-200"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={({isActive})=>isActive ? "text-white border-b-2 border-amber-500 transition-all" : "text-white hover:text-yellow-200"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Menu