import produce from 'immer'
import { deepUpdate } from 'tools/object'
import * as C from './constants'

export const initialState = {
  themeSettingSchema: [],
  themeSettingData: {},
  sectionSettingSchema: [],
  sectionSettingData: {}
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case C.UPDATE_THEME_SETTINGS:
      return produce(state, draftState => {
        const { key, value } = action.payload
        deepUpdate(draftState, ['themeSettingData', key], value)
      })
    case C.UPDATE_SECTIONS_SETTINGS:
      return produce(state, draftState => {
        const { sectionId, key, value } = action.payload
        deepUpdate(draftState, ['sectionSettingData', 'sections', sectionId, 'settings', key], value)
      })
    case C.UPDATE_SECTIONS_CONTENT:
      return produce(state, draftState => {
        const { sectionId, blockId, key, value } = action.payload
        deepUpdate(draftState, ['sectionSettingData', 'sections', sectionId, 'blocks', blockId, 'settings', key], value)
      })
    case C.REORDER_SECTIONS:
      return produce(state, draftState => {
        const { page, nextSectionsOrder } = action.payload
        deepUpdate(draftState, ['sectionSettingData', 'pages', page], nextSectionsOrder)
      })
    case C.REORDER_BLOCKS:
      return produce(state, draftState => {
        const { sectionId, nextBlocksOrder } = action.payload
        deepUpdate(draftState, ['sectionSettingData', 'sections', sectionId, 'blocksOrder'], nextBlocksOrder)
      })
    case C.LOAD_PREVIEW_THEME_SUCCESS:
    case C.LOAD_THEME_SUCCESS:
      return produce(state, draftState => {
        const { themeData, themeSchema } = action.payload
        draftState.themeSettingData = themeData.themeSettings
        draftState.themeSettingSchema = themeSchema.themeSettingSchema
        draftState.sectionSettingData = themeData.sectionSettings
        draftState.sectionSettingSchema = themeSchema.sectionSettingSchema
      })
    default:
      return state
  }
}
