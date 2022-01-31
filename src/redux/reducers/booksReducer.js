import { handleActions } from 'redux-actions'

// actions
import {
  setAllBooks,
  setSearch,
  // addToUserList,
  removeFromUserList,
  // setBookholder,
  // setBookStatus,
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
    // [addToUserList]: (state, { payload: book }) => ({
    //   ...state,
    //   userList: [...state.userList, book],
    // }),
    [removeFromUserList]: (state, { payload: book }) => ({
      ...state,
      userList: state.userList.filter((item) => item.id !== book.id),
    }),
  },
  initialBooksState,
)

// [setBookholder]: (state, { payload: username }) => {
//     ...state,
//     allBooks: [
//       ...state.allBooks.concat(
//         state.allBooks.filter((item) => item.id === book.id).status = status,
//       ),
//     ],
//   }
// },
// [setBookStatus]: (state, { payload: book }) => {
//   console.log(book)
//   // eslint-disable-next-line no-return-assign
//   return {
//     ...state,
//     allBooks: [
//       ...state.allBooks.concat(
//         // eslint-disable-next-line no-param-reassign
//         (state.allBooks.find((item) => item.id === book.id).status =
//           'Taken'),
//       ),
//     ],
//   }
// },
