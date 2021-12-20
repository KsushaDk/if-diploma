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
  span: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '25px',
  },
  a: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
    textDecoration: 'none',
  },
}

export const footerStyles = () => ({
  footer: {
    padding: '40px 105px',
    background: `${colors.secondaryBlue}`,
    display: 'flex',
    justifyContent: 'space-between',
  },
  footer__info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '45%',
    '& ul': {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      '& li': {
        marginBottom: '8px',
        '&:first-child': {
          marginBottom: '20px',
        },
        '& span': {
          ...typography.span,
          color: `${colors.generalBlack}`,
        },
        '& a': {
          ...typography.a,
          color: `${colors.generalBlack}`,
          '&:hover': {
            opacity: 0.7,
          },
        },
      },
    },
  },
  footer_contacts: {
    display: 'flex',
    '& ul': {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      '& li': {
        marginBottom: '8px',
        '& span': {
          ...typography.span,
          color: `${colors.generalBlack}`,
        },
        '& div': {
          display: 'flex',
          justifyContent: 'space-around',
          '&:hover': {
            opacity: 0.7,
          },
        },
        '&:first-child': {
          marginBottom: '20px',
        },
      },
    },
  },
  footer_instagram: {
    width: '26px',
    height: '26px',
    backgroundImage: 'url(./images/inst.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  footer_facebook: {
    width: '26px',
    height: '26px',
    backgroundImage: 'url(./images/facebook.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
})

export default createUseStyles(footerStyles, { name: 'Footer' })
