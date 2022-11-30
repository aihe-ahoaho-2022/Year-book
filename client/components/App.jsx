import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'

import NotFound from './NotFound'

import BookDetails from './BookDetails'
import BookEdit from './BookEdit'

import ProfileEdit from './ProfileEdit'
import ProfileDetails from './ProfileDetails'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/:bookid' element={<BookDetails />} />
        <Route path='/:bookid/edit' element={<BookEdit />} />
        <Route path='/:bookid/:profileid/edit' element={<ProfileEdit />} />
        <Route path='/:bookid/:profileid' element={<ProfileDetails />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
