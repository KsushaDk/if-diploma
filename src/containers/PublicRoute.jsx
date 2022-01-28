/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { PropTypes } from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { useSelector } from 'react-redux'

// components
import Footer from '../components/Footer/Footer'

function PublicRoute({ children, ...props }) {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect to="/user" />
  }

  return (
    <>
      <Route {...props}>{children}</Route>
      <Footer />
    </>
  )
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.array,
  ]),
}

PublicRoute.displayName = 'PublicRoute'

export default PublicRoute
