import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'

import NotFound from './NotFound'
import BookDetails from './BookDetails'
import BookEdit from './BookEdit'
import ProfileEdit from './ProfileEdit'
import ProfileDetails from './ProfileDetails'
import ImageUpload from './ImageUpload'
import { ProtectedRoute } from '../utils/auth'

import { Container, AppShell } from '@mantine/core'

export default function App() {
  return (
    <AppShell
      padding='md'
      // navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
      // header={<Header height={60} p="xs"><Navbar/></Header>}
      header={<Navbar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* <Navbar /> */}
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/:bookid' element={<BookDetails />} />
          <Route
            path='/:bookid/edit'
            element={<ProtectedRoute component={BookEdit} />}
          />
          <Route path='/books/add' element={<BookEdit add={true} />} />
          <Route
            path='/:bookid/add'
            element={<ProtectedRoute component={ProfileEdit} />}
          />

          <Route path='/profiles/:profileid' element={<ProfileDetails />} />
          <Route
            path='/profiles/:profileid/edit'
            element={<ProtectedRoute component={ProfileEdit} />}
          />
          <Route
            path='/profiles/:profileid/imageupload'
            element={<ProtectedRoute component={ImageUpload} />}
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Container>
    </AppShell>
  )
}
