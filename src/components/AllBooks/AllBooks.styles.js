import { createUseStyles } from 'react-jss'
import { colors, btn, typography } from '../../helpers/constants.styles'

export const allBooksStyles = () => ({
  books: {
    padding: '3vh 5vw',
    background: `${colors.mainBg}`,
    minHeight: 'calc(100vh - 205px)',
    '& a': {
      textDecoration: 'none',
    },
  },
  books__list: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
    borderRadius: '16px',
    background: `${colors.generalWhite}`,
  },
  books__list_title: {
    paddingBottom: '20px',
    ...typography.h3,
    color: `${colors.generalBlack}`,
  },
  books__list_items: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    gap: '2%',
  },
  books__list_item: {
    width: '22%',
    minWidth: '300px',
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
      borderRadius: '8px',
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
  },
  books__list_item_status: {
    height: '26px',
    width: '80%',
    textAlign: 'center',
    ...typography.a,
    color: `${colors.generalBlack}`,
    background: `${colors.generalWhite}`,
    border: `2px solid ${colors.primaryBlue}`,
    borderRadius: '24px',
  },
  books__list_item_about: {
    '& p': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
      ...typography.a,
      fontWeight: 'normal',
      color: `${colors.primaryGray}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
  books__list_item_stars: {
    display: 'flex',
    columnGap: '5%',
    width: '100%',
    marginBottom: '8px',
  },
  books__list_item_star: {
    height: '19px',
    width: '19px',
    backgroundImage: 'url(./images/star.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  books__list_item_btn_order: {
    width: '100%',
    height: '32px',
    textAlign: 'center',
    ...typography.a,
    fontWeight: 'normal',
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.secondaryGray}`,
    ...btn,
    outline: 'none',
  },
  books__list_btn_show: {
    alignSelf: 'center',
    marginTop: '36px',
    width: '185px',
    height: '48px',
    ...typography.label,
    fontWeight: 'normal',
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.generalRed}`,
    ...btn,
  },
  '@media (max-width: 768px)': {
    books: {
      minHeight: 'calc(100vh - 300px)',
    },
  },
  '@media (max-width: 450px)': {
    books: {
      minHeight: 'calc(100vh - 500px)',
    },
  },
})

export default createUseStyles(allBooksStyles, { name: 'AllBooks' })
