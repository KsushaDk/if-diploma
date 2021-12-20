import React from 'react'
import useStyles from './UserOrders.styles'

function UserOrders() {
  const classes = useStyles()
  return (
    <div className={classes.user}>
      <div className={classes.user__list}>
        <h3 className={classes.user__list_title}>Waiting for</h3>
        <div className={classes.user__list_info}>
          Oops! You are not waiting for any book
        </div>
      </div>
      <div className={classes.user__list}>
        <h3 className={classes.user__list_title}>List of your books</h3>
        <div className={classes.user__list_info}>
          Oops! You haven&apos;t added any book yet
        </div>
      </div>
    </div>
  )
}

UserOrders.displayName = 'UserOrders'

export default UserOrders
