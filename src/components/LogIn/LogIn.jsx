import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useStyles from './LogIn.styles'

// actions
import { loginUser, setLogIn } from '../../redux/actions'

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
          dispatch(setLogIn(false))
        } else {
          showWarning(true)
          setState({ ...state, password: '' })
        }
      }
    },
    [state, dispatch, userState],
  )

  const closeLogIn = useCallback((event) => {
    event.preventDefault()
    dispatch(setLogIn(false))
  }, [])

  return (
    <div className={classes.login}>
      <div className={classes.login__field}>
        <div className={classes.close} onClick={closeLogIn} />
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
              <Link to="/books">Log In</Link>
            </button>
            {warning && (
              <div className={classes.warning}>
                Password is incorrect. Please try again.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

LogIn.displayName = 'LogIn'

export default LogIn
