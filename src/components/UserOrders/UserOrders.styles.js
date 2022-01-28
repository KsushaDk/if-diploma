import { createUseStyles } from 'react-jss'
import { colors, typography, btn } from '../../helpers/constants.styles'

export const userOrdersStyles = () => ({
  user: {
    padding: '3vh 5vw',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    background: `${colors.mainBg}`,
    '& a': {
      textDecoration: 'none',
    },
  },
  user__list: {
    width: '100%',
    minHeight: '400px',
    padding: '2%',
    marginBottom: '20px',
    borderRadius: '16px',
    background: `${colors.generalWhite}`,
  },
  user__list_title: {
    ...typography.h3,
    color: `${colors.generalBlack}`,
  },
  user__list_info: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '10%',
    '& span': {
      margin: '0 auto',
      ...typography.h2,
      fontWeight: '600',
      color: `${colors.secondaryGray}`,
    },
  },
  user__list_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '15%',
    minWidth: '150px',
    marginBottom: '20px',
  },
  user__list_item_img: {
    marginBottom: '8px',
    height: '70%',
    width: '100%',
    overflow: 'hidden',
    backgroundSize: 'contain',
    flexShrink: 0,
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '8px',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  user__list_item_info: {
    marginBottom: '10%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& a': {
      fontSize: '12px',
      lineHeight: '16px',
      color: `${colors.generalBlack}`,
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
  user__list_item_btn_return: {
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
})

export default createUseStyles(userOrdersStyles, { name: 'UserOrders' })
