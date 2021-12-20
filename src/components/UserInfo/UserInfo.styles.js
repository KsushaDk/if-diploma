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

const typography = {
  name: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '25px',
  },
  btn: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
  },
  a: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
    textDecoration: 'none',
  },
}

export const userInfoStyles = () => ({
  user__info: {
    position: 'absolute',
    top: '100px',
    right: '80px',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    background: '#FAFAFA',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    width: '170px',
  },
  user__info_name: {
    marginBottom: '26px',
    ...typography.name,
    color: `${colors.generalBlack}`,
  },
  user__info_settings: {
    padding: '13px 0',
    borderBottom: '1px solid rgba(181, 181, 181, 0.6)',
    '& a': {
      ...typography.a,
      color: `${colors.primaryGray}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  user__info_orders: {
    padding: '13px 0',
    '& a': {
      ...typography.a,
      color: `${colors.primaryGray}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  user__info_logout: {
    marginTop: '26px',
    alignSelf: 'center',
    backgroundColor: '#FAFAFA',
    border: 'none',
    cursor: 'pointer',
    '& a': {
      ...typography.btn,
      color: `${colors.generalRed}`,
      textDecoration: 'none',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
})

export default createUseStyles(userInfoStyles, { name: 'userInfo' })
