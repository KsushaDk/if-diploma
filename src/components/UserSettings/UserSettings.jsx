import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './UserSettings.styles'

// actions
import { addUser } from '../../redux/actions'

function UserSettings() {
  const classes = useStyles()
  const userState = useSelector(({ user }) => user)

  const [warning, showWarning] = useState(false)

  const dispatch = useDispatch()

  const [state, setState] = useState({
    username: userState.username,
    birthdate: userState.birthdate,
    email: userState.email,
    password: '',
    newpassword: '',
  })

  const handleChange = useCallback(
    (key) => (event) => {
      event.preventDefault()
      setState((prevState) => ({ ...prevState, [key]: event.target.value }))
    },
    [],
  )

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      if (userState.password === state.password) {
        setState({ ...state, password: state.newpassword })
      } else {
        showWarning(true)
        setState({ ...state, password: '', newpassword: '' })
      }
    },
    [state, dispatch],
  )

  useEffect(() => {
    if (state.password === state.newpassword && state.password !== '') {
      dispatch(addUser(state))
      setState({ ...state, password: '', newpassword: '' })
      showWarning(false)
      // alert('We saved your new password :)')
    }
  }, [state])

  return (
    <div className={classes.settings}>
      <div className={classes.settings__info}>
        <h3 className={classes.settings__info_title}>Settings</h3>
        <div className={classes.settings__info_photo}>
          <div className={classes.settings__info_photo_user} />
          <div>
            <button className={classes.settings__info_photo_btn} type="button">
              <a href="#">Change photo</a>
            </button>
          </div>
        </div>
        <form className={classes.settings__info_form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder={userState.username}
              value={state.username}
              onChange={handleChange('username')}
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate</label>
            <input
              type="birthdate"
              id="birthdate"
              name="birthdate"
              placeholder={userState.birthdate}
              value={state.birthdate}
              onChange={handleChange('birthdate')}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={userState.email}
              value={state.email}
              onChange={handleChange('email')}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handleChange('password')}
            />
          </div>
          <div>
            <label htmlFor="newpassword">New password</label>
            <input
              type="password"
              id="newpassword"
              name="newpassword"
              value={state.newpassword}
              onChange={handleChange('newpassword')}
            />
          </div>
          {/* //убрать предупреждение после изменения пароля */}
          <button className={classes.settings__info_form_btn} type="submit">
            Save
          </button>
          {warning && (
            <div className={classes.warning}>
              Password is incorrect. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

UserSettings.displayName = 'UserSettings'

export default UserSettings
