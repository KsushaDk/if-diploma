import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './MainPage.styles'

// components
import Navigation from './Navigation'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'

// actions
import { setSignUp } from '../../redux/actions'

function MainPage() {
  const classes = useStyles()
  const signUp = useSelector(({ registration }) => registration.signUp)
  const logIn = useSelector(({ registration }) => registration.logIn)

  const dispatch = useDispatch()

  const showSignUp = useCallback((event) => {
    event.preventDefault()
    dispatch(setSignUp(true))
  }, [])

  return (
    <div className={classes.main__page}>
      <Navigation />
      <div className={classes.main__page_content}>
        <div>
          <h1 className={classes.main__page_content_title}>
            BIld your library
          </h1>
          <p className={classes.main__page_content_p}>
            Over 400.000 books
            <br />
            from fiction to the
            <br />
            business literature
          </p>
          <button
            type="button"
            className={classes.main__page_content_btn}
            onClick={showSignUp}
          >
            Let’s start
          </button>
        </div>
        <div className={classes.main__page_content_picture} />
      </div>
      {signUp && <SignUp />}
      {logIn && <LogIn />}
    </div>
  )
}

MainPage.displayName = 'MainPage'

export default MainPage
