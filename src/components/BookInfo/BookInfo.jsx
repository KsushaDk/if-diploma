/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useStyles from './BookInfo.styles'

function BookInfo() {
  const classes = useStyles()
  const params = useParams()

  const allBooks = useSelector(({ books }) => books.allBooks || [])
  const bookId = params.id

  const pickedBook = allBooks.find((item) => item.id === `${bookId}`)

  return (
    <div className={classes.book}>
      <div className={classes.book__info}>
        <img
          className={classes.book__info_img}
          src={pickedBook.imageUrl}
          alt={pickedBook.name}
        />

        <div className={classes.book__info_describtion}>
          <div className={classes.book__info_stars} />
          <div className={classes.book__info_common}>
            <h2>{pickedBook.name}</h2>
            <p>{pickedBook.author}</p>
            <span>
              {`${pickedBook.length}, released in ${pickedBook.released}`}
            </span>
          </div>
          <button className={classes.book__info_btn_order} type="button">
            Order
          </button>
          <div className={classes.book__info_about}>
            <h3>About book</h3>
            <p>
              {pickedBook.description.split(/<[^<>]+>/gi).map((p) => (
                <p>{`${p}`} </p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

BookInfo.displayName = 'BookInfo'

export default BookInfo
