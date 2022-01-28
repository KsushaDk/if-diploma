import { createActions } from 'redux-actions'

export const { setLogIn, setSignUp } = createActions(
  'SET_LOG_IN',
  'SET_SIGN_UP',
)
