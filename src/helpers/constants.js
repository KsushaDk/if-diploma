import { useSelector } from 'react-redux'

export const allBooks = useSelector(({ books }) => books.allBooks || [])
