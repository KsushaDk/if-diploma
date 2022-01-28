import { createUseStyles } from 'react-jss'
import { colors, btn, typography } from '../../helpers/constants.styles'

export const signUpStyles = () => ({
  signup: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    paddingTop: '10%',
    background: 'rgba(181, 181, 181, 0.8)',
  },
  signup__field: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: '384px',
    padding: '3% 2%',
    background: `${colors.generalWhite}`,
    borderRadius: '8px',
  },
  close: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    width: '16px',
    height: '16px',
    backgroundImage: 'url(./images/close.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    '&:hover': {
      opacity: 0.7,
    },
  },
  signup__title: {
    margin: '0px',
    paddingBottom: '3%',
    ...typography.h2,
    color: `${colors.generalBlack}`,
  },
  signup__form: {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      ...typography.label,
      color: `${colors.primaryGray}`,
    },
    '& input': {
      width: '100%',
      height: '44px',
      marginTop: '4px',
      marginBottom: '16px',
      paddingLeft: '16px',
      ...typography.input,
      border: `1px solid ${colors.secondaryGray}`,
      borderRadius: '8px',
    },
  },

  signup__form_btn: {
    width: '100%',
    height: '44px',
    marginTop: '24px',
    backgroundColor: `${colors.generalRed}`,
    ...btn,
    ...typography.btn,
    color: `${colors.generalWhite}`,
  },
  '@media (max-width: 450px)': {
    signup__field: {
      maxWidth: '310px',
      paddingTop: '7%',
    },
    close: {
      top: '3%',
      right: '3%',
    },
  },
})

export default createUseStyles(signUpStyles, { name: 'SignUp' })
