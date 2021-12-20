import { handleActions } from 'redux-actions'

// actions
import { setAllBooks, setSearch } from '../actions'

// constants
import { initialBooksState } from '../constants/initialState'

export const booksReducer = handleActions(
  {
    [setAllBooks]: (state, { payload: allBooks }) => ({
      ...state,
      allBooks,
    }),
    [setSearch]: (state, { payload: search }) => ({
      ...state,
      search,
    }),
    // [addToUserList]: (state, { payload: name }) => ({
    //   ...state,
    //   userList: name,
    // }),
  },
  initialBooksState,
)
