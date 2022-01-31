import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import useStyles from './AllBooks.styles'

// actions
import { setAllBooks } from '../../redux/actions'

// components
import RatingBook from './RatingBook'

function BookItem({ book }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [isDisabled, setDisabled] = useState(false)

  const allBooks = useSelector(({ books }) => books.allBooks || [])
  const userName = useSelector(({ user }) => user.username)

  const handleClick = useCallback((id) => {
    setDisabled(true)

    const orderedBook = allBooks.find((item) => item.id === `${id}`)
    orderedBook.status = 'Taken'
    orderedBook.user = `${userName}`
    const index = allBooks.indexOf(orderedBook)

    allBooks.splice(index, 1, orderedBook)

    console.log(allBooks)

    dispatch(setAllBooks(orderedBook))
  }, [])

  return (
    <div className={classes.books__list_item}>
      <div className={classes.books__list_item_img}>
        <Link to={`/books/${book.id}`}>
          <img src={book.imageUrl} alt={book.name} />
        </Link>
      </div>
      <div className={classes.books__list_item_info}>
        {book.status === 'Available' ? (
          <input
            type="button"
            className={classes.books__list_item_status}
            value={`${book.status}`}
          />
        ) : (
          <input
            type="button"
            className={classes.books__list_item_status_taken}
            value={`${book.status}`}
          />
        )}
        {book.status === 'Taken' && (
          <span>
            Bookholder: &nbsp;
            {book.user === '' ? '***' : `${book.user}`}
          </span>
        )}
        <Link to={`/books/${book.id}`}>
          <div className={classes.books__list_item_about}>
            <p>{book.name}</p>
            <span>
              by &nbsp;
              {book.author}
            </span>
          </div>
        </Link>
        <RatingBook rating={book.rating} />
        <button
          className={classes.books__list_item_btn_order}
          type="button"
          onClick={() => handleClick(book.id)}
          disabled={isDisabled}
        >
          Order
        </button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
}

BookItem.displayName = 'BookItem'

export default BookItem
