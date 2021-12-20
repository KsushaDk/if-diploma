import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './MainPage.styles'

// components
import SearchInput from './SearchInput'

function Navigation() {
  const classes = useStyles()

  return (
    <nav className={classes.main__page_navi}>
      <div className={classes.main__page_navi_group}>
        <div className={classes.main__page_navi_logo} />
        <SearchInput />
      </div>
      <div className={classes.main__page_navi_login}>
        <div>
          <Link to="/login">Log In</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
