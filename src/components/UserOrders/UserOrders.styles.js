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
  h3: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '27px',
    textDecoration: 'none',
  },
  oops: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '33px',
  },
}

export const userOrdersStyles = () => ({
  user: {
    padding: '0px 105px 80px',
    background: '#FAFAFA',
  },
  user__list: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '400px',
    padding: '30px',
    marginTop: '5%',
    boxSizing: 'border-box',
    background: `${colors.generalWhite}`,
  },
  user__list_title: {
    margin: '0px',
    paddingBottom: '20px',
    ...typography.h3,
    color: `${colors.generalBlack}`,
  },
  user__list_info: {
    display: 'flex',
    alignSelf: 'center',
    ...typography.oops,
    color: `${colors.secondaryGray}`,
  },
})

export default createUseStyles(userOrdersStyles, { name: 'UserOrders' })
