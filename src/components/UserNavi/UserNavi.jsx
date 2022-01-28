import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './UserNavi.styles'

// components
import UserInfo from '../UserInfo/UserInfo'
import SearchInput from '../MainPage/SearchInput'

// actions
import { showSettings } from '../../redux/actions'

function UserNavi() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const settingsState = useSelector(({ settings }) => settings.isShown)

  const handleClick = useCallback((event) => {
    event.preventDefault()
    dispatch(showSettings(true))
  }, [])

  return (
    <>
      <nav className={classes.navi}>
        <div className={classes.navi_group}>
          <div className={classes.navi_logo} />
          <SearchInput />
        </div>
        <div className={classes.navi_links}>
          <div>
            <Link to="/books">All books</Link>
          </div>
          <div>
            <Link to="/user">Your orders</Link>
          </div>

          <div className={classes.navi_links_userinfo}>
            <div className={classes.navi_links_user}>
              <a href="#" />
            </div>
            <div className={classes.navi_links_settings} onClick={handleClick}>
              <a href="#" />
            </div>
          </div>
        </div>
      </nav>
      {settingsState && <UserInfo />}
    </>
  )
}

UserNavi.displayName = 'UserNavi'

export default UserNavi
