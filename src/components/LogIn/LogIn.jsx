import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './LogIn.styles'

// actions
import { loginUser } from '../../redux/actions'

function LogIn() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const userState = useSelector(({ user }) => user)

  const [state, setState] = useState({
    username: '',
    password: '',
  })

  const [warning, showWarning] = useState(false)

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
      if (userState.username === state.username) {
        if (userState.password === state.password) {
          dispatch(loginUser(true))
        } else {
          showWarning(true)
          setState({ ...state, password: '' })
        }
      }
    },
    [state, dispatch, userState],
  )

  return (
    <div className={classes.login}>
      <h2 className={classes.login__title}>Log In to Fox Library</h2>
      <form className={classes.login__form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={state.username}
            onChange={handleChange('username')}
            required
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
            required
          />
        </div>
        <div>
          <button className={classes.login__form_btn} type="submit">
            Log In
          </button>
          {warning && (
            <div className={classes.warning}>
              Password is incorrect. Please try again.
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

LogIn.displayName = 'LogIn'

export default LogIn
