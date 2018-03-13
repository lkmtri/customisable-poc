import { LOAD_THEME_AND_SECTION_SETTINGS, HOT_UPDATE_THEME_AND_SECTION_SETTINGS } from './constants'

export const loadThemeAndSectionSettings = () => ({
  type: LOAD_THEME_AND_SECTION_SETTINGS
})

export const hotUpdateThemeAndSectionSettings = (payload) => ({
  type: HOT_UPDATE_THEME_AND_SECTION_SETTINGS,
  payload
})
