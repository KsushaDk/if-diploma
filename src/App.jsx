import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// actions
import { getAllBooks } from './redux/actions'

// containers
import PublicRoute from './containers/PublicRoute'

// routes
import UserRoutes from './routes/UserRoutes'

// components
import MainPage from './components/MainPage/MainPage'

function App() {
  // in a store password: + sha256(user.password)
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated === false) {
      dispatch(getAllBooks())
    }
  }, [])

  return (
    <Switch>
      <PublicRoute exact path="/">
        <MainPage />
      </PublicRoute>
      <UserRoutes />
    </Switch>
  )
}

export default App
