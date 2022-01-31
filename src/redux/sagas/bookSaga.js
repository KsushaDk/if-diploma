import { call, put, takeLatest } from 'redux-saga/effects'

// actions
import { getAllBooks, setAllBooks } from '../actions'

// requests
import { httpGet } from '../../helpers/request'
import { allBooks } from '../constants/urls'

function* getBooksSaga({ type }) {
  try {
    if (type === getAllBooks.toString()) {
      const books = yield call(httpGet, allBooks)
      const setBooksStatus = () => {
        const status = ['Available', 'Taken']
        books.map((bookItem) => {
          const bookWithStatus = bookItem
          bookWithStatus.status =
            status[Math.floor(Math.random() * status.length)]

          bookWithStatus.rating = Math.floor(1 + Math.random() * (5 + 1 - 1))
          bookWithStatus.user = ''
          return bookWithStatus
        })
        return books
      }
      yield put(setAllBooks(setBooksStatus()))
    }
  } catch (err) {
    console.log('Error:', err.message)
  }
}

function* booksSaga() {
  yield takeLatest(getAllBooks.toString(), getBooksSaga)
}

export default booksSaga
