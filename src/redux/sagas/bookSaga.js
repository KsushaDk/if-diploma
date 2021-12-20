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
      yield put(setAllBooks(books))
    }
  } catch (err) {
    console.log('Error:', err.message)
  }
}

function* booksSaga() {
  yield takeLatest(getAllBooks.toString(), getBooksSaga)
}

export default booksSaga
