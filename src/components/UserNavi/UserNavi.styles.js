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
  placeholder: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
  },
  a: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '22px',
    textDecoration: 'none',
  },
}

export const userNaviStyles = () => ({
  navi: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '37px 105px 80px',
    background: '#FAFAFA',
  },
  navi_group: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  navi_logo: {
    width: '175px',
    height: '35px',
    backgroundImage: 'url(./images/main_logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  navi_links: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
    '& div': {
      '&:nth-child(3)': {
        width: '36px',
        height: '36px',
        backgroundImage: 'url(./images/user_square.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        '&:hover': {
          opacity: 0.7,
        },
      },

      '&:nth-child(4)': {
        width: '16px',
        height: '10px',
        backgroundImage: 'url(./images/arrow.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        '&:hover': {
          opacity: 0.7,
          transform: 'rotate(0.5turn)',
        },
      },
    },
    '& a': {
      ...typography.a,
      color: `${colors.generalBlack}`,
      '&:focus': {
        color: `${colors.generalRed}`,
      },
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
})

export default createUseStyles(userNaviStyles, { name: 'UserNavi' })
