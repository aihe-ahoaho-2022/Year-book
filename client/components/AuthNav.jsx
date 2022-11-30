import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function AuthNav() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleLogin = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <div className='auth-ribbon'>
      <IfNotAuthenticated>
        <button onClick={handleLogin} className='button-small'>
          Log in
        </button>
      </IfNotAuthenticated>

      <IfAuthenticated>
        <div className='user-name'>User: {user?.nickname}</div>
        <button onClick={handleLogOff} className='button-small'>
          Log off
        </button>
      </IfAuthenticated>
    </div>
  )
}

export default AuthNav
