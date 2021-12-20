/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

// components
import UserNavi from '../components/UserNavi/UserNavi'
import Footer from '../components/Footer/Footer'

function PrivateRoute({ children, ...props }) {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <>
      <UserNavi />
      <Route {...props}>{children}</Route>
      <Footer />
    </>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
}

PrivateRoute.displayName = 'PrivateRoute'

export default PrivateRoute
