import * as C from './themeConstants'

const themeSettingData = {
  current: {
    color_text: '#3d4246',
    color_body_text: '#788188',
    [C.typographyHeaderFamily]: 'Google_Work+Sans_600_sans',
    [C.typographyHeaderBaseSize]: '26px',
    [C.typographyBaseFamily]: 'Google_Work+Sans_400_sans',
    [C.typographyBaseSize]: '16px'
  },
  presets: {
    default: {
      color_text: '#35ab56',
      typography_base_size: '14px',
      sections: {
        type: 'header',
        settings: {
          font_size: '19px'
        }
      },
      pages: {
        index: ['hero']
      }
    },
    light: {}
  }
}

export default themeSettingData
