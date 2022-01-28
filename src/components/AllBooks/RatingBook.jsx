import React from 'react'
import PropTypes from 'prop-types'
import useStyles from './AllBooks.styles'

function RatingBook({ rating }) {
  const classes = useStyles()

  const ratingBook = []

  for (let i = 0; i < rating; i += 1) {
    ratingBook.push(<div key={i} className={classes.books__list_item_star} />)
  }

  return <div className={classes.books__list_item_stars}>{ratingBook}</div>
}

RatingBook.propTypes = {
  rating: PropTypes.number.isRequired,
}

RatingBook.displayName = 'RatingBook'

export default RatingBook
