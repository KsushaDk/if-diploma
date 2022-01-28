import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import useStyles from './AllBooks.styles'

// actions
import { addToUserList } from '../../redux/actions'

// components
import RatingBook from './RatingBook'

function BookItem({ book }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const allBooks = useSelector(({ books }) => books.allBooks || [])

  const handleClick = useCallback((id) => {
    const orderedBook = allBooks.find((item) => item.id === `${id}`)
    dispatch(addToUserList(orderedBook))
  }, [])

  return (
    <div className={classes.books__list_item}>
      <div className={classes.books__list_item_img}>
        <Link to={`/books/${book.id}`}>
          <img src={book.imageUrl} alt={book.name} />
        </Link>
      </div>
      <div className={classes.books__list_item_info}>
        <input
          type="button"
          className={classes.books__list_item_status}
          value={`${book.status}`}
        />
        {/* <span>bookholder</span> */}
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
        >
          Order
        </button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.arrayOf.isRequired,
}

BookItem.displayName = 'BookItem'

export default BookItem
