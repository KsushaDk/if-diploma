import { handleActions } from 'redux-actions'

// actions
import { showSettings } from '../actions'

// constants
import { initialSettingsState } from '../constants/initialState'

export const settingsReducer = handleActions(
  {
    [showSettings]: (state, { payload: isShown }) => ({
      ...state,
      isShown,
    }),
  },
  initialSettingsState,
)
