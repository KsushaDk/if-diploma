import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useStyles from './MainPage.styles'

// actions
import { setSearch } from '../../redux/actions'

function SearchInput() {
  // add disabled for not log in users
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = useCallback(
    (event) => {
      event.preventDefault()
      dispatch(setSearch(event.target.value))
    },
    [dispatch],
  )

  const hahdleKeyDown = useCallback(
    // eslint-disable-next-line consistent-return
    (event) => {
      if (event.key === 'Enter') {
        return history.push('/searchedbooks')
      }
    },
    [history],
  )

  return (
    <div className={classes.main__page_navi_search}>
      <div className={classes.main__page_navi_search_i} />
      <input
        type="text"
        name="search"
        placeholder="Search by author, title, name"
        onChange={handleChange}
        onKeyDown={hahdleKeyDown}
      />
    </div>
  )
}

export default SearchInput
