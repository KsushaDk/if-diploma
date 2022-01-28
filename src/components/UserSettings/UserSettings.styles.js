import { createUseStyles } from 'react-jss'
import { colors, btn, typography } from '../../helpers/constants.styles'

export const userSettingsStyles = () => ({
  settings: {
    padding: '2vh 5vw',
    background: `${colors.mainBg}`,
  },
  settings__info: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '394px',
    padding: '2% 3%',
    background: `${colors.generalWhite}`,
  },
  settings__info_title: {
    margin: '0',
    paddingBottom: '40px',
    ...typography.h3,
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
  },
  settings__info_form: {
    display: 'flex',
    flexDirection: 'column',
    '& label': {
      marginLeft: '3px',
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
      borderRadius: '8px',
    },
  },
  settings__info_form_btn: {
    width: '122px',
    height: '32px',
    margin: '21px auto',
    ...typography.placeholder,
    color: `${colors.generalWhite}`,
    backgroundColor: `${colors.generalRed}`,
    ...btn,
  },
  warning: {
    marginTop: '5%',
    ...typography.warning,
    color: `${colors.generalRed}`,
  },
})

export default createUseStyles(userSettingsStyles, { name: 'UserSettings' })
