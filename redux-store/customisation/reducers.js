import { sectionSettingData, themeSettingData } from 'theme-config'
import {
  LOAD_THEME_AND_SECTION_SETTINGS,
  HOT_UPDATE_THEME_AND_SECTION_SETTINGS
} from './constants'

export const initialState = {
  sectionSettings: sectionSettingData,
  themeSettings: themeSettingData
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_THEME_AND_SECTION_SETTINGS:
    case HOT_UPDATE_THEME_AND_SECTION_SETTINGS:
    default:
      return state
  }
}
