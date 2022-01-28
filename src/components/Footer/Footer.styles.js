import { createUseStyles } from 'react-jss'
import { colors, typography } from '../../helpers/constants.styles'

export const footerStyles = () => ({
  footer: {
    height: '205px',
    width: '100%',
    padding: '3vh 5vw',
    background: `${colors.secondaryBlue}`,
    display: 'flex',
    justifyContent: 'space-between',
  },
  footer__info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
    '& ul': {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      minWidth: '150px',
      '& li': {
        marginBottom: '8px',
        '&:first-child': {
          marginBottom: '20px',
        },
        '& span': {
          ...typography.input,
          fontWeight: 'bold',
          color: `${colors.generalBlack}`,
        },
        '& a': {
          ...typography.placeholder,
          textDecoration: 'none',
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
  '@media (max-width: 768px)': {
    footer: {
      flexDirection: 'column',
      height: '300px',
    },
    footer__info: {
      width: '100%',
      '& ul': {
        minWidth: '100px',
        marginTop: '3%',
      },
    },
    footer_contacts: {
      alignSelf: 'end',
    },
  },
  '@media (max-width: 450px)': {
    footer: {
      flexDirection: 'row',
      height: '500px',
    },
    footer__info: {
      flexDirection: 'column',
      '& ul': {
        minWidth: '50px',
      },
    },
    footer_contacts: {
      marginTop: '5%',
      alignSelf: 'start',
    },
  },
})

export default createUseStyles(footerStyles, { name: 'Footer' })
