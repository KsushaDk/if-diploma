import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useStyles from '../AllBooks/AllBooks.styles'

// components
import RatingBook from '../AllBooks/RatingBook'

function SearchedBooks() {
  const classes = useStyles()

  const allBooks = useSelector(({ books }) => books.allBooks || [])
  const search = useSelector(({ books }) => books.search)

  const searchedBooks = allBooks.filter(
    (item) =>
      item.name.toLowerCase().includes(`${search}`) ||
      item.author.toLowerCase().includes(`${search}`),
  )

  return (
    <div className={classes.books}>
      {searchedBooks.length === 0 ? (
        <h3 className={classes.books__list_title}>
          Sorry, we don&apos;t find anything
        </h3>
      ) : (
        <div className={classes.books__list}>
          <div className={classes.books__list_items}>
            {searchedBooks.map((book) => (
              <div className={classes.books__list_item} key={book.id}>
                <div className={classes.books__list_item_img}>
                  <Link to={`/books/${book.id}`}>
                    <img src={book.imageUrl} alt={book.name} />
                  </Link>
                </div>
                <div className={classes.books__list_item_info}>
                  <button
                    className={classes.books__list_item_status}
                    type="button"
                  >
                    {book.status}
                  </button>
                  <div className={classes.books__list_item_about}>
                    <p>{book.name}</p>
                    <span>
                      by &nbsp;
                      {book.author}
                    </span>
                  </div>
                  <RatingBook rating={book.rating} />
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
          {searchedBooks.length > 4 && (
            <button className={classes.books__list_btn} type="button">
              Show more
            </button>
          )}
        </div>
      )}
    </div>
  )
}

SearchedBooks.displayName = 'SearchedBooks'

export default SearchedBooks
