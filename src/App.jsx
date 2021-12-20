import React, { useEffect } from 'react'
import { Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// actions
import { getAllBooks } from './redux/actions'

// containers
import PublicRoute from './containers/PublicRoute'

// routes
import UserRoutes from './routes/UserRoutes'
// import RouteWrapper from './components/RouteWrapper/RouteWrapper'

// layouts
// import { BgLayout } from './components/Layouts'

// components
import MainPage from './components/MainPage/MainPage'
// import SignUp from './components/SignUp/SignUp'
// import LogIn from './components/LogIn/LogIn'
// import Modal from './components/Modal/Modal'

function App() {
  // in a store password: + sha256(user.password)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  return (
    <Switch>
      <PublicRoute exact path="/">
        <MainPage />
      </PublicRoute>
      {/* <RouteWrapper
        exact
        path="/signup"
        component={SignUp}
        layout={BgLayout}
      />
      <RouteWrapper exact path="/login" component={LogIn} layout={BgLayout} /> */}
      <UserRoutes />
    </Switch>
  )
}

export default App
