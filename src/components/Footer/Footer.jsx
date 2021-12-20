import React from 'react'
import useStyles from './Footer.styles'

function Footer() {
  const classes = useStyles()
  return (
    <div className={classes.footer}>
      <div className={classes.footer__info}>
        <ul>
          <li>
            <span>About Fox Library</span>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Privacy&Security</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>Help</span>
          </li>
          <li>
            <a href="#">Help center</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>My account</span>
          </li>
          <li>
            <a href="#">Edit profile</a>
          </li>
          <li>
            <a href="#">My orders</a>
          </li>
        </ul>
      </div>

      <div className={classes.footer_contacts}>
        <ul>
          <li>
            <span>Stay connected</span>
          </li>
          <li>
            <div>
              <div className={classes.footer_instagram}>
                <a href="#" />
              </div>
              <div className={classes.footer_facebook}>
                <a href="#" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'

export default Footer
