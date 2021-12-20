import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useStyles from './AllBooks.styles'

function AllBooks() {
  const classes = useStyles()

  const allBooks = useSelector(({ books }) => books.allBooks || [])

  return (
    <div className={classes.books}>
      <div className={classes.books__list}>
        <h3 className={classes.books__list_title}>All books</h3>
        <div className={classes.books__list_items}>
          {allBooks.map((book) => (
            <div className={classes.books__list_item} key={book.id}>
              <div className={classes.books__list_item_img}>
                <Link to={`/books/${book.id}`}>
                  <img src={book.imageUrl} alt={book.name} />
                </Link>
              </div>
              <div className={classes.books__list_item_info}>
                <input
                  type="button"
                  className={classes.books__list_item_status}
                  value="Available"
                />
                <Link to={`/books/${book.id}`}>
                  <div className={classes.books__list_item_about}>
                    <p>{book.name}</p>
                    <span>
                      by
                      {book.author}
                    </span>
                  </div>
                </Link>
                <div className={classes.books__list_item_stars} />
                <button
                  className={classes.books__list_item_btn_order}
                  type="button"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className={classes.books__list_btn} type="button">
          Show more
        </button>
      </div>
    </div>
  )
}

AllBooks.displayName = 'AllBooks'

export default AllBooks
