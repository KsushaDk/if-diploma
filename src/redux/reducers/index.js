import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducers
import { userReducer } from './userReducer'
import { settingsReducer } from './settingsReducer'
import { booksReducer } from './booksReducer'

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  settings: settingsReducer,
})

export default persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
)
