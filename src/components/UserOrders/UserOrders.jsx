import React from 'react'
import { useSelector } from 'react-redux'
import useStyles from './UserOrders.styles'

// components
import UserBookItem from './UserBookItem'

function UserOrders() {
  const classes = useStyles()

  const userName = useSelector(({ user }) => user.username)
  const allBooks = useSelector(({ books }) => books.allBooks || [])

  const waitingList = []
  const orderList = []

  allBooks.map((book) => {
    if (book.user === userName && book.status === 'Taken') {
      waitingList.push(book)
    } else if (book.user === userName && book.status === 'Available') {
      orderList.push(book)
    }
    return book
  })

  return (
    <div className={classes.user}>
      <div className={classes.user__list}>
        <h3 className={classes.user__list_title}>Waiting for</h3>
        <div className={classes.user__list_info}>
          {waitingList.length > 0 ? (
            waitingList.map((book) => (
              <UserBookItem
                book={book}
                key={book.id}
                buttonText="Check status"
              />
            ))
          ) : (
            <span>Oops! You are not waiting for any book </span>
          )}
        </div>
      </div>
      <div className={classes.user__list}>
        <h3 className={classes.user__list_title}>List of your books</h3>
        <div className={classes.user__list_info}>
          {orderList.length > 0 ? (
            orderList.map((book) => (
              <UserBookItem book={book} key={book.id} buttonText="Return" />
            ))
          ) : (
            <span>Oops! You haven&apos;t added any book yet </span>
          )}
        </div>
      </div>
    </div>
  )
}

UserOrders.displayName = 'UserOrders'

export default UserOrders
