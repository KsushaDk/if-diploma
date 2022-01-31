import { createActions } from 'redux-actions'

export const {
  getAllBooks,
  setAllBooks,
  setSearch,
  addToUserList,
  removeFromUserList,
  // setBookStatus,
  // setBookholder,
} = createActions(
  'GET_ALL_BOOKS',
  'SET_ALL_BOOKS',
  'SET_SEARCH',
  'ADD_TO_USER_LIST',
  'REMOVE_FROM_USER_LIST',
  // 'SET_BOOK_STATUS',
  // 'SET_BOOKHOLDER',
)
