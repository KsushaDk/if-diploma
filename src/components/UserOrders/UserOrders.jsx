import React from 'react'
import { useSelector } from 'react-redux'
import useStyles from './UserOrders.styles'

// components
import UserBookItem from './UserBookItem'

function UserOrders() {
  const classes = useStyles()
  const userList = useSelector(({ books }) => books.userList || [])

  return (
    <div className={classes.user}>
      <div className={classes.user__list}>
        <h3 className={classes.user__list_title}>Waiting for</h3>
        <div className={classes.user__list_info}>
          <span>Oops! You are not waiting for any book</span>
        </div>
      </div>
      <div className={classes.user__list}>
        <h3 className={classes.user__list_title}>List of your books</h3>
        <div className={classes.user__list_info}>
          {userList.length > 0 ? (
            userList.map((book) => <UserBookItem book={book} key={book.id} />)
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
