import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import useStyles from './AllBooks.styles'

// components
import BookItem from './BookItem'

function AllBooks() {
  const classes = useStyles()

  const allBooks = useSelector(({ books }) => books.allBooks || [])

  const [isShown, setShown] = useState(false)

  const numberQuantity = isShown ? allBooks.length : 4

  return (
    <div className={classes.books}>
      <div className={classes.books__list}>
        <h3 className={classes.books__list_title}>All books</h3>
        <div className={classes.books__list_items}>
          {allBooks.slice(0, numberQuantity).map((book) => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
        {!isShown && (
          <button
            className={classes.books__list_btn_show}
            type="button"
            onClick={() => {
              // eslint-disable-next-line no-shadow
              setShown((isShown) => !isShown)
            }}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  )
}

AllBooks.displayName = 'AllBooks'

export default AllBooks
