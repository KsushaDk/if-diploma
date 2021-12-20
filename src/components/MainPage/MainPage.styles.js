import { createUseStyles } from 'react-jss'
// import { colors } from '../../constants.styles'

const colors = {
  generalWhite: '#FFFFFF',
  generalBlack: '#000000',
  generalRed: '#ff5d4f',
  primaryGray: '#616161',
  secondaryGray: '#b5b5b5',
  primaryBlue: '#85c8ee',
  secondaryBlue: '#d3ebf9',
}

const btn = {
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
}

const typography = {
  log: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '27px',
    textDecoration: 'none',
  },
  placeholder: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
  },
  h2: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '38px',
    lineHeight: '52px',
  },
  p: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '28px',
    lineHeight: '38px',
  },
  a: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '37px',
    textDecoration: 'none',
  },
}

export const mainPageStyles = () => ({
  main__page: {
    // width: '100%',
    // height: '100%',
    padding: '30px 105px 265px',
    background: `${colors.generalWhite}`,
    // position: 'absolute',
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
    backgroundImage: 'url(./images/main_logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  main__page_navi_search: {
    width: '70%',
    position: 'relative',
    '& input': {
      boxSizing: 'border-box',
      width: '100%',
      padding: '15px 0 15px 50px',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '12%',
    '& a': {
      ...typography.log,
      color: `${colors.primaryGray}`,
      '&:focus': {
        color: `${colors.generalRed}`,
      },
      '&:hover': {
        opacity: 0.7,
      },
    },
  },

  main__page_content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
    padding: '70px 80px',
    background: `${colors.secondaryBlue}`,
  },
  main__page_content_title: {
    ...typography.h2,
    margin: 0,
    paddingBottom: '40px',
    color: `${colors.generalBlack}`,
  },
  main__page_content_p: {
    ...typography.p,
    margin: 0,
    paddingBottom: '40px',
    color: `${colors.generalBlack}`,
  },
  main__page_content_btn: {
    width: '185px',
    height: '48px',
    background: `${colors.generalRed}`,
    ...btn,
    '& a': {
      ...typography.a,
      color: `${colors.generalWhite}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  main__page_content_picture: {
    width: '670px',
    height: '360px',
    backgroundImage: 'url(./images/bg_main.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  layout__bg: {
    background: 'rgba(181, 181, 181, 0.8)',
    width: '100vw',
    height: '100vh',
    paddingTop: '10%',
  },
})

export default createUseStyles(mainPageStyles, { name: 'MainPage' })
