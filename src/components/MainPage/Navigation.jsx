import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './MainPage.styles'

// components
import SearchInput from './SearchInput'

// actions
import { setSignUp, setLogIn } from '../../redux/actions'

function Navigation() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const showSignUp = useCallback((event) => {
    event.preventDefault()
    dispatch(setSignUp(true))
  }, [])

  const showlogIn = useCallback((event) => {
    event.preventDefault()
    dispatch(setLogIn(true))
  }, [])

  return (
    <nav className={classes.main__page_navi}>
      <div className={classes.main__page_navi_group}>
        <div className={classes.main__page_navi_logo} />
        <SearchInput />
      </div>
      <div className={classes.main__page_navi_login}>
        <div onClick={showlogIn}>Log In</div>
        <div onClick={showSignUp}>Sign Up</div>
      </div>
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
