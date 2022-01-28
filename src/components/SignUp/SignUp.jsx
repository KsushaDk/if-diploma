import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useStyles from './SignUp.styles'

// actions
import { addUser, setLogIn, setSignUp } from '../../redux/actions'

function SignUp() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    username: '',
    birthdate: '',
    email: '',
    password: '',
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
      dispatch(addUser(state))
      dispatch(setSignUp(false))
      dispatch(setLogIn(true))
    },
    [state, dispatch],
  )

  const closeSignUp = useCallback((event) => {
    event.preventDefault()
    dispatch(setSignUp(false))
  }, [])

  return (
    <div className={classes.signup}>
      <div className={classes.signup__field}>
        <div className={classes.close} onClick={closeSignUp} />
        <h2 className={classes.signup__title}>Welcome to Fox Library</h2>
        <form className={classes.signup__form} onSubmit={handleSubmit}>
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
            <label htmlFor="birthdate">Your birthdate</label>
            <input
              type="birthdate"
              id="birthdate"
              name="birthdate"
              value={state.birthdate}
              onChange={handleChange('birthdate')}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange('email')}
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
            <button className={classes.signup__form_btn} type="submit">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

SignUp.displayName = 'SignUp'

export default SignUp
