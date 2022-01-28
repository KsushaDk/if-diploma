import { handleActions } from 'redux-actions'

// actions
import { setSignUp, setLogIn } from '../actions'

// constants
import { initialRegistrationState } from '../constants/initialState'

export const registrationReducer = handleActions(
  {
    [setSignUp]: (state, { payload: signUp }) => ({
      ...state,
      signUp,
    }),
    [setLogIn]: (state, { payload: logIn }) => ({
      ...state,
      logIn,
    }),
  },
  initialRegistrationState,
)
