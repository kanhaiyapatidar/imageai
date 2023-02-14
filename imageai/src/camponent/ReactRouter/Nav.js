import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='menu-style'>
    <NavLink to={'/search'}>Search</NavLink>
    <NavLink to={'/'}>About Us</NavLink>
       <NavLink to={"/User/kanhaiya/patidar"}>User</NavLink>
       <NavLink to={'/Contact'}>Contact Us</NavLink>
    </div>
    </>
  )
}

export default Nav
