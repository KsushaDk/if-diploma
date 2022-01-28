import { createUseStyles } from 'react-jss'
import { colors, typography } from '../../helpers/constants.styles'

export const userNaviStyles = () => ({
  navi: {
    padding: '3vh 5vw',
    display: 'flex',
    justifyContent: 'space-between',
    background: `${colors.mainBg}`,
  },
  navi_group: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  navi_logo: {
    minWidth: '175px',
    minHeight: '35px',
    marginRight: '5%',
    backgroundImage: 'url(./images/main_logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  navi_links: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
    '& a': {
      ...typography.label,
      fontWeight: 'bold',
      textDecoration: 'none',
      color: `${colors.generalBlack}`,
      '&:focus': {
        color: `${colors.generalRed}`,
      },
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
  navi_links_userinfo: {
    display: 'flex',
    alignItems: 'center',
  },
  navi_links_user: {
    marginRight: '7%',
    minWidth: '36px',
    minHeight: '36px',
    backgroundImage: 'url(./images/user_square.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    '&:hover': {
      opacity: 0.7,
    },
  },
  navi_links_settings: {
    width: '16px',
    height: '10px',
    backgroundImage: 'url(./images/arrow.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    '&:hover': {
      opacity: 0.7,
      transform: 'rotate(0.5turn)',
    },
  },
  '@media (max-width: 768px)': {
    navi: {
      flexDirection: 'column',
    },
    navi_group: {
      width: '100%',
      flexDirection: 'column',
    },
    navi_logo: {
      marginBottom: '3%',
    },
    navi_links: {
      margin: '0 auto',
      width: '60%',
      marginTop: '3%',
    },
  },
  '@media (max-width: 450px)': {
    navi_links: {
      width: '90%',
    },
  },
})

export default createUseStyles(userNaviStyles, { name: 'UserNavi' })
