import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'

import NotFound from './NotFound'


import BookDetails from './BookDetails'
import BookEdit from './BookEdit'

import Profile from './Profile'
import ProfileEdit from './ProfileEdit'
import ProfileDetails from './ProfileDetails'




export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />


        <Route path='/BookDetails' element={<BookDetails />} />
        <Route path='/BookEdit' element={<BookEdit />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/ProfileEdit' element={<ProfileEdit />} />
        <Route path='/ProfileDetails' element={<ProfileDetails />} />

        <Route path='/*' element={<NotFound />} />



      </Routes>
    </div>
  )
}
