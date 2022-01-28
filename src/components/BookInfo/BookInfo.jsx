/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useStyles from './BookInfo.styles'

// components
import RatingBook from '../AllBooks/RatingBook'

function BookInfo() {
  const classes = useStyles()
  const params = useParams()

  const allBooks = useSelector(({ books }) => books.allBooks || [])
  const bookId = params.id

  const pickedBook = allBooks.find((item) => item.id === `${bookId}`)

  const aboutBook = pickedBook.description.split(/<[^<>]+>/gi)

  const [isShown, setShown] = useState(false)

  const pQuantity = isShown ? aboutBook.length : 6

  return (
    <div className={classes.book}>
      <div className={classes.book__info}>
        <img
          className={classes.book__info_img}
          src={pickedBook.imageUrl}
          alt={pickedBook.name}
        />

        <div className={classes.book__info_describtion}>
          <RatingBook rating={pickedBook.rating} />
          <div className={classes.book__info_common}>
            <h4>{pickedBook.name}</h4>
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
              {aboutBook.slice(0, pQuantity).map((p) => (
                <p>{`${p}`} &nbsp;</p>
              ))}
            </p>
          </div>
          {!isShown && (
            <button
              className={classes.btn__show_more}
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
    </div>
  )
}

BookInfo.displayName = 'BookInfo'

export default BookInfo
