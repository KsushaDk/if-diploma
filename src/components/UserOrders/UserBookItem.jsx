import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import useStyles from './UserOrders.styles'

// actions
import { removeFromUserList } from '../../redux/actions'

// components
import RatingBook from '../AllBooks/RatingBook'

function UserBookItem({ book }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  console.log(book.rating)

  const allBooks = useSelector(({ books }) => books.allBooks || [])

  const handleClick = useCallback((id) => {
    const orderedBook = allBooks.find((item) => item.id === `${id}`)
    dispatch(removeFromUserList(orderedBook))
  }, [])

  return (
    <div className={classes.user__list_item}>
      <div className={classes.user__list_item_img}>
        <Link to={`/books/${book.id}`}>
          <img src={book.imageUrl} alt={book.name} />
        </Link>
      </div>
      <p className={classes.user__list_item_info}>
        <Link to={`/books/${book.id}`}>
          {book.name}
          &nbsp;by&nbsp;
          {book.author}
        </Link>
      </p>
      <RatingBook rating={book.rating} />
      <button
        className={classes.user__list_item_btn_return}
        type="button"
        onClick={() => handleClick(book.id)}
      >
        Return
      </button>
    </div>
  )
}

UserBookItem.propTypes = {
  book: PropTypes.arrayOf.isRequired,
}

UserBookItem.displayName = 'UserBookItem'

export default UserBookItem
