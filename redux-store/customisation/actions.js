import { asyncAction } from 'tools/redux'
import { loadPreviewTheme, loadTheme } from 'api/theme'
import * as C from './constants'

export const loadThemeAction = asyncAction({
  api: loadTheme,
  requestAction: C.LOAD_THEME_REQUEST,
  successAction: C.LOAD_THEME_SUCCESS,
  failureAction: C.LOAD_THEME_FAILURE
})

export const loadPreviewThemeAction = asyncAction({
  api: loadPreviewTheme,
  requestAction: C.LOAD_PREVIEW_THEME_REQUEST,
  successAction: C.LOAD_PREVIEW_THEME_SUCCESS,
  failureAction: C.LOAD_PREVIEW_THEME_FAILURE
})

export const saveThemeSchemaUpdateAction = ({ themeSettings, themeSettingSchema, sectionSettings, sectionSettingSchema }) => ({
  type: C.SAVE_THEME_SCHEMA_UPDATE,
  payload: { themeSettings, themeSettingSchema, sectionSettings, sectionSettingSchema }
})
