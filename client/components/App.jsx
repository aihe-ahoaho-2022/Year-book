import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Play from './Play'
import Final from './Final'
import Winner from './Winner'
import Results from './Results'
import Create from './Create'
import NotFound from './NotFound'

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/play/final/:id' element={<Final />} />
        <Route path='/play/winner' element={<Winner />} />
        <Route path='/results' element={<Results />} />
        <Route path='/create' element={<Create />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
