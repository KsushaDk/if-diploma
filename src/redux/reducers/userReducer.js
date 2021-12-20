import { handleActions, combineActions } from 'redux-actions'

// actions
import { loginUser, logoutUser, addUser } from '../actions'

// constants
import { initialUserState } from '../constants/initialState'

export const userReducer = handleActions(
  {
    [combineActions(loginUser, logoutUser)]: (
      state,
      { payload: isAuthenticated },
    ) => ({
      ...state,
      isAuthenticated,
    }),
    [addUser]: (state, { payload }) => ({
      ...state,
      username: payload.username,
      birthdate: payload.birthdate,
      email: payload.email,
      password: payload.password,
    }),
  },
  initialUserState,
)
