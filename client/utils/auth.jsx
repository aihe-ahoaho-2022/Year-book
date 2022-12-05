import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'

export function ProtectedRoute({ component }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>loading...</div>,
  })

  return <Component />
}
