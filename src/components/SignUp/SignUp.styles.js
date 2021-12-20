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
  h2: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '33px',
  },

  btn: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '25px',
  },
  label: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
  },
  input: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '25px',
  },
}

export const signUpStyles = () => ({
  signup: {
    margin: '0 auto',
    width: '384px',
    padding: '40px 32px',
    background: `${colors.generalWhite}`,
    borderRadius: '8px',
  },
  signup__title: {
    margin: '0px',
    paddingBottom: '32px',
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
      boxSizing: 'border-box',
      borderRadius: '8px',
    },
  },

  signup__form_btn: {
    width: '100%',
    height: '44px',
    marginTop: '24px',
    boxSizing: 'border-box',
    backgroundColor: `${colors.generalRed}`,
    ...btn,
    '& a': {
      ...typography.btn,
      color: `${colors.generalWhite}`,
      textDecoration: 'none',
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
})

export default createUseStyles(signUpStyles, { name: 'SignUp' })