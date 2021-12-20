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
  h3: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '27px',
    textDecoration: 'none',
  },
  about: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '19px',
  },
  btn: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
  },
  status: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
  },
}

export const allBooksStyles = () => ({
  books: {
    padding: '0px 105px 80px',
    background: '#FAFAFA',
    '& a': {
      textDecoration: 'none',
    },
  },
  books__list: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '30px',
    marginTop: '5%',
    boxSizing: 'border-box',
    background: `${colors.generalWhite}`,
  },
  books__list_title: {
    margin: '0px',
    paddingBottom: '20px',
    ...typography.h3,
    color: `${colors.generalBlack}`,
  },
  books__list_items: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  books__list_item: {
    width: '22%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  books__list_item_img: {
    width: '47%',
    height: '100%',
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
  books__list_item_info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    height: '100%',
    padding: '0px',
  },
  books__list_item_status: {
    height: '26px',
    textAlign: 'center',
    ...typography.status,
    color: `${colors.generalBlack}`,
    background: `${colors.generalWhite}`,
    border: `2px solid ${colors.primaryBlue}`,
    borderRadius: '24px',
    boxSizing: 'border-box',
  },
  books__list_item_about: {
    margin: '0px',
    '& p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: '0px',
      paddingBottom: '15%',
      ...typography.about,
      color: `${colors.generalBlack}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
    '& span': {
      margin: '0px',
      paddingBottom: '10%',
      ...typography.status,
      fontWeight: 'normal',
      color: `${colors.primaryGray}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
  books__list_item_stars: {
    minWidth: '100%',
    minHeight: '19px',
    backgroundImage: 'url(./images/star.svg)',
    backgroundRepeat: 'space',
    backgroundSize: 'contain',
  },
  books__list_item_btn_order: {
    width: '122px',
    height: '32px',
    boxSizing: 'border-box',
    textAlign: 'center',
    ...typography.status,
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.secondaryGray}`,
    ...btn,
    outline: 'none',
    '&:hover': {
      opacity: 0.7,
    },
  },
  books__list_btn: {
    alignSelf: 'center',
    marginTop: '36px',
    width: '185px',
    height: '48px',
    boxSizing: 'border-box',
    ...typography.btn,
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.generalRed}`,
    ...btn,
    '&:hover': {
      opacity: 0.7,
    },
  },
})

export default createUseStyles(allBooksStyles, { name: 'AllBooks' })
