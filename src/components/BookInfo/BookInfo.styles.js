import { createUseStyles } from 'react-jss'
import { colors, btn, typography } from '../../helpers/constants.styles'

export const bookInfoStyles = () => ({
  book: {
    padding: '3vh 5vw',
    background: `${colors.mainBg}`,
    minHeight: 'calc(100vh - 205px)',
  },
  book__info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2%',
    borderRadius: '16px',
    background: `${colors.generalWhite}`,
  },
  book__info_img: {
    width: '300px',
    height: '455px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: `1px solid ${colors.secondaryGray}`,
    borderRadius: '8px',
    '&:hover': {
      opacity: 0.7,
    },
  },
  book__info_describtion: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '2%',
    width: '70%',
    height: '100%',
  },
  book__info_stars: {
    width: '30%',
    minHeight: '24px',
    backgroundImage: 'url(./images/star.svg)',
    backgroundRepeat: 'space',
    backgroundSize: 'contain',
  },
  book__info_common: {
    '& h4': {
      paddingBottom: '2%',
      ...typography.h4,
      color: `${colors.generalBlack}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& p': {
      paddingBottom: '3%',
      ...typography.h2,
      color: `${colors.generalRed}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& span': {
      ...typography.input,
      fontWeight: 'normal',
      color: `${colors.primaryGray}`,
    },
  },

  book__info_btn_order: {
    marginTop: '4%',
    width: '185px',
    height: '46px',
    ...typography.btn,
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.generalRed}`,
    ...btn,
  },
  book__info_about: {
    marginTop: '4%',
    color: `${colors.generalBlack}`,
    '& h3': {
      ...typography.p,
      fontWeight: 'bold',
      marginBottom: '3%',
    },
    '& p': {
      ...typography.placeholder,
    },
  },
  btn__show_more: {
    width: '122px',
    height: '32px',
    background: `${colors.secondaryGray}`,
    borderRadius: '8px',
    border: 'none',
    ...typography.a,
    textAlign: 'center',
    color: `${colors.generalWhite}`,
    marginTop: '2%',
  },
  '@media (max-width: 768px)': {
    book: {
      minHeight: 'calc(100vh - 300px)',
    },
    book__info: {
      flexDirection: 'column',
    },
    book__info_img: {
      width: '100%',
      height: 'auto',
    },
    book__info_describtion: {
      width: '100%',
      marginTop: '3%',
    },
  },
  '@media (max-width: 450px)': {
    minHeight: 'calc(100vh - 500px)',
  },
})

export default createUseStyles(bookInfoStyles, { name: 'BookInfo' })
