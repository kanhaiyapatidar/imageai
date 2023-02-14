import React from 'react'
import About from './About'
import Contact from './Contact'
import User from './User';
import Nav from './Nav';
import "./Routers.css"
import {BrowserRouter as Router, Link, Switch, Route, Routes,} from 'react-router-dom';
import Search from './Search';
 


const Routers = () => {
  return (
    <>
    <Nav/>
    <Routes>
    <Route path='/search' element={<Search/>} />
        <Route path='/' element={<About/>} />
        <Route path='/User/:name/:lname' element={<User/>} />
        <Route path='/Contact' element={<Contact/>} />
     
    </Routes>
    </>
  )
}

export default Routers
