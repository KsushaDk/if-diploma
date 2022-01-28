import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './UserInfo.styles'

// actions
import { showSettings, logoutUser } from '../../redux/actions'

function UserInfo() {
  const classes = useStyles()
  const userName = useSelector(({ user }) => user.username)

  const dispatch = useDispatch()

  const handleClick = useCallback((event) => {
    event.preventDefault()
    dispatch(showSettings(false))
  }, [])

  const logoutFunc = useCallback((event) => {
    event.preventDefault()
    dispatch(logoutUser(false))
    dispatch(showSettings(false))
  }, [])

  return (
    <div>
      <div className={classes.user__info}>
        <div className={classes.user__info_name}>{`${userName}`}</div>
        <div>
          <div className={classes.user__info_settings} onClick={handleClick}>
            <Link to="/settings">Settings</Link>
          </div>
          <div className={classes.user__info_orders} onClick={handleClick}>
            <Link to="/user">My orders</Link>
          </div>
        </div>
        <button
          type="button"
          className={classes.user__info_logout}
          onClick={logoutFunc}
        >
          <Link to="/">Log out</Link>
        </button>
      </div>
    </div>
  )
}

UserInfo.displayName = 'UserInfo'

export default UserInfo
