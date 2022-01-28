import { handleActions } from 'redux-actions'

// actions
import {
  setAllBooks,
  setSearch,
  addToUserList,
  removeFromUserList,
} from '../actions'

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
    [addToUserList]: (state, { payload: book }) => ({
      ...state,
      userList: [...state.userList, book],
    }),
    [removeFromUserList]: (state, { payload: book }) => ({
      ...state,
      userList: state.userList.filter((item) => item.id !== book.id),
    }),
  },
  initialBooksState,
)
