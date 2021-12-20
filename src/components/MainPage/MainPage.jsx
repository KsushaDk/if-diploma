import React from 'react'
import { Link } from 'react-router-dom'
// import Modal from '../Modal/Modal'
import useStyles from './MainPage.styles'

// components
import Navigation from './Navigation'
// import LogIn from '../LogIn/LogIn'

function MainPage() {
  const classes = useStyles()

  // const [open, setOpen] = useState(false)

  return (
    <div className={classes.main__page}>
      <Navigation />
      <div className={classes.main__page_content}>
        <div>
          <h2 className={classes.main__page_content_title}>
            BIld your library
          </h2>
          <p className={classes.main__page_content_p}>
            Over 400.000 books
            <br />
            from fiction to the
            <br />
            business literature
          </p>
          <button
            type="button"
            className={classes.main__page_content_btn}
            // onClick={() => setOpen(true)}
          >
            <Link to="/signup">Let’s start</Link>
          </button>
        </div>
        <div className={classes.main__page_content_picture} />
      </div>

      {/* <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        children={<LogIn />}
      /> */}
    </div>
  )
}

MainPage.displayName = 'MainPage'

export default MainPage
