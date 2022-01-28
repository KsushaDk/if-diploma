import { createUseStyles } from 'react-jss'
import { colors, btn, typography } from '../../helpers/constants.styles'

export const mainPageStyles = () => ({
  main__page: {
    width: '100vw',
    height: '100vh',
    padding: '3vh 5vw 20vh',
    background: `${colors.generalWhite}`,
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  main__page_navi: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  main__page_navi_group: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  main__page_navi_logo: {
    width: '175px',
    height: '35px',
    marginRight: '5%',
    backgroundImage: 'url(./images/main_logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  main__page_navi_search: {
    width: '70%',
    position: 'relative',
    '& input': {
      width: '100%',
      padding: '13px 0 13px 10%',
      border: `2px solid ${colors.generalRed}`,
      borderRadius: '8px',
      ...typography.placeholder,
      color: `${colors.secondaryGray}`,
      outline: 'none',
    },
  },
  main__page_navi_search_i: {
    width: '18px',
    height: '18px',
    position: 'absolute',
    top: '32%',
    left: '3%',
    backgroundImage: 'url(./images/search_icon.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  main__page_navi_login: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '16%',
    '& div': {
      ...typography.log,
      color: `${colors.primaryGray}`,
    },
    '&:focus': {
      color: `${colors.generalRed}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },

  main__page_content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
    padding: '5% 6%',
    background: `${colors.secondaryBlue}`,
  },
  main__page_content_title: {
    ...typography.h1,
    marginBottom: '15%',
    color: `${colors.generalBlack}`,
  },
  main__page_content_p: {
    ...typography.p,
    marginBottom: '15%',
    color: `${colors.generalBlack}`,
  },
  main__page_content_btn: {
    width: '185px',
    height: '48px',
    background: `${colors.generalRed}`,
    ...btn,
    ...typography.btn,
    color: `${colors.generalWhite}`,
  },
  main__page_content_picture: {
    width: '670px',
    height: '360px',
    backgroundImage: 'url(./images/bg_main.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  '@media (max-width: 768px)': {
    main__page_navi: {
      flexDirection: 'column',
    },
    main__page_navi_group: {
      width: '100%',
      marginBottom: '2%',
    },
    main__page_navi_logo: {
      marginRight: '3%',
    },
    main__page_navi_search: {
      width: '100%',
    },
    main__page_navi_login: {
      width: '30%',
      justifyContent: 'space-between',
    },
    main__page: {
      padding: '3vh 5vw',
    },
    main__page_content: {
      flexDirection: 'column',
      '& div': {
        width: '100%',
      },
    },
    main__page_content_title: {
      marginBottom: '10%',
    },
    main__page_content_p: {
      marginBottom: '7%',
    },
    main__page_content_picture: {
      marginTop: '5%',
    },
  },
  '@media (max-width: 450px)': {
    main__page_navi_group: {
      flexDirection: 'column',
    },
    main__page_navi_search: {
      width: '100%',
    },
    main__page_content: {
      flexDirection: 'row',
    },
    main__page_content_picture: {
      display: 'none',
    },
    main__page_navi_login: {
      width: '50%',
      margin: '0 auto',
    },
  },
})

export default createUseStyles(mainPageStyles, { name: 'MainPage' })
