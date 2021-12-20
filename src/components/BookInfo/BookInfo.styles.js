import { createUseStyles } from 'react-jss'

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
  h2: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '40px',
    lineHeight: '54px',
  },

  h3: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '27px',
    textDecoration: 'none',
  },
  author: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '33px',
  },
  btn: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '27px',
  },
  pages: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '25px',
  },
  about: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
  },
  aboutH3: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '38px',
  },
}

export const bookInfoStyles = () => ({
  book: {
    padding: '0px 105px 80px',
    background: '#FAFAFA',
  },
  book__info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '32px',
    marginTop: '5%',
    boxSizing: 'border-box',
    background: `${colors.generalWhite}`,
    borderRadius: '16px',
  },
  book__info_img: {
    width: '300px',
    height: '455px',
    backgroundSize: 'cover',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  book__info_describtion: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
    height: '100%',
  },
  book__info_stars: {
    width: '160px',
    height: '24px',
    backgroundImage: 'url(./images/star.svg)',
    backgroundRepeat: 'space',
    backgroundSize: 'contain',
  },
  book__info_common: {
    '& h2': {
      margin: '0px',
      paddingBottom: '2%',
      ...typography.h2,
      color: `${colors.generalBlack}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& p': {
      margin: '0px',
      paddingBottom: '3%',
      ...typography.author,
      color: `${colors.generalRed}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& span': {
      margin: '0px',
      ...typography.pages,
      fontWeight: 'normal',
      color: `${colors.primaryGray}`,
    },
  },

  book__info_btn_order: {
    marginTop: '4%',
    width: '185px',
    height: '46px',
    boxSizing: 'border-box',
    ...typography.btn,
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.secondaryGray}`,
    ...btn,
    '&:hover': {
      opacity: 0.7,
    },
  },
  book__info_about: {
    marginTop: '4%',
    color: `${colors.generalBlack}`,
    '& h3': {
      ...typography.aboutH3,
      marginBottom: '3%',
    },
    '& p': {
      ...typography.about,
    },
  },
})

export default createUseStyles(bookInfoStyles, { name: 'BookInfo' })
