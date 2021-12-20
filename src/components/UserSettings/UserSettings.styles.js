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
    fontSize: '20px',
    lineHeight: '27px',
    textDecoration: 'none',
  },
  a: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '16px',
    textDecoration: 'none',
  },
  btn: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
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
  warning: {
    // fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '28px',
  },
}

export const userSettingsStyles = () => ({
  settings: {
    background: '#FAFAFA',
  },
  settings__info: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    width: '394px',
    padding: '25px 35px 20px',
    boxSizing: 'border-box',
    background: `${colors.generalWhite}`,
  },
  settings__info_title: {
    margin: '0px',
    paddingBottom: '40px',
    ...typography.h2,
    textAlign: 'center',
    color: `${colors.generalBlack}`,
  },
  settings__info_photo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '26px',
  },
  settings__info_photo_user: {
    width: '81px',
    height: '81px',
    marginBottom: '16px',
    backgroundImage: 'url(./images/user_round.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  settings__info_photo_btn: {
    width: '122px',
    height: '32px',
    background: `${colors.secondaryGray}`,
    ...btn,
    '& a': {
      ...typography.a,
      color: `${colors.generalWhite}`,
    },
    '&:hover': {
      opacity: 0.7,
    },
  },
  settings__info_form: {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      ...typography.label,
      color: `${colors.generalBlack}`,
    },
    '& input': {
      width: '100%',
      height: '44px',
      marginTop: '4px',
      marginBottom: '16px',
      paddingLeft: '16px',
      ...typography.input,
      background: `${colors.generalWhite}`,
      border: `1px solid ${colors.secondaryGray}`,
      boxSizing: 'border-box',
      borderRadius: '8px',
    },
    '& div': {
      '&:last-child': {
        alignSelf: 'center',
      },
    },
  },

  settings__info_form_btn: {
    width: '122px',
    height: '32px',
    margin: '21px auto',
    boxSizing: 'border-box',
    ...typography.btn,
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.generalRed}`,
    ...btn,
    '&:hover': {
      opacity: 0.7,
    },
  },
  warning: {
    marginTop: '5%',
    ...typography.warning,
    color: `${colors.generalRed}`,
  },
})

export default createUseStyles(userSettingsStyles, { name: 'UserSettings' })
