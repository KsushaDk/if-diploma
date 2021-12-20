import React from 'react'
import { Switch } from 'react-router-dom'

// containers
import PrivateRoute from '../containers/PrivateRoute'

// components
import UserOrders from '../components/UserOrders/UserOrders'
import AllBooks from '../components/AllBooks/AllBooks'
import UserSettings from '../components/UserSettings/UserSettings'
import BookInfo from '../components/BookInfo/BookInfo'
import SearchedBooks from '../components/SearchedBooks/SearchedBooks'

function UserRoutes() {
  return (
    <Switch>
      <PrivateRoute exact path="/user">
        <UserOrders />
      </PrivateRoute>

      <PrivateRoute exact path="/searchedbooks">
        <SearchedBooks />
      </PrivateRoute>

      <PrivateRoute exact path="/books">
        <AllBooks />
      </PrivateRoute>

      <PrivateRoute path="/books/:id">
        <BookInfo />
      </PrivateRoute>

      <PrivateRoute path="/settings">
        <UserSettings />
      </PrivateRoute>
    </Switch>
  )
}

export default UserRoutes
