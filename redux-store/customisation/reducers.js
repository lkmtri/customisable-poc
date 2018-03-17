import { fromJS } from 'immutable'
import { themeSettingSchema, sectionSettingSchema, sectionSettingData, themeSettingData } from 'theme-config'
import {
  LOAD_THEME_AND_SECTION_SETTINGS,
  HOT_UPDATE_THEME_AND_SECTION_SETTINGS,
  UPDATE_THEME_SETTINGS,
  UPDATE_SECTIONS_SETTINGS,
  UPDATE_SECTIONS_CONTENT
} from './constants'

export const initialState = fromJS({
  themeSettingSchema,
  themeSettingData,
  sectionSettingSchema,
  sectionSettingData
})

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THEME_SETTINGS:
      return state.setIn(['themeSettingData', action.payload.key], fromJS(action.payload.value))
    case UPDATE_SECTIONS_SETTINGS:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'settings', action.payload.key],
        fromJS(action.payload.value)
      )
    case UPDATE_SECTIONS_CONTENT:
      return state.setIn(
        ['sectionSettingData', 'sections', action.payload.sectionId, 'blocks',
          action.payload.blockId, 'settings', action.payload.key],
        fromJS(action.payload.value)
      )
    case LOAD_THEME_AND_SECTION_SETTINGS:
      return state
        .set('themeSettingSchema', fromJS(themeSettingSchema))
        .set('themeSettingData', fromJS(themeSettingData))
        .set('sectionSettingSchema', fromJS(sectionSettingSchema))
        .set('sectionSettingData', fromJS(sectionSettingData))
    case HOT_UPDATE_THEME_AND_SECTION_SETTINGS:
    default:
      return state
  }
}
