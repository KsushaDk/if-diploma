import { createUseStyles } from 'react-jss'
import { colors, typography } from '../../helpers/constants.styles'

export const userInfoStyles = () => ({
  user__info: {
    position: 'absolute',
    top: '9vh',
    right: '5vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5%',
    background: `${colors.mainBg}`,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    width: '170px',
  },
  user__info_name: {
    marginBottom: '26px',
    ...typography.input,
    fontWeight: '600',
    color: `${colors.generalBlack}`,
  },
  user__info_settings: {
    padding: '13px 0',
    borderBottom: '1px solid rgba(181, 181, 181, 0.6)',
    '& a': {
      ...typography.placeholder,
      fontWeight: '600',
      textDecoration: 'none',
      color: `${colors.primaryGray}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  user__info_orders: {
    padding: '13px 0',
    '& a': {
      ...typography.placeholder,
      fontWeight: '600',
      textDecoration: 'none',
      color: `${colors.primaryGray}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  user__info_logout: {
    marginTop: '26px',
    alignSelf: 'center',
    background: `${colors.mainBg}`,
    border: 'none',
    cursor: 'pointer',
    '& a': {
      ...typography.placeholder,
      fontWeight: 600,
      color: `${colors.generalRed}`,
      textDecoration: 'none',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  '@media (max-width: 768px)': {
    user__info: {
      top: '20vh',
    },
  },
  '@media (max-width: 450px)': {
    user__info: {
      top: '22vh',
    },
  },
})

export default createUseStyles(userInfoStyles, { name: 'userInfo' })
